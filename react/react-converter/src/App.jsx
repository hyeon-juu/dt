import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const MinutesToHours = () => {
  let [disabled, setDisabled] = useState(true);
  let [text, setText] = useState();



  return (
    <div>
      <h3>Minutes To Hours</h3>
      <div>
        <label htmlFor="minutes">Minutes</label>
        <input type="number" id="minutes" placeholder="Minutes"
          disabled={!disabled} onChange={(e) => {
            setText(e.target.value);
          }}
          // value={text}
          value={disabled ? text : text * 60} />
      </div>
      <div>
        <label htmlFor="hours">Hours</label>
        <input type="number" id="hours" placeholder="Hours"
          disabled={disabled} onChange={(e) => {
            // setText(e.target.value * 60);
            setText(e.target.value);
          }}
          //  value={text / 60}
          value={!disabled ? text : text / 60}
        />
      </div>
      <button onClick={() => {
        setText(0)
      }}>Reset</button>
      <button onClick={() => {
        setDisabled(!disabled)
      }}>Flip</button>
    </div>
  )
};

function App() {

  return (
    <div className="App">
      <MinutesToHours />
    </div>

  )
}

export default App
