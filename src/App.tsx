// src/App.tsx

import React from 'react';
import HomePage from './pages/HomePage';

/**
 * App - The main application component that renders the homepage.
 *
 * @component
 * @example
 * return (
 *   <App />
 * )
 */
const App: React.FC = () => {
    return (
        <div className="App">
            <HomePage />
        </div>
    );
};

export default App;
