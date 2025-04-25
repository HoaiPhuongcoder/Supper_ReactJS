import React from "react";
import PropTypes from "prop-types";
function BoilingVerdict(props) {
  return (
    <div>
      {props.celsius >= 100
        ? "The water would boild"
        : "The water would not boild"}
    </div>
  );
}

BoilingVerdict.PropTypes = {
  celsius: PropTypes.number.isRequired,
};

export default BoilingVerdict;
