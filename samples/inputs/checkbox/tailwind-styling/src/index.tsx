import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCheckbox, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const icons = [
    { name: 'expand_more', text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>' },
];

interface FilterSection {
    title: string;
    options: { label: string; checked: boolean }[];
}

const initialSections: FilterSection[] = [
    {
        title: 'Brand',
        options: [
            { label: 'Nike', checked: true },
            { label: 'Roxy', checked: false },
            { label: 'Guess', checked: false },
        ],
    },
    {
        title: 'Color',
        options: [
            { label: 'Black', checked: false },
            { label: 'White', checked: false },
            { label: 'Blue', checked: false },
        ],
    },
    {
        title: 'Size',
        options: [
            { label: 'Small', checked: false },
            { label: 'Medium', checked: false },
            { label: 'Large', checked: false },
        ],
    },
];

export default function CheckboxTailwindStyling(): JSX.Element {
    const [sections, setSections] = useState<FilterSection[]>(initialSections);
    const [expanded, setExpanded] = useState<string[]>(['Brand', 'Color', 'Size']);

    useEffect(() => {
        icons.forEach((icon) => registerIconFromText(icon.name, icon.text, 'material'));
    }, []);

    const toggleOption = (sectionIndex: number, optionIndex: number, checked: boolean) => {
        setSections((current) =>
            current.map((section, si) =>
                si !== sectionIndex
                    ? section
                    : {
                          ...section,
                          options: section.options.map((option, oi) =>
                              oi === optionIndex ? { ...option, checked } : option
                          ),
                      }
            )
        );
    };

    return (
        <div className="sample flex h-full items-center justify-center p-4">
                <div className="filter-panel flex w-44 flex-col gap-3 rounded-lg border border-[var(--ig-primary-500)] bg-white p-4">
                {sections.map((section, sectionIndex) => (
                    <div className="filter-section flex flex-col gap-3" key={section.title}>
                        <button
                            type="button"
                            className="section-header flex cursor-pointer items-center justify-between border-0 bg-transparent p-0 text-sm font-bold text-[var(--ig-primary-800)]"
                            onClick={() =>
                                setExpanded((current) =>
                                    current.includes(section.title)
                                        ? current.filter((title) => title !== section.title)
                                        : [...current, section.title]
                                )
                            }
                        >
                            {section.title}
                            <IgrIcon
                                name="expand_more"
                                collection="material"
                                className={`section-chevron ${expanded.includes(section.title) ? 'rotate-180' : ''}`}
                            />
                        </button>
                        {expanded.includes(section.title) && (
                            <div className="section-options flex flex-col gap-2 pl-3">
                                {section.options.map((option, optionIndex) => (
                                    <IgrCheckbox
                                        className="filter-option"
                                        key={option.label}
                                        checked={option.checked}
                                        onChange={(e) => toggleOption(sectionIndex, optionIndex, e.detail.checked)}
                                    >
                                        <span>{option.label}</span>
                                    </IgrCheckbox>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CheckboxTailwindStyling/>);
