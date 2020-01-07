import React from 'react';
import {hot} from 'react-hot-loader/root';

import './app.scss';

import WelcomePage from './welcome-page/WelcomePage';

const App: () => JSX.Element = () => (
    <main id='fss-app'>
        <WelcomePage />
    </main>
);

export default hot(App);
