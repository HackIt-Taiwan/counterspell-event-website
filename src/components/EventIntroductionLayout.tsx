import React from 'react';
import styled from 'styled-components';

// 通用的事件介紹佈局容器
const SectionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 50px;
    padding-bottom: 50px;
    padding-left: 100px;
    height: 100vh;
    box-sizing: border-box;
`;

// 左側文本介紹容器
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 20px;
`;

// 標題樣式
const Title = styled.h1`
    font-size: 48px;
    font-family: 'Arial', sans-serif;
    margin-bottom: 20px;
    word-wrap: normal;
`;

// 文本介紹樣式
const Description = styled.p`
    font-size: 18px;
    line-height: 1.6;
    text-align: left;
    max-width: 700px;
    word-wrap: break-word;
    margin-bottom: 20px;
`;

// 右側動畫預留區域
const RightColumn = styled.div`
    width: 300px;
    height: 300px;
    background-color: lightgray;
`;

// 接受 ReactNode 類型的 title 和 description
interface EventIntroductionLayoutProps {
    title: React.ReactNode;  // 支援 JSX 元素
    description: string;
}

const EventIntroductionLayout: React.FC<EventIntroductionLayoutProps> = ({
                                                                             title,
                                                                             description,
                                                                         }) => {
    return (
        <SectionContainer>
            <TextContainer>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </TextContainer>

            {/* 右側預留動畫區域 */}
            <RightColumn />
        </SectionContainer>
    );
};

export default EventIntroductionLayout;
