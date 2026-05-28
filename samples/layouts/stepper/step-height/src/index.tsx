import React from 'react';
import ReactDOM from 'react-dom/client';
import { IgrStepper, IgrStep, IgrSwitch } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './index.css';

export default function StepHeight() {
  const stepperRef = React.useRef<IgrStepper>(null);
  const [rows, setRows] = React.useState('1fr');

  const onSwitchChange = (e: any) => {
    const newRows = e.detail.checked ? '0fr' : '1fr';
    stepperRef.current.style.setProperty('--body-grid-rows', newRows);
    setRows(newRows);
  };

  return (
    <div className="container sample">
      <header>
          <label>1fr</label>
          <IgrSwitch onChange={onSwitchChange}></IgrSwitch>
          <label>0fr</label>
          <output>--body-grid-rows: <span>{rows}</span></output>
      </header>
      <IgrStepper ref={stepperRef} contentTop={true}>
        <IgrStep>
          <span slot="title">Personal Info</span>
          <h2>Personal Info</h2>
          <ul>
            <li>Please enter your personal information.</li>
          </ul>
        </IgrStep>
        <IgrStep>
          <span slot="title">Delivery address</span>
          <h2>Delivery address</h2>
          <ul>
            <li>Enter your shipping address for delivery.</li>
            <li>
              If you need to change your address, please contact our support
              team.
            </li>
            <li>
              If you will not be at the address during the delivery time, please
              provide an alternative address.
            </li>
          </ul>
        </IgrStep>
        <IgrStep>
          <span slot="title">Billing address</span>
          <h2>Billing address</h2>
          <ul>
            <li>Please enter your billing address.</li>
          </ul>
        </IgrStep>
        <IgrStep invalid={true}>
          <span slot="title">Confirmation</span>
          <h2>Confirmation</h2>
          <ul>
            <li>Please review your order details and confirm your purchase.</li>
          </ul>
        </IgrStep>
      </IgrStepper>
    </div>
  );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<StepHeight />);
