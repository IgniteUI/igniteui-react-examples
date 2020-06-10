
module.exports = function override(config, env) {
    console.log("Running config-overrides.js");
    const paths = require('./node_modules/react-scripts/config/paths');
    console.log(paths);
    let rules = config.module.rules;
    //let paths = config._paths;
    let oneOf = rules[2].oneOf;
    oneOf.splice(0, 0, {
        test: /\.worker\.ts$/,
        include: paths.appSrc,
        use: [ 'worker-loader', {
            loader: require.resolve('ts-loader'),
            options: {
                transpileOnly: true,
            }
        }
    ]});

    config.output.globalObject = 'this';

    //config.optimization.splitChunks = {};
    config.optimization.splitChunks.cacheGroups = {
        igniteuiCharts: {
            test: /[\\/]node_modules[\\/](igniteui-react-charts)[\\/]/,
            name: 'igniteui-react-charts',
            chunks: 'all',
        },
        igniteuiCore: {
            test: /[\\/]node_modules[\\/](igniteui-react-core)[\\/]/,
            name: 'igniteui-react-core',
            chunks: 'all',
        },
        igniteuiGauges: {
            test: /[\\/]node_modules[\\/](igniteui-react-gauges)[\\/]/,
            name: 'igniteui-react-gauges',
            chunks: 'all',
        },
        igniteuiGrids: {
            test: /[\\/]node_modules[\\/](igniteui-react-grids)[\\/]/,
            name: 'igniteui-react-grids',
            chunks: 'all',
        },
        igniteuiMaps: {
            test: /[\\/]node_modules[\\/](igniteui-react-inputs)[\\/]/,
            name: 'igniteui-react-inputs',
            chunks: 'all',
        },
        igniteuiMaps: {
            test: /[\\/]node_modules[\\/](igniteui-react-layouts)[\\/]/,
            name: 'igniteui-react-layouts',
            chunks: 'all',
        },
        igniteuiMaps: {
            test: /[\\/]node_modules[\\/](igniteui-react-maps)[\\/]/,
            name: 'igniteui-react-maps',
            chunks: 'all',
        },
        igniteuiExcel: {
            test: /[\\/]node_modules[\\/](igniteui-react-excel)[\\/]/,
            name: 'igniteui-react-excel',
            chunks: 'all',
        },
        igniteuiSpreadsheet: {
            test: /[\\/]node_modules[\\/](igniteui-react-spreadsheet)[\\/]/,
            name: 'igniteui-react-spreadsheet',
            chunks: 'all',
        },
        igniteuiSpreadsheetChartAdapter: {
            test: /[\\/]node_modules[\\/](igniteui-react-spreadsheet-chart-adapter)[\\/]/,
            name: 'igniteui-react-spreadsheet-chart-adapter',
            chunks: 'all',
        },
        igniteuiDataSources: {
            test: /[\\/]node_modules[\\/](igniteui-react-datasources)[\\/]/,
            name: 'igniteui-react-datasources',
            chunks: 'all',
        },
        igniteuiDockmanager: {
            test: /[\\/]node_modules[\\/](igniteui-dockmanager)[\\/]/,
            name: 'igniteui-dockmanager',
            chunks: 'all',
        }
        };

    return config;
}