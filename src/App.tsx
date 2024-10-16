/*
  App Component
  Serves as the root component for the Counterspell Event Client.
  Sets up routing and includes global navigation components.
*/

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavButtons from './components/NavButtons';
import Workshop from './pages/Workshop';

const App: React.FC = () => {
  return (
    <Router>
      <NavButtons />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/workshop" element={<Workshop />} />
      </Routes>
    </Router>
  );
};

export default App;
