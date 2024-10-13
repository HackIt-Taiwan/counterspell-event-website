import React from 'react';
import styled from 'styled-components';
import HeroUFO from "./HeroUFO";

const HeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    margin: 0 auto;
    position: relative;
    overflow-x: hidden;
`;

const TitleContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    font-family: 'Audiowide', sans-serif;
    top: -100px;
    left: -20px;

    @media (max-width: 600px) {
        flex-direction: column;
        top: 0;
        left: 0;
    }
`;

const Title = styled.h1`
    font-size: 72px;
    color: black;
    text-align: center;

    @media (max-width: 600px) {
        font-size: 48px;
    }
`;

const UFOWrapper = styled.div`
    position: absolute;
    top: 0;
    right: -150px;
    transform: translate(-50%, -50%); /* 向左移動 50% 的自身寬度，避免溢出 */

    @media (max-width: 600px) {
        position: static;
        transform: none;
        margin-top: 20px;
    }
`;

const Hero: React.FC = () => {
    return (
        <HeroContainer>
            <TitleContainer>
                <Title>Counterspell Taiwan</Title>
                <UFOWrapper>
                    <HeroUFO />
                </UFOWrapper>
            </TitleContainer>
        </HeroContainer>
    );
};

export default Hero;
