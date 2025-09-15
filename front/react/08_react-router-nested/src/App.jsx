import { BrowserRouter, Routes, Route, Link, Outlet, useParams } from "react-router-dom";

function UsersLayout() {
  return (
    <div>
      <h2>👤 사용자 관리</h2>
      <nav>
        <Link to="list">목록</Link> |{" "}
        <Link to="detail/1">상세(1번)</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

function UserList() {
  return <div>✅ 유저 목록 화면</div>;
}

function UserDetail() {
  const { id } = useParams();
  return <div>✅ 유저 상세 화면 (ID: {id})</div>;
}

function PostsLayout() {
  return (
    <div>
      <h2>📝 게시글 관리</h2>
      <nav>
        <Link to="list">목록</Link> |{" "}
        <Link to="detail/100">상세(100번)</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

function PostList() {
  return <div>✅ 게시글 목록 화면</div>;
}

function PostDetail() {
  const { id } = useParams();
  return <div>✅ 게시글 상세 화면 (ID: {id})</div>;
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>React Router DOM - Nested Routing</h1>
        <nav>
          {/* 최상위 이동 메뉴 */}
          <Link to="/users/list">사용자 관리</Link> |{" "}
          <Link to="/posts/list">게시글 관리</Link>
        </nav>
        <hr />

        <Routes>
          {/* Users 그룹 */}
          <Route path="/users" element={<UsersLayout />}>
            <Route path="list" element={<UserList />} />
            <Route path="detail/:id" element={<UserDetail />} />
          </Route>

          {/* Posts 그룹 */}
          <Route path="/posts" element={<PostsLayout />}>
            <Route path="list" element={<PostList />} />
            <Route path="detail/:id" element={<PostDetail />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
