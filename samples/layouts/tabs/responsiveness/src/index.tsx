import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrTab, IgrTabs } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const categories = ['Podcasts', 'Playlists', 'Genres'];
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function TabsResponsiveness(): JSX.Element {
    return (
        <div className="sample">
            <div className="modes">
                <span className="mode-label">Content Fit</span>
                <IgrTabs alignment="justify">
                    {categories.map((category) => (
                        <IgrTab key={category} label={category} />
                    ))}
                </IgrTabs>
                <span className="mode-label">Content Fix</span>
                <IgrTabs>
                    {days.map((day) => (
                        <IgrTab key={day} label={day} />
                    ))}
                </IgrTabs>
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TabsResponsiveness/>);
