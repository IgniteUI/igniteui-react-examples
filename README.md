<link href="https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap" rel="stylesheet">
<div style="display: flex; flex-flow: row; font-family: 'Titillium Web'">
    <!-- <div style="font-size: 2.5rem; align-self: start; justify-content: start; margin: 0px; margin-left: 0.5rem; margin-right: 0.5rem; ">Examples</div> -->
    <img height="70px" style="border-radius: 0.25rem" alt="ignite-ui" src="./browser/public/logo-ignite-ui.svg"/>
    <!-- <div style="font-size: 2.5rem; margin: 0px; margin-left: 0.5rem; margin-right: 0.5rem; color: white; "> for React </div> -->
</div>

# Examples of Ignite UI for React Components

This repository contains over 240 examples on how to use [Ignite UI for React](https://infragistics.com/reactsite/components/general-getting-started.html) components:

- [Bullet Graph, Linear Gauge, Radial Gauges](https://infragistics.com/reactsite/components/radial-gauge.html)
- [Data Chart, Category Chart, Financial Chart, Pie Chart](https://infragistics.com/reactsite/components/data-chart.html)
- [Data Grid / Data Table](https://infragistics.com/reactsite/components/data-grid.html)
- [Geographic Map, Treemap](https://infragistics.com/reactsite/components/geo-map.html)
- [Excel Spreadsheet](https://infragistics.com/reactsite/components/spreadsheet_overview.html)
- [Excel Library](https://infragistics.com/reactsite/components/excel_library_using_workbooks.html)
- and many more

You can run each sample project individually from the [./samples](./samples) folder or you can run the root folder to browse all samples in one website. Also, you can run each sample on Code Sandbox website by clicking on the `Edit on CodeSandbox` button in a readme file of sample project, .e.g.
```
./samples/charts/category-chart/overview/README.md
```

## Setup

To set up this project locally, clone this repository:
```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
```

## Running Individual Sample

- in VS Code, open a folder with existing sample, e.g.
```
./samples/charts/category-chart/axis-options/
```
- type `npm install` command in terminal window
- type `npm run start` command in terminal window

- Wait until the build is completed and then open [http://localhost:4200](http://localhost:4200) in your browser.

At this point, you should see a website hosted example of [Ignite UI for React](https://infragistics.com/reactsite/components/general-getting-started.html) component


## Running All Samples

- open VS Code as Administrator
- open the folder that contains this repository, e.g. `C:\GitHub\igniteui-react-examples\`
- select **View** - **Terminal** menu item

- type `npm install` command in terminal window

This will install required packages and [Ignite UI for React](https://infragistics.com/reactsite/components/general-getting-started.html) packages from npm website:

- [igniteui-react-core](https://www.npmjs.com/package/igniteui-react-core)
- [igniteui-react-charts](https://www.npmjs.com/package/igniteui-react-charts)
- [igniteui-react-excel](https://www.npmjs.com/package/igniteui-react-excel)
- [igniteui-react-gauges](https://www.npmjs.com/package/igniteui-react-gauges)
- [igniteui-react-grids](https://www.npmjs.com/package/igniteui-react-grids)
- [igniteui-react-maps](https://www.npmjs.com/package/igniteui-react-maps)
- [igniteui-react-spreadsheet](https://www.npmjs.com/package/igniteui-react-spreadsheet)
- [igniteui-react-datasources](https://www.npmjs.com/package/igniteui-react-datasources)


To start this application locally:

- type `npm run start` command in terminal window

Note this application copies all individually sample projects from [./samples](./samples) to [./src/samples](./src/samples) folder when it is about to start running. Therefore, any changes to [./src/samples](./src/samples) will be overridden on consecutive run of the application.

Wait until the build is completed and then open [http://localhost:4200](http://localhost:4200) in your browser. You should see a website with navigation menu for browning all samples in this repository.


## Adding New Sample

- create a new branch from the `vnext` branch

- open a folder with existing sample, e.g.
```
./samples/charts/category-chart/axis-options/
```
- copy the sample and rename the new folder, e.g.
```
./samples/charts/category-chart/axis-types/
```
- open the newly created folder in VS Code

- rename the .tsx file in src folder, using this naming convention:

`ControlNameSampleName.tsx`

```
./samples/charts/category-chart/axis-types/src/CategoryChartAxisTypes.tsx
```

- open the .tsx file

- rename class to the name of .tsx file

- type `npm install` command in terminal window

- type `npm run start` command in terminal window

- implement the new sample in the .tsx file

- close the new sample project in VS Code

- delete `node_modules` folder in the new sample project

- follow instructions in the next section

## Verify New Sample

- open the root folder of this repository in VS Code

- type `gulp updateSamples` command in terminal window

NOTE this will re-generate the Readme.md file in the new sample

- type `npm run start` command in terminal window

- open [http://localhost:4200](http://localhost:4200) in your browser

- verify that the new sample is listed in the navigation menu

- verify that the new sample loads by clicking navigation link

- verify that there are no errors in DEV console

- take a screenshot of the new sample with navigation menu

- commit your changes

- create a pull request and target the `vnext` branch

- paste the screenshot in you pull request

- submit your pull request



## Learn More

To learn more about **Ignite UI for React** components, check out the [React documentation](https://infragistics.com/reactsite/components/general-getting-started.html).
