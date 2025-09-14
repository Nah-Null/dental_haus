import React from "react";
import styles from "./css/Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-container"]}>
        <div>
          <img
            src="img/Dental Haus (1).png"
            alt="Dental Logo"
            style={{ height: '5rem' }}
            className={styles["footer-logo"]}
          />
          <p className={styles["footer-text"]}>
            คลินิกทันตกรรมเดนทัลเฮาส์ Dental Haus แจ้งวัฒนะ ทำฟัน จัดฟัน รากเทียม
          </p>
        </div>

        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Rickrolling_QR_code.png"
            alt="Dental Logo"
            style={{ height: '10rem' }}
            className={styles["footer-logo"]}
          />
          <p className={styles["footer-text"]}>
            แปะQR
          </p>
        </div>

        <div className={styles["footer-links"]}>
          <div>
            <h3>บริการ</h3>
            <ul>
              <li><a href="#">จัดฟัน</a></li>
              <li><a href="#">ทันตกรรมความงาม</a></li>
              <li><a href="#">ฟันปลอม</a></li>
            </ul>
          </div>
          <div>
            <h3>ติดตามเรา</h3>
            <ul>
              <li><a href="https://www.facebook.com/DentalHausChaengWatthana" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://page.line.me/deo8329f" target="_blank" rel="noopener noreferrer">LINE</a></li>
              <li><a href="tel:0969159391">โทร: 061-356-5887</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles["footer-bottom"]}>
        © {new Date().getFullYear()} Dental Haus. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
