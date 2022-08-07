import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import Modal from '../Modal';
import { modalStates } from 'atoms';
import ComponentItem from 'components/main/components/ComponentItem';
import useLikeComponent from 'hooks/useLikeComponent';
import { Component } from 'types/component';

interface ComponentListProps {
  list: Component[];
}
const ComponentList = ({ list }: ComponentListProps): JSX.Element => {
  const [isModal, setModal] = useRecoilState(modalStates);
  const [selectedComponent, setSelectedComponent] = useState<Component>();

  const onClickComponent = (item: Component) => {
    setSelectedComponent(item);
    onToggleModal();
  };

  const onToggleModal = () => {
    setModal([!isModal[0], isModal[1]]);
  };

  return (
    <Card>
      {list.map(item => (
        <ComponentItem item={item} key={item.id} setModalTarget={onClickComponent} />
      ))}
      {isModal[0] && selectedComponent && (
        <Modal item={selectedComponent} onToggleModal={onToggleModal} />
      )}
    </Card>
  );
};

const Card = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  ${({ theme }) => theme.breakPoint.small} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default ComponentList;
