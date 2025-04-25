import { useQuery } from "@tanstack/react-query";
import { api } from "./axiosInstance";

export const useDocument = (id) => {
  return useQuery({
    queryKey: ["document", id],
    queryFn: async () => {
      const { data } = await api.get("/documents", {
        params: { id: `eq.${id}` },
      });
      return data[0];
    },
    enabled: !!id,
  });
};
