import { useReducer } from "react";

// 현재 state, 요청이 담긴 action 객체 전달
function reducer(state, action) {
  console.log(state, action);

  /* if (action.type === "INCREASE") {
    return state + action.data;
  } else if (action.type === "DECREASE") {
    return state - action.data;
  } */

  // action type이 많아지는 걸 대비해 보통 if문이 아닌 switch문으로 작성
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    default:
      return state;
  }
}

const Exam = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  const onClickPlus = () => {
    // 인수: 상태가 어떻게 변화되길 원하는지 정보 전달
    // 보통은 객체 형태로 전달: type에는 어떻게 변화시킬지, data에는 얼마나 변화시킬건지
    // 이렇게 인수로 전달된 요청내용을 담은 객체를 "액션객체" 라고 함
    dispatch({
      type: "INCREASE",
      data: 1,
    });
  };

  const onClickMinus = () => {
    dispatch({
      type: "DECREASE",
      data: 1,
    });
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};

export default Exam;
