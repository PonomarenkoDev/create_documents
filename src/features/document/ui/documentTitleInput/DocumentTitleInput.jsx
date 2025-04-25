import React, { useRef, useEffect } from "react";
import styles from "./DocumentTitleInput.module.css";

export const DocumentTitleInput = ({ value, onChange }) => {
  const textareaRef = useRef(null);
  const hasText = value.trim().length > 0;

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  return (
    <textarea
      ref={textareaRef}
      className={`${styles.textarea} ${hasText ? styles.filled : ""}`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Название"
      rows={1}
    />
  );
};
