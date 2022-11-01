import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrBadge, IgrBadgeModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrBadgeModule.register();

export default class BadgeOutlined extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
			<div className="sample">
				<IgrBadge outlined="true" />
			</div>            
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BadgeOutlined/>);
