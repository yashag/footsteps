import React, {Component} from "react";

import {StepComponent, Steps} from "../../types/steps/steps";

import ProjectInfoContextProvider from "../../contexts/ProjectInfoContext";
import StepsManager from "../../services/navigation/steps-manager";
import STEPS_MAPPING from "../../services/navigation/steps-mapping";

import { FootstepsStepsContainer, FootStepsHeaderContainer } from "./steps-container.styles";

const initialState = {step: Steps.WELCOME};
type StepsContainerState = Readonly<typeof initialState>;

class StepsContainer extends Component<{}, StepsContainerState> {
    public state: StepsContainerState = {...initialState};

    private stepsManager: StepsManager = new StepsManager(this.state.step);

    constructor(props: {}) {
        super(props);

        this.moveToStep = this.moveToStep.bind(this);
    }

    public moveToStep(nextPage?: Steps) {
        if (nextPage) {
            this.stepsManager.nextStep(nextPage);
        } else {
            this.stepsManager.previousStep();
        }
        this.setState({
            step: this.stepsManager.getCurrentStep()
        }, () => {
            window.scrollTo(0, 0);
        });
    }

    public render() {
        const currentStepComponent: StepComponent = STEPS_MAPPING[this.state.step];

        return (
            <>
                {this.state.step ? <FootStepsHeaderContainer moveToStep={this.moveToStep} /> : null}
                <FootstepsStepsContainer>
                    <ProjectInfoContextProvider>
                        {currentStepComponent ? React.createElement(currentStepComponent, {moveToStep: this.moveToStep}) : null}
                    </ProjectInfoContextProvider>
                </FootstepsStepsContainer>
            </>
        );
    }
}

export default StepsContainer;
