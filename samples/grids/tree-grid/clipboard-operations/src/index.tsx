import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { GridSelectionMode, IgrColumnComponentEventArgs, IgrGridBaseDirective, IgrTreeGridModule } from 'igniteui-react-grids';
import { IgrTreeGrid, IgrColumn } from 'igniteui-react-grids';
import { EmployeesFlatDetails } from './EmployeesFlatDetails';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';
import { IgrInput, IgrSwitch, IgrButton } from 'igniteui-react';

const mods: any[] = [
    IgrTreeGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private treeGrid: IgrTreeGrid;
    private treeGridRef(r: IgrTreeGrid) {
        this.treeGrid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.state = {
            separator: '\t',
            clipboardEnabled: true,
            clipboardHeaders: true,
            clipboardFormatters: true
        };

        this.treeGridRef = this.treeGridRef.bind(this);
        this.handleSeparatorChange = this.handleSeparatorChange.bind(this);
        this.handleClipboardEnabledChange = this.handleClipboardEnabledChange.bind(this);
        this.handleClipboardHeadersChange = this.handleClipboardHeadersChange.bind(this);
        this.handleClipboardFormattersChange = this.handleClipboardFormattersChange.bind(this);
        this.handleClearSelection = this.handleClearSelection.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">
            <div className="options horizontal" style={{ gap: '50px' }}>
                <IgrInput
                    value={this.state.separator}
                    change={this.handleSeparatorChange}
                >
                    <span slot="prefix">Change copy separator:</span>
                    <span slot="helper-text">The default value is a single tabulation.</span>
                </IgrInput>
                <IgrSwitch
                    checked={this.state.clipboardEnabled}
                    labelPosition="before"
                    change={this.handleClipboardEnabledChange}
                >
                    <span>Grid copy behavior</span>
                </IgrSwitch>
                <IgrSwitch
                    checked={this.state.clipboardHeaders}
                    labelPosition="before"
                    change={this.handleClipboardHeadersChange}
                >
                    <span>Copying of header labels</span>
                </IgrSwitch>
                <IgrSwitch
                    checked={this.state.clipboardFormatters}
                    labelPosition="before"
                    change={this.handleClipboardFormattersChange}
                >
                    <span>Copying column formatters</span>
                </IgrSwitch>
                <IgrButton clicked={this.handleClearSelection} style={{ marginTop: '0.5rem' }}>
                    <span>Clear selection</span>
                </IgrButton>
            </div>

            <div className="container fill">
                <IgrTreeGrid
                    autoGenerate={false}
                    ref={this.treeGridRef}
                    id="treeGrid"
                    data={this.employeesFlatDetails}
                    primaryKey="ID"
                    foreignKey="ParentID"
                    columnSelection="Multiple"
                    clipboardOptions={{
                        enabled: this.state.clipboardEnabled,
                        copyHeaders: this.state.clipboardHeaders,
                        copyFormatters: this.state.clipboardFormatters,
                        separator: this.state.separator
                    }}
                    columnInit={this.webGridClipboardOperationsColumnInit}
                >
                    <IgrColumn field="ID" header="ID" dataType="number" sortable />
                    <IgrColumn field="Name" dataType="string" sortable disableHiding />
                    <IgrColumn field="Title" dataType="string" sortable disableHiding />
                    <IgrColumn field="HireDate" dataType="date" sortable hidden />
                    <IgrColumn field="Age" dataType="number" sortable hidden />
                    <IgrColumn field="Address" dataType="string" sortable />
                    <IgrColumn field="City" dataType="string" sortable />
                    <IgrColumn field="Country" dataType="string" sortable />
                    <IgrColumn field="Fax" dataType="string" sortable />
                    <IgrColumn field="PostalCode" header="Postal Code" dataType="string" sortable />
                    <IgrColumn field="Phone" dataType="string" sortable />
                </IgrTreeGrid>
            </div>
        </div>
        );
    }

    private _employeesFlatDetails: EmployeesFlatDetails = null;
    public get employeesFlatDetails(): EmployeesFlatDetails {
        if (this._employeesFlatDetails == null)
        {
            this._employeesFlatDetails = new EmployeesFlatDetails();
        }
        return this._employeesFlatDetails;
    }

    private handleSeparatorChange(event: any) {
        this.setState({ separator: event.value });
    }

    private handleClipboardEnabledChange(event: any) {
        this.setState({ clipboardEnabled: event.checked });
    }

    private handleClipboardHeadersChange(event: any) {
        this.setState({ clipboardHeaders: event.checked });
    }

    private handleClipboardFormattersChange(event: any) {
        this.setState({ clipboardFormatters: event.checked });
    }

    private handleClearSelection() {
        this.treeGrid.cellSelection = GridSelectionMode.None;
        this.treeGrid.cellSelection = GridSelectionMode.Multiple;
    }

    private webGridClipboardOperationsColumnInit = (grid: IgrGridBaseDirective, args: IgrColumnComponentEventArgs) => {
        let column = args.detail;
        column.formatter = (val: any) => "** " + val + " **"
        column.header = "🎉" + column.field;
    }
}

// rendering the above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample />);