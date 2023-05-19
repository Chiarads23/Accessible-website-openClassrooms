import styles from "../styles/footer.module.scss";
import img from "../assets/police.png";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer role="contentInfo">
      <nav className={styles.footerNav} aria-label="footer navigation">
        <ul>
          <h3>Contact</h3>
          <li>
            <a href="#">Call Alfred</a>
          </li>
          <li>
            <a href="#">Light the bat signal</a>
          </li>
          <li>
            <a href="#">Turn yourself in</a>
          </li>
          <li>
            <a href="#">Tell us what you think</a>
          </li>
        </ul>
        <ul>
          <h3>Careers</h3>
          <li>
            <a href="#">Getting started</a>
          </li>
          <li>
            <a href="#">Available positions</a>
          </li>
        </ul>
        <ul>
          <li>
            <h3>Follow</h3>
          </li>
          <li className={styles.socialLinks}>
            <a href="#">
              <span className={styles.srOnly}>Twitter</span>
              <FaTwitter />
            </a>
            <a href="#">
              <span className={styles.srOnly}>Facebook</span>
              <FaFacebookF />
            </a>
            <a href="#">
              <span className={styles.srOnly}>Instagram</span>
              <FaInstagram />
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.partners}>
        <h3 className={styles.footerTitle}>Partners</h3>
        <img src={img} alt="City of Gotham Police Department logo" />
      </div>
    </footer>
  );
}

export default Footer;
