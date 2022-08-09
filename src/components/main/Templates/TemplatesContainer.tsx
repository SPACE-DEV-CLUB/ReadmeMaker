import styled from '@emotion/styled';
import { useQuery } from 'react-query';
import TemplateCardContainer from './TemplateCardContainer';
// import Cart from 'components/main/cart/Cart';
import { MEDIA_QUERY_END_POINT } from 'constants/index';
import { getTemplates } from 'utils/apis';
import { QueryKeys } from 'utils/queryClient';

const TemplatesContainer = () => {
  const { data: templateList } = useQuery(QueryKeys.TEMPLATES, getTemplates);
  if (!templateList) return <></>;

  return (
    <Container>
      <Wrap>
        <TitleWrap>
          <Title>Now Hot 🔥</Title>
          <SubTitle>다양한 조합의 인기 템플릿을 확인하세요.</SubTitle>
        </TitleWrap>
        {templateList.map(template => (
          <TemplateCardContainer item={template} key={template.id} />
        ))}
      </Wrap>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  color: white;
  overflow-y: auto;
  overflow-x: hidden;
  background: ${({ theme }) => theme.colors.BACKGROUND};
  ::-webkit-scrollbar {
    display: none;
  }
`;

const TitleWrap = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 30px;
  font-weight: 800;
`;

const SubTitle = styled.h3`
  margin-bottom: 56px;
  font-size: 13px;
  font-weight: 400;
`;

const Wrap = styled.div`
  width: calc(100vw - 500px);
  margin: 60px 110px 120px 0;

  ${({ theme }) => theme.breakPoint.small} {
    width: calc(100vw - 290px);
    margin-right: 40px;
  }

  ${({ theme }) => theme.breakPoint.xLarge} {
    width: 940px;
    margin-right: calc((100vw - 1220px) / 2);
  }
`;

export default TemplatesContainer;
