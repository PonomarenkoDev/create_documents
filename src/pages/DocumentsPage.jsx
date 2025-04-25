import React, { useState } from "react";
import { useDocuments } from "../../src/features/document/model/useDocuments";
import { DocumentList } from "../../src/features/document/ui/documentList/DocumentList";
import { CreateDocumentSidebar } from "../../src/features/document/ui/createDocumentSidebar/CreateDocumentSidebar"; // импорт сайдбара
import styles from "./DocumentsPage.module.css";

const DocumentsPage = () => {
  const { data: documents = [], isLoading, isError } = useDocuments();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedDocumentId, setSelectedDocumentId] = useState(null);

  return (
    <div className={styles.page}>
      <aside className={styles.sidebar}></aside>

      <section className={styles.mainSection}>
        <div className={styles.topbar}>
          <button onClick={() => setIsSidebarOpen(true)}>Создать</button>
        </div>

        <main className={styles.content}>
          <h1>Документы</h1>
          {isLoading && <p>Загрузка...</p>}
          {isError && <p>Ошибка загрузки</p>}
          {!isLoading && !isError && documents.length === 0 && (
            <p className={styles.empty}>Список пуст</p>
          )}
          {!isLoading && !isError && documents.length > 0 && (
            <DocumentList
              documents={documents}
              onDocumentClick={(id) => setSelectedDocumentId(id)}
            />
          )}
        </main>
      </section>

      {(isSidebarOpen || selectedDocumentId) && (
        <CreateDocumentSidebar
          onClose={() => {
            setIsSidebarOpen(false);
            setSelectedDocumentId(null);
          }}
          documentId={selectedDocumentId}
        />
      )}
    </div>
  );
};

export default DocumentsPage;
