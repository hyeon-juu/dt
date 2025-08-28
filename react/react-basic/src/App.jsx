
import { use, useState } from 'react';
import './App.css'
import styles from './Avatar.module.css';
import Header from './Header';

// const style = {
//   fontSize : "2rem",
//   backgroundColor : "lightgray"
// }

// DOM이 반복해서 나오는 상황 -> 순서가 있어야 함
//반복되는 최 상단 녀석 li에게 key 줘야함
//key 겹치면 안 됨 -> 숫자로 많이 사용함
//state =  값 기억, 다시 렌더링


const Profile = (props) => {
  // console.log(props);
  return (
    <div>
      <ul>
        {props.count.map((i, index) => {
          return <li key={index}>{i}</li>;
        })}
      </ul>
      {props.count}
      {props.name}
      {
        props.count.map((v, i) => {
          return <h2 key={i}>{v}</h2>
        })
      }
    </div>
  )
}

function Comment(props) {
  return (
    <div className="comment">
      <UserInfo user={props.author} />
      <div className="comment-text">
        {props.text}
      </div>
      <div className="comment-date">
        {props.date}
      </div>
    </div>
  )
}
function UserInfo(props) {
  return (
    <div className="user-info">
      <Avatar user={props.user} />
      <div className="user-info-name">
        {props.user.name}
      </div>
    </div>
  )
}
function Avatar(props) {
  return (
    <img className={styles.avatar}
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  )
}

function Nav(p) {
  const [update, setUpdate] = useState(false);
  const [updateIndex, setUpdateIndex] = useState(-1);
  const [input, setInput] = useState('');

  return (
    <nav>
      <ul>
        {/* {p.study.map((v)=>{
          return <li><a href='2.html'>{v}</a></li>
        })} */}
        {/* {p.info.map((v) => {
          console.log(p);
          return <li><a href={v.link}>{v.name}</a></li>
        })} */}
        {
          p.list.map((v, i) => {
            return (
              <>
                <li key={i}>
                  {

                    // update == true &&
                    i == updateIndex ?
                      <>
                        <input value={input} onChange={(e) => {
                          setInput(e.target.value);
                        }}></input>

                        <button onClick={() => {
                          setUpdateIndex(i);
                        }}>저장</button></> :


                      <><a href="1.html">{v}</a>

                        <button onClick={() => {
                          console.log({ i })
                          p.deleteFunc(i);
                        }}>x</button>

                        <button onClick={() => {
                          if (i != updateIndex) setUpdate(true);
                          // setUpdate(!update);
                          setUpdateIndex(i);
                          setInput(v);
                        }}>수정</button>
                      </>
                  }
                </li>
              </>
            )
          })
        }
      </ul>
    </nav>
  );
}


function App() {
  // const list = [
  //   'HTML', 'CSS', 'JavaScript'
  // ]; //state가 되어야 함
  const [list, setList] = useState(['HTML', 'CSS', 'JavaScript']);
  const [col, setCol] = useState("red");


  const [input, setInput] = useState('');
  return (
    <>
      {/* <Header /> */}
      {/* <Comment author={
        {
          name: "A",
          avatarUrl: "http://ggoreb.com/images/luffy.jpg"
        }
      }></Comment> */}
      {/* 추가 버튼 클릭 할 때마다 header의 제목 색이 빨->파 파->빨 변경 */}
      <button onClick={() => {
        list.push(input);
        const list2 = [...list]; //참조자료형 -> 주소값을 공유함
        setList(list2);
      }}>추가</button>

      <button onClick={() => {
        setCol(c => c === 'red' ? 'blue' : 'red');
      }}>색상변경</button>

      <input type="text" value={input} onChange={(e) => {
        let v = e.target.value;//문자열(기본 자료형)
        //e.target은 input 태그
        setInput(v);
      }} />

      <Header title="WEB" t="World Wide Web" style={{ color: col }}></Header>

      {/* <Nav study={["HTML","CSS","JavaScript"]} link={['1.html','2.html','3.html']}></Nav> */}
      {/* <Nav
        info={[{ name: "HTML", link: '1.html' },
        { name: "CSS", link: '2.html' },
        { name: "JavaScript", link: '3.html' }
        ]}></Nav> */}
      <Nav list={list} deleteFunc={(i) => {
        console.log('deleteFunc 실행');
        const list2 = [...list]; //...없으면 주소 대입
        list2.splice(i, 1);
        //splice(index,개수)
        //array api - filter()
        setList(list2);
      }} ></Nav>
      <Profile name="리액트" text={true} count={[10, 20, 30]}></Profile>
    </>
  )
}

export default App
