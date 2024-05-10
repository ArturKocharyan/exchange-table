import React from "react";
import styles from "./styles.module.css";
import ReactCountryFlag from "react-country-flag";

export default function MainPage() {
  return (
    <div>
      <div className={styles.mainTable}>
        <div></div>
        <div className={styles.currencyTable}>
          <div className={styles.currencyLine}>
            <span className={styles.flag}>
              <ReactCountryFlag
                countryCode="US"
                style={{
                  fontSize: "20em",
                }}
                aria-label="United States"
              />
            </span>
            <span className={styles.currency}>
              <p>USD ($)</p>
            </span>
            <span className={styles.buyNumber}>
              <input type="text" />
            </span>
            <span className={styles.sellNumber}>
              <input type="text" />
            </span>
          </div>
          <div className={styles.currencyLine}>
            <span className={styles.flag}>
              <ReactCountryFlag
                countryCode="RU"
                style={{
                  fontSize: "20em",
                }}
                aria-label="United States"
              />
            </span>
            <span className={styles.currency}>
              <p>RUR (₽)</p>
            </span>
            <span className={styles.buyNumber}>
              <input type="text" />
            </span>
            <span className={styles.sellNumber}>
              <input type="text" />
            </span>
          </div>
          <div className={styles.currencyLine}>
            <span className={styles.flag}>
              <ReactCountryFlag
                countryCode="EU"
                style={{
                  fontSize: "20em",
                }}
                aria-label="United States"
              />
            </span>
            <span className={styles.currency}>
              <p>EUR (€)</p>
            </span>
            <span className={styles.buyNumber}>
              <input type="text" />
            </span>
            <span className={styles.sellNumber}>
              <input type="text" />
            </span>
          </div>
          <div className={styles.currencyLine}>
            <span className={styles.flag}>
              <ReactCountryFlag
                countryCode="GE"
                style={{
                  fontSize: "20em",
                }}
                aria-label="United States"
              />
            </span>
            <span className={styles.currency}>
              <p>GEL (₾)</p>
            </span>
            <span className={styles.buyNumber}>
              <input type="text" />
            </span>
            <span className={styles.sellNumber}>
              <input type="text" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
