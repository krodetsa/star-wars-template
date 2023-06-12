import React, { useEffect } from "react";
import { Pagination } from "antd";
import {
  useDataStore,
  useSearchMode,
  useIsLoading,
  usePagination,
} from "@/hooks/store";
import { StyledPaginationBlock } from "./styles";
import { useFetchPaginatedList } from "@/hooks/useFetchPaginatedList";

const PaginationBlock = () => {
  const { pagination, setPagination } = usePagination();
  const { dataStore } = useDataStore();
  const { isLoading } = useIsLoading();
  const { searchMode } = useSearchMode();

  const onChangeHandler = (id: number) => {
    setPagination(id);
  };

  useEffect(() => {
    // If searchMode is changed, then we need to reset the current page to 1
    // because ant component doesn't do it automatically
    // Also we need to check if isLoading is true
    // if it's true, that means we fetching data by another search query
    // so we need to reset the pagination to 1
    pagination !== 1 && isLoading && setPagination(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchMode.search]);

  useFetchPaginatedList(pagination);

  return (
    <StyledPaginationBlock>
      <Pagination
        simple
        defaultCurrent={pagination}
        current={pagination}
        disabled={isLoading}
        className="pagination"
        total={dataStore.count}
        onChange={onChangeHandler}
      />
    </StyledPaginationBlock>
  );
};

export default PaginationBlock;
