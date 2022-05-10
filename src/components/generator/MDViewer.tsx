import { useRecoilValue } from 'recoil';
import styled from '@emotion/styled';
import { postState } from 'recoil/atoms/post';

const MDViewer = () => {
  const post = useRecoilValue(postState);

  // const handleDownload = () => {
  //   const element = document.createElement('a');
  //   const file = new Blob([post], { type: 'text/plain' });
  //   element.href = URL.createObjectURL(file);
  //   element.href = URL.createObjectURL(new Blob([post], { type: 'text/plain' }));
  //   element.download = 'README.md';
  //   document.body.appendChild(element);
  //   element.click();
  //   console.log(element.href);
  //   URL.revokeObjectURL(element.href);
  // };

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
