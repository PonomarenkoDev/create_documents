import React, { useState, useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import styles from "./CreateDocumentSidebar.module.css";
import { DocumentHeader } from "../documentHeader/DocumentHeader";
import { DocumentTitleInput } from "../documentTitleInput/DocumentTitleInput";
import { DocumentTypeSelect } from "../documentTypeSelect/DocumentTypeSelect";
import { DocumentDescriptionInput } from "../documentDescriptionInput/DocumentDescriptionInput";
import { SubmitButton } from "../submitButton/SubmitButton";
import { useSaveDocument } from "../../../../shared/api/saveDocument";
import { useDocument } from "../../../../shared/api/useDocument";

export const CreateDocumentSidebar = ({ onClose, documentId }) => {
  const { data: doc } = useDocument(documentId);
  const isViewMode = Boolean(documentId);
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const [title, setTitle] = useState("");
  const [type, setType] = useState(0);
  const [description, setDescription] = useState("");

  const { mutate } = useSaveDocument();
  const queryClient = useQueryClient();

  const isFormValid = title.trim() && description.trim();

  useEffect(() => {
    requestAnimationFrame(() => setIsVisible(true));
  }, []);

  const closeWithAnimation = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleSubmit = () => {
    mutate(
      { title, type, description },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["documents"] });
          onClose();
        },
        onError: () => {
          alert("Ошибка при создании документа");
        },
      }
    );
  };

  if (isViewMode && !doc) return null;

  return (
    <aside
      className={`${styles.sidebar} ${
        isVisible && !isClosing ? styles.open : ""
      } ${isClosing ? styles.closing : ""}`}
    >
      <DocumentHeader onClose={closeWithAnimation} />
      <div className={styles.content}>
        <DocumentTitleInput
          value={isViewMode ? doc.title : title}
          onChange={isViewMode ? undefined : setTitle}
        />
        <DocumentTypeSelect
          value={isViewMode ? doc.type : type}
          onChange={isViewMode ? undefined : setType}
        />
        <DocumentDescriptionInput
          value={isViewMode ? doc.description : description}
          onChange={isViewMode ? undefined : setDescription}
          readOnly={isViewMode}
        />
      </div>

      {!isViewMode && (
        <SubmitButton disabled={!isFormValid} onClick={handleSubmit} />
      )}
    </aside>
  );
};
