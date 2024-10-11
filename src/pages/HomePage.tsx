// src/pages/HomePage.tsx

import React from 'react';
import PlanetComponent from '../components/PlanetComponent';

/**
 * HomePage - This is the main homepage component that renders the PlanetComponent.
 * It serves as the starting point of the user journey and will be expanded with additional components and features.
 *
 * @component
 * @example
 * return (
 *   <HomePage />
 * )
 */
const HomePage: React.FC = () => {
    return (
        <div>
            <PlanetComponent />
        </div>
    );
};

export default HomePage;
