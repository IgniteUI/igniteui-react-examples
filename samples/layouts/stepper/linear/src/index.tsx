import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    IgrStepper, IgrStep, IgrStepperModule, IgrRadio, IgrRadioGroup, IgrRadioModule, IgrRadioGroupModule,
    IgrButton, IgrButtonModule, IgrSwitch, IgrSwitchModule, IgrCheckboxBase, IgrCheckboxChangeEventArgs, IgrComponentValueChangedEventArgs,
    IgrInput, IgrInputModule
} from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrStepperModule.register();
IgrSwitchModule.register();
IgrInputModule.register();
IgrRadioModule.register();
IgrRadioGroupModule.register();
IgrButtonModule.register();

export default class LinearStepper extends React.Component<any, any> {
    private stepperRef = React.createRef<IgrStepper>();
    private InfoForm = React.createRef<any>();
    private AddressForm = React.createRef<any>();
    private activeStepIndex = 0;

    constructor(props: any) {
        super(props);
        this.state = { linear: false, firstStepInvalid: true, secondStepInvalid: true };
        this.OnSwitchChange = this.OnSwitchChange.bind(this);
    }

    componentDidMount() {
        this.InfoForm.current.addEventListener("igcInput", this.onInput.bind(this));  
        this.AddressForm.current.addEventListener("igcInput", this.onInput.bind(this));        
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrSwitch change={this.OnSwitchChange}><span key="liner-switch">Linear</span></IgrSwitch>

                <IgrStepper ref={this.stepperRef} linear={this.state.linear} >
                    <IgrStep key="info-step" invalid={this.state.linear && this.state.firstStepInvalid}>
                        <span key="info-title" slot="title">Personal Info</span>
                        <form ref={this.InfoForm}>
                            <IgrInput required label="Full Name" type="text" name="fullName"></IgrInput>
                            <IgrInput required label="Email" type="email" name="email"></IgrInput>

                            <IgrButton disabled={this.state.linear && this.state.firstStepInvalid} onClick={() => { this.stepperRef.current.next(); }}><span key="info-next">NEXT</span></IgrButton>
                        </form>
                    </IgrStep>
                    <IgrStep key="address-step" invalid={this.state.linear && this.state.secondStepInvalid}>
                        <span key="address-title" slot="title">Delivery address</span>
                        <form ref={this.AddressForm}>
                            <IgrInput required label="City" type="text" name="city"></IgrInput>
                            <IgrInput required label="Street" type="text" name="street"></IgrInput>
                            <IgrButton onClick={() => { this.stepperRef.current.prev(); }}><span key="address-prev">PREVIOUS</span></IgrButton>
                            <IgrButton disabled={this.state.linear && this.state.secondStepInvalid} onClick={() => { this.stepperRef.current.next(); }}><span key="address-next">NEXT</span></IgrButton>
                        </form>
                    </IgrStep>
                    <IgrStep key="billing-step" optional>
                        <span key="billing-title" slot="title">Billing address</span>
                        <span key="billing-subtitle" slot="subtitle">(optional)</span>
                        <form>
                            <IgrInput required label="City" type="text" name="bill-city"></IgrInput>
                            <IgrInput required label="Street" type="text" name="bill-street"></IgrInput>
                            <IgrButton onClick={() => { this.stepperRef.current.prev(); }}><span key="billing-prev">PREVIOUS</span></IgrButton>
                            <IgrButton onClick={() => { this.stepperRef.current.next(); }}><span key="billing-next">NEXT</span></IgrButton>
                        </form>
                    </IgrStep>
                    <IgrStep key="payment-step">
                        <span key="payment-title" slot="title">Payment</span>
                        <IgrRadioGroup>
                            <IgrRadio key="pay-pal-radio" name="payment" checked><span key="pay-pal">PayPal (n@mail.com; 18/02/2021)</span></IgrRadio>
                            <IgrRadio key="visa-radio" name="payment"><span key="visa">Visa (**** **** **** 1234; 12/23)</span></IgrRadio>
                            <IgrRadio key="master-card-radio" name="payment"><span key="master-card">MasterCard (**** **** **** 5678; 12/24)</span></IgrRadio>
                        </IgrRadioGroup>
                        <IgrButton onClick={() => { this.stepperRef.current.prev(); }}><span key="payment-prev">PREVIOUS</span></IgrButton>
                        <IgrButton onClick={() => { this.stepperRef.current.next(); }}><span key="payment-submit">SUBMIT</span></IgrButton>
                    </IgrStep>
                    <IgrStep key="status-step">
                        <span key="status-title" slot="title">Delivery status</span>
                        <p key="status-content">Your order is on its way. Expect delivery on 25th September 2021. Delivery address: San Jose, CA 94243.</p>
                        <IgrButton onClick={() => { this.stepperRef.current.prev(); }}><span key="status-prev">PREVIOUS</span></IgrButton>
                        <IgrButton onClick={() => { this.stepperRef.current.reset(); }}><span key="status-reset">RESET</span></IgrButton>
                    </IgrStep>
                </IgrStepper>
            </div>
        );
    }

    public OnSwitchChange(s: IgrCheckboxBase, e: IgrCheckboxChangeEventArgs) {
        this.setState({ linear: s.checked });
        if(s.checked){
           this.checkActiveStepValidity();
        }
    }

    public onInput(s: IgrInput, e: IgrComponentValueChangedEventArgs) {
        if(!this.state.linear) return;

        this.checkActiveStepValidity();       
    }

    private checkActiveStepValidity(){
        const activeStep = this.activeStep;
        if (activeStep && this.activeStepIndex === 0) {
            const isInvalidForm = this.checkFormValidity(this.InfoForm);
            this.setState({firstStepInvalid: isInvalidForm});
        }
        if (activeStep && this.activeStepIndex === 1) {
            const isInvalidForm = this.checkFormValidity(this.AddressForm);
            this.setState({ secondStepInvalid: isInvalidForm });
        }
    }

    private checkFormValidity(form: any){
        let isInvalidForm = false;
        for (const element of form.current.children) {
            if(element.tagName.toLowerCase() === 'igc-input' && element.value === ""){
                const oldInvalid = element.invalid;
                const isElementInvalid = !element.checkValidity();
                element.invalid = oldInvalid;
                if(isElementInvalid){
                    isInvalidForm = true;
                    break;
                }            
            }  
        }
        return isInvalidForm;
    }

    private get activeStep(): IgrStep | undefined {
        return this.stepperRef.current.steps.find((step: IgrStep, index: number) => {
            this.activeStepIndex = index;
            return step.active;
        });
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LinearStepper />);
