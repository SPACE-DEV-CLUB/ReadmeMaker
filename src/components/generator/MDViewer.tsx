import { useRecoilValue } from 'recoil';
import styled from '@emotion/styled';
import { postState } from 'atoms/post';

const MDViewer = () => {
  const post = useRecoilValue(postState);

  return (
    <Container>
      <h3>마크다운 뷰어</h3>
      <p>{post}</p>
      <a href={URL.createObjectURL(new Blob([post], { type: 'text/plain' }))} download="README.md">
        다운로드
      </a>
    </Container>
  );
};

export default MDViewer;

const Container = styled.div``;
