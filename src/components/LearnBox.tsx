// LearnBox Component
// Displays a box highlighting what participants can learn, with interactive and responsive design.

import React from 'react';
import styled from 'styled-components';

/**
 * Darkens a HEX color by a specified amount.
 * @param color - The original HEX color (e.g., '#b8e994').
 * @param amount - The amount to darken (0 to 1).
 * @returns The darkened HEX color.
 */
const darkenColor = (color: string, amount: number): string => {
  const darkenHex = (hex: string): string => {
    const num = Math.max(0, Math.min(255, parseInt(hex, 16) - Math.floor(255 * amount)));
    return num.toString(16).padStart(2, '0');
  };
  const [r, g, b] = color.match(/\w\w/g)!;
  return `#${darkenHex(r)}${darkenHex(g)}${darkenHex(b)}`;
};

// Container for the LearnBox section.
const LearnBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2vw;
  min-height: 100px;
  background-color: #f5f5f5;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 5vw 0;
    gap: 10px;
  }
`;

// Styled component for the title.
const LearnTitle = styled.div`
  flex: 0 0 20%;
  font-size: 1.5vw;
  text-align: center;
  font-family: Arial, sans-serif;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 3vw;
  }
`;

// Props interface for LearnItem.
interface LearnItemProps {
  color: string;
}

// Styled component for each learn item.
const LearnItem = styled.div<LearnItemProps>`
  flex: 1;
  padding: 10px 0;
  min-height: 10vh;
  background-color: ${(props) => props.color || '#b8e994'};
  font-size: 1.5vw;
  font-family: Arial, sans-serif;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px) scale(1.05);
    background-color: ${(props) => darkenColor(props.color, 0.1)};
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    font-size: 3vw;
  }
`;

const LearnBox: React.FC = () => {
  return (
    <LearnBoxContainer>
      <LearnTitle>你可以學到：</LearnTitle>
      <LearnItem color="#b8e994">遊戲設計</LearnItem>
      <LearnItem color="#a3d683">程式開發</LearnItem>
      <LearnItem color="#8fcf72">團隊合作</LearnItem>
      <LearnItem color="#7ac660">專案管理</LearnItem>
    </LearnBoxContainer>
  );
};

export default LearnBox;
