import styled from '@emotion/styled';
import React from 'react';
import { useMutation } from 'react-query';
import { useRecoilState } from 'recoil';
import CartIcon from 'assets/CartIcon';
import HeartIconEmpty from 'assets/HeartIconEmpty';
import { cartListState } from 'atoms';
import { MEDIA_QUERY_END_POINT } from 'constants/index';
import { Component } from 'types/component';
import { likeComponent } from 'utils/apis';
import { getClient, QueryKeys } from 'utils/queryClient';

interface ComponentItemProps {
  item: Component;
  setModalTarget: (item: Component) => void;
}
const ComponentItem = ({ item, setModalTarget }: ComponentItemProps): JSX.Element => {
  const queryClient = getClient();
  const [cartList, setCartList] = useRecoilState(cartListState);

  const onClickComponent = () => {
    setModalTarget(item);
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

  const onClickHeartIcon = () => {
    like({ id: item.id });
  };

  const onClickCartIcon = () => {
    if (cartList.includes(item)) return;

    setCartList([...cartList, item]);
  };

  return (
    <Card>
      <h3>{item.title}</h3>
      <ComponentDescription>{item.author}</ComponentDescription>
      <ItemContainer onClick={onClickComponent}>
        <ItemImage src={item.image} alt={item.title} />
      </ItemContainer>
      <IconWrapper>
        <span>{item.like}</span>
        <div onClick={onClickHeartIcon}>
          <HeartIconEmpty />
        </div>
        <div onClick={onClickCartIcon}>
          <CartIcon />
        </div>
      </IconWrapper>
    </Card>
  );
};

const Card = styled.div`
  box-sizing: border-box;
  width: 460px;
  height: 460px;
  color: #fff;
  border: 1px solid ${({ theme }) => theme.colors.CASUAL_LINE};
  border-radius: 30px;
  padding: 40px 40px 30px;
  box-shadow: ${({ theme }) => theme.colors.SHADOW};
  h3 {
    font-size: 20px;
    font-weight: 800;
  }

  @media (max-width: ${MEDIA_QUERY_END_POINT.MEDIUM}) {
    width: 280px;
    height: 300px;
    padding: 30px 20px 20px;
  }

  @media (max-width: ${MEDIA_QUERY_END_POINT.SMALL}) {
    width: 100%;
    height: 458px;
    padding: 40px 40px 30px;
  }
`;

const ComponentDescription = styled.p`
  margin: 10px 0 40px;

  @media (max-width: ${MEDIA_QUERY_END_POINT.MEDIUM}) {
    margin: 10px 0 20px;
  }

  @media (max-width: ${MEDIA_QUERY_END_POINT.SMALL}) {
    margin: 10px 0 40px;
  }
`;

const ItemContainer = styled.div`
  width: 100%;
  height: 245px;
  border-radius: 27px;
  margin-bottom: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  @media (max-width: ${MEDIA_QUERY_END_POINT.MEDIUM}) {
    height: 150px;
  }

  @media (max-width: ${MEDIA_QUERY_END_POINT.SMALL}) {
    height: 245px;
  }
`;

const ItemImage = styled.img`
  width: 100%;
  max-height: 80%;
`;
const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;
export default ComponentItem;
