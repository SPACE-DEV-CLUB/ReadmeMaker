import styled from '@emotion/styled';
import { useSetRecoilState } from 'recoil';
import { v4 as uuid } from 'uuid';
import { componentsState } from 'atoms/components';
import { Component } from 'types/component';

interface ComponentListProps {
  mode: string;
  componentData: Component[] | undefined;
}

export const ComponentList = ({ mode, componentData }: ComponentListProps) => {
  const setComponents = useSetRecoilState(componentsState);

  if (componentData?.length === 0) {
    switch (mode) {
      case 'menu':
        return <InfoText>해당 필터에 속하는 컴포넌트가 존재하지 않습니다.</InfoText>;
      case 'cart':
        return <InfoText>장바구니가 비어있습니다.</InfoText>;
      default:
        return null;
    }
  }

  const addComponent = (component: Component): void => {
    if (component.variable) {
      const inputVariables = component.variable
        .split(', ')
        .reduce((acc: { [key: string]: string }, cur: string) => {
          acc[cur] = '';
          return acc;
        }, {});
      const generateComponent = {
        ...component,
        id: `${uuid()}`,
        inputVariables: inputVariables,
        editorType: 'badge',
      };

      setComponents((oldComponents: any) => [...oldComponents, generateComponent]);
    } else {
      const generateComponent = {
        ...component,
        id: `${uuid()}`,
        editorType: 'image',
      };

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

const ContentList = styled.div`
  padding: 0 40px;
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
  margin-bottom: 5px;

  &:hover {
    border: 1px solid #f5ff80;
  }
`;

const Image = styled.img`
  margin: 30px auto 0;
  width: 100%;
`;

const InfoText = styled.p`
  padding: 20px;
  font-size: 14px;
  line-height: 1.5;
`;
