import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrAccordion, IgrCheckbox, IgrExpansionPanel } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

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
            { label: 'White', checked: true },
            { label: 'Gray', checked: false },
        ],
    },
    {
        title: 'Size',
        options: [
            { label: 'Small', checked: false },
            { label: 'Medium', checked: true },
            { label: 'Large', checked: false },
            { label: 'Extra large', checked: false },
        ],
    },
];

export default function CheckboxTailwindStyling(): JSX.Element {
    const [sections, setSections] = useState<FilterSection[]>(initialSections);
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
            <div className="filter-panel flex flex-col rounded-2xl border border-[var(--ig-primary-500)] bg-white p-2">
                <IgrAccordion>
                    {sections.map((section, sectionIndex) => (
                        <IgrExpansionPanel key={section.title} className="filter-section" indicatorPosition="end" open>
                            <span className="panel-title" slot="title">{section.title}</span>
                            <div className="section-options flex flex-col">
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
                        </IgrExpansionPanel>
                    ))}
                </IgrAccordion>
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CheckboxTailwindStyling/>);
