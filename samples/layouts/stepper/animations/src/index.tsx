import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    IgrStepper, IgrStep, IgrStepperModule, IgrRadio, IgrRadioGroup, IgrRadioModule, IgrRadioGroupModule,
    IgrButton, IgrButtonModule, IgrInput, IgrInputModule, IgrSelect, IgrSelectItem, IgrSelectModule,
    IgrSelectItemComponentEventArgs, IgrComponentValueChangedEventArgs
} from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrStepperModule.register();
IgrInputModule.register();
IgrRadioModule.register();
IgrRadioGroupModule.register();
IgrButtonModule.register();
IgrSelectModule.register();

export default class StepperAnimations extends React.Component<any, any> {
    private stepperRef = React.createRef<IgrStepper>();
    constructor(props: any) {
        super(props);
        this.state = { orientation: 'horizontal', horizontalAnimation: 'slide', verticalAnimation: 'grow', animationDuration: "320" };
        this.orientationChange = this.orientationChange.bind(this);
        this.horizontalAnimationChange = this.horizontalAnimationChange.bind(this);
        this.verticalAnimationChange = this.verticalAnimationChange.bind(this);
        this.animationDurationChange = this.animationDurationChange.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">               
                <article className="settings">
                    <IgrSelect label="Orienation" change={this.orientationChange}>
                        <IgrSelectItem key="horizontal-item" value="horizontal" selected><span key="horizontal">Horizontal</span></IgrSelectItem>
                        <IgrSelectItem key="vertical-item" value="vertical"><span key="vertical">Vertical</span></IgrSelectItem>
                    </IgrSelect>
                    <IgrSelect label="Vertical Animation" change={this.horizontalAnimationChange}>
                        <IgrSelectItem key="grow-item" value="grow" selected><span key="grow">Grow</span></IgrSelectItem>
                        <IgrSelectItem key="vertical-fade-item" value="fade"><span key="vertical-fade">Fade</span></IgrSelectItem>
                        <IgrSelectItem key="vertical-none-item" value="none" selected><span key="vertical-none">None</span></IgrSelectItem>
                    </IgrSelect>
                    <IgrSelect label="Horizontal Animation" change={this.verticalAnimationChange}>
                        <IgrSelectItem key="slide-item" value="slide" selected><span key="slide">Slide</span></IgrSelectItem>
                        <IgrSelectItem key="horizontal-fade-item" value="fade"><span key="horizontal-fade">Fade</span></IgrSelectItem>
                        <IgrSelectItem key="horizontal-none-item" value="none" selected><span key="horizontal-none">None</span></IgrSelectItem>
                    </IgrSelect>
                    <IgrInput type="number" value="320" label="Duration" change={this.animationDurationChange}>
                        <span key="duration-suffix" slot="suffix">ms</span>
                    </IgrInput>
                </article>

                {/* TO DO: bind the animation properties when they are available */}
                <IgrStepper ref={this.stepperRef} orientation={this.state.orientation} >
                    <IgrStep key="info">
                        <span key="info-title" slot="title">Personal Info</span>
                        <form key="info-form">
                            <IgrInput key="full-name" label="Full Name" type="text" name="fullName"></IgrInput>
                            <IgrInput key="email" label="Email" type="email" name="email"></IgrInput>

                            <IgrButton key="info-next" clicked={() => { this.stepperRef.current.next(); }}><span>NEXT</span></IgrButton>
                        </form>
                    </IgrStep>
                    <IgrStep key="address">
                        <span key="address-title" slot="title">Delivery address</span>
                        <form key="address-form">
                            <IgrInput key="city" label="City" type="text" name="city"></IgrInput>
                            <IgrInput key="street" label="Street" type="text" name="street"></IgrInput>

                            <IgrButton key="address-prev" clicked={() => { this.stepperRef.current.prev(); }}><span>PREVIOUS</span></IgrButton>
                            <IgrButton key="address-next" clicked={() => { this.stepperRef.current.next(); }}><span>NEXT</span></IgrButton>
                        </form>
                    </IgrStep>
                    <IgrStep key="payment">
                        <span key="payment-title" slot="title">Payment</span>
                        <IgrRadioGroup key="payment-options">
                            <IgrRadio key="pay-pal-radio" name="payment" checked><span key="pay-pal">PayPal (n@mail.com; 18/02/2021)</span></IgrRadio>
                            <IgrRadio key="visa-radio" name="payment"><span key="visa">Visa (**** **** **** 1234; 12/23)</span></IgrRadio>
                            <IgrRadio key="master-card-radio" name="payment"><span key="master-card">MasterCard (**** **** **** 5678; 12/24)</span></IgrRadio>
                        </IgrRadioGroup>

                        <IgrButton key="payment-prev" clicked={() => { this.stepperRef.current.prev(); }}><span>PREVIOUS</span></IgrButton>
                        <IgrButton key="payment-next" clicked={() => { this.stepperRef.current.next(); }}><span>SUBMIT</span></IgrButton>
                    </IgrStep>
                    <IgrStep key="status">
                        <span key="status-title" slot="title">Delivery status</span>
                        <p key="status-text">Your order is on its way. Expect delivery on 25th September 2021. Delivery address: San Jose, CA 94243.</p>

                        <IgrButton key="status-prev" clicked={() => { this.stepperRef.current.prev(); }}><span>PREVIOUS</span></IgrButton>
                        <IgrButton key="status-reset" clicked={() => { this.stepperRef.current.reset(); }}><span>RESET</span></IgrButton>
                    </IgrStep>
                </IgrStepper>
            </div>
        );
    }

    public orientationChange(s: IgrSelect, e: IgrSelectItemComponentEventArgs){
        const selectedValue = e.detail.value;
        this.setState({orientation: selectedValue});
    }
    public horizontalAnimationChange(s: IgrSelect, e: IgrSelectItemComponentEventArgs){
        const selectedValue = e.detail.value;
        this.setState({horizontalAnimation: selectedValue});
    }
    public verticalAnimationChange(s: IgrSelect, e: IgrSelectItemComponentEventArgs){
        const selectedValue = e.detail.value;
        this.setState({verticalAnimation: selectedValue});
    }
    public animationDurationChange(s: IgrInput, e: IgrComponentValueChangedEventArgs){
        const animationDuration = e.detail;
        this.setState({animationDuration: animationDuration});
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<StepperAnimations />);
