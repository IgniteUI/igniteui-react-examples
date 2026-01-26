import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCircularProgress, IgrCircularGradient, IgrIconButton, IgrCircularProgressModule, IgrCircularGradientModule, IgrIconButtonModule, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './DynamicCircularProgressStyle.css';

IgrCircularProgressModule.register();
IgrCircularGradientModule.register();
IgrIconButtonModule.register();

const addIconText = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>';
const removeIconText = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 13H5v-2h14v2z"/></svg>';

export default function DynamicCircularProgress() {

    const [currentValue, setCurrentValue] = useState<number>(0);

    useEffect(() => {
        registerIconFromText("add", addIconText, "material");
        registerIconFromText("remove", removeIconText, "material");
    }, []);

    const incrementProgress = () => {
        setCurrentValue(currentValue + 10);
        if (currentValue > 100) {
            setCurrentValue(100);
        }
    }

    const decrementProgress = () => {
        setCurrentValue(currentValue - 10);
        if (currentValue < 0) {
            setCurrentValue(0);
        }
    }

    return (
        <div className="sample-content">
            <IgrCircularProgress className="circular-progress-container" max={100} value={currentValue}>
                <IgrCircularGradient slot="gradient" offset="0%" color="#ff9a40">
                </IgrCircularGradient>
                <IgrCircularGradient slot="gradient" offset="50%" color="#1eccd4">
                </IgrCircularGradient>
                <IgrCircularGradient slot="gradient" offset="100%" color="#ff0079">
                </IgrCircularGradient>
            </IgrCircularProgress>
            <div className="buttons-container">
                <IgrIconButton className="removeIcon" name="remove" collection="material" onClick={decrementProgress}>
                </IgrIconButton>
                <IgrIconButton className="addIcon" name="add" collection="material" onClick={incrementProgress}>
                </IgrIconButton>
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DynamicCircularProgress/>);
