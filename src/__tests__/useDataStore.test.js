import { renderHook, act } from "@testing-library/react";
import { useDataStore } from "../hooks/store";

describe("useDataStore", () => {
  test("should initialize with initial state", () => {
    const { result } = renderHook(() => useDataStore());
    const expectedInitialState = {
      count: 1,
      next: "",
      previous: null,
      results: [],
    };
    expect(result.current.dataStore).toEqual(expectedInitialState);
  });

  test("should update state when calling setDataStore", () => {
    const { result } = renderHook(() => useDataStore());
    const expectedInitialState = {
      count: 1,
      next: "",
      previous: null,
      results: [],
    };
    act(() => {
      result.current.setDataStore({
        ...expectedInitialState,
        results: [
          { name: "Luke Skywalker", url: "https://swapi.dev/api/people/1" },
        ],
      });
    });

    expect(result.current.dataStore).toEqual({
      count: 1,
      next: "",
      previous: null,
      results: [
        { name: "Luke Skywalker", url: "https://swapi.dev/api/people/1" },
      ],
    });
  });
});
