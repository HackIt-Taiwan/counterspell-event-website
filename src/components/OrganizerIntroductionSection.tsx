import React from 'react';
import EventIntroductionLayout from './EventIntroductionLayout';
import styled from 'styled-components';

// 顯示小字的樣式
const SmallText = styled.p`
    font-size: 14px;
    color: gray;
    margin-bottom: 10px;
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
                    <SmallText>主辦方</SmallText>
                    Hackit
                </>
            }
            description="請先填入示範文本。"
            onReadMoreClick={handleReadMoreClick}
        />
    );
};

export default OrganizerIntroductionSection;
