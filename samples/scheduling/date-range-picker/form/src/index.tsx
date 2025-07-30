import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrDateRangePicker, IgrButton, IgrDialog } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function DrpForm() {
    useEffect(() => {
			document.getElementById("DateForm")?.addEventListener("submit", (event: SubmitEvent) => {
				event.preventDefault();
				showDialog(event.target as HTMLFormElement);
			});

			function showDialog(data: HTMLFormElement) {
				let dateRange = data.DateRange.value;
				const dialog = document.createElement("igc-dialog") as IgrDialog;
				dialog.addEventListener("igcClosed", () => dialog.remove());
				const dump = document.createElement("pre");
				dump.innerHTML = `<b>Start</b>: ${dateRange.start} \n<b>End</b>: ${dateRange.end}`;
				dialog.appendChild(dump);
				document.body.appendChild(dialog);
				dialog.show();
			}
		}, []);

    return (
			<div className="container sample center">
				<form id="DateForm">
					<fieldset>
						<IgrDateRangePicker
							required
							min={new Date("2025-05-01")}
							label="Date Range"
							id="DateRange"
						></IgrDateRangePicker>
						<IgrButton variant="outlined" type="submit">
							Submit
						</IgrButton>
						<IgrButton variant="outlined" type="reset">
							Reset
						</IgrButton>
					</fieldset>
				</form>
			</div>
		);
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DrpForm/>);
