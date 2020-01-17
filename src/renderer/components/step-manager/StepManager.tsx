import React, {Dispatch, SetStateAction, useState} from 'react';

import {StepComponent, Steps, StepToComponent} from './steps';

import ProjectTypePage from '../project-type-page/ProjectTypePage';
import WelcomePage from '../welcome-page/WelcomePage';

import './step-manager.scss';

const StepManager: () => JSX.Element = () => {

    const [step, setStep]: [Steps, Dispatch<SetStateAction<Steps>>] = useState<Steps>(Steps.WELCOME);
    const stepsMap: StepToComponent = {
        [Steps.WELCOME]: WelcomePage,
        [Steps.PROJECT_TYPE]: ProjectTypePage
    };

    const currentStep: StepComponent = stepsMap[step];

    const moveToStep: (nextPage: Steps) => void = (nextPage: Steps) => {
        setStep(nextPage);
    };

    return (
        <div id='fss-step-manager'>
            {React.createElement(currentStep, {moveToStep})}
        </div>
    );
};

export default StepManager;
