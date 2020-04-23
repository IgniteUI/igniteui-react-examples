## Introduction

This repository contains implementation of React application that demonstrates different scenarios related to the usage of Ignite UI for React components. All samples are part of the official component topics from our [website](https://www.infragistics.com/).


![alt text](./src/navigation/SamplePreview.jpg "Preview")

## Table of Contents

- [Introduction](#Introduction)
- [Background](#Background)
- [Setup](#Setup)
- [Building Project](#Building-Project)
- [Running App](#Running-App)
- [Folder Structure](#Table-of-Contents)
- [Supported Browsers](#supported-browsers)


## Background

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Setup

To setup this project:

- open VS Code as Administrator
- open the folder that contains this repository, e.g. `C:\react-samples\`
- select **View** - **Terminal** menu item
- run this command:

```
npm install
```

This will install required packages and Ignite UI for React packages from npm website:

- [igniteui-react-core](https://www.npmjs.com/package/igniteui-react-core)
- [igniteui-react-charts](https://www.npmjs.com/package/igniteui-react-charts)
- [igniteui-react-excel](https://www.npmjs.com/package/igniteui-react-excel)
- [igniteui-react-gauges](https://www.npmjs.com/package/igniteui-react-gauges)
- [igniteui-react-grids](https://www.npmjs.com/package/igniteui-react-grids)
- [igniteui-react-maps](https://www.npmjs.com/package/igniteui-react-maps)
- [igniteui-react-datasources](https://www.npmjs.com/package/igniteui-react-datasources)


## Building Project
To build the project run:

```
npm build
```

## Running App
To start the dev server run:

```
npm start
```


## Folder Structure

This project has the following structure:

```
my-app/
  README.md
  package.json
  public/
    Data/       - .csv and .json files for Map component
    Shapes/     - .shp and .dbf files for Map component
    index.html
    favicon.ico
  src/
    index.css
    index.js
    navigtaion  - a folder with samples browser navigation
    samples/     - a folder with samples implementation for:
    samples/bullet-graph
    samples/category-chart
    samples/data-grid
    samples/data-chart
    samples/doughnut-chart
    samples/excel-library
    samples/financial-chart
    samples/geo-map
    samples/linear-gauge
    samples/pie-chart
    samples/radial-gauge

```

## Supported Browsers

By default, the generated project uses the latest version of React.

You can refer [to the React documentation](https://reactjs.org/docs/react-dom.html#browser-support) for more information about supported browsers.
