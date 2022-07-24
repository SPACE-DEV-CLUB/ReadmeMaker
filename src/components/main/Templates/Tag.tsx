import styled from '@emotion/styled';
import React from 'react';

const Tag = ({ tagName }: { tagName: string }) => {
  return <Box>{tagName}</Box>;
};

const Box = styled.div`
  display: inline-block;
  padding: 6px 10px;
  border-radius: 6px;
  margin: 0 10px 20px 0;
  font-size: 13px;
  color: white;
  background-color: #2c3037;
`;

export default Tag;
