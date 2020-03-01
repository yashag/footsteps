import { Pane, Paragraph, Text } from "evergreen-ui";
import React, { FunctionComponent } from "react";

import { IRepositoryVendorInfo } from "./repository-vendors";

import StyleConstants from "../../styles/constants";
import { StepPageCodeSample } from "../../styles/generic-step.styles";
import { VendorLinkButton, ProjectTip, VendorDetailsTabPanel } from "./repository-page.styles";

interface IVendorTabPanelProps {
    tab: IRepositoryVendorInfo;
    active: boolean;
};

const VendorTabPanel: FunctionComponent<IVendorTabPanelProps> = ({ tab, active }) => {
    return (
        <VendorDetailsTabPanel 
            aria-labelledby={tab.name}
            aria-hidden={!active}
            active={active}>
            <Paragraph>
                Now let's use the data above to create our new repository.
                Press the button below to be redirected to your chosen repository hosting platform and fill in the blanks.
                When you are done, press "create" and enjoy the birth of your new project!
        </Paragraph>
            <VendorLinkButton href={tab.newRepoLink} iconBefore="git-repo">
                <Text size={StyleConstants.button.sizes.text}>Open {tab.name} and create a new repository</Text>
            </VendorLinkButton>
            <Paragraph marginTop={14}>
                Now that you have created your repository, you should clone your project to a local directory.
                Copy the clone link (HTTP or SSH) and either use the clone command in your favourite IDE or use the appropriate git command in your terminal, like so:
            <br />
                <StepPageCodeSample>git clone <i>[the clone link]</i></StepPageCodeSample>
            </Paragraph>
            <Pane elevation={0} background="blueTint" border="muted" padding={10} marginTop={14}>
                <ProjectTip>
                    A small tip: It is best to keep all your coding projects organized in a workspace directory. Your desktop is usually meant for other stuff ;)
            </ProjectTip>
            </Pane>
            <VendorLinkButton href={tab.cloneHelpLink} iconBefore="help">
                <Text size={StyleConstants.button.sizes.text}>I need help with cloning the project</Text>
            </VendorLinkButton>
        </VendorDetailsTabPanel>
    );
};

export default VendorTabPanel;
