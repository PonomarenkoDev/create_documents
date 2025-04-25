import React from "react";
import styles from "./DocumentItem.module.css";

export const DocumentItem = ({ document, onClick, index }) => {
  return (
    <li className={styles.item}>
      <button onClick={() => onClick?.(document.id)} className={styles.button}>
        Документ {index + 1}
      </button>
    </li>
  );
};
