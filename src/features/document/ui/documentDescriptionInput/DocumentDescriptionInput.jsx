import React, { useRef, useEffect } from "react";
import styles from "./DocumentDescriptionInput.module.css";
import Icon from "../../../../shared/icons/description.svg";

export const DocumentDescriptionInput = ({
  value,
  onChange,
  readOnly = false,
}) => {
  const textareaRef = useRef();

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // сброс
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // авто-высота
    }
  }, [value]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.label}>
        <img src={Icon} alt="Описание" className={styles.icon} />
        <span className={styles.text}>Описание</span>
      </div>

      {readOnly ? (
        <p className={styles.textReadonly}>{value}</p>
      ) : (
        <textarea
          ref={textareaRef}
          className={styles.textarea}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={1}
          placeholder=""
        />
      )}
    </div>
  );
};
