import React, { useState } from 'react';
import styled from 'styled-components';

interface Card {
  title: string;
  content: string;
}

interface CarouselProps {
  cards: Card[];
}

const Carousel: React.FC<CarouselProps> = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 處理下一張卡片
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  // 處理上一張卡片
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  // 確定卡片的相對位置（左後、右後、中間）
  const getCardPosition = (index: number) => {
    if (index === currentIndex) return 'center';
    if (index === (currentIndex - 1 + cards.length) % cards.length) return 'left';
    if (index === (currentIndex + 1) % cards.length) return 'right';
    return 'hidden';
  };

  return (
    <CarouselContainer>
      <ArrowButton position="left" onClick={handlePrev}>
        &lt;
      </ArrowButton>
      <CardsContainer>
        {cards.map((card, index) => {
          const position = getCardPosition(index);
          return (
            <CardWrapper key={index} position={position}>
              <Card>
                <CardTitle>{card.title}</CardTitle>
                <CardContent>{card.content}</CardContent>
              </Card>
            </CardWrapper>
          );
        })}
      </CardsContainer>
      <ArrowButton position="right" onClick={handleNext}>
        &gt;
      </ArrowButton>
    </CarouselContainer>
  );
};

// 定義卡片位置的 styled component
const CardWrapper = styled.div<{ position: string }>`
  position: absolute;
  transition: all 0.5s ease;
  left: 50%; /* 確保卡片在容器中間起始 */
  transform: translateX(-50%); /* 調整卡片使其居中 */
  ${(props) => {
    switch (props.position) {
      case 'center':
        return `
          transform: translateX(-50%) scale(1);
          opacity: 1;
          z-index: 3;
        `;
      case 'left':
        return `
          transform: translateX(calc(-50% - 220px)) scale(0.9);
          opacity: 0.8;
          z-index: 2;
        `;
      case 'right':
        return `
          transform: translateX(calc(-50% + 220px)) scale(0.9);
          opacity: 0.8;
          z-index: 2;
        `;
      default:
        return `
          transform: translateX(-50%) scale(0.8);
          opacity: 0;
          z-index: 1;
          visibility: hidden;
        `;
    }
  }}
`;

// Styled Components
const CarouselContainer = styled.div`
  position: relative;
  width: 600px;
  height: 400px;
  margin: auto;
  overflow: visible; /* 確保卡片不會被容器切掉 */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardsContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Card = styled.div`
  width: 300px;
  height: 350px;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  background-color: var(--card-bg-color, #fff);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.5s, opacity 0.5s;
`;

const CardTitle = styled.h3`
  margin: 0 0 10px;
`;

const CardContent = styled.p`
  margin: 0;
`;

const ArrowButton = styled.button<{ position: string }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.3);
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  z-index: 4;
  padding: 5px 10px;
  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
  ${(props) =>
    props.position === 'left'
      ? `
    left: -50px; /* 將按鈕稍微移出容器外，避免與卡片重疊 */
  `
      : `
    right: -50px; /* 將按鈕稍微移出容器外，避免與卡片重疊 */
  `}
`;

export default Carousel;
