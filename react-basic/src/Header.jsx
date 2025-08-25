import { useState } from "react";

function Header(p) {
  // console.log('header생성');
  const [state, setState] = useState(0);
  //State가 변경되면 렌더링이 새로 됨
  //그러면 컴포넌트가 다시 만들어짐
  const [input, setInput] = useState('');

  return (
    <header>
      <input type="text" value={input} onChange={(e) => {
        let v = e.target.value;
        //e.target은 input 태그
        setInput(v);
      }} />
      <h1 onClick={() => {
        setState(prev => prev + 1);
      }}>{state}</h1>
    </header>
    // <header>
    //   <h1 style={{ color: "blue" }} onClick={() => {
    //     console.log(`count : ${state}`);
    //     document.querySelector('h1').innerHTML = state;
    //     let count = state; //꼼수
    //     setState(++count);
    //   }}>{p.title}</h1>
    //   <p>{p.t}</p>
    // </header>
  );
}
export default Header;
