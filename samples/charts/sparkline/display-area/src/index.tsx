import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { IgrSparklineModule } from 'igniteui-react-charts';
import { IgrSparkline } from 'igniteui-react-charts';
import { SparklineMixedDataItem, SparklineMixedData } from './SparklineMixedData';



const mods: any[] = [
    IgrSparklineModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private chart: IgrSparkline
    private chartRef(r: IgrSparkline) {
        this.chart = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">



            <div className="container fill">
                <IgrSparkline
                    dataSource={this.sparklineMixedData}
                    valueMemberPath="value"
                    labelMemberPath="label"
                    displayType="Area"
                    ref={this.chartRef}>
                </IgrSparkline>
            </div>
        </div>
        );
    }

    private _sparklineMixedData: SparklineMixedData = null;
    public get sparklineMixedData(): SparklineMixedData {
        if (this._sparklineMixedData == null)
        {
            this._sparklineMixedData = new SparklineMixedData();
        }
        return this._sparklineMixedData;
    }
    


}


// rendering above component in the React DOM
ReactDOM.render(<Sample />, document.getElementById('root'));
