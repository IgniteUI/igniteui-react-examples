import React, {
    //insert hooksImports
    //end hooksImports
} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//insert vmImports
//end vmImports
//insert modulesImports
//end modulesImports
//insert bindingImports
//end bindingImports
//insert descriptionImports
//end descriptionImports
//insert vmLibraryImports
//end vmLibraryImports
//insert handlersImports
//end handlersImports
//insert templateImports
//end templateImports

//ifdef webgrids
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';
//endifdef webgrids
//ifdef editor
import 'igniteui-webcomponents/themes/light/bootstrap.css';
//endifdef editor

//ifdef modulesRegister
const mods: any[] = [
    //insert modulesRegister
    //end modulesRegister
];
mods.forEach((m) => m.register());
//endifdef modulesRegister

//ifdef moduleRegistrations
//insert moduleRegistrations
//end moduleRegistrations
//endifdef moduleRegistrations

//ifdef moduleConstants
//insert moduleConstants
//end moduleConstants
//endifdef moduleConstants

//ifdef moduleFunctions
//insert moduleFunctions
//end moduleFunctions
//endifdef moduleFunctions

export default function Sample() {

    //ifdef useState
    //insert useState
    //end useState
    //endifdef useState

    //ifdef useRef
    //insert useRef
    //end useRef
    //endifdef useRef

    //ifdef useMemo
    //insert useMemo
    //end useMemo
    //endifdef useMemo

    //ifdef useEffect
    //insert useEffect
    //end useEffect
    //endifdef useEffect

    //ifdef useCallback
    //insert useCallback
    //end useCallback
    //endifdef useCallback

    return (
        //insert render
        //end render
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
