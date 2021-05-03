import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { SampleComboData } from './SampleComboData';
import { IgrMultiColumnComboBoxModule, IgrTextColumn } from 'igniteui-react-grids';
import { IgrMultiColumnComboBox, SortMode } from 'igniteui-react-grids';

IgrMultiColumnComboBoxModule.register();

export default class MultiColumnComboBoxOverview extends React.Component<any, any> {
    public multiColumnComboBox!: IgrMultiColumnComboBox;
    public countryData: any[];

    constructor(props: any) {
        super(props);
        this.onMultiColumnComboBoxRef = this.onMultiColumnComboBoxRef.bind(this);
        this.countryData = SampleComboData.getPopulation();
    }

    public onMultiColumnComboBoxRef(multiColumnComboBox: IgrMultiColumnComboBox) {
        if (!multiColumnComboBox) { return; }
        this.multiColumnComboBox = multiColumnComboBox;
        this.multiColumnComboBox.dataSource = this.countryData;
        this.multiColumnComboBox.textField = "Country";
        this.multiColumnComboBox.fields = ["Country", "Continent", "Population"];
        this.multiColumnComboBox.placeholder = "Choose a country";
        this.multiColumnComboBox.sortMode = SortMode.SortByOneColumnOnly;
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="container">
                    <IgrMultiColumnComboBox width="300px"
                            ref={this.onMultiColumnComboBoxRef}>
                    </IgrMultiColumnComboBox>
                </div>
            </div>
        );
    }
}

// rendering above class to the React DOM
ReactDOM.render(<MultiColumnComboBoxOverview />, document.getElementById('root'));
