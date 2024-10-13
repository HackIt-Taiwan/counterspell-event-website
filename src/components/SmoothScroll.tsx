// src/components/SmoothScroll.tsx
import React, { useRef, useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { SmoothScrollContext } from '../contexts/SmoothScrollContext';

interface SmoothScrollProps {
    children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState(0);
    const [scrollY, setScrollY] = useState(0); // 新增状态，存储平滑后的滚动值
    const [{ y }, api] = useSpring(() => ({
        y: 0,
        onChange: (result) => {
            setScrollY(result.value.y); // 更新平滑滚动值
        },
    }));

    useEffect(() => {
        const handleResize = () => {
            if (containerRef.current) {
                setContentHeight(containerRef.current.getBoundingClientRect().height);
            }
        };

        // Initial content height setup
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [children]);

    useEffect(() => {
        const handleScroll = () => {
            api.start({
                y: window.scrollY,
                config: { mass: 1, tension: 45, friction: 10 },
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [api]);

    return (
        <>
            {/* Spacer div to ensure page height is correct */}
            <div style={{ height: contentHeight }} />
            {/* Provide the smoothed scroll value via context */}
            <SmoothScrollContext.Provider value={scrollY}>
                {/* Fixed position container for smooth scrolling */}
                <animated.div
                    ref={containerRef}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        willChange: 'transform',
                        transform: y.to((y) => `translateY(${-y}px)`),
                    }}
                >
                    {children}
                </animated.div>
            </SmoothScrollContext.Provider>
        </>
    );
};

export default SmoothScroll;
