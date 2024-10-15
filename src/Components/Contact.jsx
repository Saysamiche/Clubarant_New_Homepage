import styles from "./Contact.module.css";
export default function Contact({nightMode}) {
  const modeClass = nightMode ? styles.nightMode : styles.lightMode;
  return (
    <div className={`${styles.wrapper} ${modeClass}`}>
      <div className={styles.container}>
        <div className={styles.contact}>
          <h2>Contact Us</h2>
          <h4>Got a question for us? We've got the answers.</h4>
          <p>
            Our team is readily available and committed to providing prompt and
            efficient responses to any inquiries or concerns you may have,
            ensuring that all your questions are addressed in a timely manner.
          </p>
        </div>

        <div className={styles.inputwrap}>
          <div className={styles.inputfield}>
            <input type="text" placeholder="Full Name" />

            <input type="text" placeholder="Email" />

            <input type="text" placeholder="How Can We Help You" />

            <div className={styles.btnsubmit}>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
