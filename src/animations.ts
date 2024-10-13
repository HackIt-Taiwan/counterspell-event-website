// src/animations.ts
import { keyframes } from 'styled-components';

// 定義上下浮動的動畫
export const float = keyframes`
    0% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0px);
    }
`;
