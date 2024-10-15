import styles from "./HowItWorks.module.css";
import M1 from "/Images/M1.png";
import M2 from "/Images/M2.png";
import M3 from "/Images/M3.png";
import M4 from "/Images/M4.png";

export default function HowItWorks({ nightMode }) {
  const modeClass = nightMode ? styles.nightMode : styles.lightMode;
  return (
    <div className={`${styles.container} ${modeClass}`}>
      <div className={styles.howitworks}>
        <div className={styles.line}></div>
        <h2>How It Works</h2>
        <div className={styles.line}></div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.wrapscontainer}>
          <div className={styles.wraps}>
            <div className={styles.text}>
              <div className={styles.texth4}>
                <h4>1</h4>
              </div>
              <div className={styles.menuimage}>
                <img src={M2} alt="Menu-Image" />
              </div>
              <div className={styles.testing}>
                <h5>Sign up</h5>
                <p>Create your account and set up your restaurant profile.</p>
              </div>
            </div>
          </div>

          <div className={styles.wraps}>
            <div className={styles.text}>
              <div className={styles.texth4}>
                <h4>2</h4>
              </div>
              <div className={styles.menuimage}>
                <img src={M1} alt="Menu-Image" />
              </div>
              <div className={styles.testing}>
                <h5>Upload Menu</h5>
                <p>And your menu items, descriptions, prices, and images.</p>
              </div>
            </div>
          </div>

          <div className={styles.wraps}>
            <div className={styles.text}>
              <div className={styles.texth4}>
                <h4>3</h4>
              </div>
              <div className={styles.menuimage}>
                <img src={M4} alt="Menu-Image" />
              </div>
              <div className={styles.testing}>
                <h5>Customize</h5>
                <p> Choose a template and customize your digital menu.</p>
              </div>
            </div>
          </div>

          <div className={styles.wraps}>
            <div className={styles.text}>
              <div className={styles.texth4}>
                <h4>4</h4>
              </div>
              <div className={styles.menuimage}>
                <img src={M3} alt="Menu-Image" />
              </div>
              <div className={styles.testing}>
                <h5>Go Live</h5>
                <p>
                  Publish your menu and provide your customers with an
                  exceptional dining experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
