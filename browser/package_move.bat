@echo off
ECHO moving IG development packages...
CD node_modules

IF EXIST @infragistics\igniteui-react-charts\ES5 (
 MOVE /y @infragistics\igniteui-react-charts\ES5 igniteui-react-charts\ES5
 MOVE /y @infragistics\igniteui-react-charts\ES2015 igniteui-react-charts\ES2015
 MOVE /y @infragistics\igniteui-react-charts\License igniteui-react-charts\License
 MOVE /y @infragistics\igniteui-react-charts\package.json igniteui-react-charts\package.json
 MOVE /y @infragistics\igniteui-react-charts\README.md igniteui-react-charts\README.md
) 

IF EXIST @infragistics\igniteui-react-core\ES5 (
 MOVE /y @infragistics\igniteui-react-core\ES5 igniteui-react-core\ES5
 MOVE /y @infragistics\igniteui-react-core\ES2015 igniteui-react-core\ES2015
 MOVE /y @infragistics\igniteui-react-core\License igniteui-react-core\License
 MOVE /y @infragistics\igniteui-react-core\package.json igniteui-react-core\package.json
 MOVE /y @infragistics\igniteui-react-core\README.md igniteui-react-core\README.md
) 

IF EXIST @infragistics\igniteui-react-gauges (
 MOVE /y @infragistics\igniteui-react-gauges igniteui-react-gauges
) 

IF EXIST @infragistics\igniteui-react-grids (
 MOVE /y @infragistics\igniteui-react-grids igniteui-react-grids
)

IF EXIST @infragistics\igniteui-react-data-grids (
 MOVE /y @infragistics\igniteui-react-data-grids igniteui-react-data-grids
)


IF EXIST @infragistics\igniteui-react-dashboards (
 MOVE /y @infragistics\igniteui-react-dashboards igniteui-react-dashboards
)
 
IF EXIST @infragistics\igniteui-react-excel (
 MOVE /y @infragistics\igniteui-react-excel igniteui-react-excel
) 

ECHO moving IG development packages... completed



