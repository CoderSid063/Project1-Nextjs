import styles from "./postUser.module.css";
const PostUser = async ({ userId }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const user = await res.json();
  const { username } = user;
  // console.log(user);
  // console.log(username);
  return (
    <div className={styles.container}>
      <span className={styles.title}>Author :-</span>
      <span className={styles.userName}>{username}</span>
    </div>
  );
};

export default PostUser;
