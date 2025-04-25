# Create Documents App

Приложение для создания и просмотра документов с использованием React, CSS-модулей и Supabase.

## 🚀 Возможности

- Создание нового документа с выбором типа (регламент, инструкция, распоряжение)
- Отображение списка созданных документов
- Просмотр документа в режиме «только чтение»
- Анимация открытия/закрытия сайдбара
- Запросы к Supabase через React Query
- Автоматическое обновление списка после добавления документа

## 🛠️ Технологии

- React (с функциональными компонентами и хуками)
- React Query
- CSS Modules
- Supabase REST API
- Git + GitHub

## 📂 Структура

```
src/
  features/
    document/
      ui/
        createDocumentSidebar/
        documentList/
        documentItem/
        documentTitleInput/
        documentDescriptionInput/
        submitButton/
        documentTypeSelect/
      model/
        useDocuments.js
        useDocument.js
  shared/
    api/
      api.js
      saveDocument.js
    constants/
      documentTypes.js
    icons/
```

## 🧪 Работа с Supabase

- Все документы сохраняются и получаются через REST API
- Используется React Query для кеширования и управления запросами
- Документы добавляются через `useMutation`
- Получение одного документа — `useDocument(id)`
- Получение всех документов — `useDocuments()`

## 🧭 Запуск проекта

1. Клонировать репозиторий:
```bash
  git clone git@github.com:PanamarenkoDev/create_documents.git
```

2. Установить зависимости:
```bash
  npm install
```

3. Запустить локально:
```bash
  npm start
```

4. Добавь `.env` с ключом доступа к Supabase, если потребуется.

---
