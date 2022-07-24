import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import ComponentContainer from './ComponentContainer';
import { componentsState } from 'atoms/components';
import useDebounce from 'hooks/useDebounce';
import { BadgeComponentType } from 'types/badgeComponentType';
import { replaceText } from 'utils';

interface BadgeComponentEditorProps {
  badgeComponent: BadgeComponentType;
  isDragging: boolean;
}

const BadgeComponentEditor = ({ badgeComponent, isDragging }: BadgeComponentEditorProps) => {
  const [components, setComponents] = useRecoilState(componentsState);
  const [username, setUsername] = useState('deli-ght');
  const debounceUsername = useDebounce(username);
  const curIndex = components.findIndex(component => component.id === badgeComponent.id);

  useEffect(() => {
    const updatedComponentList = replaceText(components, curIndex, {
      ...badgeComponent,
      username: debounceUsername,
    });

    setComponents(updatedComponentList);
  }, [debounceUsername]);

  const changeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  return (
    <ComponentContainer isDragging={isDragging}>
      <Header>
        <Title>{badgeComponent.title}</Title>
        <ImgWrap>
          <Img src={badgeComponent.image} alt="" />
        </ImgWrap>
      </Header>
      <InputField type="text" onChange={changeUsername} value={username} />
    </ComponentContainer>
  );
};

export default BadgeComponentEditor;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 800;
  color: white;
`;

const ImgWrap = styled.div`
  width: 126px;
  height: 36px;
  padding: 20px;
  background-color: #1b2027;
  border-radius: 20px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`;

const InputField = styled.input`
  height: 30px;
  background: #171b21;
  color: white;
  border: none;
  border-radius: 20px;
  padding-left: 8px;
`;
