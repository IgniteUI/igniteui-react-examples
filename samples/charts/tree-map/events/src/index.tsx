import React from 'react';
import ReactDOM from 'react-dom';
import { IgrTreemapModule } from 'igniteui-react-charts';
import { IgrTreemap } from 'igniteui-react-charts';
import { IgrTreemapNodePointerEventArgs } from 'igniteui-react-charts';
import { CountryTreeData } from './CountryTreeData';

IgrTreemapModule.register();

export default class TreeMapEvents extends React.Component<any, any> {
    public treeMap: IgrTreemap;

    constructor(props: any) {
        super(props);

        this.state = {
            data: CountryTreeData.create(),
            hoveredNodeParent: "None",
            hoveredNodeName: "None",
            hoveredNodeValue: "None",
            selectedNodeParent: "None",
            selectedNodeName: "None",
            selectedNodeValue: "None",
        };

        this.onTreeMapRef = this.onTreeMapRef.bind(this);
        this.onNodePointerEnter = this.onNodePointerEnter.bind(this);
        this.onNodePointerLeave = this.onNodePointerLeave.bind(this);
        this.onNodePointerPressed = this.onNodePointerPressed.bind(this);
    }
    public onTreeMapRef(treeMap: IgrTreemap) {
        if (!treeMap) { return; }

        this.treeMap = treeMap;
    }

    public render(): JSX.Element {
        return (
          <div className="container sample" >
            <div className="options vertical">
                <div className="options horizontal">
                    <label style={{ marginLeft: "0.25rem", marginRight: "1.0rem" }}>Treemap Hovered Node</label>
                    {/* this label displays info about currently hovered item in Treemap */}
                    <label style={{ marginLeft: "0.5rem" }}>Parent:</label>
                    <label style={{ width: "3rem", fontWeight: 800 }}>{this.state.hoveredNodeParent}</label> 
                    <label style={{ marginLeft: "1.5rem" }}>Name:</label>
                    <label style={{ width: "5rem", fontWeight: 800 }}>{this.state.hoveredNodeName}</label>
                    <label style={{ marginLeft: "1.5rem" }}>Value:</label>
                    <label style={{ width: "5rem", fontWeight: 800 }}>{this.state.hoveredNodeValue}</label>
                </div>
                <div className="options horizontal">
                    <label style={{ marginLeft: "0.25rem", marginRight: "1.0rem" }}>Treemap Selected Node</label>
                    {/* this label displays info about currently selected item in Treemap */}
                    <label style={{ marginLeft: "0.5rem" }}>Parent:</label>
                    <label style={{ width: "3rem", fontWeight: 800 }}>{this.state.selectedNodeParent}</label> 
                    <label style={{ marginLeft: "1.5rem" }}>Name:</label>
                    <label style={{ width: "5rem", fontWeight: 800 }}>{this.state.selectedNodeName}</label>
                    <label style={{ marginLeft: "1.5rem" }}>Value:</label>
                    <label style={{ width: "5rem", fontWeight: 800 }}>{this.state.selectedNodeValue}</label>
                </div>
            </div>

            <div className="options vertical">
                <span className="legend-title">Comparing Population of Countries</span>
            </div>

            <div className="container vertical" style={{ padding: "0.75rem", width: "calc(100% - 1.5rem)", height: "calc(100% - 1.5rem)"}}>
                <IgrTreemap
                        ref={this.onTreeMapRef}
                        height="100%"
                        width="100%"
                        dataSource={this.state.data}
                        rootTitle="Countries"
                        parentIdMemberPath="Parent"
                        idMemberPath="Name"
                        labelMemberPath="Name"
                        valueMemberPath="Pop"
                        nodePointerEnter={this.onNodePointerEnter}
                        nodePointerLeave={this.onNodePointerLeave}
                        nodePointerPressed={this.onNodePointerPressed}
                        headerDisplayMode="Overlay"
                        fillBrushes={[ "#299e41", "#4e62cf", "#5e359c" ]}
                        isFillScaleLogarithmic={true}
                        parentNodeBottomPadding={0}
                        parentNodeLeftPadding={0}
                        parentNodeRightPadding={0}
                        parentNodeTopPadding={0}>
                </IgrTreemap>
            </div>
          </div>
        );
    }

    public onNodePointerEnter(sender: IgrTreemap, args: IgrTreemapNodePointerEventArgs) {
        if (!args.item) {
            return;
        }

        if (!args.item.Parent) {
            this.setState({
                hoveredNodeParent: "Countries",
                hoveredNodeName: args.item.Name,
                hoveredNodeValue: "None"
            });
        } else {
            let population = (args.item.Pop / 1000000).toFixed(0).toString() + " M";
            this.setState({
                hoveredNodeParent: args.item.Parent,
                hoveredNodeName: args.item.Name,
                hoveredNodeValue: population
            });
        }
    }
    public onNodePointerLeave(sender: IgrTreemap, args: IgrTreemapNodePointerEventArgs) {
        this.setState({
            hoveredNodeParent: "None",
            hoveredNodeName: "None",
            hoveredNodeValue: "None"
        });
    }
    public onNodePointerPressed(sender: IgrTreemap, args: IgrTreemapNodePointerEventArgs) {
        if (!args.item) {
            return;
        }

        if (!args.item.Parent) {
            this.setState({
                selectedNodeParent: "Countries",
                selectedNodeName: args.item.Name,
                selectedNodeValue: "None"
            });
        } else {
            let population = (args.item.Pop / 1000000).toFixed(0).toString() + " M";
            this.setState({
                selectedNodeParent: args.item.Parent,
                selectedNodeName: args.item.Name,
                selectedNodeValue: population
            });
        }
    }
}

// rendering above class to the React DOM
ReactDOM.render(<TreeMapEvents />, document.getElementById('root'));
