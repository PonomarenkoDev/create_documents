import React from "react";
import { DocumentSelect } from "./DocumentSelect";
import styles from "./DocumentTypeSelect.module.css";
import Icon from "../../../../shared/icons/type.svg"; // замените на путь к вашей иконке

export const DocumentTypeSelect = ({ value, onChange }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img src={Icon} alt="Тип документа" className={styles.icon} />
        <span className={styles.text}>Тип документа</span>
      </div>
      <DocumentSelect value={value} onChange={onChange} />
    </div>
  );
};
