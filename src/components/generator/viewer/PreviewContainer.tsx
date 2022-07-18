import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import { componentsState } from 'atoms/components';

const PreviewContainer = () => {
  const components = useRecoilValue(componentsState);
  const readmeContent = components.reduce((ac, el) => ac + el.code, '');

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
      <BtnContainer>
        <DownloadBtn
          href={URL.createObjectURL(
            new Blob([readmeContent], {
              type: 'text/plain',
            }),
          )}
          download="README.md"
        >
          Export
        </DownloadBtn>
      </BtnContainer>
      <h3 className="sr-only">프리뷰 컨테이너</h3>
      <PreviewBox>
        <div dangerouslySetInnerHTML={{ __html: htmlCode }} />
      </PreviewBox>
      {/* <div>{mockData.src}</div> */}

      {/* <img src={mockData.src.replace('variable', mockData.author)} alt="" /> */}
    </Container>
  );
};

export default PreviewContainer;

const Container = styled.section`
  padding: 0px 40px 40px 40px;
  background-color: #000;
  color: #dddedf;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    width: 0px;
  }
`;

const BtnContainer = styled.div`
  padding: 30px 0;
  text-align: center;
`;

const DownloadBtn = styled.a`
  display: inline-block;
  width: 75%;
  color: #000;
  padding: 20px;
  background: linear-gradient(
    90deg,
    #f0fe90 0%,
    #dcfda0 14.58%,
    #acfcc8 31.77%,
    #ccfdb1 52.08%,
    #f6ff92 100%
  );
  border-radius: 30px;
  font-weight: 600;
  &:hover {
    text-decoration: none;
    color: #000;
  }
`;

const PreviewBox = styled.section`
  & > div > * {
    width: 100%;
  }
`;
