import * as React from "react";
import './SamplesLoading.css'

export class SamplesLoading extends React.Component<any, any>
{
    constructor(props: any) {
        super(props);
    }

    public render() {

        return (
            <div className="spinner-container">
            <   span className="spinner"></span>
            </div>
        );
    }
}