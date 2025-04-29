import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react'

const DataFetching = ({endpoint}) => {
    const [data,setData] = useState([]);

    useEffect(() => {
        fetch(endpoint)
            .then(response => response.json())
            .then(json => setData(json));
    },[endpoint]);

  return (
    <ul>
        {data?.map(element => (
            <li key={element.timestamp}>{element.timestamp} - {element.amount}</li>
        ))}
    </ul>
  );
};

DataFetching.propTypes = {
    endpoint : PropTypes.string.isRequired
}

export default DataFetching;