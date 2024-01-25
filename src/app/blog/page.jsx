import PostCard from "@/components/postcard/postCard";
import styles from "./blog.module.css";

// data fatching

/*  export async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("SOmething went Wrong");
  }
  return res.json();
} */

const BlogPage = async () => {
  /* {next: { revalidate: 3600 },} 
    data reload again in every 1hr or we can use {cache : "no-store "} every time we visit the page it get the fresh data from the site.
*/
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 3600 },
  });
  const data = await res.json();
  return (
    <div className={styles.container}>
      {data.map((posts) => (
        <div className={styles.post} key={posts.id}>
          <PostCard post={posts} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
