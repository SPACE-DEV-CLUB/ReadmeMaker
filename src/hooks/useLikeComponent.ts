import { useMutation } from 'react-query';
import { Component } from 'types/component';
import { likeComponent } from 'utils/apis';
import { getClient, QueryKeys } from 'utils/queryClient';

const useLikeComponent = () => {
  const queryClient = getClient();

  const { mutate: like } = useMutation(({ id }: { id: number }) => likeComponent(id), {
    onMutate: async ({ id }) => {
      await queryClient.cancelQueries(QueryKeys.COMPONENTS);
      const prevComponents = queryClient.getQueryData<Component[]>(QueryKeys.COMPONENTS) || [];

      const targetIndex = prevComponents.findIndex(component => component.id === id);
      if (targetIndex === undefined || targetIndex < 0) return prevComponents;

      const newComponents = [...prevComponents];
      const updatedComponentLike = newComponents[targetIndex].like + 1;
      newComponents.splice(targetIndex, 1, {
        ...newComponents[targetIndex],
        like: updatedComponentLike,
      });

      queryClient.setQueryData(QueryKeys.COMPONENTS, newComponents);
      return prevComponents;
    },
    onError: (_, __, context) => {
      queryClient.invalidateQueries(QueryKeys.COMPONENTS);
      if (context) {
        queryClient.setQueryData(QueryKeys.COMPONENTS, context);
      }
    },
  });

  return like;
};

export default useLikeComponent;
