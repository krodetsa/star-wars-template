import React, { useState } from "react";
import { Input } from "antd";
import { useFetchSearch } from "@/hooks/useFetchSearch";
import { useSearchMode } from "@/hooks/store";

const { Search } = Input;

const SearchInput = () => {
  const [value, setValue] = useState<string | null>(null);
  const { searchMode } = useSearchMode();

  useFetchSearch(value);

  return (
    <Search
      defaultValue={searchMode.search}
      placeholder="Search"
      onSearch={setValue}
      style={{ width: 150 }}
    />
  );
};

export default SearchInput;
