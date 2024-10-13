import React from 'react';
import styled from 'styled-components';

// 左側容器樣式
const LeftContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    font-family: 'Arial', sans-serif;
`;

// 右側容器樣式（預留位置放動畫）
const RightContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

// 主容器樣式
const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
`;

const Title = styled.h1`
    font-size: 48px;
    font-family: 'Arial', sans-serif;
    margin-bottom: 20px;
    word-wrap: normal;
`;

const EventTime: React.FC = () => {
    return (
        <Container>
            {/* 左側 - 活動時間 */}
            <LeftContainer>
                <Title>活動資訊</Title>
            </LeftContainer>

            {/* 右側 - 預留位置 */}
            <RightContainer>
                {/* 未來可以放置動畫或其他內容 */}
                <div>動畫區域</div>
            </RightContainer>
        </Container>
    );
};

export default EventTime;
