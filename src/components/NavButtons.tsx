/**
 * NavButtons Component
 * Renders the navigation bar with links and buttons, ensuring responsiveness and accessibility.
 * Updated to use CSS variables for colors and background.
 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Styled component for the navigation container.
const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 40px;
  background-color: var(--background-color);
  width: 100%;
  box-sizing: border-box;
  gap: 20px;
  z-index: 1000;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    justify-content: center;
    gap: 10px;
    padding: 10px 20px;
  }
`;

// Styled component for text links using react-router-dom's Link.
const TextLink = styled(Link)`
  background: none;
  border: none;
  font-size: 18px;
  color: var(--text-color);
  cursor: pointer;
  text-decoration: none;
  font-family: 'Arial', sans-serif;

  &:hover {
    color: var(--link-hover-color);
  }

  &:active {
    color: var(--link-color);
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

// Styled component for solid buttons.
const SolidButton = styled.button`
  background-color: var(--link-color);
  border: none;
  color: var(--text-color);
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 25px;
  cursor: pointer;
  outline: none;
  font-family: 'Arial', sans-serif;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: var(--link-hover-color);
    transform: translateY(-3px);
  }

  &:active {
    background-color: #c55a2d; /* Adjust as needed */
    transform: translateY(1px);
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 8px 16px;
  }
`;

// NavButtons Component
const NavButtons: React.FC = () => {
  const handleRegisterClick = () => {
    // Future functionality: link to the registration form or external page.
    window.open('#', '_blank'); // Currently set to an invalid link.
  };

  return (
    <NavContainer>
      <TextLink to="/">首頁</TextLink>
      <TextLink to="/LatestNews">最新消息</TextLink>
      <TextLink to="/workshop">工作坊</TextLink>
      <SolidButton onClick={handleRegisterClick}>報名活動</SolidButton>
    </NavContainer>
  );
};

export default NavButtons;
