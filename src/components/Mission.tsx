import React from 'react';
import styled from 'styled-components';

// 容器樣式，設置整個區域的高度
const MissionSectionContainer = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

// 活動宗旨標題，放置在頁面中央
const Title = styled.h1`
    position: absolute;
    font-size: 48px;
    font-family: Arial, sans-serif;
    text-align: center;
`;

// 行星樣式，使用灰色圓形作為占位符，並根據 scale 調整大小
const Planet = styled.div<{ xOffset: number; yOffset: number; scale: number }>`
    width: ${(props) => 150 * props.scale}px;
    height: ${(props) => 150 * props.scale}px;
    background-color: gray;
    border-radius: 50%;
    position: absolute;
    top: ${(props) => props.yOffset}px;
    left: ${(props) => props.xOffset}px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: scale(1.1);
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
    }
`;

// 行星容器，包含行星的可點擊區域
const PlanetContainer = styled.div<{ xOffset: number; yOffset: number }>`
    position: absolute;
    top: ${(props) => props.yOffset}px;
    left: ${(props) => props.xOffset}px;
    cursor: pointer;
`;

const MissionSection: React.FC = () => {
    const handlePlanetClick = (mission: string) => {
        alert(`你點擊了: ${mission}`);
    };

    return (
        <MissionSectionContainer>
            {/* 中央的活動宗旨標題 */}
            <Title>活動宗旨</Title>

            {/* 星球 */}
            <PlanetContainer xOffset={-200} yOffset={-100} onClick={() => handlePlanetClick('宗旨 A')}>
                <Planet xOffset={1400} yOffset={160} scale={0.8} />
            </PlanetContainer>

            <PlanetContainer xOffset={100} yOffset={-200} onClick={() => handlePlanetClick('宗旨 B')}>
                <Planet xOffset={80} yOffset={500} scale={1.7} />
            </PlanetContainer>

            <PlanetContainer xOffset={-150} yOffset={200} onClick={() => handlePlanetClick('宗旨 C')}>
                <Planet xOffset={500} yOffset={-150} scale={0.6} />
            </PlanetContainer>

            <PlanetContainer xOffset={250} yOffset={100} onClick={() => handlePlanetClick('宗旨 D')}>
                <Planet xOffset={800} yOffset={250} scale={2} />
            </PlanetContainer>
        </MissionSectionContainer>
    );
};

export default MissionSection;
