import React, { useState, useEffect } from 'react';
import {
  Container, Grid, Paper, Typography, Box, Button, Dialog, DialogTitle,
  DialogContent, TextField, DialogActions, Select, MenuItem, FormControl,
  InputLabel, Chip, Card, CardContent, LinearProgress
} from '@mui/material';
import { Add, Psychology, TrendingUp } from '@mui/icons-material';
import io from 'socket.io-client';
import axios from 'axios';
import './App.css';

const socket = io();

function App() {
  const [tasks, setTasks] = useState([]);
  const [analytics, setAnalytics] = useState({});
  const [openDialog, setOpenDialog] = useState(false);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    priority: 'medium',
    dueDate: ''
  });

  useEffect(() => {
    fetchTasks();
    fetchAnalytics();

    // Socket listeners
    socket.on('task-created', (task) => {
      setTasks(prev => [...prev, task].sort((a, b) => b.aiScore - a.aiScore));
    });

    socket.on('task-updated', (updatedTask) => {
      setTasks(prev => prev.map(t => t.id === updatedTask.id ? updatedTask : t)
        .sort((a, b) => b.aiScore - a.aiScore));
    });

    socket.on('task-deleted', (taskId) => {
      setTasks(prev => prev.filter(t => t.id !== taskId));
    });

    return () => {
      socket.off('task-created');
      socket.off('task-updated');
      socket.off('task-deleted');
    };
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('/api/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const fetchAnalytics = async () => {
    try {
      const response = await axios.get('/api/analytics');
      setAnalytics(response.data);
    } catch (error) {
      console.error('Error fetching analytics:', error);
    }
  };

  const handleCreateTask = async () => {
    try {
      await axios.post('/api/tasks', newTask);
      setOpenDialog(false);
      setNewTask({ title: '', description: '', priority: 'medium', dueDate: '' });
      fetchAnalytics();
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  const handleUpdateTaskStatus = async (taskId, newStatus) => {
    try {
      await axios.put(`/api/tasks/${taskId}`, { status: newStatus });
      fetchAnalytics();
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'error';
      case 'medium': return 'warning';
      case 'low': return 'success';
      default: return 'default';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'success';
      case 'in-progress': return 'info';
      case 'pending': return 'default';
      default: return 'default';
    }
  };

  const TaskCard = ({ task }) => (
    <Card sx={{ mb: 2, border: task.aiScore > 80 ? '2px solid #ff9800' : 'none' }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={1}>
          <Typography variant="h6" component="div">
            {task.title}
          </Typography>
          <Box display="flex" gap={1}>
            <Chip 
              label={`AI: ${task.aiScore}`} 
              color={task.aiScore > 80 ? 'error' : task.aiScore > 60 ? 'warning' : 'success'}
              size="small"
              icon={<Psychology />}
            />
            <Chip 
              label={task.priority} 
              color={getPriorityColor(task.priority)}
              size="small"
            />
          </Box>
        </Box>
        
        <Typography variant="body2" color="text.secondary" mb={2}>
          {task.description}
        </Typography>
        
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="caption">
            Due: {new Date(task.dueDate).toLocaleDateString()}
          </Typography>
          
          <Box display="flex" gap={1}>
            <Button 
              size="small" 
              variant={task.status === 'pending' ? 'contained' : 'outlined'}
              onClick={() => handleUpdateTaskStatus(task.id, 'pending')}
            >
              Pending
            </Button>
            <Button 
              size="small" 
              variant={task.status === 'in-progress' ? 'contained' : 'outlined'}
              onClick={() => handleUpdateTaskStatus(task.id, 'in-progress')}
            >
              In Progress
            </Button>
            <Button 
              size="small" 
              variant={task.status === 'completed' ? 'contained' : 'outlined'}
              onClick={() => handleUpdateTaskStatus(task.id, 'completed')}
            >
              Completed
            </Button>
          </Box>
        </Box>
        
        {task.aiScore > 80 && (
          <Box mt={1}>
            <Typography variant="caption" color="warning.main">
              🤖 AI Recommendation: High priority task - consider tackling this first!
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="App">
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Smart Task Manager
        </Typography>
        
        {/* Analytics Dashboard */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={2}>
            <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
              <Typography variant="h4">{analytics.totalTasks || 0}</Typography>
              <Typography variant="body2">Total Tasks</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
              <Typography variant="h4">{analytics.completedTasks || 0}</Typography>
              <Typography variant="body2">Completed</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
              <Typography variant="h4">{analytics.inProgressTasks || 0}</Typography>
              <Typography variant="body2">In Progress</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
              <Typography variant="h4">{analytics.pendingTasks || 0}</Typography>
              <Typography variant="body2">Pending</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
              <Typography variant="h4">{analytics.highPriorityTasks || 0}</Typography>
              <Typography variant="body2">High Priority</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
              <Typography variant="h4">{Math.round(analytics.averageAIScore || 0)}</Typography>
              <Typography variant="body2">Avg AI Score</Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Add Task Button */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h5">
            Tasks (AI Prioritized)
          </Typography>
          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={() => setOpenDialog(true)}
          >
            Add Task
          </Button>
        </Box>

        {/* Tasks List */}
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {tasks.map(task => (
              <TaskCard key={task.id} task={task} />
            ))}
          </Grid>
        </Grid>

        {/* Add Task Dialog */}
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="sm" fullWidth>
          <DialogTitle>Create New Task</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Task Title"
              fullWidth
              variant="outlined"
              value={newTask.title}
              onChange={(e) => setNewTask({...newTask, title: e.target.value})}
              sx={{ mb: 2 }}
            />
            <TextField
              margin="dense"
              label="Description"
              fullWidth
              multiline
              rows={3}
              variant="outlined"
              value={newTask.description}
              onChange={(e) => setNewTask({...newTask, description: e.target.value})}
              sx={{ mb: 2 }}
            />
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Priority</InputLabel>
              <Select
                value={newTask.priority}
                label="Priority"
                onChange={(e) => setNewTask({...newTask, priority: e.target.value})}
              >
                <MenuItem value="low">Low</MenuItem>
                <MenuItem value="medium">Medium</MenuItem>
                <MenuItem value="high">High</MenuItem>
              </Select>
            </FormControl>
            <TextField
              margin="dense"
              label="Due Date"
              type="date"
              fullWidth
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              value={newTask.dueDate}
              onChange={(e) => setNewTask({...newTask, dueDate: e.target.value})}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
            <Button onClick={handleCreateTask} variant="contained">Create Task</Button>
          </DialogActions>
        </Dialog>
      </Container>
    </div>
  );
}

export default App;