import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import GameDevImage from '../assets/game-dev.png';
import { ContainerTitle as Title } from './common/StyledComponents.tsx';

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  min-height: 60vh;
  align-items: start;
  padding: 20px;
  margin-bottom: 10vw;
  background-color: var(--background-color-dark);
  position: relative;
`;

const TextContainer = styled.div`
  flex: 1;
  padding-left: 10vw;
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align: left;
  position: relative;
`;

const Number = styled.div`
  font-size: 6rem;
  font-family: 'Gobold High Bold', Arial, sans-serif;
  color: var(--text-color);
  -webkit-text-stroke: 2px #000;
  position: absolute;
  top: 0;
  left: 2vw;
`;

const TitleContainer = styled.div`
  margin-top: 10vw;
`;

const Content = styled.div`
  font-size: 1.5rem;
  font-family: Arial, sans-serif;
  line-height: var(--line-height);
  color: var(--text-color);
  margin-top: 20px; // 確保與標題有間距
  & a {
    color: var(--link-color);
  }
  & a:hover {
    color: var(--link-hover-color);
  }
  & strong {
    font-weight: bold;
  }
  & em {
    font-style: italic;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; // 確保圖片容器的高度與文字容器一致

  img {
    width: 80%;
    height: auto;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    object-fit: cover;
  }
`;

const ContactButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: var(--button-background-dark);
  color: var(--text-color);
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: var(--button-hover-color);
  }
`;

// Main Component
const EventInformation: React.FC = () => {
  const eventData = [
    {
      title: '比賽主題',
      content: '這場黑客松的主題是「遊戲開發」，希望參賽者在創意與技術的碰撞中創造出精彩的作品。',
      imageUrl: GameDevImage,
    },
    {
      title: '比賽型式',
      content: '這是一場以遊戲開發為主題的馬拉松式創作比賽。參賽者將在30小時內，自由組隊（3至6人一隊），從頭開始設計、編程和完成一款遊戲作品。比賽現場會有導師支援，並安排相關課程，幫助參賽者解決技術問題和提升創作能力。',
      imageUrl: '/images/event2.png',
    },
  ];

  return (
    <div>
      <ContactButton>Contact</ContactButton>
      {eventData.map((data, index) => (
        <Container key={index}>
          <TextContainer>
            <Number>{index + 1}</Number>
            <TitleContainer>
              <Title>{data.title}</Title>
              <Content>
                <ReactMarkdown>{data.content}</ReactMarkdown>
              </Content>
            </TitleContainer>
          </TextContainer>
          <ImageContainer>
            <img src={data.imageUrl} alt={data.title} />
          </ImageContainer>
        </Container>
      ))}
    </div>
  );
};

export default EventInformation;
