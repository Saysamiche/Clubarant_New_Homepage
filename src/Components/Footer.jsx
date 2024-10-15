import styles from "./Footer.module.css";
import Logo from "/Images/Logo.png";
import Facebook from "/Images/Facebook.png";
import Instagram from "/Images/Instagram.png";
import X from "/Images/X.png";
import LinkedIn from "/Images/LinkedIn.png";
import Left from "/Images/Left.png";
import Middle from "/Images/Middle.png";
import Right from "/Images/Right.png";
export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.bird}>
        <img className={styles.img1} src={Left} alt="left" />
        <img className={styles.img2} src={Middle} alt="middle" />
        <img className={styles.img3} src={Right} alt="right" />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.logocontainer}>
          <img src={Logo} alt="Clubarant-Logo" />
          <p>2024 Clubarant. All rights reserved.</p>
        </div>

        <div className={styles.services}>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>

        <div className={styles.address}>
          <p>Digidish@gmail.com</p>
          <p>+2341234567789</p>
          <div className={styles.wrapmedia}>
            <p className={styles.follow}>Follow Us:</p>
            <p>
              <img
                className={styles.media}
                src={Facebook}
                alt="Facebook-logo"
              />
              <img
                className={styles.media}
                src={Instagram}
                alt="Instagram-logo"
              />
              <img className={styles.media} src={X} alt="X-logo" />
              <img
                className={styles.media}
                src={LinkedIn}
                alt="LinkedIn-logo"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
