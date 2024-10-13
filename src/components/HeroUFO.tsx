import React from 'react';
import styled from 'styled-components';
import UFOImage from '../assets/ufo.png';
import { float } from '../animations';

// 容器，應用動畫和樣式
const UFOContainer = styled.div`
    width: 100px;
    height: auto;
    animation: ${float} 3s ease-in-out infinite;
    max-width: 100%;
`;

// 圖片的樣式
const UFOImageStyle = styled.img`
    width: 100%;
    height: auto;
`;

// UFO 組件
const HeroUFO: React.FC = () => {
    return (
        <UFOContainer>
            <UFOImageStyle src={UFOImage} alt="UFO Image" />
        </UFOContainer>
    );
};

export default HeroUFO;
