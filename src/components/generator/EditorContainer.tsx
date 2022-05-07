import { Editor } from '@tinymce/tinymce-react';
import { useSetRecoilState } from 'recoil';
import { postState } from 'recoil/atoms/post';

const EditorContainer = () => {
  const setPost = useSetRecoilState(postState);

  return (
    <Editor
      initialValue={''}
      apiKey="u7dq1ei6qlny6tyhkebbwzr1su1sb4n2e3zzg0v4tfvfne4s"
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
