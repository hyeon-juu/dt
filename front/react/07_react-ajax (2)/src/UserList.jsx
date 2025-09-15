import { useEffect, useState } from 'react';
import { fetchUsers } from './api';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function get() {
    const res = await fetchUsers();//동기처럼 동작
    setUsers(res);
    setLoading(false);
    // console.log(res);
  }

  useEffect(() => { //useEffect는 콜백함수가 비동기이면 안됨
    get();


    // fetchUsers()
    //   .then(data => {
    //     setUsers(data);
    //     setLoading(false);
    //   })
    //   .catch(err => {
    //     setError(err);
    //     setLoading(false);
    //   });

  }, []);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>에러: {error.message}</p>;

  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}

export default UserList;
