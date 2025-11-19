import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './DockManagerStyles.css';
import { IgrDockManager, IgrDockManagerPaneType, IgrSplitPaneOrientation } from 'igniteui-react-dockmanager';

/* eslint-disable */
declare global {
    namespace JSX {
        // tslint:disable-next-line:interface-name
        interface IntrinsicElements {
            "igc-dockmanager": any;
        }
    }
}
/* eslint-enable */

export default class DockManagerOverview extends React.Component {

    public dockManager: IgrDockManager;

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrDockManager id="dockManager">
                    <div slot="content1" className="dockManagerContent">Content 1</div>
                    <div slot="content2" className="dockManagerContent">Content 2</div>
                    <div slot="content3" className="dockManagerContent">Content 3</div>
                    <div slot="content4" className="dockManagerContent">Content 4</div>
                    <div slot="content5" className="dockManagerContent">Content 5</div>
                    <div slot="content6" className="dockManagerContent">Content 6</div>
                    <div slot="content7" className="dockManagerContent">Content 7</div>
                    <div slot="content8" className="dockManagerContent">Content 8</div>
                    <div slot="content9" className="dockManagerContent">Content 9</div>
                </IgrDockManager>
            </div>
        );
    }

    public createContentPane(contentID: string, paneHeader: string): any {
        const pane = {
            // size: 150,
            header: paneHeader,
            type: IgrDockManagerPaneType.contentPane,
            contentId: contentID
        };
        return pane;
    }

    public createSplitPane(orientation: IgrSplitPaneOrientation, contentPanes: any[], size?: number): any {
        const pane =  {
            type: IgrDockManagerPaneType.splitPane,
            orientation: orientation,
            panes: contentPanes,
            size: size
        };
        return pane;
    }

    public createTabPane(orientation: IgrSplitPaneOrientation, contentPanes: any[], size?: number): any {
        const pane =  {
            type: IgrDockManagerPaneType.documentHost,
            size: size,
            rootPane: {
                type: IgrDockManagerPaneType.splitPane,
                orientation: orientation,
                panes: [
                    {
                        type: IgrDockManagerPaneType.tabGroupPane,
                        panes: contentPanes
                    }
                ]
            }
        };
        return pane;
    }

    public componentDidMount() {

        const pane1 = this.createContentPane('content1', 'Content Pane 1');
        const pane2 = this.createContentPane('content2', 'Unpinned Pane 1');
        pane2.isPinned = false;

        const pane3 = this.createContentPane('content3', 'Document 1');
        const pane4 = this.createContentPane('content4', 'Document 2');

        const contentPane5 = this.createContentPane('content5', 'Unpinned Pane 2');
        contentPane5.isPinned = false;

        const pane6 = this.createContentPane('content6', 'Tab 1');
        const pane7 = this.createContentPane('content7', 'Tab 2');
        const pane8 = this.createContentPane('content8', 'Content Pane 2');
        const pane9 = this.createContentPane('content9', 'Floating Pane');

        const tabPane1 = this.createTabPane(IgrSplitPaneOrientation.horizontal, [ pane3, pane4 ], 200);

        const splitPane1 = this.createSplitPane(IgrSplitPaneOrientation.vertical, [ pane1, pane2 ]);
        const splitPane2 = this.createSplitPane(IgrSplitPaneOrientation.vertical, [ tabPane1, contentPane5 ], 200);

        this.dockManager = document.getElementById("dockManager") as IgrDockManager;
        this.dockManager.layout = {
            rootPane: {
                type: IgrDockManagerPaneType.splitPane,
                orientation: IgrSplitPaneOrientation.horizontal,
                panes: [
                    splitPane1, // or:
                    // {
                    //     type: IgcDockManagerPaneType.splitPane,
                    //     orientation: IgcSplitPaneOrientation.vertical,
                    //     panes: [ pane1, pane2 ]
                    // },
                    splitPane2, // or:
                    // {
                    //     type: IgcDockManagerPaneType.splitPane,
                    //     orientation: IgcSplitPaneOrientation.vertical,
                    //     size: 200,
                    //     panes: [
                    //         tabPane1,
                    //         contentPane5
                    //     ]
                    // },
                    {
                        type: IgrDockManagerPaneType.splitPane,
                        orientation: IgrSplitPaneOrientation.vertical,
                        panes: [
                            {
                                type: IgrDockManagerPaneType.tabGroupPane,
                                size: 200,
                                panes: [ pane6, pane7 ]
                            },
                            pane8
                        ]
                    }
                ]
            },
            floatingPanes: [
                {
                    type: IgrDockManagerPaneType.splitPane,
                    orientation: IgrSplitPaneOrientation.horizontal,
                    floatingHeight: 150,
                    floatingWidth: 250,
                    floatingLocation: { x: 300, y: 200 },
                    panes: [ pane9 ]
                }
            ]
        };
    }

}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DockManagerOverview/>);
