import styles from "./singlePage.module.css";
import Image from "next/image";
import Menu from "../components/Menu/Menu";
import Comments from "../components/comments/Comments";

const SinglePage = () => {

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Title</h1>
          <div className={styles.user}>
              <div className={styles.userImageContainer}>
                <Image src='/p1.jpeg' alt="" fill className={styles.image} />
              </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Umair Rao</span>
              <span className={styles.date}>10.02.2024</span>
            </div>
          </div>
        </div>
          <div className={styles.imageContainer}>
            <Image src='/p1.jpeg' alt="" fill className={styles.image} />
          </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu/>
      </div>
    </div>
  );
};

export default SinglePage;
