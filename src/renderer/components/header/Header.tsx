import {BackButton, Pane} from "evergreen-ui";
import React, { FunctionComponent } from "react";

import StyleConstants from "../../styles/constants";
import {StepProps} from "../../types/steps/steps";
import { FootstepsHeader } from "./header.styles";
import { StepPageButton } from "../../styles/generic-step.styles";

const Header: FunctionComponent<StepProps> = ({moveToStep}) => (
    <FootstepsHeader>
        <StepPageButton iconBefore="arrow-left" height={StyleConstants.button.sizes.small.height} onClick={() => moveToStep()}>Back</StepPageButton>
    </FootstepsHeader>
);

export default Header;
