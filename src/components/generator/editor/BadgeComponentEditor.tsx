import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import ComponentContainer from './ComponentContainer';
import CloseButton from 'assets/CloseButton';
import { componentsState } from 'atoms/components';
import { MEDIA_QUERY_END_POINT } from 'constants/.';
import useDebounce from 'hooks/useDebounce';
import { BadgeComponentType } from 'types/badgeComponentType';
import { replaceText, removeComponent } from 'utils';

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

  const deleteBadgeComponent = () => {
    const updatedComponentList = removeComponent(components, curIndex);

    setComponents(updatedComponentList);
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
      <RemoveButton onClick={() => deleteBadgeComponent()} />
    </ComponentContainer>
  );
};

export default BadgeComponentEditor;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: start;

  @media (max-width: ${MEDIA_QUERY_END_POINT.MEDIUM}) {
    flex-direction: column;
    align-items: flex-start;
  }
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
  background-color: ${({ theme }) => theme.colors.CASUAL_SUB_FIELD};
  border-radius: 20px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`;

const InputField = styled.input`
  height: 30px;
  background: ${({ theme }) => theme.colors.CASUAL_FIELD};
  color: white;
  border: none;
  border-radius: 20px;
  padding-left: 8px;
`;

const RemoveButton = styled(CloseButton)`
  width: 20px;
  height: 20px;
  left: -5px;
  top: -5px;
  z-index: 10;
`;
