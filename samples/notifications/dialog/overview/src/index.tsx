import { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrDialog } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function DialogOverview() {
    const dialogRef = useRef<IgrDialog>(null);

    const showDialog = () => dialogRef.current?.show();
    const hideDialog = () => dialogRef.current?.hide();

    return (
        <div className="sample">
            <IgrButton variant="outlined" className="open-button" onClick={showDialog}>
                <span>Open dialog</span>
            </IgrButton>
            <IgrDialog ref={dialogRef} title="Confirmation" open>
                <span slot="message">Your email will be permanently deleted</span>
                <IgrButton slot="footer" variant="flat" onClick={hideDialog}>
                    <span>Cancel</span>
                </IgrButton>
                <IgrButton slot="footer" variant="flat" onClick={hideDialog}>
                    <span>OK</span>
                </IgrButton>
            </IgrDialog>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<DialogOverview/>);
