import {BackButton, Pane} from "evergreen-ui";
import React from "react";

import StyleConstants from "../../styles/constants.json";
import {StepProps} from "../../types/steps/steps";

import "./header.scss";

const Header: (props: StepProps) => JSX.Element = ({moveToStep}) => (
    <Pane is="header" id="fss-header" background="tint2" border>
        <BackButton id="fss-header-back-button" height={40} onClick={() => moveToStep()} />
    </Pane>
);

export default Header;
