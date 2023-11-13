import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

import { ButtonVariant, IgrButton } from 'igniteui-react';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';
import './index.css';

export default function App() {
    function onBackClicked() {
        window.location.replace("./grids/grid/state-persistence-main");
    }

    return (
        <div id="root">
            <div className="container sample">
                <div style={{ textAlign: "center", width: "900px"}}>
                    <br />
                    <span>Navigating to the previous page, components will reinitialize as per their initial configuration, therefore the igxGrid will lose its state.</span>
                    <br />
                    <span>What our GridSaveStateComponent does is reading the state from the window.localStorage object and applying the corresponding state in the AfterViewInit lifecycle.</span><br />
                    <IgrButton clicked={onBackClicked} variant={ButtonVariant.Contained}><span>Go Back</span></IgrButton>
                </div>
            </div>
        </div>
    );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);