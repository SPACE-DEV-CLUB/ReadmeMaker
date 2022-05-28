import { useRecoilValue } from 'recoil';
import styled from '@emotion/styled';
import { postsState } from 'atoms/posts';

const PreviewContainer = () => {
  const posts = useRecoilValue(postsState);
  const result = posts.map(post => post.code).join('');

  return (
    <Container>
      <h3>프리뷰 컨테이너</h3>
      <div dangerouslySetInnerHTML={{ __html: result }} />
    </Container>
  );
};

export default PreviewContainer;

const Container = styled.section`
  padding: 70px 40px 40px 40px;
  background-color: #000;
  color: #dddedf;
`;
