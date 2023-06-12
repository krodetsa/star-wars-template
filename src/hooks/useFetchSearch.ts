import { useEffect } from "react";
import { useDataStore, useIsLoading, useSearchMode } from "./store";
import { fetchSearch } from "@/helpers/api";

export const useFetchSearch = (toSearch: string | null) => {
  const { setDataStore } = useDataStore();
  const { toggleLoading } = useIsLoading();
  const { setSearchMode } = useSearchMode();
  
  useEffect(() => {
    if (toSearch === null ) return;
    
    toggleLoading(true);
    const fetchData = async () => {
      const data = await fetchSearch(toSearch);
      setDataStore(data);
      toggleLoading(false);
    };
    fetchData().catch(console.error);
    if (toSearch.length >= 1) {
      setSearchMode({ active: true, search: toSearch });
    } else {
      setSearchMode({ active: false, search: "" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toSearch]);
}