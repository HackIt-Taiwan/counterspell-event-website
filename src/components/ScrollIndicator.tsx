import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const ScrollIndicatorContainer = styled.div<{ containerHeight: number }>`
    position: fixed;
    right: 20px;
    bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: ${({ containerHeight }) => containerHeight}px;
`;

const ScrollText = styled.div`
    writing-mode: vertical-rl;
    text-orientation: upright;
    font-size: 16px;
    font-family: 'Audiowide', sans-serif;
    color: #1a1a1a;
    user-select: none;
`;

const Line = styled.div<{ height: number; translateY: number }>`
    width: 2px;
    background-color: #1a1a1a;
    height: ${({ height }) => height}px;
    margin-top: 10px;
    transform: translateY(${({ translateY }) => translateY}px);
    transition: height 0.5s ease-out, transform 1s ease-out;
`;

const ScrollIndicator: React.FC = () => {
    const [lineHeight, setLineHeight] = useState(0);
    const [translateY, setTranslateY] = useState(0);
    const [isGrowing, setIsGrowing] = useState(true);
    const [isMovingDown, setIsMovingDown] = useState(false);
    const [isShrinking, setIsShrinking] = useState(false);
    const [containerHeight, setContainerHeight] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Set the container height to be double the ScrollText height
        if (scrollRef.current) {
            const scrollHeight = scrollRef.current.offsetHeight;
            setContainerHeight(scrollHeight * 2); // Container height = ScrollText height * 2
        }
    }, []);

    useEffect(() => {
        let animationFrameId: number;
        let startTime: number | null = null;
        let timeoutId: number | null = null;

        const scrollHeight = scrollRef.current ? scrollRef.current.offsetHeight * 0.7 : 0;

        const animateLine = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;

            if (isGrowing) {
                // Increment line height until it reaches the target scrollHeight
                const newHeight = Math.min(scrollHeight, (progress / 1000) * scrollHeight);
                setLineHeight(newHeight);

                if (newHeight >= scrollHeight) {
                    setIsGrowing(false);
                    setIsMovingDown(true);
                    startTime = null;
                }
            } else if (isMovingDown) {
                // Move the line down by increasing translateY until it reaches container bottom
                const newTranslateY = Math.min((progress / 1000) * scrollHeight * 2, scrollHeight);
                setTranslateY(newTranslateY);

                if (newTranslateY >= scrollHeight) {
                    setIsMovingDown(false);
                    setIsShrinking(true);
                    startTime = null;
                }
            } else if (isShrinking) {
                // Shrink the line until it disappears from the bottom
                const newHeight = Math.max(0, scrollHeight - (progress / 1000) * scrollHeight);
                setLineHeight(newHeight);

                if (newHeight <= 0) {
                    setIsShrinking(false);

                    // Ensure that the line is completely removed before restarting
                    if (timeoutId) clearTimeout(timeoutId);
                    timeoutId = window.setTimeout(() => {
                        // Reset states after the line is fully removed
                        setIsGrowing(true);
                        setLineHeight(0);
                        setTranslateY(0);
                    }, 500); // Wait 0.5 seconds before restarting the animation
                    return;
                }
            }

            animationFrameId = requestAnimationFrame(animateLine);
        };

        animationFrameId = requestAnimationFrame(animateLine);

        return () => {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [isGrowing, isMovingDown, isShrinking]);

    return (
        <ScrollIndicatorContainer containerHeight={containerHeight}>
            <ScrollText ref={scrollRef}>Scroll</ScrollText>
            <Line height={lineHeight} translateY={translateY} />
        </ScrollIndicatorContainer>
    );
};

export default ScrollIndicator;
