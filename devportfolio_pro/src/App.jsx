import React from "react";
import Routes from "./Routes";
import { ThemeProvider } from "./contexts/ThemeContext";

// Error boundary for the entire app
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('App Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: '40px', 
          textAlign: 'center',
          fontFamily: 'Arial, sans-serif',
          backgroundColor: '#fff5f5',
          minHeight: '100vh'
        }}>
          <h1 style={{ color: '#e53e3e' }}>⚠️ Something went wrong</h1>
          <p style={{ marginBottom: '20px' }}>Error: {this.state.error?.message}</p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              padding: '10px 20px',
              backgroundColor: '#3182ce',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  console.log('App component rendering...');
  
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
