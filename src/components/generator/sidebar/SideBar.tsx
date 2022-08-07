import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { ComponentList } from './ComponentList';
import FilterList from './FilterList';
import CartIcon from 'assets/CartIcon';
import { cartListState } from 'atoms';

const SideBar = () => {
  const [activeMenu, setActiveMenu] = useState('menu');
  const cartList = useRecoilValue(cartListState);

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
            <BtnMenu
              type="button"
              value="menu"
              isActive={activeMenu === 'menu'}
              onClick={handlActiveMenu}
            >
              MENU
            </BtnMenu>
          </li>
          <li>
            <BtnCart type="button" isActive={activeMenu === 'cart'} onClick={handlActiveCart}>
              <CartIcon
                width={15}
                height={14}
                color={activeMenu === 'cart' ? '#2c3037' : '#f5ff80'}
              />
            </BtnCart>
          </li>
        </MenuBtnList>
      </Menu>
      {activeMenu === 'menu' ? (
        <FilterList />
      ) : (
        <ComponentList mode="cart" componentData={cartList} />
      )}
    </Container>
  );
};

export default SideBar;

const Container = styled.section`
  height: 100%;
  background-color: #171b21;
  color: white;
  overflow: scroll;
  overflow-x: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    width: 0px;
  }
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

const BtnMenuStyle = (isActive: boolean) => css`
  ${isActive
    ? {
        background: '#f5ff80',
        color: '#2c3037',
      }
    : {
        background: '#2c3037',
        color: '#f5ff80',
      }}
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #f5ff80;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.16);
  border-radius: 50%;
  font-weight: 700;
  font-size: 7px;
  letter-spacing: -0.7px;
`;

const BtnMenu = styled.button<{ isActive: boolean }>`
  ${({ isActive }) => BtnMenuStyle(isActive)};
`;

const BtnCart = styled.button<{ isActive: boolean }>`
  ${({ isActive }) => BtnMenuStyle(isActive)};
  svg {
    transform: translateX(-1px);
  }
`;
