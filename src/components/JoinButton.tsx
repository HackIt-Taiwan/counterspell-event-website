import React from 'react';
import styled from 'styled-components';

const JoinButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 30%;
    width: 100%;
`;

const JoinButtonStyled = styled.button`
    padding: 15px 30px;
    font-size: 1.5rem;
    font-family: Arial, sans-serif;
    font-weight: 600;
    color: white;
    background-color: #4caf50; /* 綠色按鈕 */
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
        background-color: #45a049; /* 懸停時稍微變暗 */
        transform: translateY(-5px); /* 懸停時上移 */
    }

    &:active {
        background-color: #388e3c; /* 點擊時變得更暗 */
        transform: translateY(2px); /* 點擊時稍微下移 */
    }
`;

const JoinButton: React.FC = () => {
	const handleClick = () => {
		// 未來可以在此處加入報名表單的連結
		window.open('#', '_blank'); // 目前設置為無效的連結
	};

	return (
		<JoinButtonContainer>
			<JoinButtonStyled onClick={handleClick}>
				報名參加工作坊!
			</JoinButtonStyled>
		</JoinButtonContainer>
	);
};

export default JoinButton;
