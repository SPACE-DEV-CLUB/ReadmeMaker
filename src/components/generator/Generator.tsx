import styled from '@emotion/styled';
import EditorComponent from './EditorComponent';

const Generator = () => {
  return (
    <Container>
      <EditorComponent />
      <EditorComponent />
    </Container>
  );
};

export default Generator;

const Container = styled.div`
  background-color: #171b21;
  padding: 70px 20px 70px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
