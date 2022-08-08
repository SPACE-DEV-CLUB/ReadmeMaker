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
  console.log('data', templateList);
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
  overflow: scroll;
  background: ${({ theme }) => theme.colors.BACKGROUND};
`;

const TitleWrap = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  margin: 61px 0 10px;
  font-size: 30px;
  font-weight: 800;
`;

const SubTitle = styled.h3`
  margin-bottom: 56px;
  font-size: 13px;
  font-weight: 400;
`;

const Wrap = styled.div`
  width: 940px;
  margin-bottom: 120px;
  margin-right: calc((100vw - 1220px) / 2);

  @media (max-width: ${MEDIA_QUERY_END_POINT.MEDIUM}) {
    width: calc(100vw - 500px);
    margin-right: 110px;
  }

  @media (max-width: ${MEDIA_QUERY_END_POINT.SMALL}) {
    width: calc(100vw - 290px);
    margin-right: 40px;
  }
`;

export default TemplatesContainer;
