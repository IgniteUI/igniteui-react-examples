import { useRef, useState } from 'react';
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

export default function StepperOrientationSample() {
    const stepperRef = useRef<IgrStepper>(null);
    const [orientation, setOrientation] = useState<StepperOrientation>("horizontal");
    const [titlePosition, setTitlePosition] = useState<StepperTitlePosition>("auto");

    function handleTitlePositionChange(e: IgrRadioChangeEventArgs) {
        const newTitlePosition = e.detail.value as StepperTitlePosition;
        setTitlePosition(newTitlePosition);
    }

    function handleOrientationChange(e: IgrRadioChangeEventArgs) {
        const newOrientation = e.detail.value as StepperOrientation;
        setOrientation(newOrientation);
        setTitlePosition("auto");
    }

    return (
        <div className="container sample">
            <div className="radio-groups">
                <div className="radio-group">
                    <label>Title position</label>
                    <div className="radio-group-container">
                        <IgrRadioGroup alignment="horizontal" onChange={handleTitlePositionChange} value={titlePosition}>
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
                        <IgrRadioGroup alignment="horizontal" onChange={handleOrientationChange} value={orientation}>
                            <IgrRadio name="orientation" value="horizontal"><span>Horizontal</span></IgrRadio>
                            <IgrRadio name="orientation" value="vertical"><span>Vertical</span></IgrRadio>
                        </IgrRadioGroup>
                    </div>
                </div>
            </div>
            <IgrStepper ref={stepperRef} orientation={orientation} titlePosition={titlePosition}>
                <IgrStep>
                    <span slot="title">Order</span>
                    <IgrButton onClick={() => { stepperRef.current!.next(); }}><span>NEXT</span></IgrButton>
                </IgrStep>
                <IgrStep>
                    <span slot="title">Payment</span>
                    <IgrButton onClick={() => { stepperRef.current!.prev(); }}><span>PREVIOUS</span></IgrButton>
                    <IgrButton onClick={() => { stepperRef.current!.next(); }}><span>NEXT</span></IgrButton>
                </IgrStep>
                <IgrStep>
                    <span slot="title">Confirmation</span>
                    <IgrButton onClick={() => { stepperRef.current!.prev(); }}><span>PREVIOUS</span></IgrButton>
                    <IgrButton onClick={() => { stepperRef.current!.reset(); }}><span>RESET</span></IgrButton>
                </IgrStep>
            </IgrStepper>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<StepperOrientationSample />);
