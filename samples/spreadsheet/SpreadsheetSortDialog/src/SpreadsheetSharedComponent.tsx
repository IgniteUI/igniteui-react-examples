import * as React from "react";
import { SpreadsheetEnterKeyNavigationDirection } from 'igniteui-react-spreadsheet';
import { SpreadsheetCellSelectionMode } from 'igniteui-react-spreadsheet';

export class SpreadsheetSharedComponent
    extends React.Component<any, IComponentState> {

    constructor(props: any) {
        super(props);
    }
}

export interface IComponentState {
    activeCell?:any,
    areGridlinesVisible?: boolean;    
    areHeadersVisible?: boolean;
    enterKeyNavigationDirection?: SpreadsheetEnterKeyNavigationDirection;
    filterText?: string,   
    isProtected?: boolean;
    isFormulaBarVisible?: boolean;
    isEnterKeyNavEnabled?: boolean;
    isTabBarAreaVisible?: boolean;    
    spreadsheetSelectionMode?: SpreadsheetCellSelectionMode;
    spreadsheetZoomLevel?: number;
};