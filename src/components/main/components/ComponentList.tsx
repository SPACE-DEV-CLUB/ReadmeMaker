import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { useRecoilState } from 'recoil';
import Modal from '../Modal';
import { cartListState, modalStates } from 'atoms';
import ComponentItem from 'components/main/components/ComponentItem';
import { Component } from 'types/component';
import { likeComponent } from 'utils/apis';
import { getClient, QueryKeys } from 'utils/queryClient';

interface ComponentListProps {
  list: Component[];
}
const ComponentList = ({ list }: ComponentListProps): JSX.Element => {
  const [isModal, setModal] = useRecoilState(modalStates);
  const [selectedComponent, setSelectedComponent] = useState<Component>();
  const queryClient = getClient();

  const onClickComponent = (item: Component) => {
    setSelectedComponent(item);
    onToggleModal();
  };

  const onToggleModal = () => {
    setModal([!isModal[0], isModal[1]]);
  };

  const { mutate: like } = useMutation(({ id }: { id: number }) => likeComponent(id), {
    onMutate: async ({ id }) => {
      await queryClient.cancelQueries(QueryKeys.COMPONENTS);
      const prevComponents = queryClient.getQueryData<Component[]>(QueryKeys.COMPONENTS) || [];

      const targetIndex = prevComponents.findIndex(component => component.id === id);
      if (targetIndex === undefined || targetIndex < 0) return prevComponents;

      const newComponents = [...prevComponents];
      const updatedComponentLike = newComponents[targetIndex].like + 1;
      newComponents.splice(targetIndex, 1, {
        ...newComponents[targetIndex],
        like: updatedComponentLike,
      });

      queryClient.setQueryData(QueryKeys.COMPONENTS, newComponents);
      return prevComponents;
    },
    onError: (_, __, context) => {
      queryClient.invalidateQueries(QueryKeys.COMPONENTS);
      if (context) {
        queryClient.setQueryData(QueryKeys.COMPONENTS, context);
      }
    },
  });

  return (
    <Card>
      {list.map(item => (
        <ComponentItem item={item} key={item.id} setModalTarget={onClickComponent} like={like} />
      ))}
      {isModal[0] && selectedComponent && (
        <Modal item={selectedComponent} onToggleModal={onToggleModal} likeComponent={like} />
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
