import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrStepper, IgrStep, IgrRadio, IgrRadioGroup, StepperStepType, IgrRadioChangeEventArgs } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';


export default function StepperStepTypes() {

    const [stepType, setStepType] = useState<StepperStepType>("full");

    const onStepTypeChange = (e: IgrRadioChangeEventArgs) => {
        const newStepType = e.detail.value as StepperStepType;
        setStepType(newStepType);
    }

    
    return (
        <div className="container sample">
            <label>Step type</label>
            <div className="radio-group-container">
                <IgrRadioGroup alignment="horizontal">
                    <IgrRadio name="type" value="indicator" onChange={onStepTypeChange}><span>Indicator</span></IgrRadio>
                    <IgrRadio name="type" value="title" onChange={onStepTypeChange}><span>Title</span></IgrRadio>
                    <IgrRadio name="type" value="full" onChange={onStepTypeChange} checked={stepType === 'full'}><span>Full</span></IgrRadio>
                </IgrRadioGroup>
            </div>
            <IgrStepper stepType={stepType}>
                <IgrStep>
                    <span slot="title">Pricing Plan</span>
                </IgrStep>
                <IgrStep>
                    <span slot="title">Car Details</span>
                </IgrStep>
                <IgrStep>
                    <span slot="title">Payment</span>
                </IgrStep>
            </IgrStepper>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<StepperStepTypes />);
