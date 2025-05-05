import { renderHook, act } from "@testing-library/react-hooks";
import useFetch from "./dataHook";
import { SalesData, SubscriptionsData } from "../data";

jest.useFakeTimers();

describe("useFetch hook with mock data", () => {
  it("should return totals correctly", async () => {
    const { result } = renderHook(() =>
      useFetch({ endpoint: "/totals/" })
    );

    // Initially loading
    expect(result.current.loading).toBe(true);

    // Fast-forward timer
    await act(async () => {
      jest.advanceTimersByTime(300);
    });

    expect(result.current.data).toEqual({
      salesTotal: SalesData.salesTotal,
      subscriptionsTotal: SubscriptionsData.subscriptionsTotal,
    });
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe("");
  });

  it("should return sales data correctly", async () => {
    const { result } = renderHook(() =>
      useFetch({ endpoint: "/sales/" })
    );

    await act(async () => {
      jest.advanceTimersByTime(300);
    });

    expect(result.current.data).toEqual(SalesData);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe("");
  });

  it("should return subscriptions data correctly", async () => {
    const { result } = renderHook(() =>
      useFetch({ endpoint: "/subscriptions/" })
    );

    await act(async () => {
      jest.advanceTimersByTime(300);
    });

    expect(result.current.data).toEqual(SubscriptionsData);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe("");
  });

  it("should handle invalid endpoint error", async () => {
    const { result } = renderHook(() =>
      useFetch({ endpoint: "/invalid/" })
    );

    await act(async () => {
      jest.advanceTimersByTime(300);
    });

    expect(result.current.data).toEqual({
      dataCollected: [],
      salesTotal: 0,
      subscriptionsTotal: 0,
    });
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toEqual("Invalid endpoint");
  });
});
