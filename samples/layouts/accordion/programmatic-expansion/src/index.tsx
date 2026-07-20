import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrAccordion, IgrButton, IgrExpansionPanel } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function AccordionProgrammaticExpansion() {
    const accordionRef = useRef<IgrAccordion>(null);

    return (
        <div id="root">
            <div className="button-group">
                <IgrButton variant="contained" onClick={() => accordionRef.current?.showAll()}>
                    <span>Show All</span>
                </IgrButton>
                <IgrButton variant="contained" onClick={() => accordionRef.current?.hideAll()}>
                    <span>Hide All</span>
                </IgrButton>
            </div>
            <div className="sample-wrapper">
                <IgrAccordion ref={accordionRef}>
                    <IgrExpansionPanel>
                        <span slot="title">Billing</span>
                        <span>Review invoices, update payment methods, and manage billing contacts.</span>
                    </IgrExpansionPanel>
                    <IgrExpansionPanel>
                        <span slot="title">Security</span>
                        <span>Configure password rules, multi-factor authentication, and recovery options.</span>
                    </IgrExpansionPanel>
                    <IgrExpansionPanel>
                        <span slot="title">Notifications</span>
                        <span>Choose which product updates and account alerts are sent to your team.</span>
                    </IgrExpansionPanel>
                </IgrAccordion>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AccordionProgrammaticExpansion />);
