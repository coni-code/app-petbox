import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnimalConfigPage from './pages/AnimalConfigPage';
import LoginPage from './pages/LoginPage';
import './assets/styles/app.css';

function App() {
  return (
    <div className='App'>
      <Router>
            <Routes>
              <Route path="/login" element={<LoginPage/>} />
              <Route path="/animal-form" element={<AnimalConfigPage />} />
            </Routes>
      </Router>
    </div>
  );
}

export default App;
