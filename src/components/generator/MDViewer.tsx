import { useRecoilValue } from 'recoil';
import styled from '@emotion/styled';
import { postsState } from 'atoms/posts';

const MDViewer = () => {
  const posts = useRecoilValue(postsState);

  return (
    <Container>
      <h3>마크다운 뷰어</h3>
      {posts.map(postItem => (
        <div key={postItem.id}>
          <p>{postItem.code}</p>
          {/* TODO: array 타입에 맞게 변경 */}
          {/* <a
            href={URL.createObjectURL(new Blob([posts], { type: 'text/plain' }))}
            download="README.md"
          >
            다운로드
          </a> */}
        </div>
      ))}
    </Container>
  );
};

export default MDViewer;

const Container = styled.div``;
