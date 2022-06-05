import { Draggable } from 'react-beautiful-dnd';
import { ImgComponentType } from 'types/imgComponentType';
import { TextComponentType } from 'types/textComponentType';
import ImgComponentEditor from '../editor/ImgComponentEditor';
import TextComponentEditor from '../editor/TextComponentEditor';

const DndComponent = ({ post, postIndex }: any) => {
  const switchComponent = (component: any) => {
    switch (component.type) {
      case 'text':
        return (
          <TextComponentEditor key={component.id} textComponent={component as TextComponentType} />
        );
      case 'img':
        return (
          <ImgComponentEditor key={component.id} imgComponent={component as ImgComponentType} />
        );
      default:
        return;
    }
  };

  return (
    <Draggable draggableId={`test-${post.id}`} index={postIndex} key={`test-${post.id}`}>
      {(provided, snapshot) => {
        return (
          <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
            {switchComponent(post)}
          </div>
        );
      }}
    </Draggable>
  );
};

export default DndComponent;
