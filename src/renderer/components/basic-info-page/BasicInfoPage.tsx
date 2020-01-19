import {Button, Text, TextInputField} from "evergreen-ui";
import React, {ChangeEvent, Dispatch, FormEvent, SetStateAction, useContext, useState} from "react";

import {IProjectInfoContextConsumer, ProjectInfoContext} from "../../contexts/ProjectInfoContext";
import {StepProps} from "../../types/steps/steps";

import "./basic-info-page.scss";

const BasicInfoPage: (props: StepProps) => JSX.Element = ({moveToStep}) => {
    const [projectName, setProjectName]: [string, Dispatch<SetStateAction<string>>] = useState<string>("");
    const [projectCodeName, setProjectCodeName]: [string, Dispatch<SetStateAction<string>>] = useState<string>("");
    const [projectDescription, setProjectDescription]: [string, Dispatch<SetStateAction<string>>] = useState<string>("");
    const {updateProjectInfo} = useContext<IProjectInfoContextConsumer>(ProjectInfoContext);

    const handleProjectInfoSubmit: (e: FormEvent<HTMLFormElement>) => void = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        updateProjectInfo!({name: projectName, description: projectDescription, codeName: projectCodeName});
    };

    return (
        <div id="fss-basic-info-page">
            <div id="fss-basic-info-title">
                <h1 id="fss-basic-info-title-text">Basic Information</h1>
            </div>
            <p id="fss-basic-info-content">
                First, let's fill in the basic information needed to initialize your project in the form below.
            </p>
            <form id="fss-basic-info-form" onSubmit={handleProjectInfoSubmit}>
                <TextInputField id="fss-basic-info-form-project-name"
                                className="fss-basic-info-form-field"
                                required
                                label="Your project's name"
                                description="Give it a cool or descriptive name. You can choose whatever format you like. It won't affect your code in any way."
                                placeholder="Project name"
                                hint="Project name example: 'Hello World'"
                                value={projectName}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setProjectName(e.target.value)} />
                <TextInputField id="fss-basic-info-form-code-name"
                                className="fss-basic-info-form-field"
                                required
                                label="Your project's code name"
                                description="This is the way your project will be referred to in code. This will be the name of your project directory, repo, package, etc. Please follow the appropriate conventions"
                                placeholder="Project code name"
                                hint="Code name example: hello-world"
                                value={projectCodeName}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setProjectCodeName(e.target.value)} />
                <TextInputField id="fss-basic-info-form-description"
                                className="fss-basic-info-form-field"
                                label="Your project's description"
                                description="You should describe what your project does and/or aims to achieve"
                                placeholder="Project description"
                                value={projectDescription}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setProjectDescription(e.target.value)} />
                <Button type="submit" iconAfter="arrow-right" height={36}>Continue</Button>
            </form>
        </div>
    );
};

export default BasicInfoPage;
