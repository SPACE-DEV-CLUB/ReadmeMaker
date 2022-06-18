import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import { componentsState } from 'atoms/components';

const MDViewer = () => {
  const components = useRecoilValue(componentsState);

  return (
    <Container>
      <h3>마크다운 뷰어</h3>
      {components.map(text => (
        <div key={text.id}>
          <p>{text.code}</p>
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
