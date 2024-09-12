import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrDividerModule, IgrDivider } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrDividerModule.register();

export default class DividerVertical extends React.Component<any, any> {

    constructor(props: any) {
        super(props);  
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                 <div className="content">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa officiis
                        suscipit veniam vitae. Ab ad, dolores iure nostrum quo ratione rerum
                        sapiente ullam. Adipisci alias architecto eligendi est, expedita,
                        explicabo fugiat iure laudantium minima molestiae molestias nam
                        obcaecati placeat provident, quam repellendus vitae! Cupiditate eveniet,
                        facere harum hic quisquam sed.
                    </p>
                    <IgrDivider key="divider" vertical></IgrDivider>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa officiis
                        suscipit veniam vitae. Ab ad, dolores iure nostrum quo ratione rerum
                        sapiente ullam. Adipisci alias architecto eligendi est, expedita,
                        explicabo fugiat iure laudantium minima molestiae molestias nam
                        obcaecati placeat provident, quam repellendus vitae! Cupiditate eveniet,
                        facere harum hic quisquam sed.
                    </p>
                </div>
            </div>
        );
    }

    
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DividerVertical/>);
