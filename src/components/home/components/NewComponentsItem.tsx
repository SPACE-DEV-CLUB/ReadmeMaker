import styled from '@emotion/styled';
import React from 'react';

const NewComponentsItem = (): JSX.Element => {
  return (
    <ItemContainer>
      <div></div>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  width: 188px;
  height: 188px;
  background-color: #fff;
  border-radius: 20px;
  img {
    z-index: 10;
  }
`;
export default NewComponentsItem;
