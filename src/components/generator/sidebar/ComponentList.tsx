import styled from '@emotion/styled';
import { Component } from 'types/component';

interface ComponentListProps {
  componentData: Component[] | undefined;
}
export const ComponentList = ({ componentData }: ComponentListProps) => {
  if (componentData?.length === 0) {
    return <p>해당 필터에 속하는 컴포넌트가 존재하지 않습니다.</p>;
  }
  return (
    <ContentList>
      {componentData?.map(component => {
        const { id, title, image } = component;
        return (
          <ComponentCard key={`component-card-${id}`}>
            <div>{title}</div>
            <Image src={image} alt={title} />
          </ComponentCard>
        );
      })}
    </ContentList>
  );
};

const ContentList = styled.div`
  padding-left: 40px;
`;

const ComponentCard = styled.div`
  padding: 30px 20px;
  background-color: #171b21;
  border: 1px solid #1b2027;
  border-radius: 20px;
  color: #fff;
  font-size: 10px;
  font-weight: 500;
  line-height: 12px;
`;

const Image = styled.img`
  margin: 30px auto 0;
  width: 100%;
`;
