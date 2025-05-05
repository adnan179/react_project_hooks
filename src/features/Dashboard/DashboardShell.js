import React, { useState } from "react";
import Aside from "../../common/components/Aside";
import ChartContainer from "./ChartContainer";
import Layout from "../../common/components/Layout";
import Main from "../../common/components/Main";
import SummaryContainer from "./SummaryContainer";
import Select from "../../common/components/Select";

const DashboardShell = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    const sLabel = event.target.selectedOptions[0].label;
    const sValue = event.target.value;
    const option = { label: sLabel, value: sValue };
    setSelectedOption(option);
    
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
        <SummaryContainer selectedOption={selectedOption}/>
        <ChartContainer selectedOption={selectedOption}  />
      </Main>
    </Layout>
  )
}

export default DashboardShell;
