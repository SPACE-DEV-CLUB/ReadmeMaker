import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { v4 as uuid } from 'uuid';
import { postsState } from 'atoms/posts';
import EditorComponent from './EditorComponent';

const Generator = () => {
  const [posts, setPosts] = useRecoilState(postsState);

  const addPost = () => {
    setPosts(oldPosts => [
      ...oldPosts,
      {
        id: `${uuid()}`,
        content: '',
      },
    ]);
  };

  return (
    <Container>
      {posts.map(post => (
        <EditorComponent key={post.id} post={post} />
      ))}
      <BtnAdd onClick={addPost}>추가</BtnAdd>
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

const BtnAdd = styled.button`
  color: white;
  font-weight: 700;
  font-size: 20px;
`;
