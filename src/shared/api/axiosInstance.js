import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6Y213d3hwaXVoZmxvZnh4a2RhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0NTMyNzQsImV4cCI6MjA2MTAyOTI3NH0.g-hNLNmWUJWH2CUhpi-B2w5PRUjzOm400ULUHaw7sfc";

export const api = axios.create({
  baseURL: "https://xzcmwwxpiuhflofxxkda.supabase.co/rest/v1/",
  headers: {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
    Prefer: "return=representation",
  },
});
