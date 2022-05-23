import { useRecoilValue } from 'recoil';
import styled from '@emotion/styled';
import { postsState } from 'atoms/posts';

const PreviewContainer = () => {
  const posts = useRecoilValue(postsState);

  return (
    <Container>
      <h3>프리뷰 컨테이너</h3>
      {posts.map(post => (
        <div key={post.id} dangerouslySetInnerHTML={{ __html: post.content }} />
      ))}
    </Container>
  );
};

export default PreviewContainer;

const Container = styled.section`
  padding: 70px 40px 40px 40px;
  background-color: #000;
  color: #dddedf;
`;
