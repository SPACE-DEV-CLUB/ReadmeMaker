import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ReactNode } from 'react';
import MeatballIcon from 'assets/Meatball.svg';
import { MEDIA_QUERY_END_POINT } from 'constants/index';

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

const draggingStyle = (theme: any) => css`
  background-color: ${theme.colors.PIN};
  border-right: 20px solid ${theme.colors.PIN};
  border-color: ${theme.colors.PIN};
  color: black;

  & svg {
    right: -12px;
    fill: ${theme.colors.NAV_BACKGROUND};
  }

  & input {
    background-color: ${theme.colors.PIN};
    color: ${theme.colors.NAV_BACKGROUND};
  }

  & h3,
  & button {
    color: ${theme.colors.NAV_BACKGROUND};
  }
`;

const CardContainer = styled.article<{ isDragging: boolean }>`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px 60px 60px 60px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.COMPONENT};
  border: 1px solid ${({ theme }) => theme.colors.CASUAL_LINE};

  ${({ isDragging, theme }) => isDragging && draggingStyle(theme)}

  &:hover {
    border-color: ${({ theme }) => theme.colors.PIN};
    border-right: 20px solid ${({ theme }) => theme.colors.PIN};
    padding-right: 40px;

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
    display: ${({ isDragging }) => (isDragging ? 'none' : 'inline-block')};
    top: 0;
    bottom: 0;
    right: 20px;
    border-left: 1px solid ${({ theme }) => theme.colors.CASUAL_LINE};
  }

  @media screen and (max-width: ${MEDIA_QUERY_END_POINT.MEDIUM}) {
    padding: 50px 60px 40px 40px;
  }
  @media screen and (max-width: ${MEDIA_QUERY_END_POINT.SMALL}) {
    padding: 28px 40px 20px 20px;
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
