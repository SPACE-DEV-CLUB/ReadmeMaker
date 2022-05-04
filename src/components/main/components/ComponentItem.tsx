import styled from '@emotion/styled';
import React from 'react';

const ComponentItem = ({ data }: any): JSX.Element => {
  return (
    <Card>
      <h3>컴포넌트 이름</h3>
      <p>컴포넌트 설명 블라블라 입니다</p>
      <ItemContainer>
        <div>{data}</div>
      </ItemContainer>
    </Card>
  );
};

const Card = styled.div`
  width: 540px;
  color: #fff;
  background-color: #1c1c1c;
  border: 1px solid #2c2c2c;
  border-radius: 30px;
  padding: 40px;
  box-sizing: border-box;
  h3 {
    font-size: 20px;
    font-weight: 800;
  }
  p {
    margin: 10px 0 62px;
  }
`;

const ItemContainer = styled.div`
  width: 100%;
  height: 300px;
  background-color: rgba(255, 255, 255, 0.06);
`;

export default ComponentItem;
