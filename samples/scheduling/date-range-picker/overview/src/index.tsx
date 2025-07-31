import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrDateRangePicker } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default function DrpOverview() {
  useEffect(() => {
    let dateRange = document.querySelector("igc-date-range-picker") as IgrDateRangePicker;
    const today: Date = new Date();
    let endDate: Date = new Date();
    endDate.setDate(today.getDate() + 3);
    dateRange.value = { start: today, end: endDate };
  }, []);

  return (
    <div className="container sample center">
      <IgrDateRangePicker label="Date Range" />
    </div>
  );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<DrpOverview />);
