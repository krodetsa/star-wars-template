import { useEffect } from "react";
import { useDataStore, useIsLoading, useSearchMode } from "./store";
import { fetchPaginatedList } from "@/helpers/api";

export const useFetchPaginatedList = (
  id: number,
) => {  
  const { setDataStore } = useDataStore();
  const { isLoading, toggleLoading } = useIsLoading();
  const { searchMode } = useSearchMode();

  useEffect(() => {
    if (isLoading) return;
    toggleLoading(true);
    const fetchData = async () => {
      const data = await fetchPaginatedList(id, searchMode);
      setDataStore(data);
      toggleLoading(false);
    };
    fetchData().catch(console.error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
};
