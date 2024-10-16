import React from 'react';
import styled from 'styled-components';

// 卡片容器，設定為打滿橫向寬度
const ContactCard = styled.div`
    width: 100%;
    background-color: #ffffff;
    padding: 20px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

// 聯絡資訊標題
const Title = styled.h3`
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 10px;
    font-family: 'Arial', sans-serif;
`;

// 聯絡資訊內容
const ContactDetails = styled.p`
    font-size: 1rem;
    color: #555;
    text-align: center;
    margin-bottom: 5px;
`;

// 外部容器，用於調整位置並打滿橫向寬度
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 0;
    padding-bottom: 30px;
`;

const ContactInfo: React.FC = () => {
	return (
		<Wrapper>
			<ContactCard>
				<Title>聯絡我們</Title>
				<ContactDetails>電子郵件: counterspell@hackit.tw</ContactDetails>
				<ContactDetails>IG: @hackit.tw</ContactDetails>
			</ContactCard>
		</Wrapper>
	);
};

export default ContactInfo;
