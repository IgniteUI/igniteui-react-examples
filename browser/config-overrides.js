const path = require('path');
let pathsConfig = require("./tsconfig.paths.json");
const {alias, configPaths, expandResolveAlias, expandRulesInclude, expandPluginsScope} = require('react-app-rewire-alias')
const resolve = require('resolve');
const shouldUseSourceMap = false; // process.env.GENERATE_SOURCEMAP !== 'false';
const ForkTsCheckerWebpackPlugin =
  process.env.TSC_COMPILE_ON_ERROR === 'true'
    ? require('react-dev-utils/ForkTsCheckerWarningWebpackPlugin')
    : require('react-dev-utils/ForkTsCheckerWebpackPlugin');

//this works around the fact that alias doesn't support multiple paths
function aliasMultiple(aliasMap) {
    const alias0 = Object.keys(aliasMap).reduce( (a,i) => {
      a[i] = aliasMap[i][0]
      return a
    }, {});
    const alias1 = Object.keys(aliasMap).reduce( (a,i) => {
        a[i] = aliasMap[i][1]
        return a
      }, {});
    return function(config) {
      expandResolveAlias(config.resolve, aliasMap);
      expandRulesInclude(config.module.rules, Object.values(alias0));
      expandRulesInclude(config.module.rules, Object.values(alias1));
      expandPluginsScope(config.resolve.plugins, Object.values(alias0), Object.values(alias0));
      expandPluginsScope(config.resolve.plugins, Object.values(alias1), Object.values(alias1));
      return config;
    }
  }

/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = function override(config, env) {
    console.log("config-overrides.js started");
    console.log("env: " + env);
    const isEnvDevelopment = env === 'development';
    const isEnvProduction = env === 'production';

    // Variable used for enabling profiling in Production
    // passed into alias object. Uses a flag if passed into the build command
    const isEnvProductionProfile =
    isEnvProduction && process.argv.includes('--profile');

    const paths = require('./node_modules/react-scripts/config/paths');
    // console.log("config-overrides.js paths");
    console.log(paths);

    console.log(pathsConfig);
    let tspaths = pathsConfig.compilerOptions.paths;
    tspaths = Object.keys(tspaths).reduce((a, p) => {
        let target = tspaths[p];
        a[p.replace(/\/\*$/,'')] = Array.isArray(target) ? target.map((t) => t.replace(/\/\*$/,'')) : target.replace(/\/\*$/,'');
        return a;
    }, {});
    console.log(tspaths);
    tspaths = Object.keys(tspaths).reduce((a, p) => {
        let target = tspaths[p];
        a[p.replace(/\/\*$/,'')] = Array.isArray(target) ? target.map((t) => path.resolve(__dirname, t)) : path.resolve(__dirname, target);
        
        return a;
    }, {});
    console.log(tspaths);

    // config.resolve = {
    //     ...config.resolve,
    //     alias: {
    //       ...config.alias,
    //       ...tspaths
    //     },
    // };

    //console.log(config.resolve);

    let rules = config.module.rules;
    //let paths = config._paths;
    let oneOf = null; // rules[1].oneOf;

    for (const rule of rules) {
        if (rule.oneOf !== undefined) {
            oneOf = rule.oneOf;
            break;
        }
    }
    if (oneOf === null) {
        console.log("config-overrides.js rules:");
        console.log(rules);
        throw "config-overrides.js cannot find config rule with 'oneOf'"
    }

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

    console.log("config-overrides.js optimization:");
    console.log(config.optimization);

    if (config.optimization.splitChunks === undefined ||
        config.optimization.splitChunks.cacheGroups === undefined) {
        console.log("config-overrides.js found no config.optimization.splitChunks in webpack \n")
    } else {
        console.log("config-overrides.js setting config.optimization.splitChunks.cacheGroups");
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
            igniteuiReact: {
                test: /[\\/]node_modules[\\/](igniteui-react)[\\/]/,
                name: 'igniteui-react',
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
            igniteuiInputs: {
                test: /[\\/]node_modules[\\/](igniteui-react-inputs)[\\/]/,
                name: 'igniteui-react-inputs',
                chunks: 'all',
            },
            igniteuiLayouts: {
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
            igniteuiDashboards: {
                test: /[\\/]node_modules[\\/](igniteui-react-dashboards)[\\/]/,
                name: 'igniteui-react-dashboards',
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
    }

    console.log("\n\n\n\n");
    //let newConfig = alias(configPathsMultiple('./tsconfig.paths.json'))(config);
    //console.log(newConfig);

    if (!config.resolve) {
        config.resolve = {};
    }
    config.resolve.mainFields = ["esm2015", "module", "main"];

    let checkerInd = -1;
    for (var i = 0; i < config.plugins.length; i++) {
        if (config.plugins[i] instanceof ForkTsCheckerWebpackPlugin) {
            checkerInd = i;
            break;
        }
    }
    if (checkerInd >= 0) {
        let checker = new ForkTsCheckerWebpackPlugin({
            async: isEnvDevelopment,
            typescript: {
              memoryLimit: 10240,
              typescriptPath: resolve.sync('typescript', {
                basedir: paths.appNodeModules,
              }),
              configOverwrite: {
                compilerOptions: {
                  sourceMap: isEnvProduction
                    ? shouldUseSourceMap
                    : isEnvDevelopment,
                  skipLibCheck: true,
                  inlineSourceMap: false,
                  declarationMap: false,
                  noEmit: true,
                  incremental: true,
                  tsBuildInfoFile: paths.appTsBuildInfoFile,
                },
              },
              context: paths.appPath,
              diagnosticOptions: {
                syntactic: true,
              },
              mode: 'write-references',
              // profile: true,
            },
            issue: {
              // This one is specifically to match during CI tests,
              // as micromatch doesn't match
              // '../cra-template-typescript/template/src/App.tsx'
              // otherwise.
              include: [
                { file: '../**/src/**/*.{ts,tsx}' },
                { file: '**/src/**/*.{ts,tsx}' },
              ],
              exclude: [
                { file: '**/src/**/__tests__/**' },
                { file: '**/src/**/?(*.){spec|test}.*' },
                { file: '**/src/setupProxy.*' },
                { file: '**/src/setupTests.*' },
              ],
            },
            logger: {
              infrastructure: 'silent',
            },
          });
        config.plugins[checkerInd] = checker;
    }

    // Add Babel plugins manually to the config
    let moduleRules = config.module.rules[0].oneOf;
    for (var j = 0; j < moduleRules.length; j++) {
      if (moduleRules[j].loader?.includes("babel-loader")) {
        moduleRules[j].options.plugins?.push("@babel/plugin-transform-class-static-block");
      }
    }

    let newConfig = aliasMultiple(tspaths)(config);
    console.log(newConfig);
    return newConfig;
}