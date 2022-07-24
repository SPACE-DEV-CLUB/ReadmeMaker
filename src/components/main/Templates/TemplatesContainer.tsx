import styled from '@emotion/styled';
import { useQuery } from 'react-query';
import TemplateCardContainer from './TemplateCardContainer';
// import Cart from 'components/main/cart/Cart';
import { getTemplates } from 'utils/apis';

const TemplatesContainer = () => {
  const { data: templateList } = useQuery('templates', getTemplates);

  if (!templateList) return;
  console.log(templateList);
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
  background-color: #0e1116;
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
  width: calc(100vw - 500px);
  margin: 0 110px 120px 0;
`;

export default TemplatesContainer;
