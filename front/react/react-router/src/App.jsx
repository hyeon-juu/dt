import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom'


function Component1() {
  return <div> 1번 화면</div>
}
function Component2() {
  return <div>2번 화면</div>
}
function Component3() {
  return <div>3번 화면</div>
}
function ComponentN() {
  const { number } = useParams();
  return <div>(1~3제외) {number}번 화면</div>
}
function ComponentAZ() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');
  const name = searchParams.get('name');
  return <div>ID-{id}, NAME-{name}</div>
}

function App() {

  return (
    <BrowserRouter>
      <div>
        <h1>React Router DOM</h1>
        {/* <a href='/1'>1번으로 이동</a> /&nbsp;
        <a href='/2'>2번으로 이동</a> /&nbsp;
        <a href='/3'>3번으로 이동</a> */}

        <Link to='/1'>1번으로 이동</Link> /&nbsp;
        <Link to='/2'>2번으로 이동</Link> /&nbsp;
        <Link to='/3'>3번으로 이동</Link> /&nbsp;
        <Link to='/4'>4번으로 이동</Link> /&nbsp;
        <Link to='/5'>5번으로 이동</Link>

        {/* <NavLink to='/1'>1번으로 이동</NavLink> /&nbsp;
        <NavLink to='/2'>2번으로 이동</NavLink> /&nbsp;
        <NavLink to='/3'>3번으로 이동</NavLink> */}
        {/* 해당 컴포넌트에게 active 클래스 줌 */}
        <Link to='/a?id=10&name=abc'>이동 (Query String)</Link>

        <Routes>
          {/* <Route path='/' element={<Component1 />} /> */}
          <Route path='/az' element={<ComponentAZ />} />
          <Route path='/1' element={<Component1 />} />
          <Route path='/2' element={<Component2 />} />
          <Route path='/3' element={<Component3 />} />
          <Route path='/:number' element={<ComponentN />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
