import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrSlider, IgrSliderModule } from "@infragistics/igniteui-react";
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './SliderDiscreteStyle.css';

IgrSliderModule.register();

export default class SliderDiscrete extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrSlider step="10" discreteTrack="true"/>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SliderDiscrete/>);
