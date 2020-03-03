import {BackButton, Pane} from "evergreen-ui";
import React, { FunctionComponent } from "react";

import StyleConstants from "../../styles/constants";
import {StepProps} from "../../types/steps/steps";
import { FootstepsHeader } from "./header.styles";

const Header: FunctionComponent<StepProps> = ({moveToStep}) => (
    <FootstepsHeader>
        <BackButton height={StyleConstants.button.sizes.small.height} onClick={() => moveToStep()} />
    </FootstepsHeader>
);

export default Header;
