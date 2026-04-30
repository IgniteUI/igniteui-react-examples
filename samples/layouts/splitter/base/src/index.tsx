import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    IgrSplitter,
    IgrSwitch,
    IgrSwitchChangeEventArgs,
    SplitterOrientation,
} from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export interface SplitterOverviewState {
    orientation: SplitterOrientation;
    disableCollapse: boolean;
    disableResize: boolean;
    hideDragHandle: boolean;
    hideCollapseButtons: boolean;
}

export default class SplitterOverview extends React.Component<any, SplitterOverviewState> {
    constructor(props: any) {
        super(props);
        this.state = {
            orientation: 'horizontal',
            disableCollapse: false,
            disableResize: false,
            hideDragHandle: false,
            hideCollapseButtons: false,
        };
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="controls">
                    <IgrSwitch onChange={(e: IgrSwitchChangeEventArgs) => this.setState({ orientation: e.detail.checked ? 'vertical' : 'horizontal' })}>
                        <span>Make Splitter Vertical</span>
                    </IgrSwitch>
                    <IgrSwitch onChange={(e: IgrSwitchChangeEventArgs) => this.setState({ disableCollapse: e.detail.checked })}>
                        <span>Disable Collapse</span>
                    </IgrSwitch>
                    <IgrSwitch onChange={(e: IgrSwitchChangeEventArgs) => this.setState({ disableResize: e.detail.checked })}>
                        <span>Disable Resize</span>
                    </IgrSwitch>
                    <IgrSwitch onChange={(e: IgrSwitchChangeEventArgs) => this.setState({ hideDragHandle: e.detail.checked })}>
                        <span>Hide Drag Handle</span>
                    </IgrSwitch>
                    <IgrSwitch onChange={(e: IgrSwitchChangeEventArgs) => this.setState({ hideCollapseButtons: e.detail.checked })}>
                        <span>Hide Collapse Buttons</span>
                    </IgrSwitch>
                </div>
                <IgrSplitter
                    style={{ height: 'calc(100vh - 60px)', width: '100%' }}
                    orientation={this.state.orientation}
                    disableCollapse={this.state.disableCollapse}
                    disableResize={this.state.disableResize}
                    hideDragHandle={this.state.hideDragHandle}
                    hideCollapseButtons={this.state.hideCollapseButtons}
                >
                    <div slot="start">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in lacus eget turpis congue fermentum. Aliquam sollicitudin massa vel ullamcorper bibendum. Donec sit amet augue in justo fermentum facilisis vel quis quam. Vivamus eget iaculis nisi, vitae dignissim leo. Donec eget consectetur lacus. In viverra vehicula libero, quis dictum odio varius in. Phasellus aliquam elit et lectus ornare placerat. Aliquam vitae sapien facilisis, auctor enim quis, consectetur dui. Cras elementum velit eros, ut efficitur ante pellentesque in. Proin vulputate lacus dui, vitae imperdiet dui pharetra ac. Nunc sagittis, sapien et posuere varius, mauris justo tincidunt odio, in interdum lorem libero sed enim. Nulla placerat scelerisque felis vitae accumsan.
                        </p>
                    </div>
                    <div slot="end">
                        <p>
                            Duis auctor, diam id vehicula consequat, lacus tellus molestie magna, sed varius nisi quam eget nisl. Donec dignissim mi et elementum laoreet. Nam dignissim quis justo eu fermentum. Proin vestibulum, neque quis elementum tincidunt, nibh mi gravida purus, eget volutpat ipsum magna in orci. Donec id mauris vitae lectus molestie blandit. Praesent non quam interdum, efficitur lacus nec, gravida mauris. Ut ac ante maximus, ultrices turpis a, aliquam magna. Praesent blandit ante ut nulla malesuada lobortis. Praesent a lobortis justo. Morbi congue, dui sed ornare faucibus, turpis felis vulputate arcu, lobortis posuere sem leo eget risus. Duis risus augue, dignissim ac tincidunt a, ullamcorper rutrum nisl. Ut ut ipsum vel purus viverra dapibus.
                        </p>
                    </div>
                </IgrSplitter>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SplitterOverview />);
