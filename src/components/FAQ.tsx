/*
  FAQ Component
  Renders a list of frequently asked questions with expandable answers for user interaction.
  Updated to use CSS variables for colors and background.
*/

import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

// Styled component for the FAQ section container.
const FAQSection = styled.section`
  width: 100%;
  margin-top: 20px;
  padding: 30px 5%;
  background-color: var(--background-color);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1px;

  @media (max-width: 768px) {
    padding: 20px 2.5%;
  }
`;

// Styled component for the title container.
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 30px;
`;

// Styled component for the FAQ title.
const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-color);
  font-family: 'Arial', sans-serif;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// Styled component for the container holding all FAQ items.
const FAQItemContainer = styled.div`
  width: 100%;
  max-width: 900px;
`;

// Styled component for individual FAQ items.
const FAQItem = styled.div`
  border-bottom: 1px solid var(--button-background);
  margin-bottom: 15px;
`;

// Styled component for the question row, which is clickable to toggle the answer.
const QuestionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 15px 0;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--background-color);
  }
`;

// Styled component for the question text.
const Question = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-color);
  font-family: 'Arial', sans-serif;
  line-height: 1.4;
`;

// Styled component for the plus icon that rotates when the answer is open.
const PlusIcon = styled.div<{ isOpen: boolean }>`
  font-size: 1.5rem;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
  color: var(--link-color);
  transition: transform 0.3s ease;
`;

// Styled component for the answer section, which expands and collapses.
const Answer = styled.div<{ height: string }>`
  height: ${({ height }) => height};
  overflow: hidden;
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-color);
  font-family: 'Arial', sans-serif;
  transition: height 0.3s ease;
`;

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItemComponent: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<string>('0px');

  useEffect(() => {
    const contentEl = contentRef.current;
    if (contentEl) {
      setHeight(isOpen ? `${contentEl.scrollHeight}px` : '0px');
    }
  }, [isOpen]);

  return (
    <FAQItem>
      <QuestionRow onClick={onClick}>
        <Question>{question}</Question>
        <PlusIcon isOpen={isOpen}>+</PlusIcon>
      </QuestionRow>
      <Answer height={height}>
        <div ref={contentRef}>{answer}</div>
      </Answer>
    </FAQItem>
  );
};

// Main FAQ component rendering all FAQ items.
const FAQ: React.FC = () => {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set());

  // Toggles the open state of a specific FAQ item.
  const toggleFAQ = (index: number) => {
    setOpenIndexes(prevIndexes => {
      const newIndexes = new Set(prevIndexes);
      if (newIndexes.has(index)) {
        newIndexes.delete(index);
      } else {
        newIndexes.add(index);
      }
      return newIndexes;
    });
  };

  // Effect to handle layout updates after FAQ items are toggled.
  useEffect(() => {
    const resizeTimer = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 500); // Delay to allow animations to complete

    return () => clearTimeout(resizeTimer);
  }, [openIndexes]);

  // Sample FAQ data in Traditional Chinese.
  const faqData = [
    {
      question: '什麼是Counterspell Taiwan?',
      answer: 'Counterspell Taiwan 是一個由青少年舉辦的黑客松活動，專注於遊戲開發。這個活動旨在培養年輕人的創新能力和技術技能，同時也為他們提供一個展示才華和交流想法的平台。參與者將有機會學習最新的遊戲開發技術，並在專業導師的指導下完成自己的遊戲項目。'
    },
    {
      question: '活動地點在哪裡？',
      answer: '活動地點在台北市，具體地址將會在活動前提供。我們選擇的場地將配備所有必要的設備和設施，以確保參與者能夠舒適地進行他們的項目開發。場地周圍也會有餐飲和休息區域，方便參與者在緊張的開發過程中放鬆身心。'
    },
    {
      question: '如何報名參加？',
      answer: '您可以通過我們的官方網站報名系統提交您的隊伍或個人信息。報名過程包括填寫基本個人資料、技能水平評估，以及簡短的項目提案。我們鼓勵參與者組成3-5人的團隊，但也歡迎個人報名。報名截止日期為活動前兩週，請確保在截止日期前完成所有必要的報名步驟。'
    },
    {
      question: '活動時間是什麼時候？',
      answer: '活動將在 2024 年 12 月舉行，具體日期將在稍後公告。我們計劃舉辦為期三天的活動，包括開幕式、編程馬拉松、研討會、導師指導環節，以及最後的項目展示和頒獎典禮。我們建議參與者保持關注我們的官方網站和社交媒體渠道，以獲取最新的活動日程安排。'
    }
  ];

  return (
    <FAQSection>
      <TitleContainer>
        <Title>常見問題</Title>
      </TitleContainer>
      <FAQItemContainer>
        {faqData.map((faq, index) => (
          <FAQItemComponent
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndexes.has(index)}
            onClick={() => toggleFAQ(index)}
          />
        ))}
      </FAQItemContainer>
    </FAQSection>
  );
};

export default FAQ;
