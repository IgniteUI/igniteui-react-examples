import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrAccordion, IgrExpansionPanel } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function AccordionStyling() {
    return (
        <div className="accordion-sample">
            <IgrAccordion>
                <IgrExpansionPanel open>
                    <span slot="title">Getting Started</span>
                    <span slot="subtitle">Setup and onboarding</span>
                    <p>
                        Find installation steps, project setup guidance, and resources for building your first application.
                    </p>
                </IgrExpansionPanel>

                <IgrExpansionPanel>
                    <span slot="title">Billing</span>
                    <span slot="subtitle">Invoices and payment methods</span>
                    <p>
                        Review invoices, update payment methods, and manage billing contacts for your account.
                    </p>
                </IgrExpansionPanel>

                <IgrExpansionPanel>
                    <span slot="title">Security</span>
                    <span slot="subtitle">Access and authentication</span>
                    <p>
                        Configure password rules, multi-factor authentication, and recovery options for your team.
                    </p>
                </IgrExpansionPanel>
            </IgrAccordion>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AccordionStyling />);
