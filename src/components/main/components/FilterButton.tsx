import React from 'react';
import styled from '@emotion/styled';

interface FilterButtonProps {
  data: string;
  isSelected: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const FilterButton = ({ data, isSelected, onClick }: FilterButtonProps): JSX.Element => {
  return (
    <Button isSelected={isSelected} onClick={onClick}>
      {data}
    </Button>
  );
};

const Button = styled.button<{ isSelected: boolean }>`
  padding: 2px 10px;
  border-radius: 10px;
  color: ${({ isSelected }) => (isSelected ? '#000' : '#fff')};
  background-color: ${({ isSelected }) => (isSelected ? '#F5FF80' : '#2C3037')};
`;

export default FilterButton;
