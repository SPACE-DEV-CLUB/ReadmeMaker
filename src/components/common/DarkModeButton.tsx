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
  background: #292f37;
  ::after {
    content: '';
    z-index: 10;
    left: 4px;
    width: 28px;
    height: 28px;
    display: block;
    border-radius: 50%;
    background: #08090c;
    position: relative;
    transition: all 0.2s ease-in-out;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  }
  /* toggle on */
  &:checked {
    /* background-color: #08090c; */
    ::after {
      content: '';
      position: relative;
      display: block;
      width: 28px;
      height: 28px;
      left: 28px;
      border-radius: 50%;
      /* background: #292f37; */
      transition: all 0.2s ease-in-out;
    }
  }
`;
