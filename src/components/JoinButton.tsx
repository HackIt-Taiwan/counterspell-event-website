import React from 'react';
import styled from 'styled-components';

const JoinButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 2rem 0;

  @media (max-width: 800px) {
    margin: 1rem 0;
  }
`;

const JoinButtonStyled = styled.button`
  padding: 15px 30px;
  font-size: 1.5rem;
  font-family: Arial, sans-serif;
  font-weight: 600;
  color: #f0f0f0; /* Light text */
  background-color: #ff5722; /* Vibrant orange button */
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #e64a19; /* Darker orange on hover */
    transform: translateY(-5px); /* Move up on hover */
  }

  &:active {
    background-color: #d84315; /* Even darker orange on click */
    transform: translateY(2px); /* Slightly move down on click */
  }

  @media (max-width: 800px) {
    padding: 12px 24px;
    font-size: 1.2rem;
  }
`;

const JoinButton: React.FC = () => {
  const handleClick = () => {
    window.open('#', '_blank');
  };

  return (
    <JoinButtonContainer>
      <JoinButtonStyled onClick={handleClick}>
        報名參加工作坊！
      </JoinButtonStyled>
    </JoinButtonContainer>
  );
};

export default JoinButton;
