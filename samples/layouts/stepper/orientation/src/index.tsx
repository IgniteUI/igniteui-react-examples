import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    IgrStepper, IgrStep, StepperOrientation, StepperTitlePosition, IgrStepperModule, IgrStepModule, IgrRadio, IgrRadioGroup,
    IgrRadioChangeEventArgs, IgrRadioModule, IgrRadioGroupModule, IgrButton, IgrButtonModule
} from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrStepperModule.register();
IgrStepModule.register();
IgrRadioModule.register();
IgrRadioGroupModule.register();
IgrButtonModule.register();

export default class StepperOrientationSample extends React.Component<any, any> {
    private stepperRef = React.createRef<IgrStepper>();

    constructor(props: any) {
        super(props);
        this.state = { orientation: StepperOrientation.Horizontal, isDefaultTitlePosition: true };
        this.handleTitlePositionChange = this.handleTitlePositionChange.bind(this);
        this.handleOrientationChange = this.handleOrientationChange.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="radio-groups">
                    <div className="radio-group">
                        <label>Title position</label>
                        <div className="radio-group-container">
                            <IgrRadioGroup alignment="horizontal">
                                <IgrRadio name="title" value="Top" onChange={this.handleTitlePositionChange}><span>Top</span></IgrRadio>
                                <IgrRadio name="title" value="Bottom" onChange={this.handleTitlePositionChange}><span>Bottom</span></IgrRadio>
                                <IgrRadio name="title" value="Start" onChange={this.handleTitlePositionChange}><span>Start</span></IgrRadio>
                                <IgrRadio name="title" value="End" onChange={this.handleTitlePositionChange}><span>End</span></IgrRadio>
                                <IgrRadio name="title" value="" checked={true} onChange={this.handleTitlePositionChange}><span>Default</span></IgrRadio>
                            </IgrRadioGroup>
                        </div>
                    </div>
                    <div className="radio-group">
                        <label>Orientation</label>
                        <div className="radio-group-container">
                            <IgrRadioGroup alignment="horizontal">
                                <IgrRadio name="orientation" value="Horizontal" checked={true} onChange={this.handleOrientationChange}><span>Horizontal</span></IgrRadio>
                                <IgrRadio name="orientation" value="Vertical" onChange={this.handleOrientationChange}><span>Vertical</span></IgrRadio>
                            </IgrRadioGroup>
                        </div>
                    </div>
                </div>
                <IgrStepper ref={this.stepperRef} orientation={this.state.orientation} >
                    <IgrStep>
                        <span slot="title">Order</span>
                        <IgrButton onClick={() => { this.stepperRef.current.next(); }}><span>NEXT</span></IgrButton>
                    </IgrStep>
                    <IgrStep>
                        <span slot="title">Payment</span>
                        <IgrButton onClick={() => { this.stepperRef.current.prev(); }}><span>PREVIOUS</span></IgrButton>
                        <IgrButton onClick={() => { this.stepperRef.current.next(); }}><span>NEXT</span></IgrButton>
                    </IgrStep>
                    <IgrStep>
                        <span slot="title">Confirmation</span>
                        <IgrButton onClick={() => { this.stepperRef.current.prev(); }}><span>PREVIOUS</span></IgrButton>
                        <IgrButton onClick={() => { this.stepperRef.current.reset(); }}><span>RESET</span></IgrButton>
                    </IgrStep>
                </IgrStepper>
            </div>
        );
    }

    public handleTitlePositionChange(e: IgrRadioChangeEventArgs) {
        const value = e.detail.value;

        if (value === '') {
            this.setDefaultTitlePosition();
            this.setState({ isDefaultTitlePosition: true });
        } else {
            const newTitlePosition: StepperTitlePosition = StepperTitlePosition[value as keyof typeof StepperTitlePosition];
            this.stepperRef.current.titlePosition = newTitlePosition;
            this.setState({ isDefaultTitlePosition: false });
        }
    }

    public handleOrientationChange(e: IgrRadioChangeEventArgs) {
        const value = e.detail.value;
        const newOrientation: StepperOrientation = StepperOrientation[value as keyof typeof StepperOrientation];
        this.setDefaultTitlePosition(newOrientation);
        this.setState({ orientation: newOrientation });
    }

    public setDefaultTitlePosition(orientation?: StepperOrientation) {
        const currentOrientation = orientation !== undefined ? orientation : this.state.orientation;
        if (currentOrientation === StepperOrientation.Horizontal) {
            this.stepperRef.current.titlePosition = StepperTitlePosition.Bottom;
        } else {
            this.stepperRef.current.titlePosition = StepperTitlePosition.End;
        }
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<StepperOrientationSample />);
