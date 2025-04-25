import { useMutation } from "@tanstack/react-query";

const API_URL = "https://xzcmwwxpiuhflofxxkda.supabase.co/rest/v1";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6Y213d3hwaXVoZmxvZnh4a2RhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0NTMyNzQsImV4cCI6MjA2MTAyOTI3NH0.g-hNLNmWUJWH2CUhpi-B2w5PRUjzOm400ULUHaw7sfc";

const saveDocument = async (data) => {
  const response = await fetch(`${API_URL}/documents`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: API_KEY,
      Authorization: `Bearer ${API_KEY}`,
      Prefer: "return=representation", // важно
    },
    body: JSON.stringify([
      {
        title: data.title,
        type: data.type,
        description: data.description,
        created_at: new Date().toISOString(),
      },
    ]),
  });

  const text = await response.text();
  const result = text ? JSON.parse(text) : null;

  if (!response.ok) {
    console.error("Supabase error:", result);
    throw new Error(result?.message || "Ошибка создания документа");
  }

  return result;
};

export const useSaveDocument = () => {
  return useMutation({ mutationFn: saveDocument });
};
