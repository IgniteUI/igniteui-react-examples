import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrStepper, IgrStep, IgrStepperModule, StepperStepType, IgrRadio, IgrRadioGroup, IgrRadioChangeEventArgs, IgrRadioModule, IgrRadioGroupModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrStepperModule.register();
IgrRadioModule.register();
IgrRadioGroupModule.register();

export default class StepperStepTypes extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { stepType: "full" };
        this.onStepTypeChange = this.onStepTypeChange.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <label>Step type</label>
                <div className="radio-group-container">
                    <IgrRadioGroup alignment="horizontal">
                        <IgrRadio key="radio-indicator" name="type" value="indicator" onChange={this.onStepTypeChange}><span key="indicator">Indicator</span></IgrRadio>
                        <IgrRadio key="radio-title" name="type" value="title" onChange={this.onStepTypeChange}><span key="indicator">Title</span></IgrRadio>
                        <IgrRadio key="radio-full" name="type" value="full" onChange={this.onStepTypeChange} checked={true}><span key="indicator">Full</span></IgrRadio>
                    </IgrRadioGroup>
                </div>

                <IgrStepper stepType={this.state.stepType}>
                    <IgrStep key="pricing">
                        <span key="pricingTitle" slot="title">Pricing Plan</span>
                    </IgrStep>
                    <IgrStep key="details">
                        <span key="detailsTitle" slot="title">Car Details</span>
                    </IgrStep>
                    <IgrStep key="payment">
                        <span key="paymentTitle" slot="title">Payment</span>
                    </IgrStep>
                </IgrStepper>
            </div>
        );
    }

    public onStepTypeChange(e: IgrRadioChangeEventArgs) {
        const newStepType = e.detail.value;
        this.setState({ stepType: newStepType });
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<StepperStepTypes />);
