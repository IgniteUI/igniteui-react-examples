/*eslint-disable no-unused-vars */ 

import Loadable from "react-loadable";
import SampleLoading from "./SampleLoading";

// TODO test alternatively way of lazy loading
// import * as React from 'react';
// export const SampleHome = React.lazy(() => import('./SampleHome'));


// core pages
const SampleFallback = Loadable({ loader: () => import("./SampleFallback"), loading: SampleLoading })
const SampleHome = Loadable({
    // delay: 2000,
    loader: () => import("./SampleHome"),
    loading: SampleLoading.handle,
    // timeout: 1,
})

// grids samples
const DataGridBindingDataService = Loadable({ loader: () => import("../samples/data-grid/DataGridBindingDataService"), loading: SampleLoading })
const DataGridBindingLocalData = Loadable({ loader: () => import("../samples/data-grid/DataGridBindingLocalData"), loading: SampleLoading })
const DataGridBindingRemoteData = Loadable({ loader: () => import("../samples/data-grid/DataGridBindingRemoteData"), loading: SampleLoading })
const DataGridBindingLiveData = Loadable({ loader: () => import("../samples/data-grid/DataGridBindingLiveData"), loading: SampleLoading })
const DataGridCellActivation = Loadable({ loader: () => import("../samples/data-grid/DataGridCellActivation"), loading: SampleLoading })
const DataGridCellSelection = Loadable({ loader: () => import("../samples/data-grid/DataGridCellSelection"), loading: SampleLoading })

const DataGridColumnAnimation = Loadable({ loader: () => import("../samples/data-grid/DataGridColumnAnimation"), loading: SampleLoading })
const DataGridColumnMoving = Loadable({ loader: () => import("../samples/data-grid/DataGridColumnMoving"), loading: SampleLoading })
const DataGridColumnPinning = Loadable({ loader: () => import("../samples/data-grid/DataGridColumnPinning"), loading: SampleLoading })
const DataGridColumnResizing = Loadable({ loader: () => import("../samples/data-grid/DataGridColumnResizing"), loading: SampleLoading })
const DataGridColumnScrolling = Loadable({ loader: () => import("../samples/data-grid/DataGridColumnScrolling"), loading: SampleLoading })
const DataGridColumnSorting = Loadable({ loader: () => import("../samples/data-grid/DataGridColumnSorting"), loading: SampleLoading })
const DataGridColumnTypes = Loadable({ loader: () => import("../samples/data-grid/DataGridColumnTypes"), loading: SampleLoading })
const DataGridColumnFiltering = Loadable({ loader: () => import("../samples/data-grid/DataGridColumnFiltering"), loading: SampleLoading })
const DataGridColumnSummaries = Loadable({ loader: () => import("../samples/data-grid/DataGridColumnSummaries"), loading: SampleLoading })
const DataGridPerformance = Loadable({ loader: () => import("../samples/data-grid/DataGridPerformance"), loading: SampleLoading })

const DataGridRowGrouping = Loadable({ loader: () => import("../samples/data-grid/DataGridRowGrouping"), loading: SampleLoading })
const DataGridRowPinning = Loadable({ loader: () => import("../samples/data-grid/DataGridRowPinning"), loading: SampleLoading })
const DataGridRowPaging = Loadable({ loader: () => import("../samples/data-grid/DataGridRowPaging"), loading: SampleLoading })

const DataGridTypeComparisonTable = Loadable({ loader: () => import("../samples/data-grid/DataGridTypeComparisonTable"), loading: SampleLoading })
const DataGridTypeMatrixTable = Loadable({ loader: () => import("../samples/data-grid/DataGridTypeMatrixTable"), loading: SampleLoading })
const DataGridTypeHeatmapTable = Loadable({ loader: () => import("../samples/data-grid/DataGridTypeHeatmapTable"), loading: SampleLoading })
const DataGridTypePeriodicTable = Loadable({ loader: () => import("../samples/data-grid/DataGridTypePeriodicTable"), loading: SampleLoading })

// chart samples
const CategoryChartOverview = Loadable({ loader: () => import("../samples/category-chart/CategoryChartOverview"), loading: SampleLoading })
const CategoryChartMarkers = Loadable({ loader: () => import("../samples/category-chart/CategoryChartMarkers"), loading: SampleLoading })
const CategoryChartAxisOptions = Loadable({ loader: () => import("../samples/category-chart/CategoryChartAxisOptions"), loading: SampleLoading })
const CategoryChartHighlighting = Loadable({ loader: () => import("../samples/category-chart/CategoryChartHighlighting"), loading: SampleLoading })
const CategoryChartAnnotations = Loadable({ loader: () => import("../samples/category-chart/CategoryChartAnnotations"), loading: SampleLoading })
const CategoryChartTooltipTypes = Loadable({ loader: () => import("../samples/category-chart/CategoryChartTooltipTypes"), loading: SampleLoading })
// const CategoryChartTooltipTemplate = Loadable({ loader: () => import("../samples/category-chart/CategoryChartTooltipTemplate"), loading: SampleLoading })
const CategoryChartTrendline = Loadable({ loader: () => import("../samples/category-chart/CategoryChartTrendline"), loading: SampleLoading })
const CategoryChartHighVolume = Loadable({ loader: () => import("../samples/category-chart/CategoryChartHighVolume"), loading: SampleLoading })
const CategoryChartHighFrequency = Loadable({ loader: () => import("../samples/category-chart/CategoryChartHighFrequency"), loading: SampleLoading })
const CategoryChartStackColumns = Loadable({ loader: () => import("../samples/category-chart/CategoryChartStackColumns"), loading: SampleLoading })

// data chart - features:
const DataChartOverview = Loadable({ loader: () => import("../samples/data-chart/DataChartOverview"), loading: SampleLoading })
const DataChartPerformance = Loadable({ loader: () => import("../samples/data-chart/DataChartPerformance"), loading: SampleLoading })
const DataChartLegends = Loadable({ loader: () => import("../samples/data-chart/DataChartLegends"), loading: SampleLoading })
const DataChartNavigation = Loadable({ loader: () => import("../samples/data-chart/DataChartNavigation"), loading: SampleLoading })
const DataChartSynchronization = Loadable({ loader: () => import("../samples/data-chart/DataChartSynchronization"), loading: SampleLoading })
const DataChartTitles = Loadable({ loader: () => import("../samples/data-chart/DataChartTitles"), loading: SampleLoading })
// data chart - axis features:
const DataChartAxisAnnotations = Loadable({ loader: () => import("../samples/data-chart/DataChartAxisAnnotations"), loading: SampleLoading })
const DataChartAxisLocations = Loadable({ loader: () => import("../samples/data-chart/DataChartAxisLocations"), loading: SampleLoading })
const DataChartAxisSettings = Loadable({ loader: () => import("../samples/data-chart/DataChartAxisSettings"), loading: SampleLoading })
const DataChartAxisSharing = Loadable({ loader: () => import("../samples/data-chart/DataChartAxisSharing"), loading: SampleLoading })
// const DataChartAxisScales = Loadable({ loader: () => import("../samples/data-chart/DataChartAxisScales"), loading: SampleLoading })
const DataChartAxisTypes = Loadable({ loader: () => import("../samples/data-chart/DataChartAxisTypes"), loading: SampleLoading })
// data chart - series types:
const DataChartTypeCategorySeries = Loadable({ loader: () => import("../samples/data-chart/DataChartTypeCategorySeries"), loading: SampleLoading })
const DataChartTypeCategoryAreaSeries = Loadable({ loader: () => import("../samples/data-chart/DataChartTypeCategoryAreaSeries"), loading: SampleLoading })
const DataChartTypeCategoryBarSeries = Loadable({ loader: () => import("../samples/data-chart/DataChartTypeCategoryBarSeries"), loading: SampleLoading })
const DataChartTypeCategoryColumnSeries = Loadable({ loader: () => import("../samples/data-chart/DataChartTypeCategoryColumnSeries"), loading: SampleLoading })
const DataChartTypeCategoryLineSeries = Loadable({ loader: () => import("../samples/data-chart/DataChartTypeCategoryLineSeries"), loading: SampleLoading })
const DataChartTypeCategoryPointSeries = Loadable({ loader: () => import("../samples/data-chart/DataChartTypeCategoryPointSeries"), loading: SampleLoading })
const DataChartTypeCategorySplineAreaSeries = Loadable({ loader: () => import("../samples/data-chart/DataChartTypeCategorySplineAreaSeries"), loading: SampleLoading })
const DataChartTypeCategorySplineSeries = Loadable({ loader: () => import("../samples/data-chart/DataChartTypeCategorySplineSeries"), loading: SampleLoading })
const DataChartTypeCategoryStepAreaSeries = Loadable({ loader: () => import("../samples/data-chart/DataChartTypeCategoryStepAreaSeries"), loading: SampleLoading })
const DataChartTypeCategoryStepLineSeries = Loadable({ loader: () => import("../samples/data-chart/DataChartTypeCategoryStepLineSeries"), loading: SampleLoading })
const DataChartTypeCategoryWaterfallSeries = Loadable({ loader: () => import("../samples/data-chart/DataChartTypeCategoryWaterfallSeries"), loading: SampleLoading })

