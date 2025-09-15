import styles from './Comment.module.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function Comment(props) {
    return (
        <div>
            {/* className={styles.wrapper} */}
            {/* <div>
                <img
                    src="http://ggoreb.com/images/Portrait_Placeholder.png"
                    className={styles.image}
                />
            </div>
            <div className={styles.contentContainer}>
                <span className={styles.nameText}>{props.name}</span>
                <span className={styles.commentText}>{props.comment}</span>
            </div> */}
            <Card style={{ width: '18rem' }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title><img
                        src="http://ggoreb.com/images/Portrait_Placeholder.png"
                        className={styles.image}
                    /></Card.Title>
                    <Card.Text>
                        <span className={styles.nameText}>{props.name}</span>
                        <span className={styles.commentText}>{props.comment}</span>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
export default Comment;
// npm에 컴포넌트 올려보기