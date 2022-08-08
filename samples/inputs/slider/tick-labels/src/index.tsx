import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrSlider, IgrSliderModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrSliderModule.register();

export default class SliderTickLabels extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrSlider style={{padding: "30px 30px  0px 30px"}}
                    primaryTicks="6" 
                    secondaryTicks="1"
                    tickOrientation="Mirror" 
                    tickLabelRotation={-90} 
                    hideSecondaryLabels="true">
                </IgrSlider>
            </div>
        );
    }
}

// rendering above class to the React DOM
ReactDOM.render(<SliderTickLabels />, document.getElementById('root'));
