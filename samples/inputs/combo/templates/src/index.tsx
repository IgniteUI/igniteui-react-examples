import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    IgrBadge,
    IgrButton,
    IgrCombo,
    IgrIcon,
    IgrSwitch,
    registerIconFromText,
    ComboTemplateProps,
    IgrComboChangeEventArgs,
    IgrCheckboxChangeEventArgs,
} from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import { Destination, destinations, citiesIn } from './data';

type TemplateName = 'item' | 'groupHeader' | 'header' | 'footer' | 'empty' | 'toggleIcon' | 'clearIcon' | 'input';

interface TemplateSwitch {
    name: TemplateName;
    label: string;
}

const icons: Record<string, string> = {
    place: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>',
    public: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>',
    flight: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2.5 19h19v2h-19zm7.18-5.73l4.35 1.16 5.31 1.42c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32-1.45-.39v5.17l1.6.43 5.31 1.43z"/></svg>',
    close: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>',
    location_searching: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.94 11c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/></svg>',
};

for (const [name, svg] of Object.entries(icons)) {
    registerIconFromText(name, svg, 'material');
}

const templateSwitches: TemplateSwitch[] = [
    { name: 'item', label: 'Item template' },
    { name: 'groupHeader', label: 'Header Item template' },
    { name: 'header', label: 'Header template' },
    { name: 'footer', label: 'Footer template' },
    { name: 'empty', label: 'Empty template' },
    { name: 'toggleIcon', label: 'Toggle Icon template' },
    { name: 'clearIcon', label: 'Clear Icon template' },
    { name: 'input', label: 'Templated input' },
];

// the default templates show the display text of an item and the value of a group
const renderDefaultItem = ({ item }: ComboTemplateProps<Destination>) => <>{item.name}</>;

const renderDefaultGroupHeader = ({ item }: ComboTemplateProps<Destination>) => <>{item.region}</>;

// the templates render inside the shadow DOM of the combo, where the styles of the page don't
// reach, so the group header lays out its content with inline styles; each root element of a
// template is laid out as a block, so the item content is wrapped in one element
const renderItem = ({ item }: ComboTemplateProps<Destination>) => (
    <span>
        <img
            src={`https://dl.infragistics.com/x/img/flags/${item.countryCode}.png`}
            alt=""
            style={{ width: '1.25rem', verticalAlign: '-0.125rem', marginInlineEnd: '0.5rem' }}
        />
        {item.name} — {item.country} · {item.id} · {item.offset}
    </span>
);

// the group header template receives a header record, whose `groupKey` field holds the group value
const renderGroupHeader = ({ item }: ComboTemplateProps<Destination>) => (
    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', width: '100%' }}>
        <IgrIcon name="public" collection="material" style={{ '--size': '1.125rem' } as React.CSSProperties} />
        <strong>{item.region}</strong>
        <span style={{ marginInlineStart: 'auto', fontWeight: 400 }}>{citiesIn(item.region)} cities</span>
    </span>
);

export default function ComboTemplates() {
    const comboRef = useRef<IgrCombo>(null);

    // the `id` values of the selected destinations
    const [selected, setSelected] = useState<string[]>(['SOF', 'LON']);

    // which templates the switches have turned on
    const [templates, setTemplates] = useState<Record<TemplateName, boolean>>({
        item: false,
        groupHeader: false,
        header: false,
        footer: false,
        empty: false,
        toggleIcon: false,
        clearIcon: false,
        input: false,
    });

    const selectedNames = destinations.filter((d) => selected.includes(d.id)).map((d) => d.name);

    // `onChange` is raised before the selection changes, with the new value in its detail; the search
    // input of the combo emits its own change event that bubbles out of the combo, so only the events of
    // the combo itself change the selection
    const onChange = (e: IgrComboChangeEventArgs) => {
        if (e.composedPath()[0] !== e.currentTarget) {
            return;
        }

        setSelected(e.detail.newValue as string[]);
    };

    // `select` and `deselect` don't raise `onChange`, so the sample reads the value after them
    const selectAll = () => {
        comboRef.current?.select();
        setSelected((comboRef.current?.value as string[]) ?? []);
    };

    const clearSelection = () => {
        comboRef.current?.deselect();
        setSelected([]);
    };

    const toggleTemplate = (name: TemplateName, e: IgrCheckboxChangeEventArgs) => {
        setTemplates({ ...templates, [name]: e.detail.checked });
    };

    return (
        <div className="sample">
            <div className="destinations-area">
                {/* the React wrapper binds the template functions when the combo mounts,
                    so the key remounts the combo when the item or the group header template changes */}
                <IgrCombo
                    key={`${templates.item}-${templates.groupHeader}`}
                    ref={comboRef}
                    className="destinations"
                    outlined={true}
                    valueKey="id"
                    displayKey="name"
                    groupKey="region"
                    groupSorting="none"
                    placeholder="Pick one or more cities"
                    placeholderSearch="Search cities..."
                    label={templates.input ? 'Destinations' : undefined}
                    data={destinations}
                    value={selected}
                    itemTemplate={templates.item ? renderItem : renderDefaultItem}
                    groupHeaderTemplate={templates.groupHeader ? renderGroupHeader : renderDefaultGroupHeader}
                    onChange={onChange}
                >
                    {templates.header && (
                        <header slot="header" className="list-header">
                            <span>Destinations by region</span>
                            <IgrButton variant="flat" onClick={selectAll}>
                                Select all
                            </IgrButton>
                        </header>
                    )}
                    {templates.footer && (
                        <footer slot="footer" className="list-footer">
                            <span>{selected.length} selected</span>
                            <IgrButton variant="flat" onClick={clearSelection}>
                                Clear
                            </IgrButton>
                        </footer>
                    )}
                    {templates.empty && (
                        <span slot="empty" className="empty-list">
                            <IgrIcon name="location_searching" collection="material" />
                            No city matches your search. Try another spelling.
                        </span>
                    )}
                    {templates.toggleIcon && <IgrIcon slot="toggle-icon" name="flight" collection="material" />}
                    {templates.clearIcon && <IgrIcon slot="clear-icon" name="close" collection="material" />}
                    {templates.input && (
                        <>
                            <IgrIcon slot="prefix" name="place" collection="material" />
                            <IgrBadge slot="suffix">{selected.length}</IgrBadge>
                            <span slot="helper-text">
                                {selected.length} of {destinations.length} destinations selected
                            </span>
                        </>
                    )}
                </IgrCombo>

                <div className="selection">
                    <span className="selection-title">Selection</span>
                    {selectedNames.length ? (
                        selectedNames.map((name) => <span key={name}>{name}</span>)
                    ) : (
                        <span className="selection-empty">No items selected</span>
                    )}
                </div>
            </div>

            <div className="templates">
                {templateSwitches.map((s) => (
                    <IgrSwitch key={s.name} checked={templates[s.name]} onChange={(e) => toggleTemplate(s.name, e)}>
                        {s.label}
                    </IgrSwitch>
                ))}
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<ComboTemplates />);
