import { IgrFinancialChart } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from 'igniteui-react-charts';
import * as React from "react";
import "../styles.css";
import "./FinancialChartSharedStyles.css";
import { FinancialChartSharedComponent } from "./FinancialChartSharedComponent";
import { StocksUtility } from "./StocksUtility";

IgrFinancialChartModule.register();

export default class FinancialChartVolumeTypes extends FinancialChartSharedComponent {

    public data: any[];

    constructor(props: any) {
        super(props);

        this.state = { volumeType: "Area" }
        this.initData();
    }

    public render() {
        return (
        <div className="sample" >
            <div className="options">
                <label className="optionLabel">Volume Type:</label>
                <select value={this.state.volumeType}
                    onChange={this.onVolumeTypeChanged}>
                    <option>Column</option>
                    <option>Area</option>
                    <option>Line</option>
                    <option>None</option>
                </select>
            </div>
            <div className="chart" style={{height: "calc(100% - 65px)"}}>
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

