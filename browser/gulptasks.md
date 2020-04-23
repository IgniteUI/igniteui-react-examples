
# 1. gulp script for getting structure of samples

Add getSamplesStructure() for reading folder structure under ./samples/ folder:

- read 1st level of folders, e.g.
../samples/bullet-graph/
../samples/category-chart/

- read 2nd level of folders and files, e.g.
../samples/bullet-graph/BulletGraphAnimation/
../samples/bullet-graph/BulletGraphAnimation/*.*
../samples/bullet-graph/BulletGraphBackground/
../samples/bullet-graph/BulletGraphBackground/*.*

- read 3rd level of folders and files, e.g.
../samples/bullet-graph/BulletGraphAnimation/public/
../samples/bullet-graph/BulletGraphAnimation/public/*.*
../samples/bullet-graph/BulletGraphAnimation/src/
../samples/bullet-graph/BulletGraphAnimation/src/*.*


# 2. gulp script for creating TOC

Add generateTOC() function for:
- generating ./src/navigation/toc.js file
using getSamplesStructure()
- generate imports statements and TOC entries for each samples in getSamplesStructure(), e.g.
```
const DataGridBindingDataService = Loadable({ loader: () => import("../samples/data-grid/DataGridBindingDataService"), loading: SampleLoading })
```

```
{ path: "/charts/category-chart-overview", comp: CategoryChartOverview, name: "Overview" },
```

# 3. gulp script for moving samples to SB

Add a function for:
- copying files using getSamplesStructure()
- pasting files ./src/samples/ folder

# 4. gulp script for updating samples files

Add a function for:
- copying files from ./browser/templates-shared/ folder
- pasting files to ../samples/[ControlName]/[SampleName]/