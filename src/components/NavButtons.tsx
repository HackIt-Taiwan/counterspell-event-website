import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const NavContainer = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 20px;
    background-color: transparent;
    width: 100%;
    box-sizing: border-box;
    overflow-x: hidden;
    gap: 20px;
    flex-wrap: wrap;
    z-index: 1000;

    @media (max-width: 600px) {
        justify-content: center;
        gap: 10px;
        padding: 10px;
    }
`;

const TextButton = styled.button`
    background: none;
    border: none;
    font-size: 18px;
    color: #333;
    cursor: pointer;
    outline: none;

    &:hover {
        color: #666;
    }

    &:active {
        color: #000;
    }
`;

const TextLink = styled(Link)`
    background: none;
    border: none;
    font-size: 18px;
    color: #333;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        color: #666;
    }

    &:active {
        color: #000;
    }
`;

const SolidButton = styled.button`
    background: none;
    border: 2px solid #ff7f50;
    color: #ff7f50;
    padding: 10px 16px;
    font-size: 18px;
    border-radius: 5px;
    cursor: pointer;
    outline: none;

    &:hover {
        background-color: #ff7f50;
        color: white;
    }

    &:active {
        background-color: #e04e28;
        border-color: #e04e28;
    }
`;

const NavButtons: React.FC = () => {
    return (
        <NavContainer>
            <TextLink to="/">首頁</TextLink>
            <TextButton>最新消息</TextButton>
            <TextLink to="/workshop">工作坊</TextLink>
            <SolidButton>報名活動</SolidButton>
        </NavContainer>
    );
};

export default NavButtons;
