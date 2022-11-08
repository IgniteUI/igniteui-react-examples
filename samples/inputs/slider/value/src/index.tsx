import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrSlider, IgrSliderModule, IgrRangeSlider, IgrRangeSliderModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrSliderModule.register();
IgrRangeSliderModule.register();

export default class SliderValue extends React.Component<any, any> {

    public slider: IgrSlider;
    public rangeSlider: IgrRangeSlider;
    public sliderValueSpan: HTMLElement;
    public sliderLowerSpan: HTMLElement;
    public sliderUpperSpan: HTMLElement;

    constructor(props: any) {
        super(props);  
        this.onInput = this.onInput.bind(this);
        this.onRangeInput = this.onRangeInput.bind(this); 
        this.sliderRef = this.sliderRef.bind(this);
        this.rangeSliderRef = this.rangeSliderRef.bind(this); 
        
        this.sliderValueSpan = document.getElementById('slider-value') as HTMLElement;
        this.sliderLowerSpan = document.getElementById('slider-lower') as HTMLElement;
        this.sliderUpperSpan = document.getElementById('slider-upper') as HTMLElement;

    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="slider-component">
                    <IgrSlider style={{padding: "30px 30px  0px 30px"}} ref={this.sliderRef} input={this.onInput} value="40" />
                    <div style={{paddingLeft: "30px", display: "flex"}}>
                        <span style={{whiteSpace: "pre"}}>Value:</span>
                        <span id="slider-value"></span>
                    </div>

                    <IgrRangeSlider style={{padding: "30px 30px  0px 30px"}} ref={this.rangeSliderRef} input={this.onRangeInput} lower="20" upper="70"></IgrRangeSlider>
                    <div style={{paddingLeft: "30px", display: "flex"}}>
                        <span style={{whiteSpace: "pre"}}>Lower:</span>
                        <span id="slider-lower">20</span>
                        <span style={{whiteSpace: "pre"}}>, Upper:</span>
                        <span id="slider-upper">70</span>
                    </div>
                </div>
            </div>
        );
    }

    public sliderRef(slider: IgrSlider){
        if (!slider) { return; }
        this.slider = slider;
    }

    public rangeSliderRef(slider: IgrRangeSlider){
        if (!slider) { return; }
        this.rangeSlider = slider;
    }

    public onInput(ev: any){
        if(!ev) { return; }
        //this.sliderValueSpan.innerHTML = ev.detail;
    }

    public onRangeInput(ev: any){
        // this.sliderLowerSpan.innerHTML = ev.detail.lower;
        // this.sliderUpperSpan.innerHTML = ev.detail.upper;
    }
    
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SliderValue/>);
