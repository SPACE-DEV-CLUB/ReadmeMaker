import styled from '@emotion/styled';
import CartIcon from 'assets/CartIcon';
import HeartIcon from 'assets/HeartIconEmpty';
import Tag from 'components/main/Templates/Tag';
import { MEDIA_QUERY_END_POINT } from 'constants/index';
import { TemplateTag } from 'types/template';

interface TemplateCardTextProps {
  title: string;
  TemplateTags: TemplateTag[];
  createdAt: string;
  description: string;
}
const TemplateCardText = ({
  title,
  TemplateTags,
  createdAt,
  description,
}: TemplateCardTextProps) => {
  return (
    <Container>
      <article>
        {TemplateTags.map(tag => (
          <Tag key={tag.id} tagName={tag.title} />
        ))}
        <Title>{title}</Title>
        <SubTitle>{createdAt}</SubTitle>
        <TemplateInfo>{description}</TemplateInfo>
      </article>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  min-width: 270px;
  min-height: 184px;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 40px;
`;

const Title = styled.h2`
  font-size: 40px;
  line-height: 49px;
  font-weight: 800;
  color: #fff;
  margin-bottom: 10px;

  @media (max-width: ${MEDIA_QUERY_END_POINT.MEDIUM}) {
    font-size: 26px;
  }
`;

const SubTitle = styled.h3`
  font-size: 16px;
  color: #fff;
  margin-bottom: 20px;
`;

const TemplateInfo = styled.p`
  position: relative;
  color: #fff;
  margin-top: 60px;

  ::before {
    content: '';
    position: absolute;
    top: -30px;
    height: 3px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.CASUAL_LINE};
  }

  @media (max-width: ${MEDIA_QUERY_END_POINT.MEDIUM}) {
    display: none;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
`;

export default TemplateCardText;
