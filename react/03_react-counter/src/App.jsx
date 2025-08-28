import './App.css';
import styles from './App.module.css';
import { useEffect, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const onClick = () => {
    setCount(count + 1); //state 바뀜 
  }

  const [color, setColor] = useState('red');
  const onClick2 = () => {
    setColor('blue');
  }

  // console.log(`@Counter 컴포넌트가 생성되거나 state가 변경되어 렌더링 될 때마다 실행`);

  useEffect(() => {
    // console.log(`Counter 컴포넌트가 생성 될 때만 실행!!`);
  }, []);

  useEffect(() => {
    // console.log(`Counter 컴포넌트 생성, count 값 변경 될 때 실행`);
  }, [count]);

  useEffect(() => {
    // console.log(`Counter 컴포넌트 생성, color 값 변경 될 때 실행`);
  }, [color]);




  useEffect(() => {
    return () => {
      // console.log(`Counter 컴포넌트 제거`);
    }
  }, []);



  return (

    <div>
      <h1>{count}</h1>
      <button onClick={onClick}>Click</button>
      <button onClick={onClick2}>Click2</button>
    </div>
  )
}

function App() {
  const [hide, setHide] = useState(false);
  const [toc, setToc] = useState([]); //useState() => undefined
  const [weather, setWeather] = useState([]);

  const onClick3 = () => {
    setHide(!hide);
    fetchToc();
    weatherr();
  };

  async function fetchToc() {
    const url = 'http://ggoreb.com/api/toc.jsp'

    //비동기를 동기처럼 동작 또는 then()
    const res = await fetch(url); // 가져오기
    const data = await res.json(); // 사용하기 쉬운 형태로 변형
    const result = data.map(v => v.title);
    setToc(result);
  }

  async function weatherr() {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=35.1728639953646&lon=129.130680529903&units=metric&appid=6edee3c2aa182bc44d18ccb204c98a31'
    const res = await fetch(url);
    const data = await res.json();
    const result = data.weather.map(v => {
      return [v.main, v.description, v.icon]
      // const main = v.main;
      // const description = v.description;
      // const icon = v.icon;

    })
    console.log(result)
    setWeather(result);
    // console.log(result);

  }

  return (
    <div className={styles.App}>
      <button onClick={onClick3}>Show / Hide</button>
      {!hide ? <Counter /> : null}

      {/* <Counter /> */}
      <ul>
        {
          //현재 toc는 undefined 이기 때문에 오류
          toc.map((v) => {
            return (
              <li>{v}</li>
            )
          })
        }
      </ul>
      <ul>
        {
          // 현재 toc는 undefined 이기 때문에 오류
          weather.map((v) => {
            return (
              <>
                <li>{v[0]}</li>
                <li>{v[1]}</li>
                <li><img src={`http://openweathermap.org/img/wn/${v[2]}@2x.png`} alt="" /></li>
              </>
            )
          })
        }
      </ul>
    </div>
  )
}

export default App;
