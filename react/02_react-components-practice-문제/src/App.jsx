/**
 * ✅ 과제: 순수 HTML 버전(pure-html/index.html)을 참고해,
 *    동일한 구조/디자인을 컴포넌트로 합성하세요.
 */
import Header from './components/Header';
import Hero from './components/Hero';
import styles from './styles.module.css';






function FeatureGrid() {
  return (
    <section className={styles.section} id="features">
      <h2>핵심 컴포넌트 섹션</h2>
      <div className={styles.grid}>
        <FeatureCard />
        {/* 매개변수 props주고 {props.children} */}
        {/* props.items.amp((v)=>{
          return <FeatureCard card={v}</FeatureCard>
          }}) */}
      </div>

    </section>
  )
}
function FeatureCard() {
  const items = [
    { icon: '⚡', title: '빠른 구성', text: '컴포넌트를 나누고 합성해 빠르게 페이지를 완성합니다.' },
    { icon: '🧱', title: '재사용성', text: '같은 UI 패턴을 다양한 곳에서 재사용합니다.' },
    { icon: '🛡️', title: '명확한 책임', text: '각 컴포넌트는 자신의 역할과 마크업에 집중합니다.' },
    { icon: '🎨', title: '디자인 일관성', text: '공통 스타일을 통해 전문가스러운 인상을 줍니다.' },
  ];

  return (
    <>
      {
        items.map((v) => {
          return (
            <article className={styles.card}>
              {/* v.card.icon 사용 */}
              <div className={styles.icon} aria-hidden="true">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </article>
          )
          console.log(v);

        })
      }
    </>
  )
}

function Gallery() {
  return (
    <section className={styles.section}>
      <h2>갤러리 섹션</h2>
      <div className={styles.gallery} id="gallery" aria-label="gallery thumbnails">
        <div className={styles.thumb}></div>
        <div className={styles.thumb}></div>
        <div className={styles.thumb}></div>
        <div className={styles.thumb}></div>
        <div className={styles.thumb}></div>
        <div className={styles.thumb}></div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <small className={styles.mono}>© 2025 Components Practice • All rights reserved.</small>
    </footer>
  )
}




export default function App() {
  return (
    <div className="app">
      {/* TODO: 컴포넌트 합성 */}
      <Header title="Components Practice" />
      <Hero />
      <FeatureGrid>
        {/* <FeatureCard></FeatureCard> */}
      </FeatureGrid>
      <Gallery />
      <Footer />
    </div>
  );
}