const DataChartTypeFinancialSeries = Loadable({ loader: () => import("../samples/data-chart/DataChartTypeFinancialSeries"), loading: SampleLoading })
const DataChartTypeFinancialCandlestickSeries = Loadable({ loader: () => import("../samples/data-chart/DataChartTypeFinancialCandlestickSeries"), loading: SampleLoading })
const DataChartTypeFinancialOhlcSeries = Loadable({ loader: () => import("../samples/data-chart/DataChartTypeFinancialOhlcSeries"), loading: SampleLoading })
const DataChartTypeFinancialOverlays = Loadable({ loader: () => import("../samples/data-chart/DataChartTypeFinancialOverlays"), loading: SampleLoading })
const DataChartTypeFinancialIndicatorArea = Loadable({ loader: () => import("../samples/data-chart/DataChartTypeFinancialIndicatorArea"), loading: SampleLoading })
const DataChartTypeFinancialIndicatorColumn = Loadable({ loader: () => import("../samples/data-chart/DataChartTypeFinancialIndicatorColumn"), loading: SampleLoading })
const DataChartTypeFinancialIndicatorLine = Loadable({ loader: () => import("../samples/data-chart/DataChartTypeFinancialIndicatorLine"), loading: SampleLoading })

const DataChartTypePolarSeries = Loadable({ loader: () => import("../samples/data-chart/DataChartTypePolarSeries"), loading: SampleLoading })
const DataChartTypePolarAreaSeries = Loadable({ loader: () => import("../samples/data-chart/DataChartTypePolarAreaSeries"), loading: SampleLoading })
const DataChartTypePolarLineSeries = Loadable({ loader: () => import("../samples/data-chart/DataChartTypePolarLineSeries"), loading: SampleLoading })
const DataChartTypePolarScatterSeries = Loadable({ loader: () => import("../samples/data-chart/DataChartTypePolarScatterSeries"), loading: SampleLoading })
const DataChartTypePolarSplineAreaSeries = Loadable({ loader: () => import("../samples/data-chart/DataChartTypePolarSplineAreaSeries"), loading: SampleLoading })
const DataChartTypePolarSplineSeries = Loadable({ loader: () => import("../samples/data-chart/DataChartTypePolarSplineSeries"), loading: SampleLoading })

const DataChartTypeRadialSeries = Loadable({ loader: () => import("../samples/data-chart/DataChartTypeRadialSeries"), loading: SampleLoading })
const DataChartTypeRadialAreaSeries = Loadable({ loader: () => import("../samples/data-chart/DataChartTypeRadialAreaSeries"), loading: SampleLoading })
const DataChartTypeRadialColumnSeries = Loadable({ loader: () => import("../samples/data-chart/DataChartTypeRadialColumnSeries"), loading: SampleLoading })
const DataChartTypeRadialLineSeries = Loadable({ loader: () => import("../samples/data-chart/DataChartTypeRadialLineSeries"), loading: SampleLoading })
const DataChartTypeRadialPieSeries = Loadable({ loader: () => import("../samples/data-chart/DataChartTypeRadialPieSeries"), loading: SampleLoading })

const DataChartTypeRangeSeries = Loadable({ loader: () => import("../samples/data-chart/DataChartTypeRangeSeries"), loading: SampleLoading })
const DataChartTypeRangeAreaSeries = Loadable({ loader: () => import("../samples/data-chart/DataChartTypeRangeAreaSeries"), loading: SampleLoading })
const DataChartTypeRangeColumnSeries = Loadable({ loader: () => import("../samples/data-chart/DataChartTypeRangeColumnSeries"), loading: SampleLoading })

const DataChartTypeScatterAreaSeries = Loadable({ loader: () => import("../samples/data-chart/DataChartTypeScatterAreaSeries"), loading: SampleLoading })
const DataChartTypeScatterSeries = Loadable({ loader: () => import("../samples/data-chart/DataChartTypeScatterSeries"), loading: SampleLoading })
const DataChartTypeScatterContourSeries = Loadable({ loader: () => import("../samples/data-chart/DataChartTypeScatterContourSeries"), loading: SampleLoading })
const DataChartTypeScatterDensitySeries = Loadable({ loader: () => import("../samples/data-chart/DataChartTypeScatterDensitySeries"), loading: SampleLoading })
const DataChartTypeScatterBubbleSeries = Loadable({ loader: () => import("../samples/data-chart/DataChartTypeScatterBubbleSeries"), loading: SampleLoading })
const DataChartTypeScatterLineSeries = Loadable({ loader: () => import("../samples/data-chart/DataChartTypeScatterLineSeries"), loading: SampleLoading })
const DataChartTypeScatterPointSeries = Loadable({ loader: () => import("../samples/data-chart/DataChartTypeScatterPointSeries"), loading: SampleLoading })
const DataChartTypeScatterSplineSeries = Loadable({ loader: () => import("../samples/data-chart/DataChartTypeScatterSplineSeries"), loading: SampleLoading })

const DataChartTypeShapeSeries = Loadable({ loader: () => import("../samples/data-chart/DataChartTypeShapeSeries"), loading: SampleLoading })
const DataChartTypeScatterPolygonSeries = Loadable({ loader: () => import("../samples/data-chart/DataChartTypeScatterPolygonSeries"), loading: SampleLoading })
const DataChartTypeScatterPolylineSeries = Loadable({ loader: () => import("../samples/data-chart/DataChartTypeScatterPolylineSeries"), loading: SampleLoading })

const DataChartTypeStackedSeries = Loadable({ loader: () => import("../samples/data-chart/DataChartTypeStackedSeries"), loading: SampleLoading })
const DataChartTypeStacked100AreaSeries = Loadable({ loader: () => import("../samples/data-chart/DataChartTypeStacked100AreaSeries"), loading: SampleLoading })
const DataChartTypeStacked100BarSeries = Loadable({ loader: () => import("../samples/data-chart/DataChartTypeStacked100BarSeries"), loading: SampleLoading })
const DataChartTypeStacked100ColumnSeries = Loadable({ loader: () => import("../samples/data-chart/DataChartTypeStacked100ColumnSeries"), loading: SampleLoading })
const DataChartTypeStacked100LineSeries = Loadable({ loader: () => import("../samples/data-chart/DataChartTypeStacked100LineSeries"), loading: SampleLoading })
const DataChartTypeStacked100SplineSeries = Loadable({ loader: () => import("../samples/data-chart/DataChartTypeStacked100SplineSeries"), loading: SampleLoading })
const DataChartTypeStacked100SplineAreaSeries = Loadable({ loader: () => import("../samples/data-chart/DataChartTypeStacked100SplineAreaSeries"), loading: SampleLoading })
const DataChartTypeStackedAreaSeries = Loadable({ loader: () => import("../samples/data-chart/DataChartTypeStackedAreaSeries"), loading: SampleLoading })
const DataChartTypeStackedBarSeries = Loadable({ loader: () => import("../samples/data-chart/DataChartTypeStackedBarSeries"), loading: SampleLoading })
const DataChartTypeStackedColumnSeries = Loadable({ loader: () => import("../samples/data-chart/DataChartTypeStackedColumnSeries"), loading: SampleLoading })
const DataChartTypeStackedLineSeries = Loadable({ loader: () => import("../samples/data-chart/DataChartTypeStackedLineSeries"), loading: SampleLoading })
const DataChartTypeStackedSplineSeries = Loadable({ loader: () => import("../samples/data-chart/DataChartTypeStackedSplineSeries"), loading: SampleLoading })
const DataChartTypeStackedSplineAreaSeries = Loadable({ loader: () => import("../samples/data-chart/DataChartTypeStackedSplineAreaSeries"), loading: SampleLoading })
// data chart - series features:
const DataChartSeriesAnnotations = Loadable({ loader: () => import("../samples/data-chart/DataChartSeriesAnnotations"), loading: SampleLoading })
const DataChartSeriesAnimations = Loadable({ loader: () => import("../samples/data-chart/DataChartSeriesAnimations"), loading: SampleLoading })
// const DataChartSeriesErrorBars = Loadable({ loader: () => import("../samples/data-chart/DataChartSeriesErrorBars"), loading: SampleLoading })
const DataChartSeriesMarkers = Loadable({ loader: () => import("../samples/data-chart/DataChartSeriesMarkers"), loading: SampleLoading })
const DataChartSeriesHighlighting = Loadable({ loader: () => import("../samples/data-chart/DataChartSeriesHighlighting"), loading: SampleLoading })
const DataChartSeriesTooltips = Loadable({ loader: () => import("../samples/data-chart/DataChartSeriesTooltips"), loading: SampleLoading })
const DataChartSeriesTrendlines = Loadable({ loader: () => import("../samples/data-chart/DataChartSeriesTrendlines"), loading: SampleLoading })
const DataChartValueOverlay = Loadable({ loader: () => import("../samples/data-chart/DataChartValueOverlay"), loading: SampleLoading })

