/**
 * Workshop Component
 *
 * This page provides information about the game development workshop offered by Counterspell Taiwan.
 * It includes the event logo, titles, a join button, event timings, and learning objectives.
 * The layout is designed using CSS Grid for a responsive and organized structure.
 */

import React from "react";
import styled from "styled-components";
import Logo from "../components/Logo";
import { TimeBox } from "../components/TimeBox";
import JoinButton from "../components/JoinButton";
import LearnBox from "../components/LearnBox.tsx";

const WorkshopContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: 1fr auto;
  justify-items: center;
  align-items: start;
  position: relative;
  min-height: 100vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto auto;
    padding: 20px;
  }
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

  @media (max-width: 768px) {
    top: 5%;
    font-size: 2rem;
  }
`;

const SubTitle = styled.h2`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: calc(10% + 3rem + 10px);
  font-size: 2rem;
  color: black;
  text-align: center;

  @media (max-width: 768px) {
    top: calc(5% + 2rem + 5px);
    font-size: 1.5rem;
  }
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
};

export default Workshop;
