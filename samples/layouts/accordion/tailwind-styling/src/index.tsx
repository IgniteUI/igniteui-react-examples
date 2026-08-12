import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrAccordion, IgrExpansionPanel } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const panelClassName = [
    'rounded',
    'bg-[var(--ig-gray-50)]',
    'text-[var(--ig-gray-900)]',
    '[&::part(header)]:bg-[var(--ig-gray-100)]',
    '[&[open]::part(header)]:bg-[var(--ig-primary-50)]',
    '[&::part(indicator)]:text-[var(--ig-primary-500)]',
    '[&::part(title)]:font-semibold',
    '[&::part(title)]:text-[var(--ig-gray-900)]',
    '[&[open]::part(title)]:text-[var(--ig-primary-700)]',
    '[&[open]::part(subtitle)]:text-[var(--ig-primary-700)]',
    '[&::part(content)]:text-[var(--ig-gray-700)]'
].join(' ');

export default function AccordionTailwindStyling() {
    return (
        <div className="accordion-tailwind-sample box-border mx-auto w-[min(720px,100%)] p-6">
            <IgrAccordion>
                <IgrExpansionPanel className={panelClassName} open>
                    <span slot="title">Getting Started</span>
                    <span slot="subtitle">Setup and onboarding</span>
                    <p>
                        Find installation steps, project setup guidance, and resources for building your first application.
                    </p>
                </IgrExpansionPanel>

                <IgrExpansionPanel className={panelClassName}>
                    <span slot="title">Billing</span>
                    <span slot="subtitle">Invoices and payment methods</span>
                    <p>
                        Review invoices, update payment methods, and manage billing contacts for your account.
                    </p>
                </IgrExpansionPanel>

                <IgrExpansionPanel className={panelClassName}>
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
root.render(<AccordionTailwindStyling />);