// doughnut chart
const DoughnutChartOverview = Loadable({ loader: () => import("../samples/doughnut-chart/DoughnutChartOverview"), loading: SampleLoading })
const DoughnutChartLegend = Loadable({ loader: () => import("../samples/doughnut-chart/DoughnutChartLegend"), loading: SampleLoading })
const DoughnutChartExplosion = Loadable({ loader: () => import("../samples/doughnut-chart/DoughnutChartExplosion"), loading: SampleLoading })
const DoughnutChartSelection = Loadable({ loader: () => import("../samples/doughnut-chart/DoughnutChartSelection"), loading: SampleLoading })
const DoughnutChartRings = Loadable({ loader: () => import("../samples/doughnut-chart/DoughnutChartRings"), loading: SampleLoading })
const DoughnutChartAnimation = Loadable({ loader: () => import("../samples/doughnut-chart/DoughnutChartAnimation"), loading: SampleLoading })

// financial chart
const FinancialChartOverview = Loadable({ loader: () => import("../samples/financial-chart/FinancialChartOverview"), loading: SampleLoading })
const FinancialChartAxisTypes = Loadable({ loader: () => import("../samples/financial-chart/FinancialChartAxisTypes"), loading: SampleLoading })
const FinancialChartAnnotations = Loadable({ loader: () => import("../samples/financial-chart/FinancialChartAnnotations"), loading: SampleLoading })
const FinancialChartPanes = Loadable({ loader: () => import("../samples/financial-chart/FinancialChartPanes"), loading: SampleLoading })
const FinancialChartPerformance = Loadable({ loader: () => import("../samples/financial-chart/FinancialChartPerformance"), loading: SampleLoading })
const FinancialChartHighFrequency = Loadable({ loader: () => import("../samples/financial-chart/FinancialChartHighFrequency"), loading: SampleLoading })
const FinancialChartHighVolume = Loadable({ loader: () => import("../samples/financial-chart/FinancialChartHighVolume"), loading: SampleLoading })
// const FinancialChartMultipleFeeds = Loadable({ loader: () => import("../samples/financial-chart/FinancialChartMultipleFeeds"), loading: SampleLoading })
const FinancialChartMultipleData = Loadable({ loader: () => import("../samples/financial-chart/FinancialChartMultipleData"), loading: SampleLoading })
const FinancialChartIndicatorTypes = Loadable({ loader: () => import("../samples/financial-chart/FinancialChartIndicatorTypes"), loading: SampleLoading })
const FinancialChartIndicatorCustom = Loadable({ loader: () => import("../samples/financial-chart/FinancialChartIndicatorCustom"), loading: SampleLoading })
const FinancialChartTooltipTypes = Loadable({ loader: () => import("../samples/financial-chart/FinancialChartTooltipTypes"), loading: SampleLoading })
// const FinancialChartTooltipTemplate = Loadable({ loader: () => import("../samples/financial-chart/FinancialChartTooltipTemplate"), loading: SampleLoading })
const FinancialChartTitles = Loadable({ loader: () => import("../samples/financial-chart/FinancialChartTitles"), loading: SampleLoading })
const FinancialChartTrendlines = Loadable({ loader: () => import("../samples/financial-chart/FinancialChartTrendlines"), loading: SampleLoading })
const FinancialChartVolumeTypes = Loadable({ loader: () => import("../samples/financial-chart/FinancialChartVolumeTypes"), loading: SampleLoading })

// pie chart
const PieChartOverview = Loadable({ loader: () => import("../samples/pie-chart/PieChartOverview"), loading: SampleLoading })
const PieChartLegend = Loadable({ loader: () => import("../samples/pie-chart/PieChartLegend"), loading: SampleLoading })
const PieChartExplosion = Loadable({ loader: () => import("../samples/pie-chart/PieChartExplosion"), loading: SampleLoading })
const PieChartSelection = Loadable({ loader: () => import("../samples/pie-chart/PieChartSelection"), loading: SampleLoading })
const PieChartOthers = Loadable({ loader: () => import("../samples/pie-chart/PieChartOthers"), loading: SampleLoading })
const PieChartAnimation = Loadable({ loader: () => import("../samples/pie-chart/PieChartAnimation"), loading: SampleLoading })

//sparkline
const SparklineDisplayTypes = Loadable({ loader: () => import("../samples/sparkline/SparklineDisplayTypes"), loading: SampleLoading });
const SparklineDisplayArea = Loadable({ loader: () => import("../samples/sparkline/SparklineDisplayArea"), loading: SampleLoading });
const SparklineDisplayColumn = Loadable({ loader: () => import("../samples/sparkline/SparklineDisplayColumn"), loading: SampleLoading });
const SparklineDisplayLines = Loadable({ loader: () => import("../samples/sparkline/SparklineDisplayLines"), loading: SampleLoading });
const SparklineDisplayWinLoss = Loadable({ loader: () => import("../samples/sparkline/SparklineDisplayWinLoss"), loading: SampleLoading });
const SparklineGrid = Loadable({ loader: () => import("../samples/sparkline/SparklineGrid"), loading: SampleLoading })
const SparklineMarkers = Loadable({ loader: () => import("../samples/sparkline/SparklineMarkers"), loading: SampleLoading });
const SparklineNormalRange = Loadable({ loader: () => import("../samples/sparkline/SparklineNormalRange"), loading: SampleLoading });
const SparklineTrendlines = Loadable({ loader: () => import("../samples/sparkline/SparklineTrendlines"), loading: SampleLoading });
const SparklineUnknownValues = Loadable({ loader: () => import("../samples/sparkline/SparklineUnknownValues"), loading: SampleLoading });

// bullet-graph samples
const BulletGraphAnimation = Loadable({ loader: () => import("../samples/bullet-graph/BulletGraphAnimation"), loading: SampleLoading })
const BulletGraphBackground = Loadable({ loader: () => import("../samples/bullet-graph/BulletGraphBackground"), loading: SampleLoading })
const BulletGraphLabels = Loadable({ loader: () => import("../samples/bullet-graph/BulletGraphLabels"), loading: SampleLoading })
const BulletGraphMeasures = Loadable({ loader: () => import("../samples/bullet-graph/BulletGraphMeasures"), loading: SampleLoading })
const BulletGraphRanges = Loadable({ loader: () => import("../samples/bullet-graph/BulletGraphRanges"), loading: SampleLoading })
const BulletGraphScale = Loadable({ loader: () => import("../samples/bullet-graph/BulletGraphScale"), loading: SampleLoading })
const BulletGraphTickmarks = Loadable({ loader: () => import("../samples/bullet-graph/BulletGraphTickmarks"), loading: SampleLoading })
const BulletGraphTypeHorizontal = Loadable({ loader: () => import("../samples/bullet-graph/BulletGraphTypeHorizontal"), loading: SampleLoading })
const BulletGraphTypeVertical = Loadable({ loader: () => import("../samples/bullet-graph/BulletGraphTypeVertical"), loading: SampleLoading })
const BulletGraphTypeReversed = Loadable({ loader: () => import("../samples/bullet-graph/BulletGraphTypeReversed"), loading: SampleLoading })
const BulletGraphTypeFilled = Loadable({ loader: () => import("../samples/bullet-graph/BulletGraphTypeFilled"), loading: SampleLoading })
const BulletGraphTypeSegmented = Loadable({ loader: () => import("../samples/bullet-graph/BulletGraphTypeSegmented"), loading: SampleLoading })

