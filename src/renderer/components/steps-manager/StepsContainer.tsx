import React, {Component} from "react";

import {StepComponent, Steps} from "../../types/steps/steps";

import ProjectInfoContextProvider from "../../contexts/ProjectInfoContext";
import StepsManager from "../../services/navigation/steps-manager";
import STEPS_MAPPING from "../../services/navigation/steps-mapping";

import Header from "../header/Header";

import "./steps-container.scss";

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
                {this.state.step ? <Header moveToStep={this.moveToStep} /> : null}
                <div id="fss-steps-container">
                    <ProjectInfoContextProvider>
                        {currentStepComponent ? React.createElement(currentStepComponent, {moveToStep: this.moveToStep}) : null}
                    </ProjectInfoContextProvider>
                </div>
            </>
        );
    }
}

export default StepsContainer;
