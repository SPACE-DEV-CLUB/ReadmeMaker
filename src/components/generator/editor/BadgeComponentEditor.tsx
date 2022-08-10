import styled from '@emotion/styled';
import { useState, useEffect, useMemo } from 'react';
import { useRecoilState } from 'recoil';
import ComponentContainer from './ComponentContainer';
import CloseButton from 'assets/CloseButton';
import { componentsState } from 'atoms/components';
import { MEDIA_QUERY_END_POINT } from 'constants/index';
import { BadgeComponentType } from 'types/editorComponent';
import { modifyComponentValue, removeComponent } from 'utils';

interface BadgeComponentEditorProps {
  badgeComponent: BadgeComponentType;
  isDragging: boolean;
}

const BadgeComponentEditor = ({ badgeComponent, isDragging }: BadgeComponentEditorProps) => {
  const { id, title, image, inputVariables } = badgeComponent;

  const [components, setComponents] = useRecoilState(componentsState);
  const [inputValue, setInputValue] = useState({ key: '', value: '' });
  const curIndex = components.findIndex(component => component.id === id);

  useEffect(() => {
    const newInputVariables = { ...inputVariables, [inputValue.key]: inputValue.value };

    if (inputValue.key) {
      const updatedComponentList = modifyComponentValue(components, curIndex, {
        ...badgeComponent,
        inputVariables: newInputVariables,
      });

      setComponents(updatedComponentList);
    }
  }, [inputValue.value]);

  const inputList = useMemo(() => Object.keys(inputVariables), []);

  const changeValue = (value: string, key: string): void => {
    setInputValue({ key, value });
  };

  const deleteBadgeComponent = (): void => {
    const updatedComponentList = removeComponent(components, curIndex);

    setComponents(updatedComponentList);
  };

  const replacePercent = (value: string): string => {
    return value.replace(/\%/g, '');
  };

  return (
    <ComponentContainer isDragging={isDragging}>
      <Header>
        <Title>{title}</Title>
        <ImgWrap>
          <Img src={image} alt="" />
        </ImgWrap>
      </Header>
      <ul>
        {inputList.map(variable => (
          <InputItem key={`${id}-${variable}`}>
            <Label htmlFor={variable}>{replacePercent(variable)}</Label>
            <InputField
              id={variable}
              type="text"
              onChange={event => changeValue(event.target.value, variable)}
            />
          </InputItem>
        ))}
      </ul>
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
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const ImgWrap = styled.div`
  width: 126px;
  height: 36px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.CASUAL_SUB_FIELD};
  border-radius: 20px;
  flex-basis: 1;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`;

const InputItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 20px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-size: 10px;
  color: #fff;
  text-align: left;
  text-transform: capitalize;
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
