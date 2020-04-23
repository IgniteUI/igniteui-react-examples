import * as React from "react";

export class SparklineSharedComponent
    extends React.Component<any, IComponentState> {

    constructor(props: any) {
        super(props);

        this.state = { }
    }
}

export interface IComponentState
{
    sparklineProp? : string;
};
