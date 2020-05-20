<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/templates/sample/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Component2 Linear Gauge Labels.
<!-- in the Component2 component -->
<!-- [Component2](https://infragistics.com/Reactsite/components/component2.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/tests2/component2/sample-gauge?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/LinearGaugeLabels.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/tests2/component2/sample-gauge?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/LinearGaugeLabels.tsx">
            <img height="40px" style="border-radius: 5px" alt="View on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/view.png"/>
        </a> -->
        <!-- <a target="_blank"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="View on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/view.png"/>
        </a>
https://codesandbox.io/embed/react-treemap-overview-rtb45
https://codesandbox.io/static/img/play-codesandbox.svg
https://codesandbox.io/embed/react-treemap-overview-rtb45?view=browser -->
    </body>
</html>

<!-- ## Sample Preview -->

<!-- <iframe
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/tests2/component2/sample-gauge?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/LinearGaugeLabels.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/LinearGaugeLabels.tsx` file:

```tsx
import { IgrLinearGauge } from 'igniteui-react-gauges';
import { IgrLinearGaugeModule } from 'igniteui-react-gauges';
import * as React from 'react';


IgrLinearGaugeModule.register();

export default class LinearGaugeLabels extends React.Component {

    // constructor(props: any) {
    //     super(props);
    // }

    public render() {
        return (
            <div className="igContainer">
            <IgrLinearGauge
                height="80px"
                width="100%"
                minimumValue={0} value={50}
                maximumValue={100} interval={10}
                labelInterval={10}
                labelExtent={0.025}
                labelsPreTerminal={0}
                labelsPostInitial={0}
                fontBrush="DodgerBlue"
                font="11px Verdana" />
        </div>
        );
    }
}
```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/tests2/component2/sample-gauge
npm install
npm start

```

Then open http://localhost:3000/ in your browser

