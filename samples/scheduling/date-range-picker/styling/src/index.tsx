import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
	IgrDateRangePicker,
	IgrIcon,
	registerIconFromText,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default function DrpOverview() {
	const UpPlane = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M120-120v-80h720v80H120Zm70-200L40-570l96-26 112 94 140-37-207-276 116-31 299 251 170-46q32-9 60.5 7.5T864-585q9 32-7.5 60.5T808-487L190-320Z"/></svg>';

	const DownPlane = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M120-120v-80h720v80H120Zm622-202L120-499v-291l96 27 48 139 138 39-35-343 115 34 128 369 172 49q25 8 41.5 29t16.5 48q0 35-28.5 61.5T742-322Z"/></svg>';

	registerIconFromText("UpPlaneIcon", UpPlane);
	registerIconFromText("DownPlaneIcon", DownPlane);

	return (
		<div className="container sample center">
			<IgrDateRangePicker
				labelStart="Departure date"
				labelEnd="Arrival date"
				useTwoInputs
			>
				<IgrIcon slot="calendar-icon-start" name="UpPlaneIcon"></IgrIcon>
				<IgrIcon slot="calendar-icon-end" name="DownPlaneIcon"></IgrIcon>
				<span slot="separator"></span>
			</IgrDateRangePicker>
		</div>
	);
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<DrpOverview />);
