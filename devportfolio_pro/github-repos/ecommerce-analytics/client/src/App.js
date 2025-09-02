import React, { useState, useEffect } from 'react';
import { Container, Grid, Paper, Typography, Box } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import io from 'socket.io-client';
import axios from 'axios';
import './App.css';

const socket = io();

function App() {
  const [overview, setOverview] = useState({});
  const [hourlyData, setHourlyData] = useState([]);
  const [products, setProducts] = useState([]);
  const [realTimeData, setRealTimeData] = useState({});

  useEffect(() => {
    // Fetch initial data
    fetchOverview();
    fetchHourlyData();
    fetchProducts();

    // Listen for real-time updates
    socket.on('analytics-update', (data) => {
      setRealTimeData(data);
    });

    return () => socket.disconnect();
  }, []);

  const fetchOverview = async () => {
    try {
      const response = await axios.get('/api/analytics/overview');
      setOverview(response.data);
    } catch (error) {
      console.error('Error fetching overview:', error);
    }
  };

  const fetchHourlyData = async () => {
    try {
      const response = await axios.get('/api/analytics/hourly');
      setHourlyData(response.data);
    } catch (error) {
      console.error('Error fetching hourly data:', error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/analytics/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const MetricCard = ({ title, value, growth, prefix = '', suffix = '' }) => (
    <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
      <Typography variant="h6" color="textSecondary" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h4" component="div" sx={{ mb: 1 }}>
        {prefix}{value?.toLocaleString()}{suffix}
      </Typography>
      <Typography 
        variant="body2" 
        color={growth >= 0 ? 'success.main' : 'error.main'}
      >
        {growth >= 0 ? '↗' : '↘'} {Math.abs(growth)}%
      </Typography>
    </Paper>
  );

  return (
    <div className="App">
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          E-commerce Analytics Dashboard
        </Typography>
        
        {/* Real-time indicator */}
        {realTimeData.sales && (
          <Box sx={{ mb: 2, p: 2, bgcolor: 'success.light', borderRadius: 1 }}>
            <Typography variant="body1">
              🔴 Live: ${realTimeData.sales} sales, {realTimeData.orders} orders, {realTimeData.visitors} visitors
            </Typography>
          </Box>
        )}

        {/* Overview Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <MetricCard 
              title="Total Sales" 
              value={overview.totalSales} 
              growth={overview.growth?.sales}
              prefix="$"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <MetricCard 
              title="Total Orders" 
              value={overview.totalOrders} 
              growth={overview.growth?.orders}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <MetricCard 
              title="Visitors" 
              value={overview.totalVisitors} 
              growth={overview.growth?.visitors}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <MetricCard 
              title="Conversion Rate" 
              value={overview.conversionRate} 
              growth={overview.growth?.conversion}
              suffix="%"
            />
          </Grid>
        </Grid>

        {/* Charts */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Sales Trend (24 Hours)
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={hourlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" tickFormatter={(time) => new Date(time).getHours() + ':00'} />
                  <YAxis />
                  <Tooltip labelFormatter={(time) => new Date(time).toLocaleTimeString()} />
                  <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Top Products
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={products} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" width={80} />
                  <Tooltip />
                  <Bar dataKey="sales" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;