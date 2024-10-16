import React from 'react';
import styled from 'styled-components';

const LearnBoxContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-height: 100px;
    padding: 20px 10px;
    position: fixed;
    bottom: 0;
    background-color: #f5f5f5;
    box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.1);
    gap: 20px;
`;

const LearnTitle = styled.div`
    flex: 0 0 20%;
    font-size: 1.5vw;
    text-align: center;
    font-family: Arial, sans-serif;
    font-weight: 600;
`;

interface LearnItemProps {
	color: string;
}

const LearnItem = styled.div<LearnItemProps>`
    flex: 1;
    padding: 10px 0;
    min-height: 10vh;
    background-color: ${(props) => props.color || '#b8e994'}; /* 默認顏色 */
    font-size: 1.5vw;
    font-family: Arial, sans-serif;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px) scale(1.05); /* 懸停時輕微上移並放大 */
        background-color: ${(props) => darkenColor(props.color, 0.1)}; /* 懸停時變暗 */
        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2); /* 添加陰影效果 */
    }
`;

/* 用於在懸停時變暗顏色 */
const darkenColor = (color: string, amount: number) => {
	const darkenHex = (hex: string) => Math.max(0, Math.min(255, parseInt(hex, 16) - Math.floor(255 * amount))).toString(16).padStart(2, '0');
	const [r, g, b] = color.match(/\w\w/g)!.map(darkenHex);
	return `#${r}${g}${b}`;
};

export const LearnBox: React.FC = () => {
	return (
		<LearnBoxContainer>
			<LearnTitle>你可以學到：</LearnTitle>
			<LearnItem color="#b8e994">遊戲設計</LearnItem>  {/* 柔和的綠色系主色調 */}
			<LearnItem color="#a3d683">程式開發</LearnItem>
			<LearnItem color="#8fcf72">團隊合作</LearnItem>
			<LearnItem color="#7ac660">專案管理</LearnItem>
		</LearnBoxContainer>
	);
};
