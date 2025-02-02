import "./TodoItem.css";
import { TodoDispatchContext } from "../App";
import { memo, useContext } from "react";

const TodoItem = ({ id, isDone, content, date }) => {
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);

  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      {/*onChange를 사용하는 이유: button이 아니라 input 요소이기 때문에
      동작은 click이지만 발생하는 이벤트는 체크박스 상태변경이기 때문*/}
      <input type="checkbox" checked={isDone} onChange={onChangeCheckbox} />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

export default memo(TodoItem);
