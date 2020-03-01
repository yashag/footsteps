import { Button, Code, Icon, Pane, Paragraph, Text, SidebarTab } from "evergreen-ui";
import React, { Dispatch, FunctionComponent, SetStateAction, useContext, useState } from "react";

import { IProjectInfoContextConsumer, ProjectInfoContext } from "../../contexts/ProjectInfoContext";
import { StepProps, Steps } from "../../types/steps/steps";
import repositoryVendors from "./repository-vendors";

import StyleConstants from "../../styles/constants";
import { StepPageTitle, StepPageDescription, StepPageCodeSample } from "../../styles/generic-step.styles";
import { RespositoryStepPageHeader, ProjectInfo, ProjectVendors, VendorsTablist, VendorTab, VendorsDetailsContainer, VendorLinkButton, ProjectTip, ActionsPanel, RepositoryStepPage } from "./repository-page.styles";

interface RepoTab {
    name: string;
    newRepoLink: string;
    icon: JSX.Element;
    cloneHelpLink: string;
}

const RepositoryPage: FunctionComponent<StepProps> = ({ moveToStep }) => {
    const { name, codeName, description } = useContext<IProjectInfoContextConsumer>(ProjectInfoContext);
    const [currentTab, setCurrentTab]: [number, Dispatch<SetStateAction<number>>] = useState<number>(0);

    const goToCloneAndOpen: () => void = () => {
        moveToStep(Steps.README);
    };

    const renderTabPanel = (tab: RepoTab, index: number) => (
        <Pane key={index} role="tabpanel"
            className="fss-repository-project-vendors-repo"
            aria-labelledby={tab}
            aria-hidden={index !== currentTab}
            display={index === currentTab ? "block" : "none"}>
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
        </Pane>
    );

    return (
        <RepositoryStepPage>
            <RespositoryStepPageHeader>
                <StepPageTitle>Creating a repository</StepPageTitle>
                <StepPageDescription>
                    When creating a repository online, most of the platforms give you a head start by generating some initial files (for instance: <Code>.gitignore</Code> and <Code>LICENSE</Code> files).
                    <br />
                    So why shouldn't we take advantage of it? This saves us the hassle of initializing a local git repo, generating those files and pushing them to origin.
                    <br />
                    So let's start by choosing your preferred repository hosting service.
                </StepPageDescription>
            </RespositoryStepPageHeader>
            <ProjectInfo>
                <Pane border background="tint2" padding={20} marginTop={20}>
                    <div><Text size={StyleConstants.text.size.normal}>Name:</Text> {name}</div>
                    <div><Text size={StyleConstants.text.size.normal}>Code name:</Text> {codeName}</div>
                    <div><Text size={StyleConstants.text.size.normal}>Description:</Text> {description}</div>
                </Pane>
            </ProjectInfo>
            <ProjectVendors>
                <VendorsTablist>
                    {repositoryVendors.map((tab: RepoTab, index: number) => (
                        <VendorTab key={index} onSelect={() => setCurrentTab(index)} isSelected={currentTab === index} aria-controls={`panel-${index}`}>
                            <Icon icon={tab.icon} />
                            <Text size={StyleConstants.button.sizes.text}>{tab.name}</Text>
                        </VendorTab>
                    ))}
                </VendorsTablist>
                <VendorsDetailsContainer>
                    {repositoryVendors.map(renderTabPanel)}
                </VendorsDetailsContainer>
            </ProjectVendors>
            <ActionsPanel>
                <Button type="submit" iconAfter="arrow-right" height={StyleConstants.button.sizes.height.small} onClick={goToCloneAndOpen}>
                    I'm done, let's continue
                </Button>
            </ActionsPanel>
        </RepositoryStepPage>
    );
};

export default RepositoryPage;
