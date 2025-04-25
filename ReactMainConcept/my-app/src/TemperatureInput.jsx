import React from "react";
import PropTypes from "prop-types";

function TemperatureInput(props) {
  const { title, temperature } = props;
  const handleChange = (event) => {
    props.onTemperatureChange(event.target.value);
  };
  return (
    <fieldset>
      <legend>Enter temperature in {title}</legend>
      <input type="text" value={temperature} onChange={handleChange} />
    </fieldset>
  );
}

TemperatureInput.prototype = {
  onTemperatureChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  temperature: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default TemperatureInput;
