import Image from "next/image";
import styles from "./contact.module.css";
const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Sure name"></input>
          <input type="text" placeholder="Email Address"></input>
          <input type="text" placeholder="Phone number"></input>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
