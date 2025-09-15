/*
  TODO:
  1. input 태그에 onKeyDown 이벤트 핸들러를 연결
  2. event 객체에서 눌린 키(event.key)를 콘솔에 출력
*/
function KeyLogger() {

  const handleKeyDown = (e) => {
    console.log(e.key)
    // TODO: 입력된 키가 무엇인지 콘솔창에 출력
    // e.target.value

  };

  return (
    <div>
      <input type="text" placeholder="키 입력"

        // TODO: onKeyDown 핸들러 작성
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default KeyLogger;
