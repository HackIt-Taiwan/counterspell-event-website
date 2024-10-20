/**
 * Mission Component
 * Displays the mission statements with interactive planets or cards based on screen size.
 * Utilizes styled-components for styling and adheres to clean code principles.
 */

import React, { useState, useEffect, FC } from 'react';
import styled, {css, keyframes} from 'styled-components';
import { ContainerTitle } from "./common/StyledComponents";

// Type definition for a mission item
interface MissionItem {
  key: string;
  text: string;
  xOffset: number;
  yOffset: number;
  scale: number;
  floatOffset: number;
  animationDuration: string;
}

// Type definition for Planet component props
interface PlanetProps {
  scale: number;
  floatOffset: number;
  animationDuration: string;
  isFlipped: boolean;
  isCard: boolean;
  onFlip: () => void;
  children: React.ReactNode;
}

// Type definition for PlanetContainer props with explicit children
interface PlanetContainerProps {
  xOffset: number;
  yOffset: number;
  children: React.ReactNode;
}

// Keyframes for floating animation
const float = (offset: number) => css`
  ${keyframes`
    0% { transform: translateY(0); }
    50% { transform: translateY(${offset}px); }
    100% { transform: translateY(0); }
  `}
`;

// Styled container for the mission section
const MissionSectionContainer = styled.section`
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

// Styled component for individual planets or cards
const PlanetStyled = styled.div<{
  scale: number;
  $floatOffset: number;
  $animationDuration: string;
  $isFlipped: boolean;
  $isCard: boolean;
}>`
  width: ${({ $isCard, scale }) => ($isCard ? '100%' : `${150 * scale}px`)};
  height: ${({ $isCard, scale }) => ($isCard ? 'auto' : `${150 * scale}px`)};
  background-color: ${({ $isFlipped }) => ($isFlipped ? 'var(--link-color)' : 'var(--button-background)')};
  color: ${({ $isFlipped }) => ($isFlipped ? 'var(--text-color)' : 'transparent')};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ $isCard, scale }) => ($isCard ? '1em' : `${17 * scale}px`)};
  font-family: Arial, sans-serif;
  border-radius: ${({ $isCard }) => ($isCard ? '12px' : '50%')};
  position: ${({ $isCard }) => ($isCard ? 'static' : 'absolute')};
  padding: ${({ $isCard, scale }) => ($isCard ? '20px' : `${12 * scale}px`)};
  margin: ${({ $isCard }) => ($isCard ? '10px 0' : '0')};
  box-shadow: ${({ $isCard }) => ($isCard ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none')};
  transition: transform 0.6s ease, box-shadow 0.3s ease, background-color 0.6s ease;

  /* Floating animation for non-card layout */
  animation: ${({ $isCard, $floatOffset, $animationDuration }) =>
    !$isCard ? css`${float($floatOffset)} ${$animationDuration} ease-in-out infinite` : 'none'};

  /* Hover and click effects */
  &:hover {
    transform: ${({ $isCard, $isFlipped }) =>
      $isCard
        ? 'none'
        : $isFlipped
          ? 'none'
          : 'scale(1.1)'};
    box-shadow: ${({ $isCard }) =>
      $isCard
        ? '0 6px 12px rgba(0, 0, 0, 0.2)'
        : '0px 0px 15px rgba(0, 0, 0, 0.3)'};
    background-color: var(--link-color);
    color: var(--text-color);
    cursor: pointer;
  }

  /* Ensure cursor pointer for clickable elements */
  ${({ onClick }) => onClick && 'cursor: pointer;'}
`;

// Styled container for planet positioning
const PlanetContainerStyled = styled.div<PlanetContainerProps>`
  position: absolute;
  top: ${({ yOffset }) => `${yOffset}vh`};
  left: ${({ xOffset }) => `${xOffset}vw`};

  @media (max-width: 900px) {
    position: static;
    width: 100%;
  }
`;

// Styled container for card layout on small screens
const CardContainer = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/**
 * Planet Component
 * Renders an individual planet or card with interactive flip functionality.
 */
const Planet: FC<PlanetProps> = ({
                                   scale,
                                   floatOffset,
                                   animationDuration,
                                   isFlipped,
                                   isCard,
                                   onFlip,
                                   children,
                                 }) => (
  <PlanetStyled
    scale={scale}
    $floatOffset={floatOffset}
    $animationDuration={animationDuration}
    $isFlipped={isFlipped}
    $isCard={isCard}
    onClick={onFlip}
  >
    {children}
  </PlanetStyled>
);

/**
 * PlanetContainer Component
 * Positions the Planet component on the screen based on offsets.
 */
const PlanetContainer: FC<PlanetContainerProps> = ({ xOffset, yOffset, children }) => (
  <PlanetContainerStyled xOffset={xOffset} yOffset={yOffset}>
    {children}
  </PlanetContainerStyled>
);

/**
 * Mission Component
 * Main component that displays mission statements as interactive planets or cards.
 */
const Mission: FC = () => {
  const [flippedPlanets, setFlippedPlanets] = useState<{ [key: string]: boolean }>({});
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(window.innerWidth < 900);

  // List of mission statements with positioning and animation details
  const missions: MissionItem[] = [
    {
      key: '宗旨 A',
      text: '激發創意與自我挑戰',
      xOffset: 20,
      yOffset: 20,
      scale: 0.9,
      floatOffset: 10,
      animationDuration: '5s',
    },
    {
      key: '宗旨 B',
      text: '培養創新思維與技術能力',
      xOffset: 15,
      yOffset: 50,
      scale: 1.7,
      floatOffset: 15,
      animationDuration: '7s',
    },
    {
      key: '宗旨 C',
      text: '激勵學生踏上遊戲開發之路',
      xOffset: 70,
      yOffset: 10,
      scale: 1,
      floatOffset: 8,
      animationDuration: '6s',
    },
    {
      key: '宗旨 D',
      text: '推動臺灣青少年科技社群發展',
      xOffset: 70,
      yOffset: 40,
      scale: 2,
      floatOffset: 12,
      animationDuration: '8s',
    },
  ];

  /**
   * Handles screen resize to determine if the layout should switch to card view.
   */
  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 900);
  };

  /**
   * Toggles the flipped state of a specific mission item.
   * @param missionKey - The unique key of the mission to flip.
   */
  const toggleFlip = (missionKey: string) => {
    setFlippedPlanets((prevState) => ({
      ...prevState,
      [missionKey]: !prevState[missionKey],
    }));
  };

  // Effect to add and clean up the resize event listener
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
              floatOffset={mission.floatOffset}
              animationDuration={mission.animationDuration}
              isFlipped={flippedPlanets[mission.key] || false}
              isCard={true}
              onFlip={() => toggleFlip(mission.key)}
            >
              {flippedPlanets[mission.key] ? mission.text : '點擊以查看詳情'}
            </Planet>
          ))}
        </CardContainer>
      ) : (
        // Planet Layout for large screens
        missions.map((mission) => (
          <PlanetContainer key={mission.key} xOffset={mission.xOffset} yOffset={mission.yOffset}>
            <Planet
              scale={mission.scale}
              floatOffset={mission.floatOffset}
              animationDuration={mission.animationDuration}
              isFlipped={flippedPlanets[mission.key] || false}
              isCard={false}
              onFlip={() => toggleFlip(mission.key)}
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
