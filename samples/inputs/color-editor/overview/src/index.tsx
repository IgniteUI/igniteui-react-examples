import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrColorEditorModule } from 'igniteui-react-inputs';
import { IgrColorEditor } from 'igniteui-react-dashboards';

const mods: any[] = [
    IgrColorEditorModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private colorEditor: IgrColorEditor
    private colorEditorRef(r: IgrColorEditor) {
        this.colorEditor = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.colorEditorRef = this.colorEditorRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="container fill">
                <IgrColorEditor
                    ref={this.colorEditorRef}>
                </IgrColorEditor>
            </div>
        </div>
        );
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);