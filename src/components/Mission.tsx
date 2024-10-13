import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

// 定義浮動動畫，給不同的行星不同的浮動幅度與速度
const float = (offset: number) => keyframes`
    0% { transform: translateY(0); }
    50% { transform: translateY(${offset}px); }
    100% { transform: translateY(0); }
`;

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
    font-size: 72px;
    font-family: Arial, sans-serif;
    text-align: center;
`;

// 行星樣式，使用灰色圓形作為占位符，並根據 scale 調整大小，添加浮動動畫和翻牌效果
const Planet = styled.div<{ xOffset: number; yOffset: number; scale: number; flipped: boolean; floatOffset: number; animationDuration: string }>`
    width: ${(props) => 150 * props.scale}px;
    height: ${(props) => 150 * props.scale}px;
    background-color: ${(props) => (props.flipped ? '#f0c419' : 'gray')};
    color: ${(props) => (props.flipped ? 'white' : 'transparent')};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${(props) => 17 * props.scale}px;
    font-family: Arial, sans-serif;
    border-radius: 50%;
    position: absolute;
    top: ${(props) => props.yOffset}px;
    left: ${(props) => props.xOffset}px;
    transition: transform 0.6s ease, box-shadow 0.3s ease, background-color 0.6s ease;
    padding: ${(props) => 12 * props.scale}px;
    animation: ${(props) => float(props.floatOffset)} ${(props) => props.animationDuration} ease-in-out infinite;

    &:hover {
        transform: ${(props) => (props.flipped ? 'none' : 'scale(1.1)')};
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
        background-color: #f0c419; /* 翻牌效果的顏色變化 */
        color: white; /* 顯示文字 */
    }
`;

const PlanetContainer = styled.div<{ xOffset: number; yOffset: number }>`
    position: absolute;
    top: ${(props) => props.yOffset}px;
    left: ${(props) => props.xOffset}px;
`;

const Mission: React.FC = () => {
    const [flippedPlanets, setFlippedPlanets] = useState<{ [key: string]: boolean }>({});

    const handlePlanetHover = (mission: string) => {
        setFlippedPlanets((prevState) => ({
            ...prevState,
            [mission]: true
        }));
    };

    return (
        <MissionSectionContainer>
            {/* 中央的活動宗旨標題 */}
            <Title>活動宗旨</Title>

            {/* 星球 A */}
            <PlanetContainer xOffset={-200} yOffset={-100}>
                <Planet
                    xOffset={1400}
                    yOffset={160}
                    scale={0.9}
                    floatOffset={10} // 浮動幅度
                    animationDuration="5s" // 浮動速度
                    flipped={flippedPlanets['宗旨 A'] || false}
                    onMouseEnter={() => handlePlanetHover('宗旨 A')}
                >
                    激發創意與自我挑戰
                </Planet>
            </PlanetContainer>

            {/* 星球 B */}
            <PlanetContainer xOffset={100} yOffset={-200}>
                <Planet
                    xOffset={80}
                    yOffset={500}
                    scale={1.7}
                    floatOffset={15} // 浮動幅度
                    animationDuration="7s" // 浮動速度
                    flipped={flippedPlanets['宗旨 B'] || false}
                    onMouseEnter={() => handlePlanetHover('宗旨 B')}
                >
                    促進跨領域合作
                </Planet>
            </PlanetContainer>

            {/* 星球 C */}
            <PlanetContainer xOffset={-150} yOffset={200}>
                <Planet
                    xOffset={500}
                    yOffset={-150}
                    scale={1}
                    floatOffset={8} // 浮動幅度
                    animationDuration="6s" // 浮動速度
                    flipped={flippedPlanets['宗旨 C'] || false}
                    onMouseEnter={() => handlePlanetHover('宗旨 C')}
                >
                    強化問題解決與實踐能力
                </Planet>
            </PlanetContainer>

            {/* 星球 D */}
            <PlanetContainer xOffset={250} yOffset={100}>
                <Planet
                    xOffset={800}
                    yOffset={250}
                    scale={2}
                    floatOffset={12} // 浮動幅度
                    animationDuration="8s" // 浮動速度
                    flipped={flippedPlanets['宗旨 D'] || false}
                    onMouseEnter={() => handlePlanetHover('宗旨 D')}
                >
                    推動青少年科技教育與創新
                </Planet>
            </PlanetContainer>
        </MissionSectionContainer>
    );
};

export default Mission;
