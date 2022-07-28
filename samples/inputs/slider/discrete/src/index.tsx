import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrSlider, IgrSliderModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './SliderDiscreteStyle.css';

IgrSliderModule.register();

export default class SliderDiscrete extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container-center sample">
                <IgrSlider step="10" discreteTrack="true"/>
            </div>
        );
    }
}

// rendering above class to the React DOM
ReactDOM.render(<SliderDiscrete />, document.getElementById('root'));
