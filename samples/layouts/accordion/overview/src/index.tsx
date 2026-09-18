import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    IgrAccordion,
    IgrCheckboxChangeEventArgs,
    IgrExpansionPanel,
    IgrSwitch
} from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function AccordionOverview() {
    const accordionRef = useRef<IgrAccordion>(null);

    const switchChange = (e: IgrCheckboxChangeEventArgs) => {
        if (accordionRef.current) {
            accordionRef.current.singleExpand = e.detail.checked;
        }
    };

    return (
        <div className="accordion-sample">
            <div className="accordion-content">
                <div className="accordion-toolbar">
                    <IgrSwitch onChange={switchChange}>
                        <span>Single Expand</span>
                    </IgrSwitch>
                </div>

                <IgrAccordion ref={accordionRef}>
                    <IgrExpansionPanel open>
                        <span slot="title">Account</span>
                        <span slot="subtitle">Profile and security settings</span>
                        <p>Update your profile details, password, and sign-in preferences.</p>
                    </IgrExpansionPanel>
                    <IgrExpansionPanel>
                        <span slot="title">Notifications</span>
                        <span slot="subtitle">Email and product updates</span>
                        <p>Choose which notifications you receive and how often they are delivered.</p>
                    </IgrExpansionPanel>
                    <IgrExpansionPanel>
                        <span slot="title">Billing</span>
                        <span slot="subtitle">Payment and invoice settings</span>
                        <p>Manage payment methods, billing contacts, and invoice delivery options.</p>
                    </IgrExpansionPanel>
                </IgrAccordion>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AccordionOverview />);
