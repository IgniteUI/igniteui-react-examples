import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrSlider, IgrSliderModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './SliderConstraintsStyle.css';

IgrSliderModule.register();

export default class SliderConstraints extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="container">
                    <IgrSlider max="1000" min="100" lowerBound="200" upperBound="800" value="400" primaryTicks="2"/>
                </div>
            </div>
        );
    }
}

// rendering above class to the React DOM
ReactDOM.render(<SliderConstraints />, document.getElementById('root'));
