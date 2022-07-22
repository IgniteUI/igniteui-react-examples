import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrSlider, IgrSliderModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrSliderModule.register();

export default class SliderValueFormat extends React.Component<any, any> {

    public slider: IgrSlider;
    public slider2: IgrSlider;

    constructor(props: any) {
        super(props);   
        this.sliderRef = this.sliderRef.bind(this);
        this.sliderRef2 = this.sliderRef.bind(this);        
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrSlider ref={this.sliderRef} style={{padding: "30px 50px"}}
                    primaryTicks="3"
                    secondaryTicks="4"></IgrSlider>

                <IgrSlider ref={this.sliderRef2} style={{padding: "30px 50px"}}
                    valueFormat="Storage {0} GB"></IgrSlider>
            </div>
        );
    }

    public sliderRef(slider: IgrSlider){
        if (!slider) { return; }
        this.slider = slider;
        this.slider.valueFormatOptions = { style: 'currency', currency: 'USD'};
    }

    public sliderRef2(slider: IgrSlider){
        if (!slider) { return; }
        this.slider2 = slider;
        this.slider2.valueFormatOptions = { minimumFractionDigits: 1};
    }
}

// rendering above class to the React DOM
ReactDOM.render(<SliderValueFormat />, document.getElementById('root'));
