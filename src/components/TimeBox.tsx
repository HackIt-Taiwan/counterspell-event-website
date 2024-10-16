import React from 'react';
import styled from 'styled-components';

const TimeBoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
    padding: 2vw; /* 使用相對單位 */
    min-width: 20vw;
    background-color: #4a90e2; /* 柔和的藍色 */
    color: white; /* 白色文字 */
    border-radius: 12px;
    position: fixed;
    left: 2vw; /* 左側距離改為相對單位 */
    bottom: 25vh; /* 底部距離改為相對單位 */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* 陰影效果 */
    transition: transform 0.3s ease, background-color 0.3s ease;

    &:hover {
        transform: translateY(-10px);
        background-color: #3a7bd5;
    }

    @media (max-width: 768px) {
        width: 80vw;
        left: 10vw;
        padding: 5vw;
    }
`;

const TimeItem = styled.div`
    h3 {
        margin: 0;
        font-size: 18px;
        font-weight: 600;
	    text-align: start;
    }

    p {
        margin: 0;
        font-size: 16px;
        font-weight: 300;
    }
`;

export const TimeBox: React.FC = () => {
	return (
		<TimeBoxContainer>
			<TimeItem>
				<h3>日期:</h3>
				<p>2024/10/20</p>
			</TimeItem>
			<TimeItem>
				<h3>時間:</h3>
				<p>10:00 - 17:00</p>
			</TimeItem>
			<TimeItem>
				<h3>地點:</h3>
				<p>台北市某某街123號</p>
			</TimeItem>
			<TimeItem>
				<h3>參與資格</h3>
				<p>報名Counterspell Taiwan即可免費參加</p>
			</TimeItem>
		</TimeBoxContainer>
	);
};
