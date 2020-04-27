import * as React from "react";
import { Route, Switch } from "react-router-dom"

// TODO use AppEmbedded in AppRouter
export default class AppEmbedded extends React.Component
{
    public SamplesRoutes: any[];

    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div  >
                <h1>Welcome to AppEmbedded</h1>
            </div>
        );
    }
}
