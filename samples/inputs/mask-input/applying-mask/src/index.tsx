import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrMaskInput, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const phoneIconText = '<svg width="24px" height="24px" viewBox="0 0 12 12" enable-background="new 0 0 12 12" id="Слой_1" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M6.2478638,8.4810181C6.1535645,8.5752563,6.0301514,8.6223755,5.9067383,8.6223755   S5.6599121,8.5752563,5.5656128,8.4810181L3.5189819,6.4343872C3.4247437,6.3400879,3.3775635,6.2166748,3.3775635,6.0932617   s0.0471802-0.2468872,0.1414185-0.3411255l1.0233154-1.0233154L1.8134766,2l-0.682251,0.6821899   c-1.5083008,1.5083618-1.5083008,3.9494019,0,5.4577026l2.7288818,2.7288208   c0.3770752,0.3770752,0.812439,0.6599121,1.2769775,0.8484497C5.6015625,11.9057007,6.0952759,12,6.5889282,12   c0.4937134,0,0.9873657-0.0942993,1.4519043-0.2828369s0.8999023-0.4713745,1.2769775-0.8484497L10,10.1865234L7.2711792,7.4577026   L6.2478638,8.4810181z" fill="#1D1D1B"/><path d="M6.5,1H6v1h0.5C8.4296875,2,10,3.5703125,10,5.5V6h1V5.5C11,3.0185547,8.9814453,1,6.5,1z" fill="#1D1D1B"/><path d="M8,5.5V6h1V5.5C9,4.121582,7.878418,3,6.5,3H6v1h0.5C7.3271484,4,8,4.6728516,8,5.5z" fill="#1D1D1B"/></g></svg>';

const phoneIconText = '<svg width="24px" height="24px" viewBox="0 0 12 12" enable-background="new 0 0 12 12" id="Слой_1" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M6.2478638,8.4810181C6.1535645,8.5752563,6.0301514,8.6223755,5.9067383,8.6223755   S5.6599121,8.5752563,5.5656128,8.4810181L3.5189819,6.4343872C3.4247437,6.3400879,3.3775635,6.2166748,3.3775635,6.0932617   s0.0471802-0.2468872,0.1414185-0.3411255l1.0233154-1.0233154L1.8134766,2l-0.682251,0.6821899   c-1.5083008,1.5083618-1.5083008,3.9494019,0,5.4577026l2.7288818,2.7288208   c0.3770752,0.3770752,0.812439,0.6599121,1.2769775,0.8484497C5.6015625,11.9057007,6.0952759,12,6.5889282,12   c0.4937134,0,0.9873657-0.0942993,1.4519043-0.2828369s0.8999023-0.4713745,1.2769775-0.8484497L10,10.1865234L7.2711792,7.4577026   L6.2478638,8.4810181z" fill="#1D1D1B"/><path d="M6.5,1H6v1h0.5C8.4296875,2,10,3.5703125,10,5.5V6h1V5.5C11,3.0185547,8.9814453,1,6.5,1z" fill="#1D1D1B"/><path d="M8,5.5V6h1V5.5C9,4.121582,7.878418,3,6.5,3H6v1h0.5C7.3271484,4,8,4.6728516,8,5.5z" fill="#1D1D1B"/></g></svg>';

    constructor(props: any) {
        super(props);
        registerIconFromText("phone", phoneIconText, "material");
    }

    public render(): JSX.Element {
        return (
            <div className="container sample center">
                <IgrMaskInput mask="(####) 00-00-00 Ext. 9999">
                    <span slot="prefix">
                        <IgrIcon name="phone" collection="material"></IgrIcon>
                    </span>
                    <span slot="helper-text">Phone number</span>
                </IgrMaskInput>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MaskInputApplyingMask/>);
