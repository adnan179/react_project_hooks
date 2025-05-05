import { useEffect, useReducer } from "react";
import dataReducer from "../reducer/dataReducer";
import { SalesData, SubscriptionsData } from "../data/index";

const useFetch = ({ endpoint }) => {
  const initialState = {
    error: "",
    loading: false,
    data: { dataCollected: [],salesTotal:0,subscriptionsTotal:0 },
  };

  const [state, dispatch] = useReducer(dataReducer, initialState);

  useEffect(() => {
    if (!endpoint) return;
    dispatch({ type: "loading" });

    // Simulate fetch delay
    setTimeout(() => {
      try {
        let data;
        if (endpoint.includes("sales")) {
          data = SalesData;  // Simulate sales data
          console.log(endpoint,data)
        } else if (endpoint.includes("subscriptions")) {
          data = SubscriptionsData;  // Simulate subscriptions data
          console.log(endpoint,data)
        } else if(endpoint.includes("totals")){
          // Simulate totals data
          
          data = {
            salesTotal: SalesData.salesTotal,
            subscriptionsTotal: SubscriptionsData.subscriptionsTotal,
          }
          console.log(endpoint,data)
        } else {
          throw new Error("Invalid endpoint");
        }

        dispatch({ type: "data", payload: data });
      } catch (error) {
        dispatch({ type: "error", payload: error.message });
      } finally {
        dispatch({ type: "loaded" });
      }
    }, 300); // Simulated delay
  }, [endpoint]);

  return state;
};

export default useFetch;
