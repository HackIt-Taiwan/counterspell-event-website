// src/components/SmoothScroll.tsx
import React, { useRef, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

interface SmoothScrollProps {
    children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [{ scrollY }, api] = useSpring(() => ({ scrollY: 0 }));

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            api.start({
                scrollY: window.scrollY,
                config: { tension: 120, friction: 14 }, // 控制平滑度的參數
            });
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <animated.div
            ref={scrollContainerRef}
            style={{
                transform: scrollY.to((y) => `translate3d(0,${-y}px,0)`),
                willChange: 'transform',
            }}
        >
            {children}
        </animated.div>
    );
};

export default SmoothScroll;
