import React from 'react';
import ReactDOM from 'react-dom';
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
			<div className="container-center sample ">
				<IgrBadge outlined="true" />
			</div>            
        );
    }
}

// rendering above class to the React DOM
ReactDOM.render(<BadgeOutlined />, document.getElementById('root'));
