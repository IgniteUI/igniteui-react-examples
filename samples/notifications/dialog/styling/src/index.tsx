import { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrDialog } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function DialogStyling() {
    const dialog = useRef<IgrDialog>(null);

    function onDialogShow() {
        dialog.current?.show();
    }

    function onDialogHide() {
        dialog.current?.hide();
    }

    return (
        <div className="container sample center">
            <IgrButton variant="contained" onClick={onDialogShow}>
                <span>Show Dialog</span>
            </IgrButton>

            <IgrDialog title="Confirmation" ref={dialog}>
                <h1 slot="title">Styled Title</h1>
                <p>Are you sure you want to delete the Annual_Report_2016.pdf and Annual_Report_2017.pdf files?</p>
                <div slot="footer">
                    <IgrButton onClick={onDialogHide} variant="flat"><span>Cancel</span></IgrButton>
                    <IgrButton onClick={onDialogHide} variant="flat"><span>OK</span></IgrButton>
                </div>
            </IgrDialog>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<DialogStyling/>);
