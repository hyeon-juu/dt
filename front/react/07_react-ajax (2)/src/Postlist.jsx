import { useEffect, useState } from 'react';
import { fetchPosts } from './api';

function Postlist() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function get() {
        const res = await fetchPosts();//동기처럼 동작
        setPosts(res);
        setLoading(false);
        // console.log(res);
    }

    useEffect(() => { //useEffect는 콜백함수가 비동기이면 안됨
        get();


        // fetchUsers()
        //   .then(data => {
        //     setPosts(data);
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
            {posts.map(post => <li key={post.id}>{post.title}</li>)}
        </ul>
    );
}

export default Postlist;
