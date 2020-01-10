import React, {Dispatch, SetStateAction, useState} from 'react';

import {Steps, StepToComponent} from './steps';

import ProjectTypePage from '../project-type-page/ProjectTypePage';
import WelcomePage from '../welcome-page/WelcomePage';

import './step-manager.scss';

const StepManager: () => JSX.Element = () => {

    const [step, setStep]: [number, Dispatch<SetStateAction<number>>] = useState<number>(Steps.WELCOME);
    const stepsMap: StepToComponent = {
        [Steps.WELCOME]: WelcomePage,
        [Steps.PROJECT_TYPE]: ProjectTypePage
    };

    const currentStep: () => JSX.Element = stepsMap[step as Steps];

    return (
        <div id='fss-step-manager'>
            {React.createElement(currentStep, {})}
        </div>
    );
};

export default StepManager;
