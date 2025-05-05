import React from "react";
import LineChart from "./LineChart";
import PropTypes from "prop-types";
import useFetch from "../../hooks/dataHook";

const ChartContainer = ({ selectedOption }) => {
  const { data, loading, error } = useFetch({ endpoint: selectedOption?.value});

  const dataset = data?.dataCollected || [];

  if(!selectedOption) return <p>Please select a chart to view data:</p>;
  if(loading) return <p>loading chart...</p>
  if(error) return <p>Error loading the chart data: {error}</p>;
  if(!dataset.length) return <p> No data available for the selected chart.</p>
  const chartLabels = dataset.map(dataPoint => dataPoint.timestamp);
  const chartValues = dataset.map(dataPoint => dataPoint.amount);

  if (!dataset || dataset.length === 0) {
    return <p>No data available</p>;
  }
  

  return (
    <div>
      <LineChart
        chartLabels={chartLabels}
        chartValues={chartValues}
        label={selectedOption.label}
      />
    </div>
  );
};



ChartContainer.propTypes = {
  selectedOption: PropTypes.string.isRequired
};

export default ChartContainer;
