import { useRecoilValue } from 'recoil';
import styled from '@emotion/styled';
import { postState } from 'atoms/post';

const PreviewContainer = () => {
  const post = useRecoilValue(postState);

  return (
    <Container>
      <h3>프리뷰 컨테이너</h3>
      <div dangerouslySetInnerHTML={{ __html: post }} />
    </Container>
  );
};

export default PreviewContainer;

const Container = styled.section`
  padding: 70px 40px 40px 40px;
  background-color: #000;
  color: #dddedf;
`;
