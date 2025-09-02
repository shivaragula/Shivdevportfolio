const express = require('express');
const cors = require('cors');
const path = require('path');
const http = require('http');
const socketIo = require('socket.io');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"]
  }
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')));

// In-memory storage (replace with database in production)
let tasks = [
  {
    id: '1',
    title: 'Complete project proposal',
    description: 'Write and submit the Q1 project proposal',
    priority: 'high',
    status: 'in-progress',
    dueDate: '2025-01-15',
    createdAt: new Date().toISOString(),
    aiScore: 85
  },
  {
    id: '2',
    title: 'Review team performance',
    description: 'Conduct quarterly performance reviews',
    priority: 'medium',
    status: 'pending',
    dueDate: '2025-01-20',
    createdAt: new Date().toISOString(),
    aiScore: 70
  }
];

// AI Priority Calculation (simplified)
const calculateAIPriority = (task) => {
  let score = 50; // Base score
  
  // Due date urgency
  const daysUntilDue = Math.ceil((new Date(task.dueDate) - new Date()) / (1000 * 60 * 60 * 24));
  if (daysUntilDue <= 1) score += 30;
  else if (daysUntilDue <= 3) score += 20;
  else if (daysUntilDue <= 7) score += 10;
  
  // Priority level
  if (task.priority === 'high') score += 25;
  else if (task.priority === 'medium') score += 15;
  else score += 5;
  
  // Description complexity (simple heuristic)
  if (task.description.length > 100) score += 10;
  
  return Math.min(100, score);
};

// API Routes
app.get('/api/tasks', (req, res) => {
  const sortedTasks = tasks.sort((a, b) => b.aiScore - a.aiScore);
  res.json(sortedTasks);
});

app.post('/api/tasks', (req, res) => {
  const newTask = {
    id: uuidv4(),
    ...req.body,
    status: 'pending',
    createdAt: new Date().toISOString()
  };
  
  newTask.aiScore = calculateAIPriority(newTask);
  tasks.push(newTask);
  
  // Emit to all connected clients
  io.emit('task-created', newTask);
  
  res.status(201).json(newTask);
});

app.put('/api/tasks/:id', (req, res) => {
  const taskIndex = tasks.findIndex(t => t.id === req.params.id);
  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }
  
  tasks[taskIndex] = { ...tasks[taskIndex], ...req.body };
  tasks[taskIndex].aiScore = calculateAIPriority(tasks[taskIndex]);
  
  // Emit to all connected clients
  io.emit('task-updated', tasks[taskIndex]);
  
  res.json(tasks[taskIndex]);
});

app.delete('/api/tasks/:id', (req, res) => {
  const taskIndex = tasks.findIndex(t => t.id === req.params.id);
  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }
  
  const deletedTask = tasks.splice(taskIndex, 1)[0];
  
  // Emit to all connected clients
  io.emit('task-deleted', deletedTask.id);
  
  res.json({ message: 'Task deleted successfully' });
});

app.get('/api/analytics', (req, res) => {
  const analytics = {
    totalTasks: tasks.length,
    completedTasks: tasks.filter(t => t.status === 'completed').length,
    inProgressTasks: tasks.filter(t => t.status === 'in-progress').length,
    pendingTasks: tasks.filter(t => t.status === 'pending').length,
    highPriorityTasks: tasks.filter(t => t.priority === 'high').length,
    averageAIScore: tasks.reduce((sum, t) => sum + t.aiScore, 0) / tasks.length || 0
  };
  
  res.json(analytics);
});

// Serve React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Socket.io for real-time updates
io.on('connection', (socket) => {
  console.log('Client connected to task manager');
  
  socket.on('disconnect', () => {
    console.log('Client disconnected from task manager');
  });
});

const PORT = process.env.PORT || 5001;
server.listen(PORT, () => {
  console.log(`Smart Task Manager server running on port ${PORT}`);
});