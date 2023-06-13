import { useEffect, useState } from "react";
import { makeObservable } from "../model/observable";
import { SearchModeTypes } from "@/types/appTypes";
import { Person } from "@/types/person";
const dataTemplate = {
  count: 1,
  next: "",
  previous: null,
  results: [],
};
const data = makeObservable(dataTemplate);

export const useDataStore = () => {
  const [dataStore, setState] = useState(data.get());
  const setDataStore = (state: any) => data.set(state);
  useEffect(() => {
    return data.subscribe(setState);
  }, []);

  return {
    dataStore,
    setDataStore,
  };
};

const person = makeObservable({});

export const usePersonStore = () => {
  const [personStore, setState] = useState(person.get());
  const setPersonStore = (state: Person | any) => person.set(state);
  useEffect(() => {
    return person.subscribe(setState);
  }, []);

  return {
    personStore,
    setPersonStore,
  };
};

const searchModeStore = makeObservable({
  active: false,
  search: "",
});

export const useSearchMode = () => {
  const [searchMode, setState] = useState<SearchModeTypes>(searchModeStore.get());
  const setSearchMode = (state: any) => searchModeStore.set(state);
  useEffect(() => {
    return searchModeStore.subscribe(setState);
  }, []);

  return {
    searchMode,
    setSearchMode,
  };
};

const loading = makeObservable(false);

export const useIsLoading = () => {
  const [isLoading, setState] = useState(loading.get());
  const toggleLoading = (arg: boolean) => loading.set(arg);
  useEffect(() => {
    return loading.subscribe(setState);
  }, []);

  return {
    isLoading,
    toggleLoading,
  };
};

const paginationStore = makeObservable(1);

export const usePagination = () => {
  const [pagination, setState] = useState(paginationStore.get());
  const setPagination = (arg: number) => paginationStore.set(arg);
  useEffect(() => {
    return paginationStore.subscribe(setState);
  }, []);

  return {
    pagination,
    setPagination,
  };
};