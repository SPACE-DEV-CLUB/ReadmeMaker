import { Editor } from '@tinymce/tinymce-react';
import { useSetRecoilState } from 'recoil';
import { postState } from 'recoil/atoms/post';

const EditorContainer = () => {
  const setPost = useSetRecoilState(postState);

  return (
    <Editor
      initialValue={''}
      apiKey={process.env.EDITOR_API_KEY}
      init={{
        bordercolor: 'blue',
        height: 500,
        menubar: false,
        statusbar: false,
        skin: 'snow',
        toolbar_sticky: true,
        toolbar: 'styleselect | bold | italic | underline | forecolor | fontsize',
      }}
      onEditorChange={setPost}
    />
  );
};

export default EditorContainer;
