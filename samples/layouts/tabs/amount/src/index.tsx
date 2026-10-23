import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrTab, IgrTabs } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const categories = ['Podcasts', 'Playlists', 'Genres', 'Albums', 'Artists', 'Audiobooks', 'Radio'];

export default function TabsAmount() {
    return (
        <div className="sample">
            <div className="amounts">
                <span className="amount-label">Two Tabs</span>
                <IgrTabs className="two-tabs" alignment="justify">
                    {categories.slice(0, 2).map((category) => (
                        <IgrTab key={category} label={category} />
                    ))}
                </IgrTabs>
                <span className="amount-label">Five Tabs</span>
                <IgrTabs className="five-tabs" alignment="justify">
                    {categories.slice(0, 5).map((category) => (
                        <IgrTab key={category} label={category} />
                    ))}
                </IgrTabs>
                <span className="amount-label">5+ Tabs</span>
                <IgrTabs>
                    {categories.map((category) => (
                        <IgrTab key={category} label={category} />
                    ))}
                </IgrTabs>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<TabsAmount/>);
