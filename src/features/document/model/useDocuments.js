import { useQuery } from "@tanstack/react-query";
import { api } from "../../../shared/api/axiosInstance";

export const useDocuments = () => {
  return useQuery({
    queryKey: ["documents"],
    queryFn: async () => {
      const { data } = await api.get("/documents");
      return data;
    },
  });
};
