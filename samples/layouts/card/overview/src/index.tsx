import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    IgrAvatar,
    IgrButton,
    IgrCard,
    IgrCardActions,
    IgrCardContent,
    IgrCardHeader,
    IgrCardMedia,
    IgrCheckboxChangeEventArgs,
    IgrIconButton,
    IgrSwitch,
    registerIconFromText
} from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const addIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>';

export default function CardOverview() {
    const [media, setMedia] = useState(true);
    const [header, setHeader] = useState(true);
    const [content, setContent] = useState(true);
    const [actions, setActions] = useState(true);

    useEffect(() => {
        registerIconFromText('add', addIcon, 'material');
    }, []);

    return (
        <div className="container sample">
            <div className="card-options">
                <IgrSwitch labelPosition="before" checked={media}
                    onChange={(e: IgrCheckboxChangeEventArgs) => setMedia(e.detail.checked)}>
                    <span>Media</span>
                </IgrSwitch>
                <IgrSwitch labelPosition="before" checked={header}
                    onChange={(e: IgrCheckboxChangeEventArgs) => setHeader(e.detail.checked)}>
                    <span>Header</span>
                </IgrSwitch>
                <IgrSwitch labelPosition="before" checked={content}
                    onChange={(e: IgrCheckboxChangeEventArgs) => setContent(e.detail.checked)}>
                    <span>Content</span>
                </IgrSwitch>
                <IgrSwitch labelPosition="before" checked={actions}
                    onChange={(e: IgrCheckboxChangeEventArgs) => setActions(e.detail.checked)}>
                    <span>Actions</span>
                </IgrSwitch>
            </div>

            <div className="card-container">
                <IgrCard>
                    {media && (
                        <IgrCardMedia>
                            <img
                                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=50"
                                alt="Mountain range above the clouds at sunset" />
                        </IgrCardMedia>
                    )}
                    {header && (
                        <IgrCardHeader>
                            <IgrAvatar
                                slot="thumbnail"
                                shape="circle"
                                src="https://dl.infragistics.com/x/img/avatars/avatar-profile-04.png"
                                alt="profile picture" />
                            <span slot="title">Title</span>
                            <span slot="subtitle">Subtitle</span>
                        </IgrCardHeader>
                    )}
                    {content && (
                        <IgrCardContent>
                            <p>
                                A paragraph is a self-contained unit of a discourse in writing
                                dealing with a particular point or idea.
                            </p>
                        </IgrCardContent>
                    )}
                    {actions && (
                        <IgrCardActions>
                            <div className="card-actions-start" slot="start">
                                <IgrButton variant="flat">Button</IgrButton>
                                <IgrButton variant="flat">Button</IgrButton>
                            </div>
                            <div className="card-actions-end" slot="end">
                                <IgrIconButton variant="flat" name="add" collection="material" />
                                <IgrIconButton variant="flat" name="add" collection="material" />
                                <IgrIconButton variant="flat" name="add" collection="material" />
                            </div>
                        </IgrCardActions>
                    )}
                </IgrCard>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CardOverview/>);
