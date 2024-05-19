import "./Editor.css";
import { TodoContext } from "../App";
import { useRef, useState, useContext } from "react";

const Editor = () => {
  const { onCreate } = useContext(TodoContext);
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  // 3) 엔터키 입력으로 추가하기
  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    // 1) 빈 input이면 강제종료
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    // 2) 추가 후 다시 빈 input으로 만들기
    setContent("");
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef} /* input의 reference로 설정 */
        value={content}
        onKeyDown={onKeydown}
        onChange={onChangeContent}
        placeholder="새로운 Todo..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
