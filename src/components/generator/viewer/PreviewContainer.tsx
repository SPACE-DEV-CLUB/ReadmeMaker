import { useRecoilValue } from 'recoil';
import styled from '@emotion/styled';
import { componentsState } from 'atoms/components';

const PreviewContainer = () => {
  const components = useRecoilValue(componentsState);

  //TODO: component 타입 정해지면 any 수정
  const htmlCode = components
    .map((component: any) => {
      switch (component.type) {
        case 'text':
          break;
        case 'img':
          return component.code.replace('variable', component.username);
      }
      return component.code;
    })
    .join('');

  return (
    <Container>
      <h3>프리뷰 컨테이너</h3>
      <div dangerouslySetInnerHTML={{ __html: htmlCode }} />
      {/* <div>{mockData.src}</div> */}

      {/* <img src={mockData.src.replace('variable', mockData.author)} alt="" /> */}
    </Container>
  );
};

export default PreviewContainer;

const Container = styled.section`
  padding: 70px 40px 40px 40px;
  background-color: #000;
  color: #dddedf;
  overflow: scroll;
  overflow-x: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    width: 0px;
  }
`;
