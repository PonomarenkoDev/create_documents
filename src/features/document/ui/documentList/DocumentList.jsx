import React from "react";
import styles from "./DocumentList.module.css";
import { DocumentItem } from "../documentItem/DocumentItem";

export const DocumentList = ({ documents, onDocumentClick }) => {
  if (documents.length === 0) {
    return <p className={styles.empty}>Список пуст</p>;
  }

  return (
    <ul className={styles.list}>
      {documents.map((doc, index) => (
        <DocumentItem
          key={doc.id}
          document={doc}
          index={index}
          onClick={onDocumentClick}
        />
      ))}
    </ul>
  );
};
