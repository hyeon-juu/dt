import { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);

  /*
    TODO: userData.json 파일을 fetch()로 불러오세요.
    - useEffect() Hook을 반드시 사용해야 됩니다.
    - 데이터 파일의 위치: public/userData.json
    - 가져온 데이터를 users state에 저장하세요.
  */
  useEffect(() => {
    const res = fetch('/public/userData.json')
      .then((res) => res.json())
      .then((d) => {
        setUsers(d.users);
        // console.log(d.users);
      })
  }, [])

  // useEffect(() => {
  //   async function get() {
  //     await fetch("/userData.json");
  //     const data = await res.json();
  //     setUsers(data);
  //   }
  //   get();
  // }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>User Data</h2>
      <ul>

        {/*
          TODO: users state 배열을 map()으로 출력하세요.
          1) 이름 + 위치 출력
          2) 게시글 제목과 댓글 개수를 함께 출력
          <li style={styles.user}>
            <strong>이름</strong> (위치)
            <ul>
              <li style={styles.post}>
                📝 게시글 제목 (00개의 댓글)
              </li>
            </ul>
          </li>
        */}
        {
          users.map((v) => {
            return (
              <li style={styles.user}>
                <strong>{v.name}</strong> {v.profile.location}
                <ul>

                  {
                    v.posts.map((v) => {
                      return (
                        <li style={styles.post}>
                          📝 {v.title} ({v.comments.length}개의 댓글)
                        </li>
                      )
                    })
                  }

                </ul>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

const styles = {
  container: { border: "1px solid #ddd", padding: 20, width: "400px" },
  title: { fontSize: "20px", marginBottom: "10px" },
  user: { marginBottom: "20px", textAlign: "left" },
  post: { paddingLeft: "10px" },
};

export default UserList;
