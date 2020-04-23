import * as React from "react";
import { SpreadsheetEnterKeyNavigationDirection } from 'igniteui-react-spreadsheet';
import { SpreadsheetCellSelectionMode } from 'igniteui-react-spreadsheet';

export class ZoomSliderSharedComponent
    extends React.Component<any, IComponentState> {

    constructor(props: any) {
        super(props);
    }
}

export interface IComponentState {
    name: string;
    data: any[];
    data2: any[];
    data3: any[];
    data4: any[];
    data5: any[];
    callouts: any[];
};