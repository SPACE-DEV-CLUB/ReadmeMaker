import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import ComponentContainer from './ComponentContainer';
import CloseButton from 'assets/CloseButton';
import { componentsState } from 'atoms/components';
import { ComponentType } from 'types/editorComponent';
import { removeComponent } from 'utils';

interface ImageComponentEditorProps {
  imageComponent: ComponentType;
  isDragging: boolean;
}

const ImageComponentEditor = ({ imageComponent, isDragging }: ImageComponentEditorProps) => {
  const [components, setComponents] = useRecoilState(componentsState);
  const curIndex = components.findIndex(component => component.id === imageComponent.id);

  const deleteImageComponent = () => {
    const updatedComponentList = removeComponent(components, curIndex);

    setComponents(updatedComponentList);
  };

  const { title, image } = imageComponent;
  return (
    <ComponentContainer isDragging={isDragging}>
      <img src={image} alt={title} />
      <RemoveButton onClick={deleteImageComponent} />
    </ComponentContainer>
  );
};

export default ImageComponentEditor;

const RemoveButton = styled(CloseButton)`
  width: 20px;
  height: 20px;
  left: -5px;
  top: -5px;
  z-index: 10;
`;
