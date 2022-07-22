import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrSlider, IgrSliderModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './SliderDisabledStyle.css';

IgrSliderModule.register();

export default class SliderDisabled extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="container">
                    <IgrSlider value="40" disabled="true"/>
                </div>
            </div>
        );
    }
}

// rendering above class to the React DOM
ReactDOM.render(<SliderDisabled />, document.getElementById('root'));
