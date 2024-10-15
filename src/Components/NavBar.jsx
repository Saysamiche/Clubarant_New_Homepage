import { useState } from "react";
import Logolight from "/Images/Logolight.png";
import Logo from "/Images/Logo.png";
import moon from "/Images/moon.png";
import sun from "/Images/sun.png";
import styles from "./NavBar.module.css";

export default function NavBar({ toggleNightMode, nightMode }) {
  const [isOpened, setIsOpened] = useState(false);

  const toggleMenu = () => {
    setIsOpened(!isOpened);
  };
  const modeClass = nightMode ? styles.nightMode : styles.lightMode;

  return (
    <div className={`${styles.bodycontainer} ${modeClass}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          {nightMode ? (
            <img src={Logo} alt="Clubarant-Logo" />
          ) : (
            <img src={Logolight} alt="Clubarant-Logo" />
          )}
        </div>
        <div className={styles.navBar}>
          <ul className={`${styles.navlists} ${isOpened ? styles.open : ""}`}>
            <li className={styles.navlist}>Features</li>
            <li className={styles.navlist}>How it works</li>
            <li className={styles.navlist}>Contact us</li>
          </ul>
        </div>

        <div className={styles.nightbutton}>
          <div className={`${styles.night} ${isOpened ? styles.open : ""}`}>
            {nightMode ? (
              <img
                onClick={toggleNightMode}
                className={styles.sun}
                src={sun}
                alt="Light-mode"
              />
            ) : (
              <img
                onClick={toggleNightMode}
                className={styles.moon}
                src={moon}
                alt="Night-mode"
              />
            )}
          </div>

          <div className={styles.navbutton}>
            <button
              className={`${styles.login} ${isOpened ? styles.open : ""}`}
            >
              Log in
            </button>
          </div>
        </div>
        <button className={styles.togglebutton} onClick={toggleMenu}>
          {nightMode ? (
            isOpened ? (
              <h4 className={styles.cancelnight}>X</h4>
            ) : (
              <img className={styles.imgtoggle} src="/Images/menunight.png" />
            )
          ) : isOpened ? (
            <h4 className={styles.cancel}>X</h4>
          ) : (
            <img className={styles.imgtoggle} src="/Images/menulight.png" />
          )}
        </button>
      </div>

      <div className={styles.transcontainer}>
        <div className={styles.texts}>
          <h1>
            Transform Your <span>Menu</span> List With <br />
            Clubarant
            <span> E-Menu</span> Platform
          </h1>
          <p>
            Easily create, upload, and update your menus <br />
            online with our intuitive digital solution.
          </p>
        </div>

        <div className={styles.imgbackground}>
          <button className={styles.started}>Get started</button>
        </div>
      </div>
    </div>
  );
}
