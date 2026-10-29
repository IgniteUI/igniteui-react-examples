import { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrDialog, IgrIconButton, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const clearIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.25 4.8075L13.1925 3.75L9 7.9425L4.8075 3.75L3.75 4.8075L7.9425 9L3.75 13.1925L4.8075 14.25L9 10.0575L13.1925 14.25L14.25 13.1925L10.0575 9L14.25 4.8075Z"/></svg>';

export default function DialogTailwindStyling() {
    useEffect(() => {
        registerIconFromText('clear', clearIcon, 'material');
    }, []);

    return (
        <div className="sample flex items-center justify-center">
            <div className="flex items-start gap-15 [--ig-font-family:aktiv-grotesk,sans-serif]">
                <IgrDialog className="[--ig-dialog-background:var(--color-export-surface)] [--ig-dialog-border-color:transparent] [--ig-dialog-border-radius:1rem] [--ig-dialog-elevation:none] [--ig-dialog-message-color:var(--color-export-muted)] [--ig-dialog-title-color:var(--color-export-ink)] [&::part(base)]:static [&::part(base)]:m-0 [&::part(base)]:block [&::part(base)]:w-70 [&::part(base)]:min-w-0 [&::part(base)]:border-0 [&::part(content)]:px-6 [&::part(content)]:py-3.5 [&::part(content)]:text-xs/4 [&::part(content)]:font-semibold [&::part(content)]:tracking-[0.15px] [&::part(footer)]:pt-0 [&::part(footer)]:pr-6 [&::part(footer)]:pb-6 [&::part(footer)]:pl-2 [&::part(footer)]:border-0 [&::part(title)]:px-6 [&::part(title)]:pt-4 [&::part(title)]:pb-0 [&::part(title)]:border-0 [&::part(title)]:text-base/5 [&::part(title)]:font-bold [&::part(title)]:tracking-normal">
                    <span slot="title">Export complete</span>
                    <span slot="message">
                        analytics_report_Q3.csv
                        <br />
                        has been exported to your Downloads folder.
                    </span>
                    <IgrButton
                        slot="footer"
                        variant="contained"
                        className="[&::part(base)]:h-7.5 [&::part(base)]:w-[4.0625rem] [&::part(base)]:min-w-0 [&::part(base)]:rounded-lg [&::part(base)]:bg-export-accent [&::part(base)]:px-2 [&::part(base)]:text-xs/4 [&::part(base)]:font-semibold [&::part(base)]:tracking-[0.15px] [&::part(base)]:text-black [&::part(base)]:normal-case [&::part(base)]:shadow-[var(--ig-elevation-2)] hover:[&::part(base)]:bg-export-accent-hover"
                    >
                        <span>Got it</span>
                    </IgrButton>
                </IgrDialog>
                <IgrDialog
                    hideDefaultAction
                    className="[--ig-dialog-background:var(--color-invite-surface)] [--ig-dialog-border-color:var(--color-invite-border)] [--ig-dialog-border-radius:0.5rem] [--ig-dialog-elevation:none] [--ig-dialog-message-color:var(--color-invite-ink)] [--ig-dialog-title-color:var(--color-invite-ink)] [&::part(base)]:static [&::part(base)]:m-0 [&::part(base)]:block [&::part(base)]:w-[15.5625rem] [&::part(base)]:min-w-0 [&::part(content)]:px-6 [&::part(content)]:py-3.5 [&::part(content)]:text-xs/4 [&::part(content)]:font-semibold [&::part(content)]:tracking-[0.15px] [&::part(title)]:justify-between [&::part(title)]:px-6 [&::part(title)]:pt-4 [&::part(title)]:pb-0 [&::part(title)]:border-0 [&::part(title)]:text-base/5 [&::part(title)]:font-bold [&::part(title)]:tracking-normal"
                >
                    <span slot="title">Invitation sent</span>
                    <IgrIconButton
                        slot="title"
                        variant="outlined"
                        name="clear"
                        collection="material"
                        aria-label="Close"
                        className="[&::part(base)]:size-6 [&::part(base)]:p-0 [&::part(base)]:rounded-full [&::part(base)]:border [&::part(base)]:border-invite-ink [--ig-outlined-icon-button-foreground:var(--color-invite-ink)]"
                    />
                    <span slot="message">
                        <span className="text-invite-link">john.smith@company.com</span> has been invited to your team.
                    </span>
                </IgrDialog>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<DialogTailwindStyling/>);
