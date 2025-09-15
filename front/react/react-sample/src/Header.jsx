function Header(props) {
    let title = props.title;
    console.log(title);

    title += "1";
    console.log(title);
    return (
        // 부모부터 받은 props 수정 불가 readonly
        <header><h1>{props.title}</h1></header>
    )
}
export default Header;