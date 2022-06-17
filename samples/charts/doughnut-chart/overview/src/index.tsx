import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { IgrLegendModule, IgrDoughnutChartModule } from 'igniteui-react-charts';
import { IgrDoughnutChart, IgrRingSeries } from 'igniteui-react-charts';
import { CompanyMarketSharesItem, CompanyMarketShares } from './CompanyMarketShares';



const mods: any[] = [
    IgrLegendModule,
    IgrDoughnutChartModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private chart: IgrDoughnutChart
    private chartRef(r: IgrDoughnutChart) {
        this.chart = r;
        this.setState({});
    }
    private series: IgrRingSeries

    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Market Share of Tech Companies
            </div>


            <div className="container fill">
                <IgrDoughnutChart
                    ref={this.chartRef}>
                    <IgrRingSeries
                        dataSource={this.companyMarketShares}
                        valueMemberPath="value"
                        labelMemberPath="summary"
                        legendLabelMemberPath="category"
                        outlines="white"
                        name="series">
                    </IgrRingSeries>
                </IgrDoughnutChart>
            </div>
        </div>
        );
    }

    private _companyMarketShares: CompanyMarketShares = null;
    public get companyMarketShares(): CompanyMarketShares {
        if (this._companyMarketShares == null)
        {
            this._companyMarketShares = new CompanyMarketShares();
        }
        return this._companyMarketShares;
    }
    


}


// rendering above component in the React DOM
ReactDOM.render(<Sample />, document.getElementById('root'));
