import React, {ChangeEvent, Dispatch, FormEvent, FunctionComponent, SetStateAction, useContext, useState} from "react";

import {IProjectInfoContextConsumer, ProjectInfoContext} from "../../contexts/ProjectInfoContext";
import {StepProps, Steps} from "../../types/steps/steps";

import StyleConstants from "../../styles/constants";
import { StepPageTitle, StepPageDescription, StepPageButton } from "../../styles/generic-step.styles";
import { BasicInfoStepPageHeader, BasicInfoStepPage, BasicInfoFormField, BasicInfoForm } from "./basic-info-page.styles";

const BasicInfoPage: FunctionComponent<StepProps> = ({moveToStep}) => {
    const goToRepositoryCreation: () => void = () => { moveToStep(Steps.REPOSITORY); };

    const [projectName, setProjectName]: [string, Dispatch<SetStateAction<string>>] = useState<string>("");
    const [projectCodeName, setProjectCodeName]: [string, Dispatch<SetStateAction<string>>] = useState<string>("");
    const [projectDescription, setProjectDescription]: [string, Dispatch<SetStateAction<string>>] = useState<string>("");
    const {updateProjectInfo} = useContext<IProjectInfoContextConsumer>(ProjectInfoContext);

    const handleProjectInfoSubmit: (e: FormEvent<HTMLFormElement>) => void = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        updateProjectInfo!({name: projectName, description: projectDescription, codeName: projectCodeName});
        goToRepositoryCreation();
    };

    return (
        <BasicInfoStepPage>
            <BasicInfoStepPageHeader>
                <StepPageTitle>Basic Information</StepPageTitle>
                <StepPageDescription>
                    First, let's fill in the basic information needed to initialize your project in the form below.
                </StepPageDescription>
            </BasicInfoStepPageHeader>
            <BasicInfoForm onSubmit={handleProjectInfoSubmit}>
                <BasicInfoFormField
                                required
                                label="Your project's name"
                                description="Give it a cool or descriptive name. You can choose whatever format you like. It won't affect your code in any way."
                                placeholder="Project name"
                                hint="Project name example: 'Hello World'"
                                value={projectName}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setProjectName(e.target.value)} />
                <BasicInfoFormField
                                required
                                label="Your project's code name"
                                description="This is the way your project will be referred to in code. This will be the name of your project directory, repo, package, etc. Please follow the appropriate conventions"
                                placeholder="Project code name"
                                hint="Code name example: hello-world"
                                value={projectCodeName}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setProjectCodeName(e.target.value)} />
                <BasicInfoFormField
                                label="Your project's description"
                                description="You should describe what your project does and/or aims to achieve"
                                placeholder="Project description"
                                value={projectDescription}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setProjectDescription(e.target.value)} />
                <StepPageButton type="submit" iconAfter="arrow-right" height={StyleConstants.button.sizes.small.height}>Continue</StepPageButton>
            </BasicInfoForm>
        </BasicInfoStepPage>
    );
};

export default BasicInfoPage;
