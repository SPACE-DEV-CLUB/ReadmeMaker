import styled from '@emotion/styled';
import EditorContainer from './EditorContainer';
import MDViewer from './MDViewer';
import PreviewContainer from './PreviewContainer';

const Generator = () => {
  return (
    <Container>
      <EditorContainer />
      <PreviewContainer />
      <MDViewer />
    </Container>
  );
};

export default Generator;

const Container = styled.div`
  display: grid;
  gap: 50px;
  grid-template-columns: 400px 400px 400px;
`;
