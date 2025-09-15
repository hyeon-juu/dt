import './App.css';
import { useState, useRef } from 'react';

const App = () => {
  const [state, setState] = useState(false);
  const [pw, setPw] = useState('');
  const [npw, setNpw] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [add, setAdd] = useState('');
  // const ref = useRef();

  return (
    <div div className="container" >
      <h2>회원 가입</h2>
      <form>
        {
          !state ? <div className="form-group">
            <input
              type="checkbox"
              id="agree"
              onClick={(e) => setState(e.target.checked)}
            />
            <label className='agree' htmlFor="agree">이용약관에 모두 동의합니다</label>
          </div> :
            <div>
              <div className="form-group">
                <label htmlFor="userId">사용자 아이디</label>
                <input
                  type="text"
                  id="userId"
                  name="userId"
                  required
                  onChange={(e) => { setName(e.target.value) }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">비밀번호</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  onChange={(e) => { setPw(e.target.value) }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">비밀번호 확인</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  required
                  onChange={(e) => {
                    setNpw(e.target.value)
                    // if (pw == e.target.value) {
                    //   ref.current.style.display = 'none';
                    // }
                  }}
                />
                {
                  pw == npw ? "" : <label id="pw-match" className="pw-match">비밀번호가 일치해야 됩니다.</label>
                }
                {/* <label ref={ref} id="pw-match" className="pw-match">비밀번호가 일치해야 됩니다.</label> */}
              </div>

              <div className="form-group">
                <label htmlFor="email">이메일</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  onChange={(e) => { setEmail(e.target.value) }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phoneNumber">전화번호</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  required
                  onChange={(e) => { setPhone(e.target.value) }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="address">주소</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  onChange={(e) => { setAdd(e.target.value) }}
                />
              </div>

              <button type="submit" onClick={() => {
                alert(`
                  [입력된 내용]
                  아이디 : ${name}
                  비밀번호 : ${pw}
                  이메일 : ${email}
                  전화번호 : ${phone}
                  주소 : ${add}
                  `)
              }}>제출</button>
            </div>

        }
      </form>
    </div>

  );
};

export default App;
