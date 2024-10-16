import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavButtons from "./components/NavButtons.tsx";
import Workshop from "./pages/Workshop.tsx";

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
