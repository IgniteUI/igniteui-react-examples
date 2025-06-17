import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    IgrButton,
    IgrRadio,
    IgrRadioChangeEventArgs,
    IgrRadioGroup,
    IgrStep,
    IgrStepper,
    StepperOrientation,
    StepperTitlePosition,
} from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export interface StepperOrientationProps {
    orientation: StepperOrientation;
    titlePosition: StepperTitlePosition;
  }

export default class StepperOrientationSample extends React.Component<any, StepperOrientationProps> {
    private stepperRef = React.createRef<IgrStepper>();

    constructor(props: StepperOrientationProps) {
        super(props);
        this.state = { orientation: "horizontal", titlePosition: "auto" };
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
                            <IgrRadioGroup alignment="horizontal" onChange={this.handleTitlePositionChange} value={this.state.titlePosition}>
                                <IgrRadio name="title" value="top"><span>Top</span></IgrRadio>
                                <IgrRadio name="title" value="bottom"><span>Bottom</span></IgrRadio>
                                <IgrRadio name="title" value="start"><span>Start</span></IgrRadio>
                                <IgrRadio name="title" value="end"><span>End</span></IgrRadio>
                                <IgrRadio name="title" value="auto"><span>Auto (default)</span></IgrRadio>
                            </IgrRadioGroup>
                        </div>
                    </div>
                    <div className="radio-group">
                        <label>Orientation</label>
                        <div className="radio-group-container">
                            <IgrRadioGroup alignment="horizontal" onChange={this.handleOrientationChange} value={this.state.orientation}>
                                <IgrRadio name="orientation" value="horizontal"><span>Horizontal</span></IgrRadio>
                                <IgrRadio name="orientation" value="vertical"><span>Vertical</span></IgrRadio>
                            </IgrRadioGroup>
                        </div>
                    </div>
                </div>
                <IgrStepper ref={this.stepperRef} orientation={this.state.orientation} titlePosition={this.state.titlePosition}>
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
        const newTitlePosition = e.detail.value as StepperTitlePosition;
        this.setState({ titlePosition: newTitlePosition });
    }

    public handleOrientationChange(e: IgrRadioChangeEventArgs) {
        const newOrientation = e.detail.value as StepperOrientation;
        this.setState({ orientation: newOrientation, titlePosition: "auto" });
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<StepperOrientationSample />);
