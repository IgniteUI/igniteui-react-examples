import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrSlider, IgrSliderModule, IgrSliderLabel, IgrSliderLabelModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './SliderLabelsStyle.css';

IgrSliderModule.register();
IgrSliderLabelModule.register();

export default class SliderLabels extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrSlider primaryTicks="3" >
                    <IgrSliderLabel><span>Low</span></IgrSliderLabel>
                    <IgrSliderLabel><span>Medium</span></IgrSliderLabel>
                    <IgrSliderLabel><span>High</span></IgrSliderLabel>
                </IgrSlider>
            </div>
        );
    }
}

// rendering above class to the React DOM
ReactDOM.render(<SliderLabels />, document.getElementById('root'));
