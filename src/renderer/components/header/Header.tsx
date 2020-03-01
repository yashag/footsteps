import {BackButton, Pane} from "evergreen-ui";
import React, { FunctionComponent } from "react";

import StyleConstants from "../../styles/constants";
import {StepProps} from "../../types/steps/steps";

import "./header.scss";

const Header: FunctionComponent<StepProps> = ({moveToStep}) => (
    <Pane is="header" id="fss-header" background="tint2" border>
        <BackButton id="fss-header-back-button" height={StyleConstants.button.sizes.small.height} onClick={() => moveToStep()} />
    </Pane>
);

export default Header;
