import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    IgrSplitter,
} from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class SplitterOverview extends React.Component<any> {
    constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div id="root">
                <IgrSplitter style={{ height: '100vh', width: '100%' }}>
                    <IgrSplitter slot="start" orientation="vertical" start-size="50%">
                        <div slot="start">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in lacus eget turpis congue fermentum. Aliquam sollicitudin massa vel ullamcorper bibendum. Donec sit amet augue in justo fermentum facilisis vel quis quam. Vivamus eget iaculis nisi, vitae dignissim leo. Donec eget consectetur lacus. In viverra vehicula libero, quis dictum odio varius in. Phasellus aliquam elit et lectus ornare placerat. Aliquam vitae sapien facilisis, auctor enim quis, consectetur dui. Cras elementum velit eros, ut efficitur ante pellentesque in. Proin vulputate lacus dui, vitae imperdiet dui pharetra ac. Nunc sagittis, sapien et posuere varius, mauris justo tincidunt odio, in interdum lorem libero sed enim. Nulla placerat scelerisque felis vitae accumsan.
                            </p>
                        </div>
                        <div slot="end">
                            <p>
                                Suspendisse potenti. Mauris vehicula neque ullamcorper tortor pulvinar gravida. Integer porttitor orci ex, ac vehicula nisi ultricies vel. Phasellus feugiat, urna eget congue sollicitudin, augue mi vulputate velit, in porttitor lacus orci sit amet eros. Donec mollis tempor mi. Ut sed justo consectetur, laoreet orci id, vestibulum velit. Aliquam ultricies arcu nec placerat eleifend. Integer ornare auctor mauris, vitae placerat est hendrerit ut.
                            </p>
                        </div>
                    </IgrSplitter>
                    <IgrSplitter slot="end" orientation="vertical">
                        <div slot="start">
                            <p>
                                Duis auctor, diam id vehicula consequat, lacus tellus molestie magna, sed varius nisi quam eget nisl. Donec dignissim mi et elementum laoreet. Nam dignissim quis justo eu fermentum. Proin vestibulum, neque quis elementum tincidunt, nibh mi gravida purus, eget volutpat ipsum magna in orci. Donec id mauris vitae lectus molestie blandit. Praesent non quam interdum, efficitur lacus nec, gravida mauris. Ut ac ante maximus, ultrices turpis a, aliquam magna. Praesent blandit ante ut nulla malesuada lobortis. Praesent a lobortis justo. Morbi congue, dui sed ornare faucibus, turpis felis vulputate arcu, lobortis posuere sem leo eget risus. Duis risus augue, dignissim ac tincidunt a, ullamcorper rutrum nisl. Ut ut ipsum vel purus viverra dapibus.
                            </p>
                        </div>
                        <div slot="end">
                            <p>
                                Suspendisse potenti. Proin faucibus venenatis purus in pellentesque. Nunc eget justo pretium massa pellentesque sodales. Phasellus orci ligula, condimentum et faucibus id, faucibus sit amet mauris. Praesent consequat cursus mauris, eget tempus lorem. Quisque vel leo nec massa aliquam pellentesque sit amet vel erat. Phasellus at mauris laoreet, egestas magna eget, dignissim nisl. Etiam non nibh nec orci elementum facilisis a vel tortor. Praesent sagittis mattis risus non tincidunt.
                            </p>
                        </div>
                    </IgrSplitter>
                </IgrSplitter>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SplitterOverview />);
