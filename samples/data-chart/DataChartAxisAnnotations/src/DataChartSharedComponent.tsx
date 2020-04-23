import * as React from "react";

export class DataChartSharedComponent
    extends React.Component<any, IComponentState> {

    constructor(props: any) {
        super(props);

        this.state = { seriesType: "Column" }
    }
}

export interface IComponentState
{
    xAxisType?: string,
    yAxisType?: string,

    xAxis1Location?: string,
    xAxis2Location?: string,
    yAxis1Location?: string,
    yAxis2Location?: string,

    seriesHeatMax?: number,
    seriesHeatMin?: number,
    seriesResolution?: number,
    seriesPointExtent?: number,

    seriesType?: string,    
    seriesThickness?: number,
    seriesContours?: number,
    seriesScaleMode?: string,
    seriesScaleMin?: number,
    seriesScaleMax?: number,

    displayTypeIndicator?: string,
    displayTypeSeries?: string,

    isCategoryHighlighting?: boolean,
    isItemHighlighting?: boolean,
    isSeriesHighlighting?: boolean,

    crosshairsVisible?: boolean,
    crosshairsMode?: string,
    calloutsVisible?: boolean,
    finalValuesVisible?: boolean,
    valueOverlayVisible?: boolean,

    markersType?: string,
    markersVisible?: boolean,

    toolTipType?: string,
    trendLineType?: string,
    trendThickness?: number,

    dataInfo?: string,
    dataPoints?: number,
    dataSource?: any,
    scalingRatio?: number,

    isHorizontalZoomEnabled?: boolean,
    isVerticalZoomEnabled?: boolean,
    isZoomEnabled?: boolean,

    defaultInteraction?: string,
    dragModifier?: string,
    panModifier?: string,
    
    hdUseBruteForce?: boolean
};
