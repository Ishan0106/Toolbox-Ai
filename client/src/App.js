import './App.css';
import { Routes, Route } from 'react-router-dom'
import { useMemo } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { Toaster } from "react-hot-toast";
import { themeSettings } from './theme';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import Login from './pages/Login';
import Summary from './pages/Summary';
import Chatbot from './pages/Chatbot';
import Shortme from './pages/Shortme';
import Story from './pages/Story';
import Grammer from './pages/Grammer';
import Code from './pages/Code';
import QRCodeGenerator from './pages/QRCodeGenerator';
import ChartGenerator from './pages/ChartGenerator';

function App() {
  const theme = useMemo(() => createTheme(themeSettings(), []));
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Toaster />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/shortme" element={<Shortme />} />
          <Route path="/story" element={<Story />} />
          <Route path="/grammer" element={<Grammer />} />
          <Route path="/code" element={<Code />} />
          <Route path='/qRCodeGenerator' element={<QRCodeGenerator />} />
          <Route path='/chartgenerator' element={<ChartGenerator />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
