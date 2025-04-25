import React from "react";
import styles from "./SubmitButton.module.css";

export const SubmitButton = ({ disabled, onClick }) => {
  return (
    <footer className={styles.footer}>
      <button className={styles.button} disabled={disabled} onClick={onClick}>
        Создать
      </button>
    </footer>
  );
};
