import { keyframes } from '@emotion/css';
import styled from '@emotion/styled';
import React, { ReactElement } from 'react';
import CloseButton from 'assets/CloseButton';
import YellowLabel from 'assets/YellowLabel';

interface IModalInnerStyled {
  width: number;
  height: number;
  left?: number;
}

interface ModalTemplateProps extends IModalInnerStyled {
  children: React.ReactNode;
  onToggleModal: () => void;
}

function ModalTemplate({
  width,
  height,
  children,
  onToggleModal,
  left = -50,
  ...rest
}: ModalTemplateProps): ReactElement {
  return (
    <ModalTemplateBlock onMouseDown={onToggleModal} {...rest}>
      <ModalInner left={left} width={width} height={height} onMouseDown={e => e.stopPropagation()}>
        <CloseButton onMouseDown={onToggleModal} />
        <YellowLabel />
        {children}
      </ModalInner>
      <ModalBackground />
    </ModalTemplateBlock>
  );
}

const ModalTemplateBlock = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9999;
`;
const transition = keyframes`
  0% {
    opacity: 0;
    transform: translateY(400px) scale(0.75);
  }
  75% {
    opacity: 1;
    transform: translateY(-16px) scale(1.0);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }`;

const ModalInner = styled.div<IModalInnerStyled>`
  position: absolute;
  z-index: 9999;
  background-color: ${({ theme }) => theme.colors.CASUAL_FIELD};
  top: 0;
  bottom: 0;
  right: 0;
  left: ${({ left }) => left}%;
  margin: auto;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: 12px;
  animation: ${transition} 0.4s forwards ease-in-out;
`;

const ModalBackground = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  background-color: #000;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0.8;
`;

export default ModalTemplate;
