import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrTree, IgrTreeItem, IgrTreeModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrTreeModule.register();

export default class TreeBasicExample extends React.Component<any, any> {

    constructor(props: any) {
        super(props);                
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrTree>
                    <IgrTreeItem label='North America'>
                        <IgrTreeItem label='United States' />
                        <IgrTreeItem label='Canada' />
                        <IgrTreeItem label='Mexico' />
                    </IgrTreeItem>
                    <IgrTreeItem label='South America'>
                        <IgrTreeItem label='Brazil' />
                        <IgrTreeItem label='Uruguay' />                        
                    </IgrTreeItem>
                    <IgrTreeItem label='Europe'>
                        <IgrTreeItem label='United Kingdom' />
                        <IgrTreeItem label='Germany' />
                        <IgrTreeItem label='Bulgaria' />
                    </IgrTreeItem>
                </IgrTree>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TreeBasicExample/>);
