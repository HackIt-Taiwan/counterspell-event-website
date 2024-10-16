import React from 'react';
import styled from 'styled-components';

const darkenColor = (color: string, amount: number): string => {
  const darkenHex = (hex: string): string => {
    const num = Math.max(0, Math.min(255, parseInt(hex, 16) - Math.floor(255 * amount)));
    return num.toString(16).padStart(2, '0');
  };
  const [r, g, b] = color.match(/\w\w/g)!;
  return `#${darkenHex(r)}${darkenHex(g)}${darkenHex(b)}`;
};

const LearnBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2vw;
  min-height: 5vh;
  max-height: 15vh;
  background-color: #1e1e1e;
  width: 100%;
  box-sizing: border-box;
  gap: 20px;

  @media (max-width: 800px) {
    display: none;
  }
`;

const LearnTitle = styled.div`
  flex: 0 0 20%;
  font-size: 1.5vw;
  text-align: center;
  font-family: Arial, sans-serif;
  font-weight: 600;
  color: #f0f0f0; /* Light text */

  @media (max-width: 800px) {
    display: none;
  }
`;

interface LearnItemProps {
  color: string;
}

const LearnItem = styled.div<LearnItemProps>`
  flex: 1;
  padding: 10px 0;
  min-height: 7vh;
  background-color: ${(props) => props.color || '#4caf50'};
  font-size: 1.5vw;
  font-family: Arial, sans-serif;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px) scale(1.05);
    background-color: ${(props) => darkenColor(props.color, 0.1)};
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 800px) {
    font-size: 3vw;
  }
`;

const LearnBox: React.FC = () => {
  return (
    <LearnBoxContainer>
      <LearnTitle>你可以學到：</LearnTitle>
      <LearnItem color="#f44336">遊戲設計</LearnItem>
      <LearnItem color="#2196f3">程式開發</LearnItem>
      <LearnItem color="#ffeb3b">團隊合作</LearnItem>
      <LearnItem color="#4caf50">專案管理</LearnItem>
    </LearnBoxContainer>
  );
};

export default LearnBox;
