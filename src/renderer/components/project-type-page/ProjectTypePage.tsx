import {Icon} from "evergreen-ui";
import React, {FunctionComponent} from "react";

import NodeJSIcon from "../assets/nodejs-icon.svg";

import {StepProps, Steps} from "../../types/steps/steps";

import StyleConstants from "../../styles/constants";
import { StepPageTitle, StepPageDescription } from "../../styles/generic-step.styles";
import { ProjectTypeStepPageHeader, ProjectTypeStepPage, ActionsPanel, ProjectTypeButton, ProjectTypeButtonText } from "./project-type-page.styles";

const ProjectTypePage: FunctionComponent<StepProps> = ({moveToStep}) => {
    const goToBasicInfoForm: () => void = () => {
        moveToStep(Steps.BASIC_INFO);
    };

    return (
        <ProjectTypeStepPage>
            <ProjectTypeStepPageHeader>
                <StepPageTitle>Select your project type</StepPageTitle>
                <StepPageDescription>
                    Please note that more project types would be supported in future versions.
                    If you do not find the specific type you were looking for, you can always select the generic one.
                </StepPageDescription>
            </ProjectTypeStepPageHeader>
            <ActionsPanel>
                <ProjectTypeButton iconBefore="code" onClick={goToBasicInfoForm}>
                    <ProjectTypeButtonText size={StyleConstants.button.sizes.normal.text}>Generic</ProjectTypeButtonText>
                </ProjectTypeButton>
                <ProjectTypeButton disabled>
                    <Icon icon={<NodeJSIcon className="fss-step-page-button-icon" />} />
                    <ProjectTypeButtonText size={StyleConstants.button.sizes.normal.text}>Node.js</ProjectTypeButtonText>
                </ProjectTypeButton>
            </ActionsPanel>
        </ProjectTypeStepPage>
    );
};

export default ProjectTypePage;
