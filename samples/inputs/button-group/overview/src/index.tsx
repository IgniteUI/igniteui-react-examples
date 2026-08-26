import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {
    IgrButtonGroup,
    IgrRipple,
    IgrToggleButton,
  } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/material.css';
import './index.css';


const albums = {
    device: {
        title: 'Trip around the world',
        photos: [
            'https://picsum.photos/id/1015/300/220',
            'https://picsum.photos/id/1016/300/220',
            'https://picsum.photos/id/1018/300/220',
            'https://picsum.photos/id/1019/300/220',
        ],
    },
    cloud: {
        title: 'Trip around the world',
        photos: [
            'https://picsum.photos/id/1036/300/220',
            'https://picsum.photos/id/1051/300/220',
            'https://picsum.photos/id/1062/300/220',
            'https://picsum.photos/id/1067/300/220',
        ],
    },
};

export default function ButtonGroupOverview() {
    const [source, setSource] = useState<'device' | 'cloud'>('cloud');
    const album = albums[source];

    return (
        <div className="sample-layout">
            <IgrButtonGroup
                selection="single-required"
                onSelect={(e: CustomEvent<string | undefined>) => {
                    if (e.detail === 'device' || e.detail === 'cloud') {
                        setSource(e.detail);
                    }
                }}
            >
                <IgrToggleButton value="device" selected={source === 'device'}>
                    Device
                    <IgrRipple />
                </IgrToggleButton>
                <IgrToggleButton value="cloud" selected={source === 'cloud'}>
                    Cloud
                    <IgrRipple />
                </IgrToggleButton>
            </IgrButtonGroup>

            <div className="album">
                <p className="album-title">{album.title}</p>
                <div className="album-photos">
                    {album.photos.map((photo) => (
                        <img key={photo} src={photo} alt={album.title} />
                    ))}
                </div>
            </div>
      </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonGroupOverview/>);
