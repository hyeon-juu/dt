
import { useState } from 'react';
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
function Nav(p) {
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
            return <li key={i}><a href="1.html">{v}</a></li>
          })
        }
      </ul>
    </nav>
  );
}

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


function App() {
  // const list = [
  //   'HTML', 'CSS', 'JavaScript'
  // ]; //state가 되어야 함
  const [list, setList] = useState(['HTML', 'CSS', 'JavaScript'])

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
        list.push(1);
        const list2 = [...list]; //참조자료형 -> 주소값을 공유함
        setList(list2);
      }}>추가</button>
      <Header title="WEB" t="World Wide Web"></Header>
      {/* <Nav study={["HTML","CSS","JavaScript"]} link={['1.html','2.html','3.html']}></Nav> */}
      {/* <Nav
        info={[{ name: "HTML", link: '1.html' },
        { name: "CSS", link: '2.html' },
        { name: "JavaScript", link: '3.html' }
        ]}></Nav> */}
      <Nav list={list}></Nav>
      <Profile name="리액트" text={true} count={[10, 20, 30]}></Profile>
    </>
  )
}

export default App