// linear-gauge samples
const LinearGaugeAnimation = Loadable({ loader: () => import("../samples/linear-gauge/LinearGaugeAnimation"), loading: SampleLoading })
const LinearGaugeBacking = Loadable({ loader: () => import("../samples/linear-gauge/LinearGaugeBacking"), loading: SampleLoading })
const LinearGaugeLabels = Loadable({ loader: () => import("../samples/linear-gauge/LinearGaugeLabels"), loading: SampleLoading })
const LinearGaugeNeedle = Loadable({ loader: () => import("../samples/linear-gauge/LinearGaugeNeedle"), loading: SampleLoading })
const LinearGaugeRanges = Loadable({ loader: () => import("../samples/linear-gauge/LinearGaugeRanges"), loading: SampleLoading })
const LinearGaugeScale = Loadable({ loader: () => import("../samples/linear-gauge/LinearGaugeScale"), loading: SampleLoading })
const LinearGaugeTickmarks = Loadable({ loader: () => import("../samples/linear-gauge/LinearGaugeTickmarks"), loading: SampleLoading })
const LinearGaugeTypeCurve = Loadable({ loader: () => import("../samples/linear-gauge/LinearGaugeTypeCurve"), loading: SampleLoading })
const LinearGaugeTypeFilled = Loadable({ loader: () => import("../samples/linear-gauge/LinearGaugeTypeFilled"), loading: SampleLoading })
const LinearGaugeTypeMultiRange = Loadable({ loader: () => import("../samples/linear-gauge/LinearGaugeTypeMultiRange"), loading: SampleLoading })
const LinearGaugeTypeSegmented = Loadable({ loader: () => import("../samples/linear-gauge/LinearGaugeTypeSegmented"), loading: SampleLoading })
const LinearGaugeTypeHorizontal = Loadable({ loader: () => import("../samples/linear-gauge/LinearGaugeTypeHorizontal"), loading: SampleLoading })
const LinearGaugeTypeVertical = Loadable({ loader: () => import("../samples/linear-gauge/LinearGaugeTypeVertical"), loading: SampleLoading })
const LinearGaugeTypeMultiScale = Loadable({ loader: () => import("../samples/linear-gauge/LinearGaugeTypeMultiScale"), loading: SampleLoading })

// radial-gauge samples
const RadialGaugeAnimation = Loadable({ loader: () => import("../samples/radial-gauge/RadialGaugeAnimation"), loading: SampleLoading })
const RadialGaugeBacking = Loadable({ loader: () => import("../samples/radial-gauge/RadialGaugeBacking"), loading: SampleLoading })
const RadialGaugeLabels = Loadable({ loader: () => import("../samples/radial-gauge/RadialGaugeLabels"), loading: SampleLoading })
const RadialGaugeNeedle = Loadable({ loader: () => import("../samples/radial-gauge/RadialGaugeNeedle"), loading: SampleLoading })
const RadialGaugeRanges = Loadable({ loader: () => import("../samples/radial-gauge/RadialGaugeRanges"), loading: SampleLoading })
const RadialGaugeScale = Loadable({ loader: () => import("../samples/radial-gauge/RadialGaugeScale"), loading: SampleLoading })
const RadialGaugeTickmarks = Loadable({ loader: () => import("../samples/radial-gauge/RadialGaugeTickmarks"), loading: SampleLoading })
const RadialGaugeTypeFull = Loadable({ loader: () => import("../samples/radial-gauge/RadialGaugeTypeFull"), loading: SampleLoading })
const RadialGaugeTypeSemi = Loadable({ loader: () => import("../samples/radial-gauge/RadialGaugeTypeSemi"), loading: SampleLoading })
const RadialGaugeTypeHalf = Loadable({ loader: () => import("../samples/radial-gauge/RadialGaugeTypeHalf"), loading: SampleLoading })
const RadialGaugeTypeQuatre = Loadable({ loader: () => import("../samples/radial-gauge/RadialGaugeTypeQuatre"), loading: SampleLoading })
const RadialGaugeTypeColumn = Loadable({ loader: () => import("../samples/radial-gauge/RadialGaugeTypeColumn"), loading: SampleLoading })
const RadialGaugeTypeSegmented = Loadable({ loader: () => import("../samples/radial-gauge/RadialGaugeTypeSegmented"), loading: SampleLoading })
const RadialGaugeTypeDirection = Loadable({ loader: () => import("../samples/radial-gauge/RadialGaugeTypeDirection"), loading: SampleLoading })
const RadialGaugeTypeRing = Loadable({ loader: () => import("../samples/radial-gauge/RadialGaugeTypeRing"), loading: SampleLoading })
const RadialGaugeTypeCurved = Loadable({ loader: () => import("../samples/radial-gauge/RadialGaugeTypeCurved"), loading: SampleLoading })

// geo-map samples
const MapOverview = Loadable({ loader: () => import("../samples/geo-map/MapOverview"), loading: SampleLoading })
const MapBindingDataCSV = Loadable({ loader: () => import("../samples/geo-map/MapBindingDataCSV"), loading: SampleLoading })
const MapBindingDataJsonPoints = Loadable({ loader: () => import("../samples/geo-map/MapBindingDataJsonPoints"), loading: SampleLoading })
const MapBindingDataModel = Loadable({ loader: () => import("../samples/geo-map/MapBindingDataModel"), loading: SampleLoading })
const MapBindingMultipleSources = Loadable({ loader: () => import("../samples/geo-map/MapBindingMultipleSources"), loading: SampleLoading })
const MapBindingMultipleShapes = Loadable({ loader: () => import("../samples/geo-map/MapBindingMultipleShapes"), loading: SampleLoading })
const MapBindingShapefilePoints = Loadable({ loader: () => import("../samples/geo-map/MapBindingShapefilePoints"), loading: SampleLoading })
const MapBindingShapefilePolygons = Loadable({ loader: () => import("../samples/geo-map/MapBindingShapefilePolygons"), loading: SampleLoading })
const MapBindingShapefilePolylines = Loadable({ loader: () => import("../samples/geo-map/MapBindingShapefilePolylines"), loading: SampleLoading })
const MapCustomTooltips = Loadable({ loader: () => import("../samples/geo-map/MapCustomTooltips"), loading: SampleLoading })
const MapDisplayImageryHeatTiles = Loadable({ loader: () => import("../samples/geo-map/MapDisplayImageryHeatTiles"), loading: SampleLoading })
const MapDisplayImageryOSM = Loadable({ loader: () => import("../samples/geo-map/MapDisplayImageryOSM"), loading: SampleLoading })
const MapDisplayImageryBingTiles = Loadable({ loader: () => import("../samples/geo-map/MapDisplayImageryBingTiles"), loading: SampleLoading })
const MapDisplayImageryEsriTiles = Loadable({ loader: () => import("../samples/geo-map/MapDisplayImageryEsriTiles"), loading: SampleLoading })
const MapTypeScatterAreaSeries = Loadable({ loader: () => import("../samples/geo-map/MapTypeScatterAreaSeries"), loading: SampleLoading })
const MapTypeScatterBubbleSeries = Loadable({ loader: () => import("../samples/geo-map/MapTypeScatterBubbleSeries"), loading: SampleLoading })
const MapTypeScatterContourSeries = Loadable({ loader: () => import("../samples/geo-map/MapTypeScatterContourSeries"), loading: SampleLoading })
const MapTypeScatterDensitySeries = Loadable({ loader: () => import("../samples/geo-map/MapTypeScatterDensitySeries"), loading: SampleLoading })
const MapTypeScatterSymbolSeries = Loadable({ loader: () => import("../samples/geo-map/MapTypeScatterSymbolSeries"), loading: SampleLoading })
const MapTypeScatterPolygonSeries = Loadable({ loader: () => import("../samples/geo-map/MapTypeScatterPolygonSeries"), loading: SampleLoading })
const MapTypeScatterPolylineSeries = Loadable({ loader: () => import("../samples/geo-map/MapTypeScatterPolylineSeries"), loading: SampleLoading })

const MapSynchronization = Loadable({ loader: () => import("../samples/geo-map/MapSynchronization"), loading: SampleLoading })
const MapNavigation = Loadable({ loader: () => import("../samples/geo-map/MapNavigation"), loading: SampleLoading })

// excel-library samples
const ExcelLibraryOverview = Loadable({ loader: () => import("../samples/excel-library/ExcelLibraryOverview"), loading: SampleLoading })
const ExcelLibraryCells = Loadable({ loader: () => import("../samples/excel-library/ExcelLibraryCells"), loading: SampleLoading })
const ExcelLibraryTables = Loadable({ loader: () => import("../samples/excel-library/ExcelLibraryTables"), loading: SampleLoading })
const ExcelLibraryWorkbooks = Loadable({ loader: () => import("../samples/excel-library/ExcelLibraryWorkbooks"), loading: SampleLoading })
const ExcelLibraryWorksheets = Loadable({ loader: () => import("../samples/excel-library/ExcelLibraryWorksheets"), loading: SampleLoading })
const ExcelLibrarySparklines = Loadable({ loader: () => import("../samples/excel-library/ExcelLibrarySparklines"), loading: SampleLoading })
const ExcelLibraryCharts = Loadable({ loader: () => import("../samples/excel-library/ExcelLibraryCharts"), loading: SampleLoading })

