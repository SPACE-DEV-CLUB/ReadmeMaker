import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ReactNode } from 'react';
import MeatballIcon from 'assets/Meatball.svg';
import { lightTheme } from 'styles/theme';

interface ComponentContainerProps {
  children: ReactNode;
  isDragging: boolean;
}

const ComponentContainer = ({ children, isDragging }: ComponentContainerProps) => {
  return (
    <CardContainer isDragging={isDragging}>
      {children}
      <MeatballBtn />
    </CardContainer>
  );
};

export default ComponentContainer;

const draggingStyle = () => css`
  background-color: ${lightTheme.PIN};
  border-right: 20px solid ${lightTheme.PIN};
  border-color: ${lightTheme.PIN};
  color: black;

  & input {
    background-color: #e9f370;
    color: #0e1116;
  }

  & h3 {
    color: #0e1116;
  }
`;
const CardContainer = styled.article<{ isDragging: boolean }>`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px 60px 60px 60px;
  height: 200px;
  border-radius: 20px;
  background: #0e1116;
  border: 1px solid #20262f;

  ${({ isDragging }) => isDragging && draggingStyle()}

  &:hover {
    border-color: ${lightTheme.PIN};
    border-right: 20px solid ${lightTheme.PIN};

    & svg {
      right: -12px;
    }
    &::after {
      display: none;
    }
  }

  &::after {
    position: absolute;
    content: '';
    display: inline-block;
    top: 0;
    bottom: 0;
    right: 20px;
    border-left: 1px solid #20262f;
  }
`;

const MeatballBtn = styled(MeatballIcon)`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  fill: #31363c;
  z-index: 1000;
`;
