import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './App.module.css'
import './App.css'


function Title() {
  return (
    <div className={styles.title}>
      <h1>가위 바위 보 게임</h1>
    </div>
  );
}

function Result(props) {
  return (
    <div className={styles.result}>
      <h1>Com: {props.com}</h1>
      <h1>Player: {props.player}</h1>
      <h1>{props.result}</h1>
    </div>
  );
}


function Scissors(props) {
  return (
    <div className={styles.control} onClick={() => {
      props.onSelect(0);
    }}>
      <img src='http://ggoreb.com/images/react/scissors.png' />
    </div >
  );
}
function Rock(props) {
  return (
    <div className={styles.control} onClick={() => {
      props.onSelect(1);
    }}>
      <img src='http://ggoreb.com/images/react/rock.png'></img>
    </div>
  );
}
function Paper(props) {
  return (
    <div className={styles.control} onClick={() => {
      props.onSelect(2);
    }}>
      <img src='http://ggoreb.com/images/react/paper.png'></img>
    </div>
  );
}


function App() {

  function onSelect(n) {
    console.log(n);
    const com = parseInt(Math.random * 3);

    if ((n + 1) % 3 == com) { // com 승

    } else if (n == com) { // 무승부

    } else {

    }
  }

  return (
    <>
      <Title />
      <Scissors onSelect={onSelect} />
      <Rock onSelect={onSelect} />
      <Paper onSelect={onSelect} />
      <Result />
      {/* result에게 state값 내려주기 */}
    </>
  )
}

export default App
