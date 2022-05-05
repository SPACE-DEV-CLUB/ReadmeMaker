import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/css';

interface IModalInnerStyled {
  width: number;
  height: number;
  isModal: boolean;
}

interface ModalTemplateProps extends IModalInnerStyled {
  children: React.ReactNode;
  onToggleModal: () => void;
}

function ModalTemplate({
  width,
  height,
  isModal,
  children,
  onToggleModal,
  ...rest
}: ModalTemplateProps): ReactElement {
  return (
    <ModalTemplateBlock onMouseDown={onToggleModal} {...rest}>
      <ModalInner
        width={width}
        height={height}
        isModal={isModal}
        onMouseDown={e => e.stopPropagation()}
      >
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
  background-color: #1c1c1c;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
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
  opacity: 0.4;
`;

export default ModalTemplate;
