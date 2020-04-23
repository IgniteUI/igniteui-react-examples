import * as React from "react";
import { IgrNumericColumn } from 'igniteui-react-grids';

export class IgrCurrencyColumn extends IgrNumericColumn {

    constructor(props: any) {
        super(props);

        this.negativePrefix = "$";
        this.positivePrefix = "$";
        this.showGroupingSeparator = true;
    }
}