import { useState, useEffect, useNavigate } from 'react' // import React Hooks
// Necessary components for navigation and pages
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage';
import CharactersPage from './pages/CharactersPage';
import SongsPage from './pages/SongsPage';
import LocationsPage from './pages/LocationsPage';
import Navigation from './components/Navigation';
import AuthPage from './pages/AuthPage'; // Login/Registration page
import './App.css'

// Simple authentication check (replace with more robust solution)
const isAuthenticated = () => !!localStorage.getItem('authToken');

// Handle conditional rendering and redirection based authentication check
const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/auth" />;
};

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navigation />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Make the Characters, Songs, and Locations pages accessible only to authenticated users */}
            <Route path="/characters" element={<ProtectedRoute><CharactersPage /></ProtectedRoute>} />
            <Route path="/songs" element={<ProtectedRoute><SongsPage /></ProtectedRoute>} />
            <Route path="/locations" element={<ProtectedRoute><LocationsPage /></ProtectedRoute>} />
            {/* Render Login/Registration Page */}
            <Route path="/auth" element={<AuthPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
