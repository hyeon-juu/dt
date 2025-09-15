import FocusInput from './components/FocusInput.jsx'
import RenderCounter from './components/RenderCounter.jsx'
import PrevValue from './components/PrevValue.jsx'
import './index.css'


function MyButton(props) {
  const btns = [1, 2, 3, 4];
  const handleEvent = (event) => {
    console.log(event.target.innerHTML);
  };
  return (
    <div>
      <div>
        {
          btns.map((btn) => {
            return (
              <button onClick={(event) => handleEvent(event)}>{btn}</button>
            )
          })
        }
      </div>
    </div>
  );
}


export default function App() {
  return (
    <div className="container">
      <h1>useRef 연습문제</h1>
      <MyButton />
      <div className="grid">
        <div className="card"><FocusInput /></div>
        <div className="card"><RenderCounter /></div>
        <div className="card"><PrevValue /></div>
      </div>
    </div>
  )
}
