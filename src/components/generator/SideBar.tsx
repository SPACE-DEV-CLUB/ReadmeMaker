import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useState } from 'react';
import CartIcon from 'assets/CartIcon';
import FilterList from './FilterList';

const SideBar = () => {
  const [activeMenu, setActiveMenu] = useState('menu');

  const handlActiveMenu = () => {
    setActiveMenu('menu');
  };

  const handlActiveCart = () => {
    setActiveMenu('cart');
  };

  return (
    <Container>
      <Menu>
        <MenuBtnList>
          <li>
            <BtnMenu type="button" activeMenu={activeMenu} onClick={handlActiveMenu}>
              MENU
            </BtnMenu>
          </li>
          <li>
            <BtnCart type="button" activeMenu={activeMenu} onClick={handlActiveCart}>
              {/* TODO: CartIcon fill, size props 받는 걸로 변경 */}
              <CartIcon />
            </BtnCart>
          </li>
        </MenuBtnList>
      </Menu>
      {activeMenu === 'menu' ? <FilterList /> : <div>cart</div>}
    </Container>
  );
};

export default SideBar;

const Container = styled.section`
  height: 100vh;
  background-color: #171b21;
  color: white;
`;

const Menu = styled.header`
  height: 70px;
  background-color: #1b2027;
`;

const MenuBtnList = styled.ul`
  display: flex;
  align-items: center;
  padding-left: 40px;
  gap: 14px;
  height: 100%;
`;

const BtnMenuStyle = () => css`
  width: 32px;
  height: 32px;
  background: #171b21;
  color: #f5ff80;
  border: 1px solid #f5ff80;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.16);
  border-radius: 50%;
`;

const BtnMenu = styled.button<{ activeMenu: String }>`
  ${BtnMenuStyle};
  font-weight: 700;
  font-size: 7px;
  ${({ activeMenu }) =>
    activeMenu === 'menu' && {
      background: '#f5ff80',
      color: '#171b21',
    }};
`;

const BtnCart = styled.button<{ activeMenu: String }>`
  ${BtnMenuStyle};
  font-size: 7px;
  ${({ activeMenu }) =>
    activeMenu === 'cart' && {
      background: '#f5ff80',
      color: ' #171b21',
    }};
`;
