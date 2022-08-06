import styled from '@emotion/styled';
import { useDarkMode } from 'hooks/useDarkMode';
import { darkTheme } from 'styles/theme';

// interface IProp extends React.InputHTMLAttributes<HTMLInputElement> {
//   onToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   checked: boolean;
// }
// { onToggle, checked, ...rest }: IProp
export const DarkModeButton = () => {
  const { theme, toggleTheme } = useDarkMode();
  return <CheckBox type="checkbox" onChange={toggleTheme} checked={theme.colors === darkTheme} />;
};

const CheckBox = styled.input`
  all: unset;
  width: 50px;
  height: 32px;
  border-radius: 2em;
  display: flex;
  align-items: center;
  /* toggle off */
  border: 1px solid #ededed;
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
    left: 2px;
    width: 26px;
    height: 26px;
    display: block;
    border-radius: 50%;
    background: white;
    position: relative;
    transition: all 0.2s ease-in-out;
    border: 1px solid #ededed;
    box-shadow: 1px 0px 8px rgba(0, 0, 0, 0.4);
  }
  /* toggle on */
  &:checked {
    background: #292f37;
    border: 1px solid #141414;
    ::after {
      content: '';
      position: relative;
      display: block;
      width: 26px;
      height: 26px;
      left: 20px;
      border-radius: 50%;
      border: 1px solid #131313;
      background: #08090c;
      transition: all 0.2s ease-in-out;
      box-shadow: 1px 0px 8px rgba(0, 0, 0, 0.4);
    }
  }
`;
