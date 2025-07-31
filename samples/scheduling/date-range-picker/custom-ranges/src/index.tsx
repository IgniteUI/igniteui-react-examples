import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrDateRangePicker } from 'igniteui-react';
import { CustomDateRange } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function DrpCustom() {
  useEffect(() => {
    const today = new Date();
    const nextSeven = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 7
    );
    const nextWeek: CustomDateRange[] = [
      {
        label: "Next 7 days",
        dateRange: {
          start: today,
          end: nextSeven,
        },
      },
    ];
    const dateRange = document.querySelector("igc-date-range-picker") as IgrDateRangePicker;
    dateRange.customRanges = nextWeek;
    dateRange.usePredefinedRanges = true;
  }, []);

  return (
    <div className="container sample center">
      <IgrDateRangePicker 
        mode="dialog" 
        usePredefinedRanges 
        label="Custom Ranges">
      </IgrDateRangePicker>
    </div>
  );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DrpCustom/>);
