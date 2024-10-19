/**
 * EventTime Component
 * Displays event information such as date, time, and location in a responsive layout.
 * Updated to use CSS variables for text and background colors.
 */

import React from 'react';
import styled from 'styled-components';
import {ContainerTitle} from "./common/StyledComponents.tsx";

// Styled component for the left container displaying event information.
const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(36px, 8vw, 64px); /* Increased font size */
  font-family: 'Arial', sans-serif;
  color: var(--text-color);
`;

// Styled component for the right container reserved for animations or additional content.
const RightContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 700px) {
    display: none; /* Hide animation on screens smaller than 700px */
  }
`;

// Styled component for the main container ensuring full viewport height.
const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: var(--background-color-light);

  @media (max-width: 700px) {
    flex-direction: column;
    height: auto;
    padding-bottom: 50px; /* Add margin at the bottom for small screens */
  }
`;

// Styled component for small-screen text information.
const SmallScreenInfo = styled.div`
  padding: 20px;
  text-align: center;
  color: var(--text-color);

  /* Add margin to prevent content from sticking together */
  margin-bottom: 25vh;

  div {
    font-size: clamp(16px, 2vw, 32px); /* Adjust font size for each event detail */
    margin-bottom: 10px;
  }

  strong {
    font-size: clamp(16px, 2vw, 32px); /* Adjust font size for <strong> */
  }

  small {
    display: block;
    font-size: clamp(12px, 1vw, 22px); /* Adjust font size for the small note */
    color: var(--link-hover-color);
    margin-top: 15px;
  }
`;

const EventTime: React.FC = () => {
  const isSmallScreen = window.innerWidth < 700;

  return (
    <Container>
      {/* Left Side - Event Information */}
      <LeftContainer>
        <ContainerTitle>活動資訊</ContainerTitle>
      </LeftContainer>

      {/* Right Side - Reserved for animations or additional content */}
      {!isSmallScreen && (
        <RightContainer>
          {/* Future content can be added here */}
          <div>動畫區域</div>
        </RightContainer>
      )}

      {/* For small screens, display text-based event details */}
      {isSmallScreen && (
        <SmallScreenInfo>
          <div>
            <strong>活動時間：</strong>2024/11/30 - 2024/12/01
          </div>
          <div>
            <strong>活動地點：</strong>台北市
          </div>
          <small>具體活動時間將會於活動前使用Email寄出，請留意訊息</small>
        </SmallScreenInfo>
      )}
    </Container>
  );
};

export default EventTime;
