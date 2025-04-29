import React, { useState } from 'react';
import Select from '../../common/components/Select';
import DataFetching from '../../common/components/dataFetching';

if(process.env.NODE_ENV === 'development'){
    const { Server } = require("miragejs");
    const {sales, subscriptions } = require("../../mocks");

    new Server({
        routes() {
            this.namespace = process.env.REACT_APP_BASE_URL;
            this.get("sales/",() => sales);
            this.get("subscriptions",() => subscriptions)
        }
    });
}
const DataFetchingContainer = () => {
    const [selectedEndpoint, setSelectedEndpoint] = useState("");

    const optionsForSelect = [
        {
            label:"Sales",
            value:`${process.env.REACT_APP_BASE_URL}/sales/`
        },
        {
            label:"Subscriptions",
            value:`${process.env.REACT_APP_BASE_URL}/subscriptions/`
        }
    ];

    const handleSelectChange = (event) => {
        setSelectedEndpoint(event.target.value);
    }
  return (
    <>
        <Select 
            handleChange={handleSelectChange} 
            label='Please, select a chart' 
            id="select-chart"
            options={optionsForSelect} 
        />
        {selectedEndpoint ? <DataFetching endpoint={selectedEndpoint} />: null}
    
    </>
  )
}

export default DataFetchingContainer