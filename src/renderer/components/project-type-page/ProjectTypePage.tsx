import {Button, Heading, Icon, Paragraph, Text} from "evergreen-ui";
import React, {FunctionComponent} from "react";

import NodeJSIcon from "../assets/nodejs-icon.svg";

import {StepProps, Steps} from "../../types/steps/steps";

import StyleConstants from "../../styles/constants.json";
import "./project-type-page.scss";

const ProjectTypePage: FunctionComponent<StepProps> = ({moveToStep}) => {
    const goToBasicInfoForm: () => void = () => {
        moveToStep(Steps.BASIC_INFO);
    };

    return (
        <div id="fss-page-type-page" className="fss-step-page">
            <header id="fss-page-type-header">
                <Heading id="fss-page-type-title" className="fss-step-page-title" is="h1" size={900}>Select your project type</Heading>
                <Paragraph id="fss-page-type-description" className="fss-step-page-description" marginTop="default">
                    Please note that more project types would be supported in future versions.
                    If you do not find the specific type you were looking for, you can always select the generic one.
                </Paragraph>
            </header>
            <div id="fss-page-type-actions">
                <Button id="fss-page-type-generic-button" className="fss-page-type-button" iconBefore="code" height={StyleConstants.regularButtonHeight}
                        onClick={goToBasicInfoForm}>
                    <Text className="fss-page-type-button-text" size={600}>Generic</Text>
                </Button>
                <Button id="fss-page-type-nodejs-button" className="fss-page-type-button" height={StyleConstants.regularButtonHeight} disabled>
                    <Icon icon={<NodeJSIcon className="fss-step-page-button-icon" />} />
                    <Text className="fss-page-type-button-text" size={600}>Node.js</Text>
                </Button>
            </div>
        </div>
    );
};

export default ProjectTypePage;
