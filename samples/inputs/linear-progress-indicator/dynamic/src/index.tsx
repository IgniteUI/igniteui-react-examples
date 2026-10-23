import { useRef, type MouseEvent } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrLinearProgress, IgrIconButton, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const addIconText = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>';
const removeIconText = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 13H5v-2h14v2z"/></svg>';

registerIconFromText(
    "add", addIconText, "material"
);
registerIconFromText(
    "remove", removeIconText, "material"
);

export default function DynamicLinearProgress() {
    const progressRef = useRef<IgrLinearProgress>(null);

    function onIconClick(e: MouseEvent<HTMLDivElement>) {
        const target = e.target as HTMLElement;
        const iconButton = target.closest('igc-icon-button');
        const progress = progressRef.current;

        // Clicks between the buttons have no icon button target.
        if (!iconButton || !progress) {
            return;
        }

        if (iconButton.getAttribute("class") === "removeIcon") {
            if (progress.value > 0) {
                progress.value = progress.value - 10;
            }
            else {
                progress.value = 0;
            }
        }
        else {
            progress.value = progress.value + 10;
        }
    }

    return (
        <div className="container sample">
            <IgrLinearProgress ref={progressRef} style={{marginRight: "50px", marginLeft: "20px"}} max={100} value={100} labelAlign="bottom-start">
            </IgrLinearProgress>
            <div style={{display: "flex", justifyContent: "space-evenly", marginTop: "20px", marginLeft: "20px"}} onClick={onIconClick}>
                <IgrIconButton className="removeIcon" name="remove" collection="material">
                </IgrIconButton>
                <IgrIconButton className="addIcon" name="add" collection="material">
                </IgrIconButton>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<DynamicLinearProgress/>);
