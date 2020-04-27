import * as React from "react";
import "../styles.css";
import "./ExcelSharedStyles.css";
import { ExcelSharedComponent } from "./ExcelSharedComponent";
import { SharedData } from "./ExcelSharedData";

export default class ExcelLibraryTables extends ExcelSharedComponent {

    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div className="sample">
            TODO Write Excel Sample
            </div>
        );
    }

}