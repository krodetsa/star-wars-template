import { SearchModeTypes } from "@/types/appTypes";
import axios from "axios";
const api = axios.create({
  baseURL: "https://swapi.dev/api/people/",
});

api.interceptors.request.use((config) => {
  // Handle smth here
  return config;
});

api.interceptors.response.use(
  (response) => {
    // Handle responses here
    return response.data;
  },
  (error) => {
    throw error;
  }
);

export const fetchDetails = async (id: number) => {
  const data = await api.get(`${id}`);
  return {
    data,
  };
};

export const fetchPaginatedList = async (
  id: number,
  searchMode: SearchModeTypes
) => {
  return api.get(
    `?${
      searchMode.active ? `search=${searchMode.search}&` : ""
    }page=${id}`
  );
};

export const fetchSearch = async (
  id: string | null,
) => {
  return api.get(`?search=${id}`)
    .then((res) => {
      return res;
    });
};
