import {Button} from "evergreen-ui";
import React, {FunctionComponent} from "react";

import Logo from "../../../../resources/footsteps.png";
import StyleConstants from "../../styles/constants";

import {StepProps, Steps} from "../../types/steps/steps";
import { WelcomeStepPage, WelcomeTitle, WelcomeTitleText, WelcomeContent, ActionsPanel, FootstepsLogo } from "./welcome-page.styles";

const WelcomePage: FunctionComponent<StepProps> = ({moveToStep}) => {
    const goToProjectTypeSelection: () => void = () => { moveToStep(Steps.PROJECT_TYPE); };

    return (
        <WelcomeStepPage>
            <WelcomeTitle>
                <FootstepsLogo src={Logo} />
                <WelcomeTitleText>Welcome to Footsteps!</WelcomeTitleText>
            </WelcomeTitle>
            <WelcomeContent>
                Footsteps will help you and guide you through the process of creating your own project.
                You no longer have to memorize and worry about steps you forgot about.
                Just follow the footsteps!
            </WelcomeContent>
            <ActionsPanel>
                <Button iconAfter="arrow-right" height={StyleConstants.button.sizes.small.height} onClick={goToProjectTypeSelection}>
                    Let's start
                </Button>
            </ActionsPanel>
        </WelcomeStepPage>
    );
};

export default WelcomePage;
