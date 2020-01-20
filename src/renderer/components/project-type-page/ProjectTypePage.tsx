import {Button, Heading, Paragraph, Text} from "evergreen-ui";
import React from "react";

import "./project-type-page.scss";

import NodeJSIcon from "../assets/nodejs-icon.svg";

import {StepProps, Steps} from "../../types/steps/steps";

const ProjectTypePage: (props: StepProps) => JSX.Element = ({moveToStep}) => {
    const goToBasicInfoForm: () => void = () => {
        moveToStep(Steps.BASIC_INFO);
    };

    return (
        <div id="fss-page-type-page">
            <header id="fss-page-type-header">
                <Heading id="fss-page-type-title" is="h1" size={900} marginTop="default">Select your project type</Heading>
                <Paragraph id="fss-page-type-description" marginTop="default">
                    Please note that more project types would be supported in future versions.
                    If you do not find the specific type you were looking for, you can always select the generic one.
                </Paragraph>
            </header>
            <div id="fss-page-type-actions">
                <Button id="fss-page-type-generic-button" className="fss-page-type-button" iconBefore="code" height={60}
                        onClick={goToBasicInfoForm}>
                    <Text className="fss-page-type-button-text" size={600}>Generic</Text>
                </Button>
                <Button id="fss-page-type-nodejs-button" className="fss-page-type-button" height={60} disabled>
                    <img src={NodeJSIcon} alt="Node.js"/>
                    <Text className="fss-page-type-button-text" size={600}>Node.js</Text>
                </Button>
            </div>
        </div>
    );
};

export default ProjectTypePage;
