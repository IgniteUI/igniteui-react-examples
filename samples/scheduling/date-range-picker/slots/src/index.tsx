import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  IgrDateRangePicker,
  IgrIcon,
  IgrButton,
  registerIconFromText,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

const Apps = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M240-160q-33 0-56.5-23.5T160-240q0-33 23.5-56.5T240-320q33 0 56.5 23.5T320-240q0 33-23.5 56.5T240-160Zm240 0q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm240 0q-33 0-56.5-23.5T640-240q0-33 23.5-56.5T720-320q33 0 56.5 23.5T800-240q0 33-23.5 56.5T720-160ZM240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400ZM240-640q-33 0-56.5-23.5T160-720q0-33 23.5-56.5T240-800q33 0 56.5 23.5T320-720q0 33-23.5 56.5T240-640Zm240 0q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Zm240 0q-33 0-56.5-23.5T640-720q0-33 23.5-56.5T720-800q33 0 56.5 23.5T800-720q0 33-23.5 56.5T720-640Z"/></svg>';
const Bin = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>';
const Down = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-360 280-560h400L480-360Z"/></svg>';
const Upload = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M440-200h80v-167l64 64 56-57-160-160-160 160 57 56 63-63v167ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/></svg>';

export default function DrpSlots() {
  const dateRangeRef = useRef<IgrDateRangePicker>();

	const today: Date = new Date();
	let tomorrow: Date = new Date();
	tomorrow.setDate(today.getDate() + 1);
	
  useEffect(() => {
		registerIconFromText("appsIcon", Apps);
		registerIconFromText("binIcon", Bin);
		registerIconFromText("downArrowIcon", Down);
		registerIconFromText("uploadIcon", Upload);
  }, []);

  const toggleWeekNumbers = () => {
    dateRangeRef.current.showWeekNumbers = !dateRangeRef.current.showWeekNumbers;
  };

  return (
    <div className="container sample center">
      <h3>Actions</h3>
      <IgrDateRangePicker mode="dialog" ref={dateRangeRef}>
        <IgrButton slot="actions" onClick={toggleWeekNumbers}>
          Toggle Week Numbers
        </IgrButton>
      </IgrDateRangePicker>
      <h3>Custom separator</h3>
      <IgrDateRangePicker useTwoInputs>
        <span slot="separator">till</span>
      </IgrDateRangePicker>
      <h3>Helper text</h3>
      <IgrDateRangePicker>
        <span slot="helper-text">Helper text goes here.</span>
      </IgrDateRangePicker>
      <h3>Prefix & Suffix</h3>
      <IgrDateRangePicker value={{start: today, end: tomorrow}}>
        <IgrIcon slot="prefix" name="downArrowIcon"></IgrIcon>
        <IgrIcon slot="suffix" name="uploadIcon"></IgrIcon>
      </IgrDateRangePicker>
      <h3>Clear & Calendar icons</h3>
      <IgrDateRangePicker value={{start: today, end: tomorrow}}>
        <IgrIcon slot="clear-icon" name="binIcon"></IgrIcon>
        <IgrIcon slot="calendar-icon" name="appsIcon"></IgrIcon>
      </IgrDateRangePicker>
      <h3>Custom calendar header + title</h3>
      <IgrDateRangePicker mode="dialog">
        <span slot="title">Custom calendar title goes here.</span>
        <span slot="header-date">
          Custom content instead of date goes here.
        </span>
      </IgrDateRangePicker>
    </div>
  );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<DrpSlots />);
