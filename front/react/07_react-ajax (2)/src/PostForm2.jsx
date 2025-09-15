import { useState } from 'react';
import { savePost2 } from './api';

function PostForm2() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    return (
        <div>
            <h2>게시물 추가</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                savePost2(title, body);
            }}>
                <input value={title} placeholder="제목" onChange={(e) => {
                    setTitle(e.target.value);
                }} />
                <textarea value={body} placeholder="내용" onChange={(e) => {
                    setBody(e.target.value);
                }} />

                {/* <textarea></textarea> */}
                <button type="submit">전송</button>
            </form>

            <pre>
                응답 결과<br />
                제목 : {title}<br />
                내용 : {body}
            </pre>
        </div>
    );
}

export default PostForm2;
