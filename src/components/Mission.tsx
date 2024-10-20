/**
 * Mission Component
 * Displays the mission statements with interactive planets.
 * Updated to use transient props to prevent React warnings about unknown props.
 */

import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { ContainerTitle } from "./common/StyledComponents.tsx";

// Define floating animation with different offsets and durations
const float = (offset: number) => keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(${offset}px); }
  100% { transform: translateY(0); }
`;

// Container for the mission section
const MissionSectionContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background-color);

  /* Responsive styles for small screens */
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    padding: 20px;
  }
`;

// Planet styled component
const Planet = styled.div<{
  scale: number;
  $floatOffset: number;
  $animationduration: string;
  $flipped: boolean;
  $iscard: boolean;
}>`
  width: ${(props) => (props.$iscard ? '100%' : `${150 * props.scale}px`)};
  height: ${(props) => (props.$iscard ? 'auto' : `${150 * props.scale}px`)};
  background-color: ${(props) =>
    props.$flipped ? 'var(--link-color)' : 'var(--button-background)'};
  color: ${(props) => (props.$flipped ? 'var(--text-color)' : 'transparent')};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => (props.$iscard ? '1em' : `${17 * props.scale}px`)};
  font-family: Arial, sans-serif;
  border-radius: ${(props) => (props.$iscard ? '12px' : '50%')};
  position: ${(props) => (props.$iscard ? 'static' : 'absolute')};
  padding: ${(props) => (props.$iscard ? '20px' : `${12 * props.scale}px`)};
  margin: ${(props) => (props.$iscard ? '10px 0' : '0')};
  box-shadow: ${(props) =>
    props.$iscard ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none'};
  transition: transform 0.6s ease, box-shadow 0.3s ease, background-color 0.6s ease;

  /* Floating animation for non-card layout */
  animation: ${(props) =>
    !props.$iscard ? float(props.$floatOffset) : 'none'}
  ${(props) => props.$animationduration} ease-in-out infinite;

  /* Hover and click effects */
  &:hover {
    transform: ${(props) =>
      props.$iscard
        ? 'none'
        : props.$flipped
          ? 'none'
          : 'scale(1.1)'};
    box-shadow: ${(props) =>
      props.$iscard
        ? '0 6px 12px rgba(0, 0, 0, 0.2)'
        : '0px 0px 15px rgba(0, 0, 0, 0.3)'};
    background-color: var(--link-color);
    color: var(--text-color);
  }
`;

// PlanetContainer styled component using transient props
const PlanetContainer = styled.div<{
  $xOffset: number;
  $yOffset: number;
}>`
  position: absolute;
  top: ${({ $yOffset }) => $yOffset}vh;
  left: ${({ $xOffset }) => $xOffset}vw;

  @media (max-width: 900px) {
    position: static;
    width: 100%;
  }
`;

const CardContainer = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Mission: React.FC = () => {
  const [flippedPlanets, setFlippedPlanets] = useState<{ [key: string]: boolean }>({});
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(window.innerWidth < 900);

  // Handler to update screen size
  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 900);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handler for flipping planets/cards
  const handleFlip = (mission: string) => {
    setFlippedPlanets((prevState) => ({
      ...prevState,
      [mission]: !prevState[mission],
    }));
  };

  // Data for missions
  const missions = [
    {
      key: '宗旨 A',
      text: '激發創意與自我挑戰',
      xOffset: 20,
      yOffset: 20,
      scale: 0.9,
      floatOffset: 10,
      $animationduration: '5s',
    },
    {
      key: '宗旨 B',
      text: '培養創新思維與技術能力',
      xOffset: 15,
      yOffset: 50,
      scale: 1.7,
      floatOffset: 15,
      $animationduration: '7s',
    },
    {
      key: '宗旨 C',
      text: '激勵學生踏上遊戲開發之路',
      xOffset: 70,
      yOffset: 10,
      scale: 1,
      floatOffset: 8,
      $animationduration: '6s',
    },
    {
      key: '宗旨 D',
      text: '推動臺灣青少年科技社群發展',
      xOffset: 70,
      yOffset: 40,
      scale: 2,
      floatOffset: 12,
      $animationduration: '8s',
    },
  ];

  return (
    <MissionSectionContainer>
      {/* Central Title */}
      <ContainerTitle>活動宗旨</ContainerTitle>

      {isSmallScreen ? (
        // Card Layout for small screens
        <CardContainer>
          {missions.map((mission) => (
            <Planet
              key={mission.key}
              scale={mission.scale}
              $floatOffset={mission.floatOffset}
              $animationduration={mission.$animationduration}
              $flipped={flippedPlanets[mission.key] || false}
              $iscard={true}
              onClick={() => handleFlip(mission.key)}
            >
              {flippedPlanets[mission.key]
                ? mission.text
                : '點擊以查看詳情'}
            </Planet>
          ))}
        </CardContainer>
      ) : (
        // Original Planet Layout for large screens
        missions.map((mission) => (
          <PlanetContainer
            key={mission.key}
            $xOffset={mission.xOffset}
            $yOffset={mission.yOffset}
          >
            <Planet
              scale={mission.scale}
              $floatOffset={mission.floatOffset}
              $animationduration={mission.$animationduration}
              $flipped={flippedPlanets[mission.key] || false}
              $iscard={false}
              onClick={() => handleFlip(mission.key)}
              onMouseEnter={() => handleFlip(mission.key)}
            >
              {mission.text}
            </Planet>
          </PlanetContainer>
        ))
      )}
    </MissionSectionContainer>
  );
};

export default Mission;
