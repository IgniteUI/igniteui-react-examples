import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrDialog, IgrIcon, IgrInput, IgrThemeProvider, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const personIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M9 9C10.6575 9 12 7.6575 12 6C12 4.3425 10.6575 3 9 3C7.3425 3 6 4.3425 6 6C6 7.6575 7.3425 9 9 9ZM9 10.5C6.9975 10.5 3 11.505 3 13.5V15H15V13.5C15 11.505 11.0025 10.5 9 10.5Z"/></svg>';
const notificationsIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 12.5417C7.64167 12.5417 8.16667 12.0167 8.16667 11.375H5.83333C5.83333 12.0167 6.3525 12.5417 7 12.5417ZM10.5 9.04167V6.125C10.5 4.33417 9.54333 2.835 7.875 2.43833V2.04167C7.875 1.5575 7.48417 1.16667 7 1.16667C6.51583 1.16667 6.125 1.5575 6.125 2.04167V2.43833C4.45083 2.835 3.5 4.32833 3.5 6.125V9.04167L2.33333 10.2083V10.7917H11.6667V10.2083L10.5 9.04167Z"/></svg>';
const lockIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 5.25H9.91667V4.08333C9.91667 2.47333 8.61 1.16667 7 1.16667C5.39 1.16667 4.08333 2.47333 4.08333 4.08333V5.25H3.5C2.85833 5.25 2.33333 5.775 2.33333 6.41667V12.25C2.33333 12.8917 2.85833 13.4167 3.5 13.4167H10.5C11.1417 13.4167 11.6667 12.8917 11.6667 12.25V6.41667C11.6667 5.775 11.1417 5.25 10.5 5.25ZM7 10.5C6.35833 10.5 5.83333 9.975 5.83333 9.33333C5.83333 8.69167 6.35833 8.16667 7 8.16667C7.64167 8.16667 8.16667 8.69167 8.16667 9.33333C8.16667 9.975 7.64167 10.5 7 10.5ZM8.80828 5.25023H5.19161V4.08356C5.19161 3.08606 6.00244 2.27523 6.99994 2.27523C7.99744 2.27523 8.80828 3.08606 8.80828 4.08356V5.25023Z"/></svg>';

export default function DialogStyling(): JSX.Element {
    useEffect(() => {
        registerIconFromText('person', personIcon, 'material');
        registerIconFromText('notifications', notificationsIcon, 'material');
        registerIconFromText('lock', lockIcon, 'material');
    }, []);

    return (
        <div className="sample">
            <IgrDialog className="sign-in-dialog">
                <IgrButton slot="title" variant="fab" className="sign-in-avatar" aria-label="Profile">
                    <IgrIcon name="person" collection="material" />
                </IgrButton>
                <span slot="title" className="sign-in-title">Welcome back</span>
                <span slot="message" className="sign-in-message">Sign in to your workspace</span>
                <IgrThemeProvider theme="indigo" variant="dark">
                    <IgrInput className="sign-in-input" label="E-mail" type="email" placeholder="dean@company.com">
                        <IgrIcon slot="prefix" name="notifications" collection="material" />
                    </IgrInput>
                    <IgrInput className="sign-in-input" label="Password" type="password" placeholder="***********">
                        <IgrIcon slot="prefix" name="lock" collection="material" />
                    </IgrInput>
                </IgrThemeProvider>
                <div slot="footer" className="sign-in-actions">
                    <IgrButton variant="outlined" className="cancel-button">
                        <span>Cancel</span>
                    </IgrButton>
                    <IgrButton variant="contained" className="submit-button">
                        <span>Sign in</span>
                    </IgrButton>
                </div>
                <span slot="footer" className="sign-up">
                    No account? <a href="#">Create workspace</a>
                </span>
            </IgrDialog>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DialogStyling/>);
