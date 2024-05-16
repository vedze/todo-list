import { useState } from "react";
import "./List.css";
import TodoItem from "./TodoItem";

const List = ({ todos }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    // 검색어 없는 경우 모든 todos 보여줌
    if (search === "") {
      return todos;
    }
    // todo를 매개변수로 받는 콜백함수에서 현재 todo의 content가 search(검색어)를 includes하면 return
    // 즉 배열의 모든 todo를 돌면서 검색어가 포함된 todo들만 필터링하여 보여줌
    // toLowerCase()로 대소문자 구분없이 검색 가능하도록 구현
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilteredData();

  return (
    <div className="List">
      <h4>Todo List 🍀</h4>
      <input
        placeholder="검색어를 입력하세요"
        value={search}
        onChange={onChangeSearch}
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </div>
    </div>
  );
};

export default List;
