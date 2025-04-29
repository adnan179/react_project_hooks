import React from 'react';
import PropTypes from 'prop-types';

const Select = ({handleChange, id, label, options}) => {
  return (
    <>
        <label htmlFor={id}>{label}</label>
        <select id={id} onChange={handleChange}>
            <option value="">--</option>
            {options.map((opt,idx) => (
                <option value={opt.value} key={idx}>{opt.label}</option>
            ))}
        </select>
    </>
  )
};

Select.propTypes = {
    handleChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value:PropTypes.string.isRequired,
            label:PropTypes.string.isRequired,
        })
    ).isRequired,
    id: PropTypes.string.isRequired,
    label:PropTypes.string.isRequired
};


export default Select;