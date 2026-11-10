import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrAvatar, IgrList, IgrListItem, IgrTab, IgrTabs } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const people = [
    { name: 'Emily Carter', team: 'Finance', avatar: 'https://dl.infragistics.com/x/img/avatars/avatar-profile-06.png' },
    { name: 'Jose Diaz', team: 'Engineering', avatar: 'https://dl.infragistics.com/x/img/avatars/avatar-profile-07.png' },
    { name: 'Kira Tanaka', team: 'Finance', avatar: 'https://dl.infragistics.com/x/img/avatars/avatar-profile-08.png' },
    { name: 'Liam Brooks', team: 'Engineering', avatar: 'https://dl.infragistics.com/x/img/avatars/avatar-profile-03.png' },
];

const teams = ['Everyone', 'Finance', 'Engineering'];

export default function TabsOverview() {
    return (
        <div className="sample">
            <div className="team-tabs">
                <IgrTabs alignment="justify">
                    {teams.map((team) => (
                        <IgrTab key={team} label={team}>
                            <IgrList>
                                {people
                                    .filter((person) => team === 'Everyone' || person.team === team)
                                    .map((person) => (
                                        <IgrListItem key={person.name}>
                                            <IgrAvatar slot="start" src={person.avatar} alt={person.name} shape="circle" />
                                            <span slot="title">{person.name}</span>
                                            <span slot="end" className="team-name">{person.team}</span>
                                        </IgrListItem>
                                    ))}
                            </IgrList>
                        </IgrTab>
                    ))}
                </IgrTabs>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<TabsOverview/>);
