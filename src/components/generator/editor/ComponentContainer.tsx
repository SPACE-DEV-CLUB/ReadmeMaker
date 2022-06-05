import { css } from '@emotion/react';
import styled from '@emotion/styled';
import MeatballIcon from 'assets/Meatball.svg';
import { ReactNode } from 'react';
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
  background: ${({ isDragging }) => (isDragging ? lightTheme.PIN : '#0e1116')};
  border: 1px solid #171b21;
  border-right: 20px solid #171b21;

  ${({ isDragging }) => isDragging && draggingStyle()}

  &:hover {
    border-right: 20px solid ${lightTheme.PIN};
    border-color: ${lightTheme.PIN};
  }
`;

const MeatballBtn = styled(MeatballIcon)`
  position: absolute;
  top: 50%;
  right: -2.8%;
  transform: translateY(-50%);
`;
