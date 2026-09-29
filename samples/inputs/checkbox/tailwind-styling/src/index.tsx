import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrAccordion, IgrCheckbox, IgrExpansionPanel } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

interface FilterSection {
    title: string;
    open: boolean;
    options: { label: string; checked: boolean }[];
}

const initialSections: FilterSection[] = [
    {
        title: 'Brand',
        open: true,
        options: [
            { label: 'Nike', checked: true },
            { label: 'Roxy', checked: false },
            { label: 'Guess', checked: false },
        ],
    },
    {
        title: 'Color',
        open: true,
        options: [
            { label: 'Black', checked: false },
            { label: 'White', checked: true },
            { label: 'Gray', checked: false },
        ],
    },
    {
        title: 'Size',
        open: true,
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

    const toggleSection = (sectionIndex: number, open: boolean) => {
        setSections((current) =>
            current.map((section, si) => (si === sectionIndex ? { ...section, open } : section))
        );
    };

    return (
        <div className="sample flex items-center justify-center">
            <div className="flex w-[218px] flex-col rounded-2xl border border-filter-primary bg-white p-[7px] [--ig-font-family:aktiv-grotesk,sans-serif]">
                <IgrAccordion className="flex flex-col divide-y divide-filter-divider pb-2">
                    {sections.map((section, sectionIndex) => (
                        <IgrExpansionPanel
                            key={section.title}
                            className="my-0 [--ig-expansion-panel-body-background:transparent] [--ig-expansion-panel-header-background:transparent] [--ig-expansion-panel-header-icon-color:var(--color-filter-ink)]"
                            indicatorPosition="end"
                            open={section.open}
                            onOpened={() => toggleSection(sectionIndex, true)}
                            onClosed={() => toggleSection(sectionIndex, false)}
                        >
                            <span className="pb-2 text-base font-bold leading-5 text-filter-title" slot="title">{section.title}</span>
                            <div className="-mx-2 -my-4 flex flex-col">
                                {section.options.map((option, optionIndex) => (
                                    <IgrCheckbox
                                        className="filter-option [--ig-checkbox-border-radius:0.125rem] [--ig-checkbox-empty-color-hover:var(--color-filter-primary)] [--ig-checkbox-empty-color:var(--color-filter-empty)] [--ig-checkbox-fill-color-hover:var(--color-filter-primary)] [--ig-checkbox-fill-color:var(--color-filter-primary)] [--ig-checkbox-label-color-hover:var(--color-filter-ink)] [--ig-checkbox-label-color:var(--color-filter-ink)] [--ig-checkbox-tick-color-hover:#fff] [--ig-checkbox-tick-color:#fff]"
                                        key={option.label}
                                        checked={option.checked}
                                        onChange={(e) => toggleOption(sectionIndex, optionIndex, e.detail.checked)}
                                    >
                                        <span className="text-sm font-medium leading-6 tracking-[0.1px]">{option.label}</span>
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
