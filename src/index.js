// import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { MasterDetail } from './Site/components/MasterDetail';

import { Ref1 as Chapter1 } from './Ref1.js';
import { Calculator as Chapter2 } from './Calculator.js'
// import { PowTab2 as Chapter2 } from './PowTab/index.js';

// import { Form3 as Chapter6 } from './Form/Form3';
// import {Form4 as Chapter7} from './Form/Form4';
// import App from './App';
// import YearsCounter from './YearsCounter';
// import Hello from './Hello';
// import {Form1 as Chapter4} from './Form/Form1'
// import {Form2 as Chapter5} from './Form/Form2';
// import {MyHook as Chapter8} from './MyHook/MyHook'

const content = {
    ch_1: { name: 'Ref',	component: Chapter1},
    ch_2: { name: 'Калькулятор',	component: Chapter2},
    }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MasterDetail content={content}/>
    // <Chapter1/>
    // <Chapter2/>
);