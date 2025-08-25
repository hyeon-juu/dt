import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header';
import Section from './Section';
import Article from './Article';
import Footer from './Footer';


function App() {

  //copy outerHTML에서 복사하고 싶은 태그 복사하기
  //그냥 너의 뇌를 내가 복사해 오면 안되니?
  //난... 항상 파일 여는 거에서 막히는데...ㅎㅎㅎ

  const footer_data = [
    '1. 830 - 들어맞는 숫자가 아예 없으므로 아웃. 이때부터 0, 3, 8이 후보에서 빠지므로 남는 숫자는 1, 2, 4, 5, 6, 7, 9다.',
    '2. 659 - 6이 있지만 위치가 다르므로 1볼. 게임 상으로는 어떤 숫자가 맞는지 모르기 때문에 가장 난감하다.',
    '3. 264 - 2가 있고 위치가 맞으며, 6이 있지만 위치가 다르므로 1스트라이크 1볼.',
    '4. 126 - 숫자는 전부 맞지만 위치는 6만 맞고 나머지 둘은 다르므로 1스트라이크 2볼.',
    '5. 216 - 전부 맞으므로 승리.'
  ]

  return (
    <>
      <Header title="야구게임 방식" />
      <Section />
      <Article />
      <Footer footer_data={footer_data} />
    </>
  )
}

export default App
