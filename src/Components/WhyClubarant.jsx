import styles from "./WhyClubarant.module.css";
import Upload from "/Images/Upload.png";
import Update from "/Images/Update.png";
import Heart from "/Images/Heart.png";
import User from "/Images/User.png";
// import Left from "/Images/Left.png";
// import Middle from "/Images/Middle.png";
// import Right from "/Images/Right.png";

export default function WhyClubarant({ nightMode }) {
  const modeClass = nightMode ? styles.nightMode : styles.lightMode;
  return (
    <div className={`${styles.container} ${modeClass}`}>
      <div className={styles.wrapping}>
        {/* <div className={styles.bird}>
          <img className={styles.img1} src={Left} alt="left" />
          <img className={styles.img2} src={Middle} alt="middle" />
          <img className={styles.img3} src={Right} alt="right" />
        </div> */}

        <div className={styles.whydigidish}>
          <div className={styles.line}></div>
          <h2>Why Clubarant?</h2>
          <div className={styles.line}></div>
        </div>
      </div>

      <div className={styles.wraps}>
        <div className={styles.wrap}>
          <div className={styles.wrapimg}>
            <img src={Upload} alt="upload-image" />
            <h4>Easy Menu Management</h4>
          </div>
          <div className={styles.text}>
            <p>Create, upload, and update menu items effortlessly.</p>
          </div>
        </div>
        <div className={styles.wrap}>
          <div className={styles.wrapimg}>
            <img src={Update} alt="update-image" />
            <h4>Real-Time Updates</h4>
          </div>
          <div className={styles.text}>
            <p>Ensure your menu is always up-to-date with real-time changes.</p>
          </div>
        </div>
        <div className={styles.wrap}>
          <div className={styles.wrapimg}>
            <img src={Heart} alt="heart-eyes-image" />
            <h4>Visually Appealing</h4>
          </div>
          <div className={styles.text}>
            <p>Provide customers with a modern and engaging digital menu. </p>
          </div>
        </div>
        <div className={styles.wrap}>
          <div className={styles.wrapimg}>
            <img src={User} alt="user-image" />
            <h4>User-Friendly Interface</h4>
          </div>
          <div>
            <p className={styles.text}>
              Intuitive design makes managing your menu simple and
              straightforward.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
