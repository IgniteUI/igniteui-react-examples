import * as React from "react";
import { ColumnMovingMode } from 'igniteui-react-grids';
import { ColumnMovingAnimationMode } from 'igniteui-react-grids';
import { ColumnResizingMode } from 'igniteui-react-grids';
import { ColumnResizingAnimationMode } from 'igniteui-react-grids';

export class DataGridSharedComponent
    extends React.Component<any, IComponentState> {

    constructor(props: any) {
        super(props);

        this.state = { componentVisible: true }
    }
}

export interface IComponentState
{
    componentVisible?: boolean,

    backgroundColor?: string,
    backgroundVisible?: boolean,
    sortType?: string,

    filterText?: string,
    filterMode?: string,
    filterColumn?: string,

    columnAddShowAnimation?: string,
    columnExchangeAnimation?: string,
    columnHideAnimation?: string,
    columnMoveAnimation?: string,
    columnPropertyChangeAnimation?: string,

    columnMovingMode? : ColumnMovingMode,
    columnMovingAnimation? : ColumnMovingAnimationMode,

    columnResizingMode? : ColumnResizingMode,
    columnResizingAnimation? : ColumnResizingAnimationMode,
    columnSeparatorWidth? : number,

    selectionMode?: string,

    leftButtonDisabled?: boolean,
    rightButtonDisabled?: boolean
};