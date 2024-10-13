import React from 'react';
import styled, { keyframes } from 'styled-components';
import ArrowImage from '../assets/arrow.svg';

// 定義淡入效果
const fadeIn = keyframes`
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

// 容器，設定為橫向排列
const TransitionContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: left;
    position: relative;
`;

// 文字容器，包含標題和子標題，使用垂直排列
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end; /* 將文字內容靠左對齊 */
    margin-right: 50px; /* 調整與箭頭的距離 */
    margin-bottom: 30px;
`;

// "活動介紹" 文字樣式
const Title = styled.h1`
    font-size: 90px;
    animation: ${fadeIn} 1.5s ease-out;
    font-family: 'Arial', sans-serif;
    margin-bottom: 10px;
`;

// 子標題樣式
const Subtitle = styled.h2`
    font-size: 40px;
    color: #666;
    animation: ${fadeIn} 2s ease-out;
    font-family: 'Arial', sans-serif;
`;

// 圖片樣式，向下移動並拉長
const Arrow = styled.img`
  width: 50px;
  height: auto;
  margin-top: 90px;
  transform: scaleY(1.5);
`;

const EventIntroTransition: React.FC = () => {
    return (
        <TransitionContainer>
            <TextContainer>
                <Title>活動介紹</Title>
                <Subtitle>關於Counterspell Taiwan</Subtitle>
            </TextContainer>
            <Arrow src={ArrowImage} alt="Arrow" />
        </TransitionContainer>
    );
};

export default EventIntroTransition;
