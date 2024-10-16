// JoinButton Component
// Renders a fixed-position button for users to join or register for workshops.

import React from 'react';
import styled from 'styled-components';

// Container for the join button, fixed at the bottom center of the viewport.
const JoinButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 30%;
  width: 100%;
  z-index: 1000;

  @media (max-width: 768px) {
    bottom: 20%;
  }
`;

// Styled button with hover and active states for better user interaction.
const JoinButtonStyled = styled.button`
  padding: 15px 30px;
  font-size: 1.5rem;
  font-family: Arial, sans-serif;
  font-weight: 600;
  color: white;
  background-color: #4caf50; /* Green button */
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #45a049; /* Darker green on hover */
    transform: translateY(-5px); /* Move up on hover */
  }

  &:active {
    background-color: #388e3c; /* Even darker green on click */
    transform: translateY(2px); /* Slightly move down on click */
  }

  @media (max-width: 768px) {
    padding: 12px 24px;
    font-size: 1.2rem;
  }
`;

// JoinButton Component
const JoinButton: React.FC = () => {
  const handleClick = () => {
    // Future functionality: link to the registration form or external page.
    window.open('#', '_blank'); // Currently set to an invalid link.
  };

  return (
    <JoinButtonContainer>
      <JoinButtonStyled onClick={handleClick}>
        報名參加工作坊！
      </JoinButtonStyled>
    </JoinButtonContainer>
  );
};

export default JoinButton;
