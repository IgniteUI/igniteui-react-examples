import * as React from "react";
import { any } from 'prop-types';

export class CategoryChartSharedComponent
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

    dataInfo?: string,
    dataPoints?: number,
    dataSource?: any,
    scalingRatio?: number,
    refreshInterval?: number,
    refreshInfo?: string
};
