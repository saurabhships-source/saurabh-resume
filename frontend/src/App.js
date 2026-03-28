import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import { Toaster } from './components/ui/toaster';
import CursorGlow from './components/CursorGlow'; // ✅ ADD THIS
import './App.css';

function App() {
  return (
    <div className="App">
      
      {/* 🔥 Cursor Glow Effect */}
      <CursorGlow />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>

      <Toaster />
    </div>
  );
}

export default App;
