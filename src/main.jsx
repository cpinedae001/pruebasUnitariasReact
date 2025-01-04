import React from 'react';
import ReactDOM from 'react-dom/client';
import {HelloWorldApp}  from './HellowWorldApp';
import { FirtApp } from './firstApp';
import { CounterApp } from './CounterApp';

/* para estolos globales, se importa el css
en esta sección */
import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <HelloWorldApp/> */}
        <FirtApp title='Carol y Cristhian'/>
        {/* <CounterApp value={1236}/> */}
    </React.StrictMode>
);
/* comunicación entre componentes */