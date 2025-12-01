import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrChip, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const customSelectIconText = '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" /></svg>';
const customRemoveIconText = '<svg style="width:24px;height:24px" viewBox="0 0 24 24"> <path fill="currentColor" d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z" /> </svg>';
const brushIconText = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-labelledby="bqbrush-desc bqbrush-title"><title id="bqbrush-title">Brush Icon</title><desc id="bqbrush-desc">A picture showing a painting brush.</desc><path d="M13.093 6.743a1.074 1.074 0 011.306.251l.237.237-6.4 6.4-.242-.231a1.074 1.074 0 01-.251-1.306c.446-.693 1.553-2.516.515-3.554-1.584-1.585-2.225-.94-3.809-2.528S2.714 3 3.354 2.354s2.073-.489 3.658 1.095.943 2.225 2.527 3.809c1.038 1.042 2.861-.069 3.554-.515zm6.93 5.874L15.31 7.9 8.9 14.31l4.433 4.433c-.039.159-.084.327-.137.508 0 0-.8 2.749.8 2.749s.8-2.749.8-2.749a10.75 10.75 0 01-.272-1.14L16.2 16.44a8.944 8.944 0 00-2.072-3.314s.555-.545 3.323 2.063l.811-.811-1.54-2.5 2.5 1.539z"/></svg>';
const brickIconText = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-labelledby="bpbrick-wall-desc bpbrick-wall-title"><title id="bpbrick-wall-title">Brick Wall Icon</title><desc id="bpbrick-wall-desc">A picture depicting a wall made of bricks.</desc><path d="M6 5H2V1h4zm10-4H8v4h8zM2 11h8V7H2zm10 0h8V7h-8zM22 1h-4v4h4zM6 13H2v4h4zm10 0H8v4h8zM2 23h8v-4H2zm10 0h8v-4h-8zm10-10h-4v4h4z"/></svg>';
const dogIconText = '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M18,4C16.29,4 15.25,4.33 14.65,4.61C13.88,4.23 13,4 12,4C11,4 10.12,4.23 9.35,4.61C8.75,4.33 7.71,4 6,4C3,4 1,12 1,14C1,14.83 2.32,15.59 4.14,15.9C4.78,18.14 7.8,19.85 11.5,20V15.72C10.91,15.35 10,14.68 10,14C10,13 12,13 12,13C12,13 14,13 14,14C14,14.68 13.09,15.35 12.5,15.72V20C16.2,19.85 19.22,18.14 19.86,15.9C21.68,15.59 23,14.83 23,14C23,12 21,4 18,4M4.15,13.87C3.65,13.75 3.26,13.61 3,13.5C3.25,10.73 5.2,6.4 6.05,6C6.59,6 7,6.06 7.37,6.11C5.27,8.42 4.44,12.04 4.15,13.87M9,12A1,1 0 0,1 8,11C8,10.46 8.45,10 9,10A1,1 0 0,1 10,11C10,11.56 9.55,12 9,12M15,12A1,1 0 0,1 14,11C14,10.46 14.45,10 15,10A1,1 0 0,1 16,11C16,11.56 15.55,12 15,12M19.85,13.87C19.56,12.04 18.73,8.42 16.63,6.11C17,6.06 17.41,6 17.95,6C18.8,6.4 20.75,10.73 21,13.5C20.75,13.61 20.36,13.75 19.85,13.87Z" /> </svg>';

export default class ChipMultiple extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        registerIconFromText(
            "custom-select", customSelectIconText, "material"
        );
        registerIconFromText(
            "custom-remove", customRemoveIconText, "material"
        );
        registerIconFromText(
            "brush", brushIconText, "material"
        );
        registerIconFromText(
            "brick-wall", brickIconText, "material"
        );
        registerIconFromText(
            "dog-icon", dogIconText, "material"
        );
    }

    private handleChipRemove = (event: CustomEvent<boolean>) => {
        const chip = event.target as IgrChip;
        chip.remove();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="container" style={{flexDirection: "row", gap: "8px"}}>
                    <IgrChip selectable={true} removable={true} onRemove={this.handleChipRemove}>
                        <span slot="select">
                            <IgrIcon name="custom-select" collection="material"></IgrIcon>
                        </span>
                        <span>Custom Icons</span>
                        <span slot="remove">
                            <IgrIcon name="custom-remove" collection="material"></IgrIcon>
                        </span>
                    </IgrChip>
                    <IgrChip removable={true} onRemove={this.handleChipRemove}>
                        <span slot="start">
                            <IgrIcon name="brush" collection="material"></IgrIcon>
                        </span>
                        <span>Start Slot</span>
                    </IgrChip>
                    <IgrChip selectable={true}>
                        <span>End Slot</span>
                        <span slot="end">
                            <IgrIcon name="brick-wall" collection="material"></IgrIcon>
                        </span>
                    </IgrChip>
                    <IgrChip disabled={true}>
                        <span>Disabled Chip</span>
                        <span slot="end">
                            <IgrIcon name="dog-icon" collection="material"></IgrIcon>
                        </span>
                    </IgrChip>
                </div>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ChipMultiple/>);
