import * as React from 'react';

export default class FinancialChartTooltipTemplate extends React.Component<any, any> {

    public data: any[];

    constructor(props: any) {
        super(props);

        this.state = { chartType: "Auto" }
        this.initData();
    }

    public render() {
        return (
            <div className="igContainer">
            <p>TODO implement render() in {this.constructor.name}.tsx file</p>
            </div>
        );
    }

    public initData() {
        // TODO
    }
}
