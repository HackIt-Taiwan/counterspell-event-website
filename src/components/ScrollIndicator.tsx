/*
  ScrollIndicator Component
  Displays a scroll indicator with animated lines and text to guide user navigation.
  Updated to use CSS variables for colors.
*/

import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

// Styled component for the scroll indicator container.
const ScrollIndicatorContainer = styled.div<{ containerHeight: number }>`
  position: fixed;
  right: 20px;
  bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: ${({ containerHeight }) => containerHeight}px;

  @media (max-width: 768px) {
    right: 10px;
    bottom: 10px;
  }
`;

// Styled component for the scroll text.
const ScrollText = styled.div`
  writing-mode: vertical-rl;
  text-orientation: upright;
  font-size: 16px;
  font-family: 'Audiowide', sans-serif;
  color: var(--text-color);
  user-select: none;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

// Styled component for the animated line.
const Line = styled.div<{ height: number; translateY: number }>`
  width: 2px;
  background-color: var(--text-color);
  height: ${({ height }) => height}px;
  margin-top: 10px;
  transform: translateY(${({ translateY }) => translateY}px);
  transition: height 0.5s ease-out, transform 1s ease-out;

  @media (max-width: 768px) {
    height: ${({ height }) => height * 0.8}px;
  }
`;

// The rest of the component remains the same, including animation logic.

export default ScrollIndicator;
