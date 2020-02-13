import {Button, Code, Heading, Icon, Paragraph, Text} from "evergreen-ui";
import React, {FunctionComponent} from "react";

import NodeJSIcon from "../assets/nodejs-icon.svg";

import {StepProps, Steps} from "../../types/steps/steps";

import StyleConstants from "../../styles/constants.json";
import "./clone-page.scss";

const ClonePage: FunctionComponent<StepProps> = ({moveToStep}) => {
    const goToBasicInfoForm: () => void = () => {
        moveToStep(Steps.BASIC_INFO);
    };

    return (
        <div id="fss-clone-page" className="fss-step-page">
            <header id="fss-clone-header">
                <Heading id="fss-clone-title" className="fss-step-page-title" is="h1" size={900}>Clone your project</Heading>
                <Paragraph id="fss-clone-description" className="fss-step-page-description" marginTop="default">
                    Now that you have created your repository, you should clone your project to a local directory.
                    Copy the clone link (HTTP or SSH) and either use the clone command in your favourite IDE or use the appropriate git command in your terminal, like so:
                    <br />
                    <Code>git clone <i>[the clone link]</i></Code>
                    <br />
                    A small tip: It is best to keep all your coding projects organized in a workspace directory. Your desktop is usually meant for other stuff ;)
                </Paragraph>
            </header>
            <div id="fss-clone-actions">
                <Button id="fss-clone-generic-button" className="fss-clone-button" iconBefore="code" height={StyleConstants.regularButtonHeight}
                        onClick={goToBasicInfoForm}>
                    <Text className="fss-clone-button-text" size={600}>Generic</Text>
                </Button>
                <Button id="fss-clone-nodejs-button" className="fss-clone-button" height={StyleConstants.regularButtonHeight} disabled>
                    <Icon icon={<NodeJSIcon className="fss-step-page-button-icon" />} />
                    <Text className="fss-page-type-button-text" size={600}>Node.js</Text>
                </Button>
            </div>
        </div>
    );
};

export default ClonePage;
