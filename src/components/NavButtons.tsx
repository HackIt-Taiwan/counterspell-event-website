/**
 * NavButtons Component
 * Renders the navigation bar with links and buttons, ensuring responsiveness and accessibility.
 * Updated to include the ColorEditor button on the left and optimize layout for production deployment.
 */

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ColorEditor from './ColorEditor'; // 確保路徑正確

// Styled component for the navigation container.
const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between; /* 默認為兩側對齊 */
  align-items: center;
  padding: 10px 40px;
  background-color: transparent;
  width: 100%;
  box-sizing: border-box;
  gap: 20px;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 10px 20px;
    gap: 10px;
  }

  @media (max-width: 500px) {
    justify-content: flex-end; /* 當螢幕寬度 < 500px 時，將內容對齊至右側 */
  }
`;

// Left section for ColorEditor button
const LeftSection = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 500px) {
    display: none; /* 螢幕寬度 < 500px 時隱藏左側 */
  }
`;

// Right section for navigation links and buttons
const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 10px;
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
    background-color: #c55a2d; /* 調整顏色 */
    transform: translateY(1px);
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 8px 16px;
  }
`;

// Styled component for the ColorEditor toggle button
const ColorEditorButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: var(--text-color);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: var(--link-hover-color);
  }

  &:active {
    color: var(--link-color);
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

// Custom Hook to get the current window width
const useWindowWidth = (): number => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = (): void => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return (): void => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};

// NavButtons Component
const NavButtons: React.FC = () => {
  const [isColorEditorOpen, setIsColorEditorOpen] = useState<boolean>(false);
  const windowWidth = useWindowWidth();

  const toggleColorEditor = () => {
    setIsColorEditorOpen(!isColorEditorOpen);
  };

  const handleRegisterClick = () => {
    // 未來功能：連結到報名表單或外部頁面。
    window.open('#', '_blank'); // 目前設置為無效連結。
  };

  return (
    <>
      <NavContainer>
        <LeftSection>
          {/* ColorEditor 按鈕 */}
          <ColorEditorButton onClick={toggleColorEditor} aria-label="開啟配色編輯器">
            🎨
          </ColorEditorButton>
        </LeftSection>
        <RightSection>
          <TextLink to="/">首頁</TextLink>
          <TextLink to="/LatestNews">最新消息</TextLink>
          <TextLink to="/workshop">工作坊</TextLink>
          <SolidButton onClick={handleRegisterClick}>報名活動</SolidButton>
        </RightSection>
      </NavContainer>
      {/* 僅在螢幕寬度 >= 500px 時顯示 ColorEditor */}
      {windowWidth >= 500 && <ColorEditor isOpen={isColorEditorOpen} onClose={() => setIsColorEditorOpen(false)} />}
    </>
  );
};

export default NavButtons;
