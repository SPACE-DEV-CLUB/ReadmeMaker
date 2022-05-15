import React from 'react';
import styled from '@emotion/styled';

const FilterButton = ({ data }: any): JSX.Element => {
  return <Button>{data}</Button>;
};

const Button = styled.button`
  height: 29px;
  padding: 5px 8px;
  border-radius: 10px;
  color: white;
  background-color: #1b2027;
`;

export default FilterButton;
