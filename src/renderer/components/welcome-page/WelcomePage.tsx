import {Button} from 'evergreen-ui';
import React from 'react';

import logo from '../../../../resources/footsteps.svg';
import './welcome-page.scss';

import {StepProps, Steps} from '../../types/steps/steps';

const WelcomePage: (props: StepProps) => JSX.Element = ({moveToStep}) => {
    const goToProjectTypeSelection: () => void = () => { moveToStep(Steps.PROJECT_TYPE); };

    return (
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
            <div id='fss-welcome-actions'>
                <Button iconAfter='arrow-right' height={36} onClick={goToProjectTypeSelection}>
                    Let's start
                </Button>
            </div>
        </div>
    );
};

export default WelcomePage;