const SpreadsheetActivation = Loadable({ loader: () => import("../samples/spreadsheet/SpreadsheetActivation"), loading: SampleLoading })
const SpreadsheetAdapter = Loadable({ loader: () => import("../samples/spreadsheet/SpreadsheetAdapter"), loading: SampleLoading })
const SpreadsheetAdapterCombo = Loadable({ loader: () => import("../samples/spreadsheet/SpreadsheetAdapterCombo"), loading: SampleLoading })
const SpreadsheetClipboard = Loadable({ loader: () => import("../samples/spreadsheet/SpreadsheetClipboard"), loading: SampleLoading })
const SpreadsheetCommands = Loadable({ loader: () => import("../samples/spreadsheet/SpreadsheetCommands"), loading: SampleLoading })
const SpreadsheetCondFormatting = Loadable({ loader: () => import("../samples/spreadsheet/SpreadsheetCondFormatting"), loading: SampleLoading })
const SpreadsheetConfiguring = Loadable({ loader: () => import("../samples/spreadsheet/SpreadsheetConfiguring"), loading: SampleLoading })
const SpreadsheetDataValidation = Loadable({ loader: () => import("../samples/spreadsheet/SpreadsheetDataValidation"), loading: SampleLoading })
const SpreadsheetFilterDialog = Loadable({ loader: () => import("../samples/spreadsheet/SpreadsheetFilterDialog"), loading: SampleLoading })
const SpreadsheetFormatDialog = Loadable({ loader: () => import("../samples/spreadsheet/SpreadsheetFormatDialog"), loading: SampleLoading })
const SpreadsheetHyperlinks = Loadable({ loader: () => import("../samples/spreadsheet/SpreadsheetHyperlinks"), loading: SampleLoading })
const SpreadsheetOverview = Loadable({ loader: () => import("../samples/spreadsheet/SpreadsheetOverview"), loading: SampleLoading })
const SpreadsheetSortDialog = Loadable({ loader: () => import("../samples/spreadsheet/SpreadsheetSortDialog"), loading: SampleLoading })

// zoomslider samples
const ZoomSliderOverview = Loadable({ loader: () => import("../samples/zoomslider/ZoomSliderOverview"), loading: SampleLoading })

// treemap samples
const TreeMapOverview = Loadable({ loader: () => import("../samples/tree-map/TreeMapOverview"), loading: SampleLoading })


