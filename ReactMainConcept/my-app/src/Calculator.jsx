import React, { useState } from "react";
import TemperatureInput from "./TemperatureInput";
import BoilingVerdict from "./BoilingVerdict";
const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

const toCelsius = (fahrenheit) => {
  return (fahrenheit - 32) / 1.8;
};

const toFahrenheit = (celsius) => {
  return celsius * 1.8 + 32;
};

const tryConvert = (temperature, convertFunc) => {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  let output = convertFunc(input);
  output = Math.round(output * 1000) / 1000;
  return output;
};

function Calculator() {
  const [state, setState] = useState({
    temperature: "",
    scale: "c",
  });

  const handleChange = (scale) => (value) => {
    setState({
      temperature: value,
      scale,
    });
  };
  const { scale, temperature } = state;
  const celsius =
    scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit =
    scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;
  return (
    <div>
      <TemperatureInput
        title={scaleNames.c}
        temperature={celsius}
        onTemperatureChange={handleChange("c")}
      />
      <TemperatureInput
        title={scaleNames.f}
        temperature={fahrenheit}
        onTemperatureChange={handleChange("f")}
      />
      <BoilingVerdict celsius={Number(celsius)} />
    </div>
  );
}

export default Calculator;
