import * as React from "react";

import "./FinancialChartSharedStyles.css";
import { FinancialChartSharedComponent } from "./FinancialChartSharedComponent";

export default class FinancialChartTooltipTemplate extends FinancialChartSharedComponent {

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

