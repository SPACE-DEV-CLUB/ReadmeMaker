import { useRecoilValue } from 'recoil';
import { postState } from 'recoil/atoms/post';

const PreviewContainer = () => {
  const post = useRecoilValue(postState);

  return (
    <div>
      <h3>프리뷰 컨테이너</h3>
      <div dangerouslySetInnerHTML={{ __html: post }} />
    </div>
  );
};

export default PreviewContainer;
