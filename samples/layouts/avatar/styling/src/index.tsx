import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrAvatar, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';


const homeIcon =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';

export default function AvatarStyling() {

    useEffect(() => {
        registerIconFromText("home", homeIcon, "material");
    }, []);
    
    return (
        <div className="container sample">

            <IgrAvatar 
                src="https://dl.infragistics.com/x/img/people/men/11.png" 
                alt="A photo of a man." 
                className='size-large'/>
            
            <div className='sizes'>
                <IgrAvatar initials='L' className='size-large'/>
                <IgrAvatar initials='M' className='size-medium'/>
                <IgrAvatar initials='S' className='size-small'/>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AvatarStyling/>);
