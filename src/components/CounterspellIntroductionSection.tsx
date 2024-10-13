import React from 'react';
import EventIntroductionLayout from './EventIntroductionLayout';

const CounterspellIntroductionSection: React.FC = () => {
    const handleReadMoreClick = () => {
        // 點擊處理邏輯
        console.log('Read More clicked!');
    };

    return (
        <EventIntroductionLayout
            title="Counterspell Taiwan 是什麼？"
            description="這是一個以青少年為主要對象的競技賽事，專注於遊戲開發與技術創新，旨在鼓勵創意和協作。參賽者將有機會展示他們的創意，並與其他充滿熱情的團隊進行交流與合作。"
            onReadMoreClick={handleReadMoreClick}
        />
    );
};

export default CounterspellIntroductionSection;
