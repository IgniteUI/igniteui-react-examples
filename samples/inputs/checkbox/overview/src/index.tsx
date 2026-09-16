import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrCheckbox, IgrIcon, IgrIconButton, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const icons = [
    { name: 'more_vert', text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>' },
    { name: 'add', text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>' },
];

interface ShoppingItem {
    label: string;
    checked: boolean;
}

interface ShoppingGroup {
    title: string;
    items: ShoppingItem[];
}

const initialGroups: ShoppingGroup[] = [
    {
        title: 'Grocery store',
        items: [
            { label: 'Bread', checked: false },
            { label: 'Milk 4l', checked: false },
            { label: 'Eggs 1 pack', checked: true },
        ],
    },
    {
        title: 'Fruit and vegetable shop',
        items: [
            { label: 'Strawberries', checked: false },
            { label: 'Lemons', checked: false },
            { label: 'Single Line Item', checked: true },
        ],
    },
];

export default function CheckboxOverview(): JSX.Element {
    const [groups, setGroups] = useState<ShoppingGroup[]>(initialGroups);

    useEffect(() => {
        icons.forEach((icon) => registerIconFromText(icon.name, icon.text, 'material'));
    }, []);

    const toggleItem = (groupIndex: number, itemIndex: number, checked: boolean) => {
        setGroups((current) =>
            current.map((group, gi) =>
                gi !== groupIndex
                    ? group
                    : {
                          ...group,
                          items: group.items.map((item, ii) => (ii === itemIndex ? { ...item, checked } : item)),
                      }
            )
        );
    };

    return (
        <div className="sample">
            <div className="shopping-list">
                {groups.map((group, groupIndex) => (
                    <div className="list-group" key={group.title}>
                        <p className="group-title">{group.title}</p>
                        {group.items.map((item, itemIndex) => (
                            <div className="list-item" key={item.label}>
                                <IgrCheckbox
                                    checked={item.checked}
                                    onChange={(e) => toggleItem(groupIndex, itemIndex, e.detail.checked)}
                                >
                                    <span>{item.label}</span>
                                </IgrCheckbox>
                                <IgrIconButton variant="flat" className="item-menu">
                                    <IgrIcon name="more_vert" collection="material" />
                                </IgrIconButton>
                            </div>
                        ))}
                    </div>
                ))}
                <IgrButton variant="fab" className="add-item">
                    <IgrIcon name="add" collection="material" />
                </IgrButton>
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CheckboxOverview/>);
