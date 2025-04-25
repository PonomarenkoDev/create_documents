import React from "react";
import styles from "./DocumentHeader.module.css";
import documentsIcon from "../../../../shared/icons/icon-documents.svg";
import closeIcon from "../../../../shared/icons/close.svg";

export const DocumentHeader = ({ onClose }) => {
  return (
    <header className={styles.header}>
      <div className={styles.titleBlock}>
        <img src={documentsIcon} alt="icon" className={styles.icon} />
        <span className={styles.title}>Документы</span>
        <span className={styles.divider}>|</span>
        <span className={styles.subtitle}>Создание документа</span>
      </div>
      <button className={styles.closeButton} onClick={onClose}>
        <img src={closeIcon} alt="close" />
      </button>
    </header>
  );
};
