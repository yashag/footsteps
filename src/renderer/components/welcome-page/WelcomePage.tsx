import {Button, Heading, Paragraph} from "evergreen-ui";
import React from "react";

import Logo from "../../../../resources/footsteps.svg";
import StyleConstants from "../../styles/constants.json";
import "./welcome-page.scss";

import {StepProps, Steps} from "../../types/steps/steps";

const WelcomePage: (props: StepProps) => JSX.Element = ({moveToStep}) => {
    const goToProjectTypeSelection: () => void = () => { moveToStep(Steps.PROJECT_TYPE); };

    return (
        <div id="fss-welcome-page">
            <div id="fss-welcome-title">
                <Logo className="fss-logo" fill={StyleConstants.palette.mainColor}/>
                <Heading id="fss-welcome-title-text" is="h1" size={900}>Welcome to Footsteps!</Heading>
            </div>
            <Paragraph id="fss-welcome-content" marginTop="default">
                Footsteps will help you and guide you through the process of creating your own project.
                You no longer have to memorize and worry about steps you forgot about.
                Just follow the footsteps!
            </Paragraph>
            <div id="fss-welcome-actions">
                <Button iconAfter="arrow-right" height={36} onClick={goToProjectTypeSelection}>
                    Let's start
                </Button>
            </div>
        </div>
    );
};

export default WelcomePage;