// this array defines table of content in navigation side bar
// route paths listed in the samples array define order of samples in navigation side bar
const TOC = [
    {
        group: "Charts",
        name: "Category Chart",
        release: "18.1",
        samples: [
            // route paths embedded in docs:
            { path: "/charts/category-chart-overview", comp: CategoryChartOverview, name: "Overview" },
            { path: "/charts/category-chart-annotations", comp: CategoryChartAnnotations, name: "Annotations" },
            { path: "/charts/category-chart-axis-options", comp: CategoryChartAxisOptions, name: "Axis Settings" },
            { path: "/charts/category-chart-highlighting", comp: CategoryChartHighlighting, name: "Highlighting" },
            { path: "/charts/category-chart-high-frequency", comp: CategoryChartHighFrequency, name: "High Frequency" },
            { path: "/charts/category-chart-high-volume", comp: CategoryChartHighVolume, name: "High Volume" },
            { path: "/charts/category-chart-config-options", comp: CategoryChartMarkers, name: "Markers" },
            { path: "/charts/category-chart-stack-columns", comp: CategoryChartStackColumns, name: "Stack Columns" },
            { path: "/charts/category-chart-tooltip-types", comp: CategoryChartTooltipTypes, name: "Tooltip Types" },
            // { path: "/charts/category-chart-tooltip-template",      comp: CategoryChartTooltipTemplate, name: "Tooltip Template" },
            { path: "/charts/category-chart-trendline", comp: CategoryChartTrendline, name: "Trendlines" },
        ],
    },
    {
        group: "Charts",
        name: "Data Chart",
        release: "18.1",
        samples: [
            // route paths embedded in docs:
            { path: "/charts/data-chart-overview", comp: DataChartOverview, name: "Overview" },
            // axis features samples:
            { path: "/charts/data-chart-axis-annotations", comp: DataChartAxisAnnotations, name: "Axis Annotations" },
            { path: "/charts/data-chart-axis-locations", comp: DataChartAxisLocations, name: "Axis Locations" },
            { path: "/charts/data-chart-axis-settings", comp: DataChartAxisSettings, name: "Axis Settings" },
            // { path: "/charts/data-chart-axis-scales",      comp: DataChartAxisScales, name: "Axis Scales" },
            { path: "/charts/data-chart-axis-sharing", comp: DataChartAxisSharing, name: "Axis Sharing" },
            { path: "/charts/data-chart-axis-types", comp: DataChartAxisTypes, name: "Axis Types" },
            // chart features samples:
            { path: "/charts/data-chart-legends", comp: DataChartLegends, name: "Chart Legends" },
            { path: "/charts/data-chart-navigation", comp: DataChartNavigation, name: "Chart Navigation" },
            { path: "/charts/data-chart-performance", comp: DataChartPerformance, name: "Chart Performance" },
            { path: "/charts/data-chart-synchronization", comp: DataChartSynchronization, name: "Chart Synchronization" },
            { path: "/charts/data-chart-titles", comp: DataChartTitles, name: "Chart Titles" },
            // series types samples:
            { path: "/charts/data-chart-type-category-series", comp: DataChartTypeCategorySeries, name: "Category Series" },
            { path: "/charts/data-chart-type-category-area-series", comp: DataChartTypeCategoryAreaSeries, name: "Category Area Series"},
            { path: "/charts/data-chart-type-category-bar-series", comp: DataChartTypeCategoryBarSeries, name: "Category Bar Series"},
            { path: "/charts/data-chart-type-category-column-series", comp: DataChartTypeCategoryColumnSeries, name: "Category Column Series"},
            { path: "/charts/data-chart-type-category-line-series", comp: DataChartTypeCategoryLineSeries, name: "Category Line Series"},
            { path: "/charts/data-chart-type-category-point-series", comp: DataChartTypeCategoryPointSeries, name: "Category Point Series"},
            { path: "/charts/data-chart-type-category-spline-area-series", comp: DataChartTypeCategorySplineAreaSeries, name: "Category Spline Area Series"},
            { path: "/charts/data-chart-type-category-spline-series", comp: DataChartTypeCategorySplineSeries, name: "Category Spline Series"},
            { path: "/charts/data-chart-type-category-step-area-series", comp: DataChartTypeCategoryStepAreaSeries, name: "Category Step Area Series"},
            { path: "/charts/data-chart-type-category-step-line-series", comp: DataChartTypeCategoryStepLineSeries, name: "Category Step Line Series"},
            { path: "/charts/data-chart-type-category-waterfall-series", comp: DataChartTypeCategoryWaterfallSeries, name: "Category Waterfall Series"},

            { path: "/charts/data-chart-type-financial-series",             comp: DataChartTypeFinancialSeries, name: "Financial Series" },
            { path: "/charts/data-chart-type-financial-candlestick-series", comp: DataChartTypeFinancialCandlestickSeries, name: "Financial Candlestick Series" },
            { path: "/charts/data-chart-type-financial-ohlc-series",        comp: DataChartTypeFinancialOhlcSeries, name: "Financial OHLC Series" },
            { path: "/charts/data-chart-type-financial-overlays",           comp: DataChartTypeFinancialOverlays, name: "Financial Overlays" },
            { path: "/charts/data-chart-type-financial-area-indicators",    comp: DataChartTypeFinancialIndicatorArea, name: "Financial Area Indicators" },
            { path: "/charts/data-chart-type-financial-column-indicators",  comp: DataChartTypeFinancialIndicatorColumn, name: "Financial Column Indicators" },
            { path: "/charts/data-chart-type-financial-line-indicators",    comp: DataChartTypeFinancialIndicatorLine, name: "Financial Line Indicators" },

            { path: "/charts/data-chart-type-polar-series", comp: DataChartTypePolarSeries, name: "Polar Series" },
            { path: "/charts/data-chart-type-polar-area-series", comp: DataChartTypePolarAreaSeries, name: "Polar Area Series" },
            { path: "/charts/data-chart-type-polar-line-series", comp: DataChartTypePolarLineSeries, name: "Polar Line Series" },
            { path: "/charts/data-chart-type-polar-scatter-series", comp: DataChartTypePolarScatterSeries, name: "Polar Scatter Series" },
            { path: "/charts/data-chart-type-polar-spline-area-series", comp: DataChartTypePolarSplineAreaSeries, name: "Polar Spline Area Series" },
            { path: "/charts/data-chart-type-polar-spline-series", comp: DataChartTypePolarSplineSeries, name: "Polar Spline Series" },

            { path: "/charts/data-chart-type-radial-series", comp: DataChartTypeRadialSeries, name: "Radial Series" },
            { path: "/charts/data-chart-type-radial-area-series", comp: DataChartTypeRadialAreaSeries, name: "Radial Area Series" },
            { path: "/charts/data-chart-type-radial-column-series", comp: DataChartTypeRadialColumnSeries, name: "Radial Column Series" },
            { path: "/charts/data-chart-type-radial-line-series", comp: DataChartTypeRadialLineSeries, name: "Radial Line Series" },
            { path: "/charts/data-chart-type-radial-pie-series", comp: DataChartTypeRadialPieSeries, name: "Radial Pie Series" },

            { path: "/charts/data-chart-type-range-series", comp: DataChartTypeRangeSeries, name: "Range Series" },
            { path: "/charts/data-chart-type-range-area-series", comp: DataChartTypeRangeAreaSeries, name: "Range Area Series" },
            { path: "/charts/data-chart-type-range-column-series", comp: DataChartTypeRangeColumnSeries, name: "Range Column Series" },

            { path: "/charts/data-chart-type-scatter-series", comp: DataChartTypeScatterSeries, name: "Scatter Series" },
            { path: "/charts/data-chart-type-scatter-hd-series", comp: DataChartTypeScatterDensitySeries, name: "Scatter HD Series" },
            { path: "/charts/data-chart-type-scatter-bubble-series", comp: DataChartTypeScatterBubbleSeries, name: "Scatter Bubble Series" },
            { path: "/charts/data-chart-type-scatter-point-series", comp: DataChartTypeScatterPointSeries, name: "Scatter Point Series" },
            { path: "/charts/data-chart-type-scatter-line-series", comp: DataChartTypeScatterLineSeries, name: "Scatter Line Series" },
            { path: "/charts/data-chart-type-scatter-spline-series", comp: DataChartTypeScatterSplineSeries, name: "Scatter Spline Series" },
            { path: "/charts/data-chart-type-scatter-area-series", comp: DataChartTypeScatterAreaSeries, name: "Scatter Area Series" },
            { path: "/charts/data-chart-type-scatter-contour-series", comp: DataChartTypeScatterContourSeries, name: "Scatter Contour Series" },
            { path: "/charts/data-chart-type-scatter-polygon-series", comp: DataChartTypeScatterPolygonSeries, name: "Scatter Polygon Series" },
            { path: "/charts/data-chart-type-scatter-polyline-series", comp: DataChartTypeScatterPolylineSeries, name: "Scatter Polyline Series" },

            { path: "/charts/data-chart-type-shape-series", comp: DataChartTypeShapeSeries, name: "Scatter Shape Series" },

            { path: "/charts/data-chart-type-stacked-series", comp: DataChartTypeStackedSeries, name: "Stacked Series" },
            { path: "/charts/data-chart-type-stacked-100-area-series", comp: DataChartTypeStacked100AreaSeries, name: "Stacked 100 Area Series"},
            { path: "/charts/data-chart-type-stacked-100-bar-series", comp: DataChartTypeStacked100BarSeries, name: "Stacked 100 Bar Series"},
            { path: "/charts/data-chart-type-stacked-100-column-series", comp: DataChartTypeStacked100ColumnSeries, name: "Stacked 100 Column Series"},
            { path: "/charts/data-chart-type-stacked-100-line-series", comp: DataChartTypeStacked100LineSeries, name: "Stacked 100 Line Series"},
            { path: "/charts/data-chart-type-stacked-100-spline-series", comp: DataChartTypeStacked100SplineSeries, name: "Stacked 100 Spline Series"},
            { path: "/charts/data-chart-type-stacked-100-spline-area-series", comp: DataChartTypeStacked100SplineAreaSeries, name: "Stacked 100 Spline Area Series"},
            { path: "/charts/data-chart-type-stacked-area-series", comp: DataChartTypeStackedAreaSeries, name: "Stacked Area Series"},
            { path: "/charts/data-chart-type-stacked-bar-series", comp: DataChartTypeStackedBarSeries, name: "Stacked Bar Series"},
            { path: "/charts/data-chart-type-stacked-column-series", comp: DataChartTypeStackedColumnSeries, name: "Stacked Column Series"},
            { path: "/charts/data-chart-type-stacked-line-series", comp: DataChartTypeStackedLineSeries, name: "Stacked Line Series"},
            { path: "/charts/data-chart-type-stacked-spline-series", comp: DataChartTypeStackedSplineSeries, name: "Stacked Spline Series"},
            { path: "/charts/data-chart-type-stacked-spline-area-series", comp: DataChartTypeStackedSplineAreaSeries, name: "Stacked Spline Area Series"},
            // series features samples:
            { path: "/charts/data-chart-series-annotations", comp: DataChartSeriesAnnotations, name: "Series Annotations" },
            // { path: "/charts/data-chart-series-animations",   comp: DataChartSeriesAnimations, name: "Series Animations" },
            // { path: "/charts/data-chart-series-errorbars",    comp: DataChartSeriesErrorBars, name: "Series Error Bars" },
            { path: "/charts/data-chart-series-highlighting", comp: DataChartSeriesHighlighting, name: "Series Highlighting" },
            { path: "/charts/data-chart-series-markers", comp: DataChartSeriesMarkers, name: "Series Markers" },
            { path: "/charts/data-chart-series-tooltips", comp: DataChartSeriesTooltips, name: "Series Tooltips" },
            { path: "/charts/data-chart-series-trendlines", comp: DataChartSeriesTrendlines, name: "Series Trendlines" },
            { path: "/charts/data-chart-value-overlay", comp: DataChartValueOverlay, name: "Value Overlay" }
        ],
    },
    {
        group: "Charts",
        name: "Doughnut Chart",
        samples: [
            // route paths embedded in docs:
            { path: "/charts/doughnut-chart-overview", comp: DoughnutChartOverview, name: "Overview" },
            { path: "/charts/doughnut-chart-explosion", comp: DoughnutChartExplosion, name: "Slice Explosion" },
            { path: "/charts/doughnut-chart-selection", comp: DoughnutChartSelection, name: "Slice Selection" },
            { path: "/charts/doughnut-chart-legend", comp: DoughnutChartLegend, name: "Legend" },
            { path: "/charts/doughnut-chart-rings", comp: DoughnutChartRings, name: "Multiple Rings" },
            { path: "/charts/doughnut-chart-animation", comp: DoughnutChartAnimation, name: "Animation" },
        ],
    },
    {
        group: "Charts",
        name: "Financial Chart",
        release: "18.1",
        samples: [
            // route paths embedded in docs:
            { path: "/charts/financial-chart-overview", comp: FinancialChartOverview, name: "Overview" },
            { path: "/charts/financial-chart-axis-types", comp: FinancialChartAxisTypes, name: "Axis Types" },
            { path: "/charts/financial-chart-annotations", comp: FinancialChartAnnotations, name: "Chart Annotations" },
            { path: "/charts/financial-chart-panes", comp: FinancialChartPanes, name: "Chart Panes" },
            { path: "/charts/financial-chart-performance", comp: FinancialChartPerformance, name: "Chart Performance" },
            { path: "/charts/financial-chart-titles", comp: FinancialChartTitles, name: "Chart Titles" },
            { path: "/charts/financial-chart-trendlines", comp: FinancialChartTrendlines, name: "Chart Trendlines" },
            { path: "/charts/financial-chart-indicator-types", comp: FinancialChartIndicatorTypes, name: "Indicator Types" },
            { path: "/charts/financial-chart-custom-indicators", comp: FinancialChartIndicatorCustom, name: "Indicator Customization" },
            { path: "/charts/financial-chart-high-frequency", comp: FinancialChartHighFrequency, name: "High Frequency" },
            { path: "/charts/financial-chart-high-volume", comp: FinancialChartHighVolume, name: "High Volume" },
            { path: "/charts/financial-chart-multiple-data", comp: FinancialChartMultipleData, name: "Multiple Sources" },
            // { path: "/charts/financial-chart-multiple-feeds",    comp: FinancialChartMultipleFeeds, name: "Multiple Feeds" },
            { path: "/charts/financial-chart-tooltip-types", comp: FinancialChartTooltipTypes, name: "Tooltip Types" },
            // { path: "/charts/financial-chart-tooltip-template",  comp: FinancialChartTooltipTemplate, name: "Tooltip Template" },
            { path: "/charts/financial-chart-volume-type", comp: FinancialChartVolumeTypes, name: "Volume Types" },
        ],
    },
    {
        group: "Charts",
        name: "Pie Chart",
        samples: [
            // route paths embedded in docs:
            { path: "/charts/pie-chart-overview", comp: PieChartOverview, name: "Overview" },
            { path: "/charts/pie-chart-legend", comp: PieChartLegend, name: "Legend" },
            { path: "/charts/pie-chart-explosion", comp: PieChartExplosion, name: "Slice Explosion" },
            { path: "/charts/pie-chart-selection", comp: PieChartSelection, name: "Slice Selection" },
            { path: "/charts/pie-chart-others", comp: PieChartOthers, name: "Slice Others" },
            { path: "/charts/pie-chart-animation", comp: PieChartAnimation, name: "Animation" },
        ],
    },
    {
        group: "Charts",
        name: "Sparkline",
        samples: [
            { path: "/charts/sparkline-display-types", comp: SparklineDisplayTypes, name: "Display Types" },
            { path: "/charts/sparkline-display-area", comp: SparklineDisplayArea, name: "Display Area" },
            { path: "/charts/sparkline-display-column", comp: SparklineDisplayColumn, name: "Display Column" },
            { path: "/charts/sparkline-display-line", comp: SparklineDisplayLines, name: "Display Line" },
            { path: "/charts/sparkline-display-winloss", comp: SparklineDisplayWinLoss, name: "Display WinLoss" },
            { path: "/charts/sparkline-grid", comp: SparklineGrid, name: "Sparkline Grid" },
            { path: "/charts/sparkline-markers", comp: SparklineMarkers, name: "Sparkline Markers" },
            { path: "/charts/sparkline-normal-range", comp: SparklineNormalRange, name: "Normal Range" },
            { path: "/charts/sparkline-trendlines", comp: SparklineTrendlines, name: "Trendlines" },
            { path: "/charts/sparkline-unknown-values", comp: SparklineUnknownValues, name: "Unknown Values" },
        ],
    },
    {
        group: "Maps",
        name: "Geographic Map",
        release: "19.1",
        samples: [
            // route paths embedded in docs:
            { path: "/maps/geo-map-overview", comp: MapOverview, name: "Overview" },
            { path: "/maps/geo-map-binding-data-csv", comp: MapBindingDataCSV, name: "Binding CSV Points" },
            { path: "/maps/geo-map-binding-data-json-points", comp: MapBindingDataJsonPoints, name: "Binding JSON Points" },
            { path: "/maps/geo-map-binding-data-model", comp: MapBindingDataModel, name: "Binding Data Model" },
            { path: "/maps/geo-map-binding-multiple-sources", comp: MapBindingMultipleSources, name: "Binding Multiple Sources" },
            { path: "/maps/geo-map-binding-multiple-shapes", comp: MapBindingMultipleShapes, name: "Binding Multiple Shapes" },
            { path: "/maps/geo-map-binding-shp-points", comp: MapBindingShapefilePoints, name: "Binding SHP Points" },
            { path: "/maps/geo-map-binding-shp-polygons", comp: MapBindingShapefilePolygons, name: "Binding SHP Polygons" },
            { path: "/maps/geo-map-binding-shp-polylines", comp: MapBindingShapefilePolylines, name: "Binding SHP Polylines" },
            { path: "/maps/geo-map-display-bing-imagery", comp: MapDisplayImageryBingTiles, name: "Display Bing Imagery" },
            { path: "/maps/geo-map-display-esri-imagery", comp: MapDisplayImageryEsriTiles, name: "Display Esri Imagery" },
            { path: "/maps/geo-map-display-osm-imagery", comp: MapDisplayImageryOSM, name: "Display OSM Imagery" },
            { path: "/maps/geo-map-display-heat-imagery", comp: MapDisplayImageryHeatTiles, name: "Display Heat Imagery "},
            { path: "/maps/geo-map-custom-tooltips", comp: MapCustomTooltips, name: "Custom Tooltips" },
            { path: "/maps/geo-map-type-scatter-area-series", comp: MapTypeScatterAreaSeries, name: "Scatter Area Series" },
            { path: "/maps/geo-map-type-scatter-bubble-series", comp: MapTypeScatterBubbleSeries, name: "Scatter Bubble Series" },
            { path: "/maps/geo-map-type-scatter-contour-series", comp: MapTypeScatterContourSeries, name: "Scatter Contour Series" },
            { path: "/maps/geo-map-type-scatter-density-series", comp: MapTypeScatterDensitySeries, name: "Scatter Density Series" },
            { path: "/maps/geo-map-type-scatter-symbol-series", comp: MapTypeScatterSymbolSeries, name: "Scatter Symbol Series" },
            { path: "/maps/geo-map-type-shape-polygon-series", comp: MapTypeScatterPolygonSeries, name: "Shape Polygon Series" },
            { path: "/maps/geo-map-type-shape-polyline-series", comp: MapTypeScatterPolylineSeries, name: "Shape Polyline Series" },

            { path: "/maps/geo-map-navigation", comp: MapNavigation, name: "Map Navigation" },
            { path: "/maps/geo-map-synchronization", comp: MapSynchronization, name: "Map Synchronization" },
        ],
    },
    {
        group: "Grids",
        name: "Table / Grid",
        release: "18.1",
        samples: [
            { path: "/grids/data-grid-type-comparison-table", comp: DataGridTypeComparisonTable, name: "Comparison Table" },
            { path: "/grids/data-grid-type-matrix-table", comp: DataGridTypeMatrixTable, name: "Matrix Table" },
            { path: "/grids/data-grid-type-heatmap-table", comp: DataGridTypeHeatmapTable, name: "Heatmap Table" },
            { path: "/grids/data-grid-type-periodic-table", comp: DataGridTypePeriodicTable, name: "Periodic Table" },
            { path: "/grids/data-grid-type-sparkline-table", comp: SparklineGrid, name: "Sparkline Table" },

            { path: "/grids/data-grid-data-service", comp: DataGridBindingDataService, name: "Binding Data Service" },
            { path: "/grids/data-grid-local-data", comp: DataGridBindingLocalData, name: "Binding Local Data" },
            { path: "/grids/data-grid-remote-data", comp: DataGridBindingRemoteData, name: "Binding Remote Data" },
            { path: "/grids/data-grid-live-data", comp: DataGridBindingLiveData, name: "Binding Live Data" },
            { path: "/grids/data-grid-cell-activation", comp: DataGridCellActivation, name: "Cell Activation" },
            { path: "/grids/data-grid-cell-selection", comp: DataGridCellSelection, name: "Cell Selection" },

            { path: "/grids/data-grid-column-animation", comp: DataGridColumnAnimation, name: "Column Animation" },
            { path: "/grids/data-grid-column-filtering", comp: DataGridColumnFiltering, name: "Column Filtering" },
            { path: "/grids/data-grid-column-moving", comp: DataGridColumnMoving, name: "Column Moving" },
            { path: "/grids/data-grid-column-pinning", comp: DataGridColumnPinning, name: "Column Pinning" },
            { path: "/grids/data-grid-column-resizing", comp: DataGridColumnResizing, name: "Column Resizing" },
            { path: "/grids/data-grid-column-sorting", comp: DataGridColumnSorting, name: "Column Sorting" },
            { path: "/grids/data-grid-column-summaries", comp: DataGridColumnSummaries, name: "Column Summaries" },
            { path: "/grids/data-grid-column-types", comp: DataGridColumnTypes, name: "Column Types" },
            { path: "/grids/data-grid-horizontal-scrolling", comp: DataGridColumnScrolling, name: "Horizontal Scrolling" },
            { path: "/grids/data-grid-performance", comp: DataGridPerformance, name: "Performance" },
            // { path: "/grids/data-grid-responsiveness",  comp: DataGridResponsiveLayout,  name: "Responsive Layout" },
            { path: "/grids/data-grid-row-grouping", comp: DataGridRowGrouping, name: "Row Grouping" },
            { path: "/grids/data-grid-row-pinning", comp: DataGridRowPinning, name: "Row Pinning" },
            { path: "/grids/data-grid-row-paging", comp: DataGridRowPaging, name: "Row Paging" },
        ],
    },
    {
        group: "Gauges",
        name: "Bullet Graph",
        release: "18.1",
        samples: [
            // route paths embedded in docs:
            { path: "/gauges/bullet-graph-type-horizontal", comp: BulletGraphTypeHorizontal, name: "Horizontal Graph" },
            { path: "/gauges/bullet-graph-type-vertical", comp: BulletGraphTypeVertical, name: "Vertical Graph" },
            { path: "/gauges/bullet-graph-type-filled", comp: BulletGraphTypeFilled, name: "Filled Graph" },
            { path: "/gauges/bullet-graph-type-segmented", comp: BulletGraphTypeSegmented, name: "Segmented Graph" },
            { path: "/gauges/bullet-graph-type-reversed", comp: BulletGraphTypeReversed, name: "Reversed Graph" },
            { path: "/gauges/bullet-graph-animation", comp: BulletGraphAnimation, name: "Gauge Animation" },
            { path: "/gauges/bullet-graph-background", comp: BulletGraphBackground, name: "Gauge Background" },
            { path: "/gauges/bullet-graph-labels", comp: BulletGraphLabels, name: "Gauge Labels" },
            { path: "/gauges/bullet-graph-measures", comp: BulletGraphMeasures, name: "Gauge Measures" },
            { path: "/gauges/bullet-graph-ranges", comp: BulletGraphRanges, name: "Gauge Ranges" },
            { path: "/gauges/bullet-graph-scale", comp: BulletGraphScale, name: "Gauge Scale" },
            { path: "/gauges/bullet-graph-tickmarks", comp: BulletGraphTickmarks, name: "Gauge Tickmarks" },
        ],
    },
    {
        group: "Gauges",
        name: "Linear Gauge",
        release: "18.1",
        samples: [
            // route paths embedded in docs:
            { path: "/gauges/linear-gauge-type-horizontal", comp: LinearGaugeTypeHorizontal, name: "Horizontal Gauge" },
            { path: "/gauges/linear-gauge-type-vertical", comp: LinearGaugeTypeVertical, name: "Vertical Gauge" },
            { path: "/gauges/linear-gauge-type-filled",   comp: LinearGaugeTypeFilled, name: "Filled Gauge" },
            { path: "/gauges/linear-gauge-type-segmented", comp: LinearGaugeTypeSegmented, name: "Segmented Gauge" },
            { path: "/gauges/linear-gauge-type-multi-scale", comp: LinearGaugeTypeMultiScale, name: "Multi Scale Gauge" },
            { path: "/gauges/linear-gauge-type-multi-range", comp: LinearGaugeTypeMultiRange, name: "Multi Range Gauge" },
            { path: "/gauges/linear-gauge-type-curved",   comp: LinearGaugeTypeCurve, name: "Curved Gauge" },
            { path: "/gauges/linear-gauge-animation", comp: LinearGaugeAnimation, name: "Gauge Animation" },
            { path: "/gauges/linear-gauge-backing", comp: LinearGaugeBacking, name: "Gauge Backing" },
            { path: "/gauges/linear-gauge-labels", comp: LinearGaugeLabels, name: "Gauge Labels" },
            { path: "/gauges/linear-gauge-needle", comp: LinearGaugeNeedle, name: "Gauge Needle" },
            { path: "/gauges/linear-gauge-ranges", comp: LinearGaugeRanges, name: "Gauge Ranges" },
            { path: "/gauges/linear-gauge-scale", comp: LinearGaugeScale, name: "Gauge Scale" },
            { path: "/gauges/linear-gauge-tickmarks", comp: LinearGaugeTickmarks, name: "Gauge Tickmarks" },
        ],
    },
    {
        group: "Gauges",
        name: "Radial Gauge",
        release: "18.1",
        samples: [
            // samples embedded in docs: RadialGaugeTypeCurved
            { path: "/gauges/radial-gauge-type-curved", comp: RadialGaugeTypeCurved, name: "Radial Curved Gauge" },
            { path: "/gauges/radial-gauge-type-column",   comp: RadialGaugeTypeColumn, name: "Radial Column Gauge" },
            { path: "/gauges/radial-gauge-type-ring",   comp: RadialGaugeTypeRing, name: "Radial Ring Gauge" },
            { path: "/gauges/radial-gauge-type-segmented", comp: RadialGaugeTypeSegmented, name: "Radial Segmented Gauge" },
            { path: "/gauges/radial-gauge-type-direction", comp: RadialGaugeTypeDirection, name: "Radial Direction Gauge" },
            { path: "/gauges/radial-gauge-type-full",   comp: RadialGaugeTypeFull, name: "Full-Radial Gauge" },
            { path: "/gauges/radial-gauge-type-semi",   comp: RadialGaugeTypeSemi, name: "Semi-Radial Gauge" },
            { path: "/gauges/radial-gauge-type-half",   comp: RadialGaugeTypeHalf, name: "Half-Radial Gauge" },
            { path: "/gauges/radial-gauge-type-quatre", comp: RadialGaugeTypeQuatre, name: "Quatre-Radial Gauge" },
            { path: "/gauges/radial-gauge-animation", comp: RadialGaugeAnimation, name: "Gauge Animation" },
            { path: "/gauges/radial-gauge-backing", comp: RadialGaugeBacking, name: "Gauge Backing" },
            { path: "/gauges/radial-gauge-labels", comp: RadialGaugeLabels, name: "Gauge Labels" },
            { path: "/gauges/radial-gauge-needle", comp: RadialGaugeNeedle, name: "Gauge Needle" },
            { path: "/gauges/radial-gauge-ranges", comp: RadialGaugeRanges, name: "Gauge Ranges" },
            { path: "/gauges/radial-gauge-scale", comp: RadialGaugeScale, name: "Gauge Scale" },
            { path: "/gauges/radial-gauge-tickmarks", comp: RadialGaugeTickmarks, name: "Gauge Tickmarks" },
        ],
    },
    {
        group: "ZoomSlider",
        name: "Zoom Slider",
        release: "19.1",
        samples: [
            { path: "/charts/zoomslider-overview", comp: ZoomSliderOverview, name: "Overview" },

        ],
    },
    {
        group: "Grids",
        name: "Spreadsheet",
        release: "19.2",
        samples: [
            { path: "/spreadsheet/spreadsheet-overview", comp: SpreadsheetOverview, name: "Overview" },
            { path: "/spreadsheet/spreadsheet-activation", comp: SpreadsheetActivation, name: "Activation" },
            { path: "/spreadsheet/spreadsheet-adapter", comp: SpreadsheetAdapter, name: "Chart Adapter" },
            { path: "/spreadsheet/spreadsheet-adapter-combo", comp: SpreadsheetAdapterCombo, name: "Combo Chart" },
            { path: "/spreadsheet/spreadsheet-clipboard", comp: SpreadsheetClipboard, name: "Clipboard" },
            { path: "/spreadsheet/spreadsheet-commands", comp: SpreadsheetCommands, name: "Commands" },
            { path: "/spreadsheet/spreadsheet-conditional-formatting", comp: SpreadsheetCondFormatting, name: "Conditional Formatting" },
            { path: "/spreadsheet/spreadsheet-configuring", comp: SpreadsheetConfiguring, name: "Configuring Spreadsheet" },
            { path: "/spreadsheet/spreadsheet-data-validation", comp: SpreadsheetDataValidation, name: "Data Validation" },
            { path: "/spreadsheet/spreadsheet-filter-dialog", comp: SpreadsheetFilterDialog, name: "Filter Dialog" },
            { path: "/spreadsheet/spreadsheet-format-dialog", comp: SpreadsheetFormatDialog, name: "Format Dialog" },
            { path: "/spreadsheet/spreadsheet-hyperlinks", comp: SpreadsheetHyperlinks, name: "Hyperlinks" },
            { path: "/spreadsheet/spreadsheet-sort-dialog", comp: SpreadsheetSortDialog, name: "Sort Dialog" }
        ],
    },
    {
        group: "Excel-Library",
        name: "Excel Library",
        release: "18.1",
        samples: [
            { path: "/excel-library/overview", comp: ExcelLibraryOverview, name: "Overview" },
            { path: "/excel-library/working-with-cells", comp: ExcelLibraryCells, name: "Using Cells" },
            // { path: "/excel-library/working-with-tables",       comp: ExcelLibraryTables,        name: "Using Tables" },
            { path: "/excel-library/operations-on-workbooks", comp: ExcelLibraryWorkbooks, name: "Using Workbooks" },
            { path: "/excel-library/operations-on-worksheets", comp: ExcelLibraryWorksheets, name: "Using Worksheets" },
            { path: "/excel-library/working-with-sparklines", comp: ExcelLibrarySparklines, name: "Working with Sparklines" },
            { path: "/excel-library/working-with-charts", comp: ExcelLibraryCharts, name: "Working with Charts" },
        ],
    },
    {
        group: "Maps",
        name: "Tree Map",
        samples: [
            // route paths embedded in docs:
            { path: "/charts/tree-map-overview", comp: TreeMapOverview, name: "Overview" },

        ],
    },
]

// these components bound IG modules for similar samples
const BundlingCharts = Loadable({ loader: () => import("./BundlingCharts"), loading: SampleLoading })
const BundlingGauges = Loadable({ loader: () => import("./BundlingGauges"), loading: SampleLoading })
const BundlingGrids = Loadable({ loader: () => import("./BundlingGrids"), loading: SampleLoading })
const BundlingExcel = Loadable({ loader: () => import("./BundlingExcel"), loading: SampleLoading })

export { SampleFallback, SampleHome, TOC, BundlingCharts, BundlingGauges, BundlingGrids, BundlingExcel };

