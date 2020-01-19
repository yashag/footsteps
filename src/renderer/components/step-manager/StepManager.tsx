import React, {Dispatch, SetStateAction, useState} from "react";

import {StepComponent, Steps, StepToComponent} from "../../types/steps/steps";

import ProjectInfoContextProvider from "../../contexts/ProjectInfoContext";
import BasicInfoPage from "../basic-info-page/BasicInfoPage";
import ProjectTypePage from "../project-type-page/ProjectTypePage";
import WelcomePage from "../welcome-page/WelcomePage";

import "./step-manager.scss";

const StepManager: () => JSX.Element = () => {

    const [step, setStep]: [Steps, Dispatch<SetStateAction<Steps>>] = useState<Steps>(Steps.WELCOME);
    const stepsMap: StepToComponent = {
        [Steps.WELCOME]: WelcomePage,
        [Steps.PROJECT_TYPE]: ProjectTypePage,
        [Steps.BASIC_INFO]: BasicInfoPage
    };

    const currentStep: StepComponent = stepsMap[step];

    const moveToStep: (nextPage: Steps) => void = (nextPage: Steps) => {
        setStep(nextPage);
    };

    return (
        <div id="fss-step-manager">
            <ProjectInfoContextProvider>
                {React.createElement(currentStep, {moveToStep})}
            </ProjectInfoContextProvider>
        </div>
    );
};

export default StepManager;
