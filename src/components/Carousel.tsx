import React, { useState } from 'react';
import styled from 'styled-components';

interface Card {
  id: number;
  amount: string;
  awardName: string;
  peopleCount: number;
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

  // 動態分配背景顏色
  const getBackgroundColor = (index: number) => {
    const colors = ['#e0f7fa', '#ffe0b2', '#d1c4e9', '#b3e5fc', '#c8e6c9', '#ffccbc'];
    return colors[index % colors.length];
  };

  return (
    <CarouselWrapper>
      <Title>贏取豐厚獎金! 快來看看您能獲得什麼！</Title>
      <CarouselContainer>
        <ArrowButton position="left" onClick={handlePrev}>
          &lt;
        </ArrowButton>
        <CardsContainer>
          {cards.map((card, index) => {
            const position = getCardPosition(index);
            const backgroundColor = getBackgroundColor(index);
            return (
              <CardWrapper key={card.id} position={position}>
                <Card style={{ backgroundColor }}>
                  <CardHeader>
                    <CardAmount>＄{card.amount}</CardAmount>
                    <CardAwardName>{card.awardName}</CardAwardName>
                  </CardHeader>
                  <CardDetails>
                    <CardPeopleCount>{card.peopleCount} 組</CardPeopleCount>
                  </CardDetails>
                </Card>
              </CardWrapper>
            );
          })}
        </CardsContainer>
        <ArrowButton position="right" onClick={handleNext}>
          &gt;
        </ArrowButton>
      </CarouselContainer>
    </CarouselWrapper>
  );
};

// 定義卡片位置的 styled component
const CardWrapper = styled.div<{ position: string }>`
  position: absolute;
  transition: all 0.5s ease;
  left: 50%;
  transform: translateX(-50%);
  ${(props) => {
    switch (props.position) {
      case 'center':
        return `
          transform: translateX(-50%) scale(1.15);
          opacity: 1;
          z-index: 3;
        `;
      case 'left':
        return `
          transform: translateX(calc(-50% - 300px)) scale(0.9);
          opacity: 0.8;
          z-index: 2;
        `;
      case 'right':
        return `
          transform: translateX(calc(-50% + 300px)) scale(0.9);
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
const CarouselWrapper = styled.div`
  text-align: left; /* 將標題向左對齊 */
  padding: 20px;
  min-width: 100vw;
  margin-left: 1vw;
`;

const Title = styled.h1`
  font-size: 3.5rem; /* 將標題放大 */
  font-weight: bold;
  color: #333;
  margin-bottom: 20vh;
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 1000px; /* 增加 Carousel 的大小 */
  height: 600px; /* 增加高度 */
  margin: auto;
  overflow: visible;
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
  width: 400px; /* 增加卡片的寬度 */
  height: 500px; /* 增加卡片的高度 */
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.5s, opacity 0.5s;
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 20px;
`;

const CardAmount = styled.h2`
  font-size: 4.5rem; /* 調整金額字體大小，讓其在增大卡片後仍突出 */
  font-weight: bold;
  margin: 0;
`;

const CardAwardName = styled.h3`
  font-size: 3.5rem; /* 調整獎項名稱字體大小，讓其在增大卡片後更加清晰 */
  margin-top: 10px;
  margin-left: 1vw;
`;

const CardDetails = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;

const CardPeopleCount = styled.span`
  font-size: 1.5rem;
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
    left: -70px; /* 將按鈕稍微移出容器外，避免與卡片重疊 */
  `
    : `
    right: -70px; /* 將按鈕稍微移出容器外，避免與卡片重疊 */
  `}
`;

export default Carousel;
