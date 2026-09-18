import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const addIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>';

export default function ButtonLayout() {
    useEffect(() => {
        registerIconFromText('add', addIcon, 'material');
    }, []);

    return (
        <div className="container sample">
            <div className="button-container">
                    <div className="button-item">
                        <IgrButton variant="outlined">
                            <IgrIcon slot="prefix" name="add" collection="material" />
                            Add
                        </IgrButton>
                    </div>
                    <div className="button-item">
                        <IgrButton variant="outlined">Buy Now</IgrButton>
                    </div>
                    <div className="button-item">
                        <IgrButton variant="outlined">
                            Add
                            <IgrIcon slot="suffix" name="add" collection="material" />
                        </IgrButton>
                    </div>
                    <div className="button-item">
                        <IgrButton variant="outlined">
                            <IgrIcon slot="prefix" name="add" collection="material" />
                            Floating Action
                        </IgrButton>
                    </div>
                    <div className="button-item">
                        <IgrButton variant="outlined">
                            <IgrIcon name="add" collection="material" />
                        </IgrButton>
                    </div>
                    <div className="button-item">
                        <IgrButton variant="outlined">Floating Action</IgrButton>
                    </div>
                </div>
            </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonLayout />);
