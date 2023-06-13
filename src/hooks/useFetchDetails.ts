import { fetchDetails } from "@/helpers/api";
import { useIsLoading, usePersonStore } from "./store";
import { useEffect } from "react";

export const useFetchDetails = (id: number) => {
  const { setPersonStore } = usePersonStore();
  // i could use third party library like effector and handle loading state there
  // but i decided to do it without any third party libraries
  // so all the loading state is handled in store.ts by reactive custom hook useIsLoading

  const { isLoading, toggleLoading } = useIsLoading();
  useEffect(() => {
    if (isLoading) return;
    toggleLoading(true);

    const fetchData = async () => {
      const { data } = await fetchDetails(id);
      setPersonStore(data);
      toggleLoading(false);
    };
    fetchData().catch(console.error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
};
