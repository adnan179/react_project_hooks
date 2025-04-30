import React, { useContext } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { globalContext } from "../../App";

const SummaryContainer = () => {
  const { salesTotal, subscriptionsTotal} = useContext(globalContext);
  return (
    <div className="summary flex flex-row">
      <div className="card bg-indigo">
        <p>CellFast sales</p>
        <p>$ {salesTotal}</p>
      </div>
      <div className="card bg-blue">
        <p>CellNow subscriptions</p>
        <p>$ {subscriptionsTotal}</p>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    salesTotal: state.dataset.salesTotal,
    subscriptionsTotal: state.dataset.subscriptionsTotal
  };
};

SummaryContainer.propTypes = {
  salesTotal: PropTypes.number.isRequired,
  subscriptionsTotal: PropTypes.number.isRequired
};

export default connect(mapStateToProps)(SummaryContainer);
