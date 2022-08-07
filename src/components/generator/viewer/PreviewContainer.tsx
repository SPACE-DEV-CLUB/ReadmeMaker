import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import { componentsState } from 'atoms/components';
import { replaceVariable } from 'utils/replaceVariable';

const PreviewContainer = () => {
  const components = useRecoilValue(componentsState);
  const readmeContent = components.reduce((ac, el) => ac + el.code, '');

  const htmlCode = components
    .map((component: any) => {
      switch (component.type) {
        case 'text':
          break;
        case 'badge':
        case 'image':
          return replaceVariable(component.code, component.inputVariables);
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
    </Container>
  );
};

export default PreviewContainer;

const Container = styled.section`
  padding: 0px 40px 40px 40px;
  background: ${({ theme }) => theme.colors.BACKGROUND};
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
  color: ${({ theme }) => theme.colors.SUB_FONT};

  & > div > * {
    max-width: 100%;
  }
`;
