export default function App() {
  const user = {
    name: "Joy",
    role: "강의자",
    badge: "⭐ Gold Member",
    comment: "컴포넌트 합성과 추출을 연습해봅시다!"
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>컴포넌트 합성 · 추출 · 객체 props</h1>
      <Comment user={user}/>
    </div>
  );
}

function Comment(p) {
  return (
    <div style={{ border: "1px solid #ddd", borderRadius: 8, padding: 12 }}>
      <h2>💬 Comment</h2>
      <UserInfo user={p.user}/>
      <p style={{ marginTop: 8 }}>{p.user.comment}</p>
    </div>
  );
}

function UserInfo(p) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <Badge user={p.user}/>
      <div>
        <strong>{p.user.name}</strong> ({p.user.role})
      </div>
    </div>
  );
}

function Badge(p) {
  return (
    <span
      style={{
        backgroundColor: "gold",
        color: "black",
        padding: "4px 8px",
        borderRadius: "12px",
        fontSize: 12,
        fontWeight: "bold"
      }}
    >
      {p.user.badge}
    </span>
  );
}
