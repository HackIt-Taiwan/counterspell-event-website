import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

interface TransitionUFOAnimationProps {
    scrollSpeed: number; // 控制 UFO 移動速度的比例
    sectionHeight: number; // Section 的高度
}

// 橢圓形作為飛碟的替代，未來可換成 SVG
const UFO = styled.div<{ positionY: number }>`
    width: 1000px;
    height: 500px;
    background-color: gray;
    border-radius: 50%;
    position: absolute;
    left: 50%; /* 固定在螢幕中間 */
    top: ${(props) => props.positionY}px;
    transform: translate(-50%, -50%); /* 保持 UFO 水平居中 */
    transition: transform 0.1s ease-out;
`;

// 定義 Section 容器，覆蓋整個螢幕寬度
const SectionContainer = styled.div<{ height: number }>`
    height: ${(props) => props.height}px;
    width: 100vw; /* 覆蓋整個螢幕寬度 */
    position: relative;
    overflow: hidden;
`;

const TransitionUFOAnimation: React.FC<TransitionUFOAnimationProps> = ({ scrollSpeed, sectionHeight }) => {
    const [positionY, setPositionY] = useState(window.innerHeight); // UFO 初始位置為螢幕底部
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const sectionTop = sectionRef.current.getBoundingClientRect().top;
                const sectionBottom = sectionRef.current.getBoundingClientRect().bottom;
                const windowHeight = window.innerHeight;

                if (sectionTop <= windowHeight && sectionBottom >= 0) {
                    const scrollPosition = window.scrollY - sectionRef.current.offsetTop;
                    const animationProgress = scrollPosition / sectionHeight;

                    // UFO移動邏輯：只改變Y軸位置，從螢幕底部往上移動
                    const yPos = windowHeight - animationProgress * windowHeight * scrollSpeed;
                    setPositionY(yPos);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollSpeed, sectionHeight]);

    return (
        <SectionContainer ref={sectionRef} height={sectionHeight}>
            <UFO positionY={positionY} />
        </SectionContainer>
    );
};

export default TransitionUFOAnimation;
