/* TODO: module 스타일 CSS 가져오기 */
import styles from './InfoSection.module.css';

function Nav() {
  const styles = {
    /* TODO: inline 스타일 CSS 작성 */
  
};

  return (
    /* TODO: inline 스타일 CSS 적용 */
    <nav style={{ background:"white", margin:"16px", borderRadius:"12px", border:"1px solid #eee",}}>
      <div style={{display:"flex", gap:"12px", padding:"12px 16px"}}>
        <a href="#" style={{textDecoration:"none", padding:"8px 12px", borderRadius:"8px", color:"#333"}}>홈</a>
        <a href="#"style={{textDecoration:"none", padding:"8px 12px", borderRadius:"8px", color:"#333"}}>가이드</a>
        <a href="#"style={{textDecoration:"none", padding:"8px 12px", borderRadius:"8px", color:"#333"}}>문의</a>
      </div>
    </nav>
  );
}

/* TODO: module 스타일 CSS 적용 */
function InfoSection() {
  return (
    <section className={styles.card}>
      <span className={styles.badge}>GUIDE</span>
      <h3>동일 UI를 다른 방식으로 스타일링</h3>
      <p>
        Nav는 인라인으로, 이 섹션은 CSS Module로 스타일을 적용했습니다.
      </p>
      <a className={styles.cta} href="#">시작하기</a>
    </section>
  );
}

export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f7f7f8", minHeight: "100vh" }}>

      <header style={{ padding: 24, background: "white", borderBottom: "1px solid #eee" }}>
        <h1 style={{ margin: 0, fontSize: 24 }}>스타일 연습 프로젝트</h1>
        <p style={{ margin: "6px 0 0", color: "#666" }}>
          Nav는 인라인, Section은 CSS Module로 스타일링합니다.
        </p>
      </header>

      {/* 인라인 스타일 컴포넌트 */}
      <Nav /> 

      {/* CSS Module 컴포넌트 */}
      <InfoSection />
    </div>
  );
}
