import styled from '@emotion/styled';
import { useSetRecoilState } from 'recoil';
import { componentsState } from 'atoms/components';
import { Component } from 'types/component';
interface ComponentListProps {
  componentData: Component[] | undefined;
}

export const ComponentList = ({ componentData }: ComponentListProps) => {
  const setComponents = useSetRecoilState(componentsState);

  if (componentData?.length === 0) {
    return <p>해당 필터에 속하는 컴포넌트가 존재하지 않습니다.</p>;
  }

  const addComponent = (component: Component): void => {
    if (component.type === 'badge' || component.type === 'image') {
      const inputVariables = component.variable
        .split(', ')
        .reduce((acc: { [key: string]: string }, cur: string) => {
          acc[cur] = '';
          return acc;
        }, {});
      const generateComponent = { ...component, inputVariables: inputVariables };

      setComponents((oldComponents: any) => [...oldComponents, generateComponent]);
    }
  };

  return (
    <ContentList>
      {componentData?.map(component => {
        const { id, title, image } = component;
        return (
          <ComponentCard key={`component-card-${id}`} onClick={() => addComponent(component)}>
            <div>{title}</div>
            <Image src={image} alt={title} />
          </ComponentCard>
        );
      })}
    </ContentList>
  );
};

const ContentList = styled.div``;

const ComponentCard = styled.div`
  padding: 30px 20px;
  background-color: ${({ theme }) => theme.colors.CASUAL_FIELD};
  border: 1px solid ${({ theme }) => theme.colors.CASUAL_SUB_FIELD};
  border-radius: 20px;
  color: #fff;
  font-size: 10px;
  font-weight: 500;
  line-height: 12px;
  margin-bottom: 5px;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.PIN};
  }
`;

const Image = styled.img`
  margin: 30px auto 0;
  width: 100%;
`;
