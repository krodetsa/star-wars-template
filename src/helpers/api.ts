import { DataTemplateTypes } from "@/hooks/store";
import { SearchModeTypes } from "@/types/appTypes";
import { Person } from "@/types/person";
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
  const data = await api.get<Person, Person>(`${id}`);
  return {
    data,
  };
};

export const fetchPaginatedList = async (
  id: number,
  searchMode: SearchModeTypes
) => {
  return api.get<DataTemplateTypes, DataTemplateTypes>(
    `?${searchMode.active ? `search=${searchMode.search}&` : ""}page=${id}`
  );
};

export const fetchSearch = async (id: string | null) => {
  return api
    .get<DataTemplateTypes, DataTemplateTypes>(`?search=${id}`)
    .then((res) => {
      return res;
    });
};
