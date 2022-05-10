import styled from '@emotion/styled';
import React from 'react';

const YellowLabel = () => (
  <Label>
    <svg width="60" height="49" viewBox="0 0 60 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 0H0V40H60V0Z" fill="#F5FF80" />
      <path d="M0 40L10 49V40H0Z" fill="#898E4D" />
    </svg>
  </Label>
);

const Label = styled.div`
  position: absolute;
  top: 60px;
  left: -10px;
`;
export default YellowLabel;
