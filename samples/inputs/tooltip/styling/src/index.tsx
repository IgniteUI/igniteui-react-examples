import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    IgrAvatar,
    IgrBadge,
    IgrDatePicker,
    IgrIcon,
    IgrList,
    IgrListItem,
    IgrTooltip,
    registerIconFromText,
} from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/material.css';

const blockIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9A7.902 7.902 0 0 1 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1A7.902 7.902 0 0 1 20 12c0 4.42-3.58 8-8 8z"/></svg>';

registerIconFromText('block', blockIcon, 'material');

export default function TooltipStyling(): JSX.Element {
    return (
        <div className="sample">
            <IgrList id="status" className="trigger">
                <IgrListItem>
                    <div slot="start" className="avatar">
                        <IgrAvatar
                            src="https://dl.infragistics.com/x/img/avatars/avatar-profile-03.png"
                            shape="circle"
                            alt="Aron Watson"
                        />
                        <IgrBadge variant="danger">
                            <IgrIcon name="block" collection="material" />
                        </IgrBadge>
                    </div>
                    <span slot="title">Aron Watson</span>
                </IgrListItem>
            </IgrList>
            <IgrTooltip anchor="status" placement="bottom-end" withArrow className="status-tooltip">
                <IgrIcon name="block" collection="material" />
                <span>
                    My notifications are silenced to focus. Urgent matters only, please,
                    otherwise I'll reply when I'm free.
                </span>
            </IgrTooltip>
            <IgrDatePicker id="registration" className="registration" outlined placeholder="First Registration" />
            <IgrTooltip
                anchor="registration"
                placement="bottom-end"
                className="hint-tooltip"
                message="The date when your car was first registered"
            />
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TooltipStyling/>);
