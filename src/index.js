import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/App/App.js';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import state, {subscribe, updateCheckbox} from "./Redux/state";

let rerenderAllTree =  () => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path='*' element={<App state={state} updateCheckbox={updateCheckbox}/>}/>
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    );

    reportWebVitals();
}

subscribe(rerenderAllTree);
rerenderAllTree();