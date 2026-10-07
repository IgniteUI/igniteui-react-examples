import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrIcon, IgrInput, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const icons = [
    { name: 'search', text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>' },
    { name: 'visibility', text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>' },
    { name: 'visibility_off', text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/></svg>' },
    { name: 'mail', text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>' },
    { name: 'info', text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>' },
];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fieldClasses = 'w-[260px] [--ig-input-group-input-prefix-background:transparent] [--ig-input-group-input-prefix-background--filled:transparent] [--ig-input-group-input-prefix-background--focused:transparent] [--ig-input-group-input-suffix-background:transparent] [--ig-input-group-input-suffix-background--filled:transparent] [--ig-input-group-input-suffix-background--focused:transparent] [--ig-input-group-placeholder-color:var(--color-form-ink)] [--ig-input-group-hover-placeholder-color:var(--color-form-ink)] [&::part(input)]:shadow-none [&::part(label)]:text-xs [&::part(label)]:leading-4 [&::part(label)]:uppercase [&::part(label)]:text-form-ink';
const focusClasses = 'focus-within:[--ig-input-group-border-color:var(--ig-primary-500)]';
const invalidClasses = '[--ig-input-group-border-color:var(--color-form-error)] [--ig-input-group-error-secondary-color:var(--color-form-error)] [&::part(input)]:border-e-0';

export default function IconTailwindStyling(): JSX.Element {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState('ana@');
    const emailInvalid = !emailPattern.test(email);

    useEffect(() => {
        icons.forEach((icon) => registerIconFromText(icon.name, icon.text, 'material'));
    }, []);

    return (
        <div className="sample flex items-center justify-center">
            <div className="flex flex-col gap-6 rounded-2xl border border-form-border bg-white px-[27px] py-[31px] [--ig-body-1-font-size:0.875rem] [--ig-font-family:'Aktiv_Grotesk',Arial,sans-serif]">
                <IgrInput
                    className={`${fieldClasses} ${focusClasses} [&::part(input)]:border-s-0`}
                    label="Search"
                    placeholder="Find a report..."
                >
                    <IgrIcon slot="prefix" className="ps-2 text-form-ink" name="search" collection="material" />
                </IgrInput>
                <IgrInput
                    className={`${fieldClasses} ${focusClasses}`}
                    label="Password"
                    type={passwordVisible ? 'text' : 'password'}
                    value="reports-2026"
                >
                    <IgrButton
                        slot="suffix"
                        className="w-[39px] border-e-[color:var(--ig-input-group-border-color,var(--ig-gray-400))] px-0 [&::part(base)]:h-full [&::part(base)]:w-full [&::part(base)]:min-w-0 [&::part(base)]:rounded-none [&::part(base)]:p-0"
                        variant="flat"
                        aria-label={passwordVisible ? 'Hide password' : 'Show password'}
                        onClick={() => setPasswordVisible(!passwordVisible)}
                    >
                        <IgrIcon className="text-form-ink" name={passwordVisible ? 'visibility' : 'visibility_off'} collection="material" />
                    </IgrButton>
                </IgrInput>
                <IgrInput
                    className={`${fieldClasses} [&::part(input)]:border-s-0 ${emailInvalid ? invalidClasses : focusClasses}`}
                    label="E-mail"
                    type="email"
                    value={email}
                    invalid={emailInvalid}
                    onInput={(e: CustomEvent<string>) => setEmail(e.detail)}
                >
                    <IgrIcon slot="prefix" className={`ps-2 ${emailInvalid ? 'text-form-error' : 'text-form-ink'}`} name="mail" collection="material" />
                    {emailInvalid && <IgrIcon slot="suffix" className="text-form-error" name="info" collection="material" />}
                    {emailInvalid && <span slot="helper-text" className="text-xs leading-4 tracking-[0.4px] text-form-error">Enter a complete address</span>}
                </IgrInput>
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<IconTailwindStyling/>);
