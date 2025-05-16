import { useState } from 'react'
// Necessary components for navigation and pages
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import CharactersPage from './pages/CharactersPage';
import SongsPage from './pages/SongsPage';
import LocationsPage from './pages/LocationsPage';
import Navigation from './components/Navigation';

import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className="app">
        <Navigation />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/characters" element={<CharactersPage />} />
            <Route path="/songs" element={<SongsPage />} />
            <Route path="/locations" element={<LocationsPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
