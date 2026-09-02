import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrSwitch, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/material.css';

const darkModeIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path style="fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round" d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.39 5.39 0 0 1-4.4 2.26 5.4 5.4 0 0 1-5.4-5.4c0-1.81.89-3.41 2.26-4.4A9.4 9.4 0 0 0 12 3z"/></svg>';

export default function SwitchTailwindStyling(): JSX.Element {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        registerIconFromText('dark_mode', darkModeIcon, 'material');
    }, []);

    return (
        <div className="container sample">
            <div className={`w-full max-w-[384px] overflow-hidden rounded-lg shadow-[var(--ig-elevation-2)] ${isDarkMode ? 'bg-[#1A314A]' : 'bg-white'}`}>
                <div className={`flex items-center justify-between gap-4 border-b px-6 py-4 ${isDarkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-gray-50'}`}>
                    <span className={`font-sans text-[14px] font-medium leading-6 tracking-[0.1px] ${isDarkMode ? 'text-[#E6F2FF]' : 'text-gray-900'}`}>Dashboard</span>
                    <IgrSwitch labelPosition="before" checked={isDarkMode} onChange={() => setIsDarkMode((current) => !current)} className="[--track-on-color:var(--color-blue-500)] [--track-off-color:var(--color-slate-600)] [--thumb-on-color:var(--color-white)] [--thumb-off-color:var(--color-slate-300)] [--track-on-hover-color:var(--color-blue-600)]">
                        <span className={`flex items-center gap-2 font-sans text-[14px] font-medium leading-6 tracking-[0.1px] ${isDarkMode ? 'text-[#E6F2FF]' : 'text-gray-700'}`}>
                            <IgrIcon name="dark_mode" collection="material" className="[--size:20px] text-[var(--ig-warn-300)]" />
                            Dark mode
                        </span>
                    </IgrSwitch>
                </div>
                <div className={`px-6 py-4 ${isDarkMode ? 'bg-[#1A314A]' : 'bg-white'}`}>
                    <h6 className={`m-0 font-sans text-[16px] font-semibold leading-6 ${isDarkMode ? 'text-gray-50' : 'text-gray-900'}`}>Revenue overview</h6>
                    <p className={`m-0 mt-2 font-sans text-[14px] font-medium leading-5 tracking-[0.25px] ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        $84,290 this month, up 12% from July.<br />
                        Your top-performing channel is Direct, driving 41% of total revenue.
                    </p>
                </div>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SwitchTailwindStyling/>);
