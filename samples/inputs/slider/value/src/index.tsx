import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrSlider, IgrRangeSlider } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default function SliderValue() {

  const [sliderVal, setSliderVal] = useState(40);
  const [rangeLower, setRangeLower] = useState(20);
  const [rangeUpper, setRangeUpper] = useState(70);

  const handleSliderInput = (event: any) => {
    setSliderVal(event.detail);
  };

  const handleRangeInput = (event: any) => {
    const { lower, upper } = event.detail;
    setRangeLower(lower);
    setRangeUpper(upper);
  };

  return (
    <div className="container sample">
      <div className="slider-component">
        <IgrSlider
          style={{ padding: "30px 30px  0px 30px" }}
          onInput={handleSliderInput}
          value={sliderVal}
        />
        <div style={{ paddingLeft: "30px", display: "flex" }}>
          <span style={{ whiteSpace: "pre" }}>Value: {sliderVal}</span>
        </div>

        <IgrRangeSlider
          style={{ padding: "30px 30px  0px 30px" }}
          onInput={handleRangeInput}
          lower={rangeLower}
          upper={rangeUpper}
        ></IgrRangeSlider>
        <div style={{ paddingLeft: "30px", display: "flex" }}>
          <span style={{ whiteSpace: "pre" }}>Lower: {rangeLower}</span>
          <span style={{ whiteSpace: "pre" }}>, Upper: {rangeUpper}</span>
        </div>
      </div>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<SliderValue />);
