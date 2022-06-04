import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { useState, useEffect } from 'react';
import { componentsState } from 'atoms/components';
import useDebounce from 'hooks/useDebounce';
import { ImgComponentType } from 'types/imgComponentType';
import { replaceText } from 'utils';

interface ImgComponentEditorProps {
  imgComponent: ImgComponentType;
}

const ImgComponentEditor = ({ imgComponent }: ImgComponentEditorProps) => {
  const [components, setComponents] = useRecoilState(componentsState);
  const [username, setUsername] = useState('deli-ght');
  const debounceUsername = useDebounce(username);
  const curIndex = components.findIndex(component => component.id === imgComponent.id);

  useEffect(() => {
    const updatedComponentList = replaceText(components, curIndex, {
      ...imgComponent,
      username: debounceUsername,
    });

    setComponents(updatedComponentList);
  }, [debounceUsername]);

  const changeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  return (
    <Container>
      <img src={imgComponent.image} alt="" />
      <InputField type="text" onChange={changeUsername} value={username} />
    </Container>
  );
};

export default ImgComponentEditor;

const Container = styled.div`
  background-color: #171b21;
  padding: 70px 20px 70px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InputField = styled.input`
  height: 40px;
`;
