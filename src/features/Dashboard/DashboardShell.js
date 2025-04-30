import React, { useEffect, useState } from "react";
import Aside from "../../common/components/Aside";
import ChartContainer from "./ChartContainer";
import Layout from "../../common/components/Layout";
import Main from "../../common/components/Main";
import SummaryContainer from "./SummaryContainer";
import { useDispatch } from "react-redux";
import { fetchDataset } from "./DashboardSlice";
import Select from "../../common/components/Select";

const DashboardShell = () => {
  const [selectedLabel, setSelectedLabel] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataset(`${process.env.REACT_APP_BASE_URL}/totals/`));
  },[dispatch]);

  const handleSelectChange = (event) => {
    const selectedLabel = event.target.selectedOptions[0].label;
    const selectedValue = event.target.value;
    dispatch(fetchDataset(selectedValue));
    setSelectedLabel(selectedLabel);
  };

  const optionsForSelect = [
    {
      label:"Sales",
      value:`${process.env.REACT_APP_BASE_URL}/sales/`
    },
    {
      label:"Subscriptions",
      value:`${process.env.REACT_APP_BASE_URL}/subscriptions/`
    },
  ];


  return(
    <Layout>
      <Aside>
        <h2># Polly Dashboard</h2>
        <Select
          label="Please, select a chart"
          handleChange={handleSelectChange}
          id="select-chart"
          options={optionsForSelect}
        />
      </Aside>
      <Main>
        <h1>Welcome, <span className="bold">Learner!</span></h1>
        <SummaryContainer />
        <ChartContainer selectedLabel={selectedLabel} />
      </Main>
    </Layout>
  )
}

export default DashboardShell;
