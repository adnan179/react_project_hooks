import React from "react";
import { render } from "@testing-library/react";
import SummaryContainer from "./SummaryContainer";

describe("SummaryContainer component", () => {
    it("should see sales and subscriptions totals", async () => {
        global.fetch = jest.fn(() =>
          Promise.resolve({
            ok: true,
            json: () => Promise.resolve({ salesTotal: 899, subscriptionsTotal: 344 }),
          })
        );
      
        const { findByText } = render(<SummaryContainer />);
      
        expect(await findByText("CellFast sales")).toBeInTheDocument();
        expect(await findByText("$ 899")).toBeInTheDocument();
        expect(await findByText("CellNow subscriptions")).toBeInTheDocument();
        expect(await findByText("$ 344")).toBeInTheDocument();
      });
      
});