// src/components/PlanetComponent.tsx

import React from 'react';
import PlanetSVG from '../assets/planet.svg';

/**
 * PlanetComponent - This component is responsible for rendering a planet image using the SVG provided in the assets folder.
 * The component will display the planet on the homepage and can be further customized for animation or interactivity in the future.
 *
 * @component
 * @example
 * return (
 *   <PlanetComponent />
 * )
 */
const PlanetComponent: React.FC = () => {
    return (
        <div style={styles.container}>
            <img src={PlanetSVG} alt="Planet" style={styles.planetImage} />
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
    },
    planetImage: {
        width: 'clamp(300px, 90vw, 2000px)',
        height: 'auto',
    },
};

export default PlanetComponent;
