import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/pexels1.jpg" alt="" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src="/profile.jpg"
            alt=""
            className={styles.avatar}
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author :-</span>
            <span className={styles.detailValue}>Sudhansu Panda</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sit
          accusantium error, minus accusamus assumenda, debitis molestiae
          corrupti veritatis aspernatur possimus autem fugiat quaerat? Itaque
          maxime repellendus sapiente repudiandae id?
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
