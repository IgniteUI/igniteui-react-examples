import * as React from "react";
import './SamplesLoading.css'

export class SamplesLoading extends React.Component<any, any> {

    public render(): JSX.Element {

        return (
            <div className="spinner-container">
            <   span className="spinner"></span>
            </div>
        );
    }
}