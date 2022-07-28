import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrBadge, IgrBadgeModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrBadgeModule.register();

export default class BadgeVariants extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
			<div className="container-center sample ">
                <IgrBadge variant="success" />
            </div>
        );
    }
}

// rendering above class to the React DOM
ReactDOM.render(<BadgeVariants />, document.getElementById('root'));
