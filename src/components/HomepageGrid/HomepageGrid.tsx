import React, { useMemo } from "react";
import SearchInput from "../common/SearchInput/SearchInput";
import Link from "next/link";
import { Card, Empty, Skeleton, Spin } from "antd";
import { useDataStore, useIsLoading } from "@/hooks/store";
import { StyledEmptyContainer, StyledGridContainer } from "./styles";

type CardType = {
  name: string;
  url: string;
};

function HomepageGrid() {
  const { dataStore } = useDataStore();
  const { isLoading } = useIsLoading();
  const cards = useMemo(() => dataStore.results, [dataStore.results]);

  function extractNumberFromURL(url: string): number | null {
    const regex = /\d+/;
    const match = url.match(regex);
    if (match) {
      return parseInt(match[0], 10);
    } else {
      return null;
    }
  }

  return (
    <StyledGridContainer>
      <Card
        className="separate-card"
        title="Star Wars People"
        extra={<SearchInput />}
      >
        {cards.map(({ name, url }: CardType) => {
          return (
            <Card.Grid style={{ padding: 0 }} key={url}>
              <Link href={`/details/${extractNumberFromURL(url)}`}>
                {isLoading ? (
                  <Skeleton.Button
                    block
                    className="skeleton-loader"
                    style={{ height: "100%" }}
                    active
                  />
                ) : (
                  <p>{name}</p>
                )}
              </Link>
            </Card.Grid>
          );
        })}
        {cards.length === 0 && (
          <StyledEmptyContainer style={{ position: "relative" }}>
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            {isLoading && <Spin className="spinner" size="small" />}
          </StyledEmptyContainer>
        )}
      </Card>
    </StyledGridContainer>
  );
}

export default HomepageGrid;
