import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrIcon, IgrTooltip, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const icons = [
    { name: 'download', text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>' },
    { name: 'arrow_forward', text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>' },
    { name: 'delete', text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>' },
    { name: 'add', text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>' },
    { name: 'edit', text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>' },
    { name: 'content_copy', text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>' },
    { name: 'share', text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg>' },
];

const actions = [
    { id: 'edit-action', icon: 'edit', label: 'Edit' },
    { id: 'copy-action', icon: 'content_copy', label: 'Copy' },
    { id: 'share-action', icon: 'share', label: 'Share' },
    { id: 'delete-action', icon: 'delete', label: 'Delete' },
];

export default function IconStyling(): JSX.Element {
    useEffect(() => {
        icons.forEach((icon) => registerIconFromText(icon.name, icon.text, 'material'));
    }, []);

    return (
        <div className="sample">
            <div className="icon-styling">
                <div className="button-row">
                    <IgrButton variant="contained" className="download-button">
                        <IgrIcon slot="prefix" name="download" collection="material" />
                        Download
                    </IgrButton>
                    <IgrButton variant="outlined" className="continue-button">
                        Continue
                        <IgrIcon slot="suffix" name="arrow_forward" collection="material" />
                    </IgrButton>
                    <IgrButton variant="outlined" className="delete-button">
                        <IgrIcon slot="prefix" name="delete" collection="material" />
                        Delete
                    </IgrButton>
                    <IgrButton variant="fab" className="add-button" aria-label="Add">
                        <IgrIcon name="add" collection="material" />
                    </IgrButton>
                </div>
                <div className="icon-toolbar">
                    {actions.map((action) => (
                        <React.Fragment key={action.id}>
                            <IgrButton id={action.id} variant="flat" aria-label={action.label}>
                                <IgrIcon name={action.icon} collection="material" />
                            </IgrButton>
                            <IgrTooltip anchor={action.id} placement="bottom" withArrow={true} offset={25}>
                                {action.label}
                            </IgrTooltip>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<IconStyling/>);
