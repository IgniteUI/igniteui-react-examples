import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { IgrAvatar, IgrBadge, IgrIcon, registerIconFromText } from 'igniteui-react';
import './index.css';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const homeIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';

export default function BadgeDot(): JSX.Element {
  useEffect(() => {
    registerIconFromText('home', homeIcon, 'material');
  }, []);

  return (
    <div className="wrapper">
      <IgrAvatar shape="rounded" size="small">
        <IgrIcon name="home" collection="material" />
      </IgrAvatar>
      <IgrBadge dot={true} variant="success" />
    </div>
  );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BadgeDot />);
