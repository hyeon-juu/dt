import styles from '../styles.module.css';

function Header(p) {
    return (
        <header className={styles.header}>
            <div className={styles.brand}>
                <span className={styles.dot} aria-hidden="true"></span>
                <span className={styles.title}>{p.title}</span>
            </div>
            <nav className={styles.nav} aria-label="primary">
                <a href="#features">Features</a>
                <a href="#gallery">Gallery</a>
                <a href="#about">About</a>
            </nav>
        </header>
    )
}
export default Header;