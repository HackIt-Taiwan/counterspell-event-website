import React from "react";
import styled from "styled-components";
import Logo from "../components/Logo.tsx";
import {TimeBox} from "../components/TimeBox.tsx";
import {LearnBox} from "../components/LearnBox.tsx";
import JoinButton from "../components/JoinButton.tsx";

const WorkshopContainer = styled.div`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: 1fr auto;
    justify-items: center;
    align-items: start;
    position: relative;
    min-height: 100vh;
`;

const Title = styled.h1`
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    top: 10%;
    font-size: 3rem;
    color: black;
    text-align: center;
    margin-bottom: 10px;
`;

const SubTitle = styled.h2`
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    top: calc(10% + 3rem + 10px);
    font-size: 2rem;
    color: black;
    text-align: center;
`;

const Workshop: React.FC = () => {
    return (
        <WorkshopContainer>
            <Logo src="" size="150px" />
            <Title>Counterspell Taiwan</Title>
            <SubTitle>遊戲入門開發工作坊</SubTitle>
            <JoinButton />
            <TimeBox />
            <LearnBox />
        </WorkshopContainer>
    );
}

export default Workshop;
