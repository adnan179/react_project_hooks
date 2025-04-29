import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react'
import { useFetch } from '../../hooks/dataHook';
import Loading from "./Loading";


const DataFetching = ({endpoint}) => {
    const { loading, error, data } = useFetch(endpoint);

    const buildUI = () => {
        if (loading) return <Loading />;
        if (loading || error) return <p>Ops! Something went wrong: {error}</p>;
        if (!loading && !error)
          return (
            <ul>
              {data.map(element => (
                <li key={element.timestamp}>
                  {element.timestamp} - {element.amount}
                </li>
              ))}
            </ul>
          );
      };
    
      return buildUI();
};

DataFetching.propTypes = {
    endpoint : PropTypes.string.isRequired
}

export default DataFetching;