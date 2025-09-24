import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrDateRangePicker, IgrButton, IgrDialog } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function DrpForm() {
  const dialog = useRef<IgrDialog>(null);
  const [range, setRange] = useState({ start: null, end: null });

  const showDialog = (event: React.FormEvent<HTMLFormElement>) => {
    if (dialog.current) {
      event.preventDefault();
      dialog.current.show();
    }
  };

  const handleDateRangeChange = (event: CustomEvent) => {
    const newRange = {
      start: event.detail?.start || null,
      end: event.detail?.end || null,
    };
    setRange(newRange);
  };

  return (
    <div className="container sample center">
      <form id="DateForm" onSubmit={showDialog}>
        <fieldset>
          <IgrDateRangePicker
            required
            onChange={handleDateRangeChange}
            label="Date Range"
          ></IgrDateRangePicker>
          <IgrButton variant="outlined" type="submit">
            Submit
          </IgrButton>
          <IgrButton variant="outlined" type="reset">
            Reset
          </IgrButton>
        </fieldset>
      </form>
      <IgrDialog ref={dialog}>
        <pre>
          <b>Start</b>: {range?.start?.toString() ?? ""} <br />
          <b>End</b>: {range?.end?.toString() ?? ""}
        </pre>
      </IgrDialog>
    </div>
  );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DrpForm/>);
