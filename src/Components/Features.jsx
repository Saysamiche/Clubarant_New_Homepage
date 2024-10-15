import styles from "./Features.module.css";
import Mask from "/Images/Mask.png";
// import Left from "/Images/Left.png";
// import Middle from "/Images/Middle.png";
// import Right from "/Images/Right.png";
export default function Features({ nightMode }) {
  const modeClass = nightMode ? styles.nightMode : styles.lightMode;
  return (
    <div className={`${styles.container} ${modeClass}`}>
      <div className={styles.features}>
        <div className={styles.line}></div>
        <h2> Features Designed For Your Success </h2>
        <div className={styles.line}></div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.textwrapper}>
          {/* <div className={styles.bird}>
            <img className={styles.img1} src={Left} alt="left" />
            <img className={styles.img2} src={Middle} alt="middle" />
            <img className={styles.img3} src={Right} alt="right" />
          </div> */}

          <div className={styles.imgwrap}>
            <img src={Mask} alt="food-image-puzzle" />
          </div>

          <div className={styles.textwrap}>
            <p>
              <span>CUSTOMIZABLE TEMPLATES: </span> Choose from a variety of
              templates to match your restaurant's style.
            </p>
          </div>

          <div className={styles.textwrap}>
            <p>
              <span>MULTI-DEVICE COMPATIBILITY: </span>Access your digital menu
              on any device, anywhere.
            </p>
          </div>

          <div className={styles.textwrap}>
            <p>
              <span>PHOTO AND DESCRIPTION UPLOADS: </span> Add detailed
              descriptions and high-quality images to showcase your dishes.
            </p>
          </div>

          <div className={styles.textwrap}>
            <p>
              <span>PRICE MANAGEMENT: </span> Easily update and manage prices
              for all your menu items.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
