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
      <h3 className="sr-only">프리뷰 컨테이너</h3>

      <BtnExport>Export</BtnExport>

      <div dangerouslySetInnerHTML={{ __html: htmlCode }} />
      {/* <div>{mockData.src}</div> */}

      {/* <img src={mockData.src.replace('variable', mockData.author)} alt="" /> */}
    </Container>
  );
};

export default PreviewContainer;

const Container = styled.section`
  padding: 30px 40px 40px 40px;
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

const BtnExport = styled.button`
  width: calc(100% - 78px);
  height: 56px;
  background: #20262f;
  margin: 0 65px 15px 13px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  color: #ffffff;

  &:hover {
    color: #000;
    background: linear-gradient(
      90deg,
      #f0fe90 0%,
      #dcfda0 14.58%,
      #acfcc8 31.77%,
      #ccfdb1 52.08%,
      #f6ff92 100%
    );
  }
`;
