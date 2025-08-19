import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './pages/home';
import Principal from './pages/principal';

// Usar el tema oscuro por defecto de Material-UI
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/principal" element={<Principal />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
