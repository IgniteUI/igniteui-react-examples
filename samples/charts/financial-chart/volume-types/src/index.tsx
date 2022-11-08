import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrFinancialChart } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from 'igniteui-react-charts';
import { StocksUtility } from './StocksUtility';

IgrFinancialChartModule.register();

export default class FinancialChartVolumeDisplayTypes extends React.Component<any, any> {

    public data: any[];

    constructor(props: any) {
        super(props);

        this.state = { volumeType: "Area" }
        this.initData();
    }

    public render(): JSX.Element {
        return (
        <div className="container sample" >
            <div className="options horizontal">
                <label className="options-label">Volume Type:</label>
                <select value={this.state.volumeType}
                    onChange={this.onVolumeTypeChanged}>
                    <option>Column</option>
                    <option>Area</option>
                    <option>Line</option>
                    <option>None</option>
                </select>
            </div>
            <div className="container" style={{height: "calc(100% - 65px)"}}>
                <IgrFinancialChart
                    width="100%"
                    height="100%"
                    yAxisExtent={60}
                    volumeThickness={2}
                    volumeType={this.state.volumeType}
                    volumeBrushes="rgba(136, 77, 255, 0.75)"
                    volumeOutlines="rgba(136, 77, 255, 1)"
                    zoomSliderType="None"
                    dataSource={this.data}/>
            </div>

        </div>
        );
    }

    public onVolumeTypeChanged = (e: any) =>{
        const mode = e.target.value;
        this.setState({volumeType: mode});
    }

    public initData() {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth();
        const dateEnd = new Date(year, month, 1);
        const dateStart = new Date(year - 1, month, 1);

        this.data = StocksUtility.GetStocksBetween(dateStart, dateEnd);
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FinancialChartVolumeDisplayTypes/>);
