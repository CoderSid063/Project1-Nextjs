import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/PostUser";

const SinglePost = async ({ params }) => {
  const { slug } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  const post = await res.json();

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/pexels1.jpg" alt="" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image
            src="/profile.jpg"
            alt=""
            className={styles.avatar}
            width={50}
            height={50}
          />
          <PostUser userId={post.userId} />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <p>{post.body}</p>
      </div>
    </div>
  );
};

export default SinglePost;
