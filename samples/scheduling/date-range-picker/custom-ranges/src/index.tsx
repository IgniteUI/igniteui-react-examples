import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrDateRangePicker } from "igniteui-react";
import {
	CustomDateRange,
	DateRangeDescriptor,
	DateRangeType,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default function DrpCustom() {
	useEffect(() => {
		let dateRange = document.querySelector(
			"igc-date-range-picker"
		) as IgrDateRangePicker;
		const minDate = new Date(2025, 4, 5);
		const maxDate = new Date(2025, 4, 15);
		dateRange.disabledDates = [
			{
				type: DateRangeType.Between,
				dateRange: [minDate, maxDate],
			},
		] as DateRangeDescriptor[];
	}, []);

	return (
		<div className="container sample center">
			<IgrDateRangePicker
				mode="dialog"
				label="Custom Ranges"
			></IgrDateRangePicker>
		</div>
	);
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<DrpCustom />);
