import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import MovieDetails from './Pages/MovieDetails';
import NotFound from './Pages/NotFound';
import Navbar from './Components/Navbar/Navbar';

function App() {
  const [searchQuery, setSearchQuery] = useState("Batman");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  return (
    <Router>
      <Navbar onSearch={handleSearch} />
      <Routes>
        <Route path="/home" element={<Home searchQuery={searchQuery} searchMovies={handleSearch} />} />
        <Route path="/movie/:id" element={<MovieDetails searchQuery={searchQuery} searchMovies={handleSearch} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </Router>
  );
}

export default App;
