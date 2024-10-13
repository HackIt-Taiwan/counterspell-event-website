import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import HandDrawnCheckmark from '../assets/hand-drawn-checkmark.svg'; // 導入手繪的 SVG

// 主容器樣式
const SectionContainer = styled.div`
    display: flex;
    align-items: center;
    padding-right: 50px;
    padding-bottom: 50px;
    padding-left: 300px;
    height: 100vh;
    box-sizing: border-box;
`;

// 左側標題容器
const LeftContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 300px;
`;

// 標題樣式
const Title = styled.h1`
    font-size: 48px;
    font-family: 'Arial', sans-serif;
    margin-bottom: 20px;
`;

// 右側容器
const RightContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

// 小字樣式
const SmallText = styled.p`
    font-size: 20px;
    font-family: 'Arial', sans-serif;
    margin-bottom: 20px;
`;

// 勾選框樣式
const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding-right: 30px;
`;

// 自定義的 SVG 勾勾樣式
const CheckmarkSVG = styled.img<{ checked: boolean }>`
    width: 30px;
    height: 30px;
    opacity: ${(props) => (props.checked ? 1 : 0)};
    transition: opacity 0.4s ease-in-out;
`;

// 項目文本
const CheckboxLabel = styled.span`
    font-size: 30px;
    font-family: 'Arial', sans-serif;
    padding-left: 10px;
`;

const TeamQualification: React.FC = () => {
    const [checkedItems, setCheckedItems] = useState([false, false]); // 用來控制勾選框的狀態

    // 處理滾動事件來觸發勾選框動畫
    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const scrollPosition = window.scrollY;
            const triggerHeight = windowHeight * 0.9; // 當滾動超過視口 90% 時觸發

            if (scrollPosition > triggerHeight) {
                setCheckedItems([true, true]); // 可以控制多個項目按順序勾選
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <SectionContainer>
            {/* 左側標題 */}
            <LeftContentContainer>
                <Title>組隊資格</Title>
            </LeftContentContainer>

            {/* 右側勾選框和文字 */}
            <RightContentContainer>
                <SmallText>要參加活動，你需要...</SmallText>
                <CheckboxContainer>
                    <CheckmarkSVG checked={checkedItems[0]} src={HandDrawnCheckmark} alt="Checkmark" />
                    <CheckboxLabel>全國各級高中職學生</CheckboxLabel>
                </CheckboxContainer>
                <CheckboxContainer>
                    <CheckmarkSVG checked={checkedItems[1]} src={HandDrawnCheckmark} alt="Checkmark" />
                    <CheckboxLabel>每組 3 - 6 人</CheckboxLabel>
                </CheckboxContainer>
            </RightContentContainer>
        </SectionContainer>
    );
};

export default TeamQualification;
