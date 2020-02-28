import {Heading, Pane, Paragraph, Strong} from "evergreen-ui";
import React, {FunctionComponent} from "react";

import {StepProps, Steps} from "../../types/steps/steps";
import instructions from "./Instructions";
import "./readme-page.scss";

const ReadmePage: FunctionComponent<StepProps> = ({moveToStep}) => {
    const goToBasicInfoForm: () => void = () => {
        moveToStep(Steps.BASIC_INFO);
    };

    return (
        <div id="fss-readme-page" className="fss-step-page">
            <header id="fss-readme-header">
                <Heading id="fss-readme-title" className="fss-step-page-title" is="h1" size={900}>Readme</Heading>
                <Paragraph id="fss-readme-description" className="fss-step-page-description" marginTop="default">
                    You might have generated a README.md when creating you repository (as was recommended in the
                    previous step).
                    Whether you did or not, we still have to make sure the README is on point and that it contains all
                    necessary info,
                    so everyone who will approach your project will know their way around it.
                </Paragraph>
                <Paragraph className="fss-step-page-description" marginTop="default">
                    It is a good opportunity to note that README.md files are written in <Strong
                    size={600}>Markdown</Strong> (hence the .md extension).
                    Markdown allows you add light-weight formatting to your text, making the your file more readable and
                    well organized upon rendering.
                </Paragraph>
            </header>
            <div className="fss-step-page-separator" />
            <Pane id="fss-readme-instructions">
                <Paragraph id="fss-readme-instructions-text" size={500}>
                    Let's break it apart then. A good structure to follow would look something like this
                    (Obviously this is not set in stone, and making your own personal adjustments is always welcomed):
                </Paragraph>
                <Pane id="fss-readme-instructions-list" marginTop="default">
                    {instructions}
                </Pane>
            </Pane>
        </div>
    );
};

export default ReadmePage;
