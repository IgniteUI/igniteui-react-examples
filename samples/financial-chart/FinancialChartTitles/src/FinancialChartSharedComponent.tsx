import * as React from "react";

export class FinancialChartSharedComponent
    extends React.Component<any, IComponentState> {

    constructor(props: any) {
        super(props);

        this.state = { chartType: "Auto" }
    }
}

export interface IComponentState
{
    chartType?: string,
    isCategoryHighlighting?: boolean,
    isItemHighlighting?: boolean,
    isSeriesHighlighting?: boolean,

    crosshairsVisible?: boolean,
    crosshairsMode?: string,
    calloutsVisible?: boolean,
    finalValuesVisible?: boolean,

    markersTypes?: string,
    markersVisible?: boolean,

    toolTipType?: string,
    trendLineType?: string,

    xAxisMode?: string,
    yAxisMode?: string,
    volumeType?: string,

    dataInfo?: string,
    dataPoints?: number,
    dataSource?: any,
    scalingRatio?: number,
};
