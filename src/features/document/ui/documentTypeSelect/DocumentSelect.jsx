import React, { useState } from "react";
import styles from "./DocumentSelect.module.css";
import { documentTypes } from "../../../../shared/constants/documentTypes";
import checkIcon from "../../../../shared/icons/check.svg";

export const DocumentSelect = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (key) => {
    onChange(key);
    setOpen(false);
  };

  const currentType = documentTypes[value];

  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        className={`${styles.selector} ${styles[currentType.className]}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        {currentType.label}
      </button>

      {open && (
        <ul className={styles.dropdown}>
          {Object.entries(documentTypes).map(([key, { label }]) => (
            <li
              key={key}
              className={`${styles.option} ${
                Number(key) === value ? styles.active : ""
              }`}
              onClick={() => handleSelect(Number(key))}
            >
              <span>{label}</span>
              {Number(key) === value && (
                <img src={checkIcon} alt="Выбрано" className={styles.check} />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
