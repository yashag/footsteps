import {hot} from 'react-hot-loader/root';

import React from 'react';

import StepManager from './step-manager/StepManager';

import './app.scss';


const App: () => JSX.Element = () => (
    <main id='fss-app'>
        <StepManager />
    </main>
);

export default hot(App);
