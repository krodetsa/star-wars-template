import React from "react";
import { render, screen } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import HomepageGrid from "@/components/HomepageGrid/HomepageGrid";
import { useDataStore } from "../hooks/store";

describe("HomepageGrid", () => {
  test("renders the component without errors", () => {
    render(<HomepageGrid />);
    // Assert that the component renders without throwing an error
  });

  test("renders the title correctly", () => {
    render(<HomepageGrid />);
    const titleElement = screen.getByText("Star Wars People");
    expect(titleElement).toBeInTheDocument();
  });

  test("renders the cards correctly", () => {
    const { result } = renderHook(() => useDataStore());
    const mockData = {
      count: 1,
      next: "",
      previous: null,
      results: [
        { name: "Luke Skywalker", url: "https://swapi.dev/api/people/1" },
        { name: "Darth Vader", url: "https://swapi.dev/api/people/4" },
      ],
    };
    act(() => {
      result.current.setDataStore(mockData);
    });

    jest.mock("../hooks/store", () => ({
      useDataStore: () => mockData,
      useIsLoading: () => ({ isLoading: false }),
    }));
    render(<HomepageGrid />);

    const cardElements = screen.getAllByRole("person-link");
    expect(cardElements).toHaveLength(2);

    const cardNames = mockData.results.map((card) => card.name);
    cardNames.forEach((name) => {
      const cardElement = screen.getByText(name);
      expect(cardElement).toBeInTheDocument();
    });
  });
});
