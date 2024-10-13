import React from 'react';
import EventIntroductionLayout from './EventIntroductionLayout';
import styled from 'styled-components';

// 顯示小字的樣式
const SmallText = styled.p`
    font-size: 14px;
    color: gray;
    margin-bottom: 10px;
    text-align: left;
`;

const OrganizerIntroductionSection: React.FC = () => {
    const handleReadMoreClick = () => {
        // 點擊處理邏輯
        console.log('Read More clicked!');
    };

    return (
        <EventIntroductionLayout
            title={
                <>
                    <SmallText>協辦單位</SmallText>
                    Hackit
                </>
            }
            description="Hack Club 是一個全球性非營利組織，專為青少年設計，幫助高中生建立他們夢想中的程式設計社團。它提供了資源和指導，讓年輕開發者能夠探索程式開發、製作專案，並透過合作學習技能。無論你是程式新手還是資深創作者，Hack Club 都是一個讓你自由創作、學習成長的平台！"
            onReadMoreClick={handleReadMoreClick}
        />
    );
};

export default OrganizerIntroductionSection;
