import styled from '@emotion/styled';
import React from 'react';

const Tag = () => {
  return <Item>OMG</Item>;
};

const Item = styled.div`
  display: inline-block;
  padding: 6px 10px;
  border-radius: 6px;
  margin: 0 10px 20px 0;
  font-size: 13px;
  color: white;
  background-color: #2c3037;
`;

export default Tag;
