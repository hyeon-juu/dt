import React, { useCallback, useEffect, useState } from "react";

// Parent의 state가 바뀌면서 Child 새로고침
// handleClick 함수 항상 다시 생성
const Child = React.memo((props) => {
  console.log(`🔁 Child 렌더링 ${props.value}`);

  useEffect(() => {
    console.log('handleClick 새로 생성');
  }, [props.handleClick]);

  return (
    <div>
      <h2>Child</h2>
      <button onClick={props.handleClick}>자식 버튼</button>
    </div>
  );
});

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => console.log('자식 버튼 클릭'), []);
  // 콜백함수, deps 넣어줘야 함

  return (
    <div>
      <p>카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>카운트 증가</button>
      <Child value="변하지 않는 props" handleClick={handleClick} />
      {/*  새롭게 만들기 때문에 자식 컴포넌트도 렌더링(?) */}
      {/* 부모컴포넌트가 렌더링 되면 자식 컴포넌트도 렌더링 */}
      {/* props 사용하면 렌더링할때마다... */}
    </div>
  );
}

export default Parent;
