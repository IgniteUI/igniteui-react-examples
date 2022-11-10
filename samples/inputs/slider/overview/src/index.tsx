import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrSlider, IgrSliderModule, IgrRangeSlider, IgrRangeSliderModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './SliderOverviewStyle.css';

IgrSliderModule.register();
IgrRangeSliderModule.register();

export default class SliderOverview extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="slider-component">
                    <span className="slider-label">Slider</span>
                    <IgrSlider value="40" />
                    <span className="slider-label">Range Slider</span>
                    <IgrRangeSlider lower="20" upper="70"></IgrRangeSlider>
                </div>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SliderOverview/>);
