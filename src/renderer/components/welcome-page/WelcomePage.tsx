import React from 'react';
import {hot} from 'react-hot-loader/root';

import logo from '../../../../assets/footsteps.svg';
import './welcome-page.scss';

const WelcomePage: () => JSX.Element = () => (
    <div id='fss-welcome-page'>
        <div id='fss-welcome-title'>
            <img className='fss-logo' src={logo} alt='Footsteps'/>
            <h1 id='fss-welcome-title-text'>Welcome to Footsteps!</h1>
        </div>
        <p id='fss-welcome-content'>
            Footsteps will help you and guide you through the process of creating your own project.
            You no longer have to memorize and worry about steps you forgot about.
            Just follow the footsteps!
        </p>
    </div>
);

export default hot(WelcomePage);
