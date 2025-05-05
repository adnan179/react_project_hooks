import React from "react";
import useFetch from "../../hooks/dataHook";

const SummaryContainer = () => {
  const {
    data: { salesTotal, subscriptionsTotal }, error, loading
  } = useFetch({endpoint:`${process.env.REACT_APP_BASE_URL}/totals/`});


  return (
    <div className="summary flex flex-row">
      {error ? (
        <div className="card">
        <p>Error: {error}</p>
      </div>
      ):(
          <>
            <div className="card bg-indigo">
              <p>CellFast sales</p>
              <p>$ {loading ? "Loading...": salesTotal}</p>
            </div>
            <div className="card bg-blue">
              <p>CellNow subscriptions</p>
              <p>$ {loading ? "Loading..." : subscriptionsTotal}</p>
            </div>
          </>
      )}
    </div>
  );
};

export default SummaryContainer;
