import * as React from 'react';
import { SampleComboData } from './SampleComboData';
import { IgrMultiColumnComboBoxModule } from 'igniteui-react-grids';
import { IgrMultiColumnComboBox, SortMode } from 'igniteui-react-grids';

IgrMultiColumnComboBoxModule.register();

export default class IgrMultiColumnComboBoxOverview extends React.Component<any, any> {
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
        this.multiColumnComboBox.textField = "country";
        this.multiColumnComboBox.placeholder = "Choose a country"
        this.multiColumnComboBox.sortMode = SortMode.SortByOneColumnOnly;
    }

    public render(): JSX.Element {
        return (
            <div className="igContainer">    
                <div className="igComponent">               
                    <IgrMultiColumnComboBox width="400px"
                            ref={this.onMultiColumnComboBoxRef}>
                    </IgrMultiColumnComboBox>
                </div>
            </div>
        );
    }
}
