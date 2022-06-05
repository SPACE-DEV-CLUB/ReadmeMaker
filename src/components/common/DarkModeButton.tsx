import styled from '@emotion/styled';
import { useState } from 'react';

// interface IProp extends React.InputHTMLAttributes<HTMLInputElement> {
//   onToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   checked: boolean;
// }
// { onToggle, checked, ...rest }: IProp
export const DarkModeButton = () => {
  const [checked, setChecked] = useState(false);
  const onToggle = () => setChecked(!checked);
  return <CheckBox type="checkbox" onChange={onToggle} checked={checked} />;
};

const CheckBox = styled.input`
  all: unset;
  width: 60px;
  height: 32px;
  border-radius: 2em;
  display: flex;
  align-items: center;
  /* toggle off */
  background: linear-gradient(
    112.31deg,
    #f0fe90 26.94%,
    #dcfda0 35.99%,
    #acfcc8 46.65%,
    #ccfdb1 59.25%,
    #f6ff92 88.98%
  );
  ::after {
    content: '';
    z-index: 10;
    left: 4px;
    width: 28px;
    height: 28px;
    display: block;
    border-radius: 50%;
    background: white;
    position: relative;
    transition: all 0.2s ease-in-out;
    box-shadow: 1px 0px 8px rgba(0, 0, 0, 0.4);
  }
  /* toggle on */
  &:checked {
    background: #292f37;
    ::after {
      content: '';
      position: relative;
      display: block;
      width: 28px;
      height: 28px;
      left: 28px;
      border-radius: 50%;
      background: #08090c;
      transition: all 0.2s ease-in-out;
    }
  }
`;
