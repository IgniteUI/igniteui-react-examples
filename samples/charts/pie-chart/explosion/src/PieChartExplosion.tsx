import { IgrPieChart } from 'igniteui-react-charts';
import { IgrPieChartModule } from 'igniteui-react-charts';
import { IgrPieChartBase } from 'igniteui-react-charts';
import { IIgrPieChartBaseProps } from 'igniteui-react-charts';
import { IgrSliceClickEventArgs } from 'igniteui-react-charts';
import * as React from 'react';

IgrPieChartModule.register();

export default class PieChartExplosion extends React.Component<any, any> {

    public data: any[];

    constructor(props: any) {
        super(props);

        this.state = {
            data: [
                { MarketShare: 30, Company: "Google",    },
                { MarketShare: 30, Company: "Apple",     },
                { MarketShare: 15, Company: "Microsoft", },
                { MarketShare: 15, Company: "Samsung",   },
                { MarketShare: 10, Company: "Other",     },
        ] };
    }

    public render(): JSX.Element {
        return (
            <div style={{height: "100%", width: "100%", background: "white" }}>

        <IgrPieChart dataSource={this.state.data}
                    labelMemberPath="Company"
                    valueMemberPath="MarketShare"
                    width="100%"
                    height="100%"
                    explodedRadius={0.2}
                    explodedSlices="1, 2"
                    allowSliceExplosion="true"
                    radiusFactor={0.7}
                    sliceClick={this.onSliceClick}/>
            </div>
        );
    }

    public onSliceClick = (s: IgrPieChartBase<IIgrPieChartBaseProps>, e: IgrSliceClickEventArgs) => {
        e.isExploded = !e.isExploded;
    }

}
