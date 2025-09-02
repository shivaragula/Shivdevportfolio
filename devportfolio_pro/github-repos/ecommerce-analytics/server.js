const express = require('express');
const cors = require('cors');
const path = require('path');
const http = require('http');
const socketIo = require('socket.io');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')));

// Sample analytics data
const generateSampleData = () => {
  const now = new Date();
  const data = [];
  
  for (let i = 0; i < 24; i++) {
    const hour = new Date(now.getTime() - (23 - i) * 60 * 60 * 1000);
    data.push({
      time: hour.toISOString(),
      sales: Math.floor(Math.random() * 10000) + 5000,
      orders: Math.floor(Math.random() * 200) + 50,
      visitors: Math.floor(Math.random() * 1000) + 500,
      conversion: (Math.random() * 5 + 2).toFixed(2)
    });
  }
  return data;
};

// API Routes
app.get('/api/analytics/overview', (req, res) => {
  const data = {
    totalSales: 125000,
    totalOrders: 1250,
    totalVisitors: 15000,
    conversionRate: 3.2,
    growth: {
      sales: 12.5,
      orders: 8.3,
      visitors: 15.2,
      conversion: -2.1
    }
  };
  res.json(data);
});

app.get('/api/analytics/hourly', (req, res) => {
  res.json(generateSampleData());
});

app.get('/api/analytics/products', (req, res) => {
  const products = [
    { name: 'Laptop Pro', sales: 25000, orders: 125, growth: 15.2 },
    { name: 'Smartphone X', sales: 18000, orders: 200, growth: 8.7 },
    { name: 'Tablet Air', sales: 12000, orders: 80, growth: -3.2 },
    { name: 'Headphones', sales: 8000, orders: 160, growth: 22.1 },
    { name: 'Smart Watch', sales: 15000, orders: 100, growth: 18.5 }
  ];
  res.json(products);
});

// Serve React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Socket.io for real-time updates
io.on('connection', (socket) => {
  console.log('Client connected');
  
  // Send real-time data every 5 seconds
  const interval = setInterval(() => {
    socket.emit('analytics-update', {
      sales: Math.floor(Math.random() * 1000) + 500,
      orders: Math.floor(Math.random() * 20) + 5,
      visitors: Math.floor(Math.random() * 100) + 50
    });
  }, 5000);
  
  socket.on('disconnect', () => {
    console.log('Client disconnected');
    clearInterval(interval);
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});