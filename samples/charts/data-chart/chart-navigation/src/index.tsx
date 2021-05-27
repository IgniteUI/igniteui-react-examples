import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartCategoryModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
// financial series modules:
import { IgrDataChartFinancialModule } from 'igniteui-react-charts';
// data chart's elements:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
import { IgrFinancialPriceSeries } from 'igniteui-react-charts';
import { SampleFinancialData } from './SampleFinancialData';

IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
IgrDataChartFinancialModule.register();
IgrDataChartInteractivityModule.register();

export default class DataChartNavigation extends React.Component<any, any> {
    public chart: IgrDataChart;

    constructor(props: any) {
        super(props);

        this.state = {
            data: SampleFinancialData.create(),
            defaultInteraction: "DragPan",
            dragModifier: "Alt",
            isZoomEnabled: true,
            panModifier: "Control" };

        this.onChartRef = this.onChartRef.bind(this);

        this.onDefaultInteractionChange = this.onDefaultInteractionChange.bind(this);
        this.onPanModifierChange = this.onPanModifierChange.bind(this);
        this.onDragModifierChange = this.onDragModifierChange.bind(this);

        this.onZoomEnabledChange = this.onZoomEnabledChange.bind(this);

        this.onPanDownClick = this.onPanDownClick.bind(this);
        this.onPanLeftClick = this.onPanLeftClick.bind(this);
        this.onPanRightClick = this.onPanRightClick.bind(this);
        this.onPanUpClick = this.onPanUpClick.bind(this);
        this.onZoomInClick = this.onZoomInClick.bind(this);
        this.onZoomOutClick = this.onZoomOutClick.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options horizontal">
                    <div className="options vertical" style={{width: "100px"}}>
                        <button onClick={this.onPanUpClick}>Pan Up</button>
                        <button onClick={this.onPanDownClick}>Pan Down</button>
                    </div>
                    <div className="options vertical" style={{width: "100px"}}>
                        <button onClick={this.onPanLeftClick}>Pan Left</button>
                        <button onClick={this.onPanRightClick}>Pan Right</button>
                    </div>
                    <div className="options vertical" style={{width: "100px"}}>
                        <button onClick={this.onZoomInClick}>Zoom In</button>
                        <button onClick={this.onZoomOutClick}>Zoom Out</button>
                    </div>
                    <div className="options vertical" style={{ width: "120px", alignSelf: "center" }}>
                        <label className="options-label" style={{ margin: "5px" }}>Pan Modifier:</label>
                        <label className="options-label" style={{ margin: "5px" }}>Zoom Modifier:</label>
                    </div>
                    <div className="options vertical" style={{ width: "100px" }}>
                        <select value={this.state.panModifier} style={{ margin: "5px"}} onChange={this.onPanModifierChange}>
                            <option>Alt</option>
                            <option>Control</option>
                            <option>Shift</option>
                            <option>Windows</option>
                            <option>Apple</option>
                            <option>None</option>
                        </select>
                        <select value={this.state.dragModifier} style={{ margin: "5px"}} onChange={this.onDragModifierChange}>
                            <option>Alt</option>
                            <option>Control</option>
                            <option>Shift</option>
                            <option>Windows</option>
                            <option>Apple</option>
                            <option>None</option>
                        </select>
                    </div>
                    <div className="options vertical" style={{ width: "150px", alignSelf: "center" }}>
                        <label className="options-label" style={{ margin: "5px"}}>Interaction:</label>
                        <label className="options-label" style={{ margin: "5px"}}>Zooming:</label>
                    </div>
                    <div className="options vertical" style={{ width: "100px" }}>
                        <select value={this.state.defaultInteraction} style={{ margin: "5px"}} onChange={this.onDefaultInteractionChange}>
                            <option>DragZoom</option>
                            <option>DragPan</option>
                            <option>None</option>
                        </select>
                        <input type="checkbox" checked={this.state.isZoomEnabled} onChange={this.onZoomEnabledChange} />
                    </div>
                </div>

                <div className="container vertical">
                    <IgrDataChart
                        ref={this.onChartRef}
                        width="100%"
                        height="100%"
                        subtitle="Stock Prices Series in Candlestick Display Type"
                        subtitleTopMargin={10}
                        isHorizontalZoomEnabled={this.state.isZoomEnabled}
                        isVerticalZoomEnabled={this.state.isZoomEnabled}
                        panModifier={this.state.panModifier}
                        dragModifier={this.state.dragModifier}
                        defaultInteraction={this.state.defaultInteraction}
                        dataSource={this.state.data}>
                        <IgrCategoryXAxis
                            name="xAxis"
                            label="Label"/>
                        <IgrNumericYAxis
                            name="yAxis"
                            title="Amount (in USD)"
                            titleRightMargin={10}
                            labelRightMargin={10}
                            labelHorizontalAlignment="Left"
                            labelLocation="OutsideRight"/>
                        <IgrFinancialPriceSeries
                            name="series1"
                            xAxisName="xAxis"
                            yAxisName="yAxis"
                            displayType="Candlestick"
                            openMemberPath="Open"
                            closeMemberPath="Close"
                            highMemberPath="High"
                            lowMemberPath="Low"
                            volumeMemberPath="Volume"
                            showDefaultTooltip={true}
                            isTransitionInEnabled={true}
                            title="Price"/>
                    </IgrDataChart>
                </div>
            </div>
        );
    }

    public onChartRef(chart: IgrDataChart) {
        if (!chart) { return; }

        this.chart = chart;
        this.chart.actualWindowScaleHorizontal = 0.60;
        this.chart.actualWindowScaleVertical = 0.60;
        this.chart.actualWindowPositionVertical = 0.20;
        this.chart.actualWindowPositionHorizontal = 0.20;
    }

    public onDefaultInteractionChange = (e: any) => {
        this.setState({ defaultInteraction: e.target.value });
    }

    public onPanModifierChange = (e: any) => {
        this.setState({ panModifier: e.target.value });
    }

    public onDragModifierChange = (e: any) => {
        this.setState({ dragModifier: e.target.value });
    }

    public onZoomEnabledChange = (e: any) => {
        this.setState({ isZoomEnabled: e.target.checked });
    }

    public onPanUpClick = (e: any) => {
        this.chart.actualWindowPositionVertical -= 0.05;
    }

    public onPanDownClick = (e: any) => {
        this.chart.actualWindowPositionVertical += 0.05;
    }

    public onPanLeftClick = (e: any) => {
        this.chart.actualWindowPositionHorizontal -= 0.05;
    }

    public onPanRightClick = (e: any) => {
        this.chart.actualWindowPositionHorizontal += 0.05;
    }

    public onZoomOutClick = (e: any) => {
        if (this.chart.actualWindowPositionHorizontal > 0.025) {
            this.chart.actualWindowPositionHorizontal -= 0.025;
        }
        if (this.chart.actualWindowPositionVertical > 0.025) {
            this.chart.actualWindowPositionVertical -= 0.025;
        }

        if (this.chart.actualWindowScaleHorizontal < 1.0) {
            this.chart.actualWindowScaleHorizontal += 0.05;
        }
        if (this.chart.actualWindowScaleVertical < 1.0) {
            this.chart.actualWindowScaleVertical += 0.05;
        }
    }

    public onZoomInClick = (e: any) => {
        if (this.chart.actualWindowPositionHorizontal < 1.0) {
            this.chart.actualWindowPositionHorizontal += 0.025;
        }
        if (this.chart.actualWindowPositionVertical < 1.0) {
            this.chart.actualWindowPositionVertical += 0.025;
        }

        if (this.chart.actualWindowScaleHorizontal > 0.05) {
            this.chart.actualWindowScaleHorizontal -= 0.05;
        }
        if (this.chart.actualWindowScaleVertical > 0.05) {
            this.chart.actualWindowScaleVertical -= 0.05;
        }
    }
}

// rendering above class to the React DOM
ReactDOM.render(<DataChartNavigation />, document.getElementById('root'));
