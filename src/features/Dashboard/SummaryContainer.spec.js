import React from "react";
import { render, screen, act } from "@testing-library/react";
import SummaryContainer from "./SummaryContainer";
import { SalesData, SubscriptionsData } from "../../data";

jest.useFakeTimers();

describe("SummaryContainer component", () => {
  it("displays loading initially and shows sales + subscriptions totals after delay", async () => {
    render(<SummaryContainer />);

    // Loading state should appear
    expect(screen.getByText("Loading...")).toBeInTheDocument();

    // Fast-forward the 300ms timeout in useFetch
    await act(async () => {
      jest.advanceTimersByTime(300);
    });

    // Check for labels and expected values
    expect(screen.getByText("CellFast sales")).toBeInTheDocument();
    expect(screen.getByText(`$ ${SalesData.salesTotal}`)).toBeInTheDocument();

    expect(screen.getByText("CellNow subscriptions")).toBeInTheDocument();
    expect(screen.getByText(`$ ${SubscriptionsData.subscriptionsTotal}`)).toBeInTheDocument();
  });

  it("shows error when endpoint is invalid", async () => {
    // Overwrite process.env value temporarily
    const originalEnv = process.env.REACT_APP_BASE_URL;
    process.env.REACT_APP_BASE_URL = "/invalid";

    render(<SummaryContainer />);

    await act(async () => {
      jest.advanceTimersByTime(300);
    });

    expect(screen.getByText(/Error:/)).toBeInTheDocument();

    // Restore original env value
    process.env.REACT_APP_BASE_URL = originalEnv;
  });
});
