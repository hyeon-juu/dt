export default function Pagination({ totalPages, page, onPageChange }) {

  const maxPageButtons = 10; // 한번에 보여줄 페이지 버튼 수 (페이지네이션)

  // TODO: 현재 페이지(page)가 속한 그룹의 시작(start)과 끝(end)을 계산하세요.
  const start = 1;
  let end = start + maxPageButtons - 1;
  if (end > totalPages) end = totalPages;

  const pages = [];
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      {/* TODO: 맨 앞으로(«), 이전 그룹(<), 다음 그룹(>), 맨 뒤로(») 버튼을 조건에 맞게 작성하세요 */}

      {/* 
        TODO: pages 배열을 map으로 버튼을 출력하세요. 
        현재 page와 같은 번호는 스타일을 다르게 적용하세요. 
      */}

      {
        pages.map((v) => {
          return (

            page == v ? <button style={btnStyle2} onClick={() => onPageChange(v)}>{v}</button> :
              <button style={btnStyle} onClick={() => onPageChange(v)}>{v}</button>

            // <button style={btnStyle} onClick={() => onPageChange(v)}>{v}</button>

          )
        })
      }

    </div>
  );
}

const btnStyle = {
  margin: "4px",
  padding: "6px 12px",
  borderRadius: "4px",
  cursor: "pointer",
};
const btnStyle2 = {
  margin: "4px",
  padding: "6px 12px",
  borderRadius: "4px",
  cursor: "pointer",
  backgroundColor: "green",
  color: "white"
};