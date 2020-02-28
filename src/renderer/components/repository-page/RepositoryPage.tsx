import { Button, Code, Heading, Icon, Pane, Paragraph, SidebarTab, Tablist, Text } from "evergreen-ui";
import React, { Dispatch, FunctionComponent, SetStateAction, useContext, useState } from "react";

import { IProjectInfoContextConsumer, ProjectInfoContext } from "../../contexts/ProjectInfoContext";
import { StepProps, Steps } from "../../types/steps/steps";
import repositoryVendors from "./repository-vendors";

import StyleConstants from "../../styles/constants.json";
import "./repository-page.scss";

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

    const renderTab = (tab: RepoTab, index: number) => (
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
            <Button className="fss-repository-project-button" is="a" href={tab.newRepoLink} iconBefore="git-repo" height={StyleConstants.smallButtonHeight}>
                <Text className="fss-repository-project-button-text" size={400}>Open {tab.name} and create a new repository</Text>
            </Button>
            <Paragraph marginTop={14}>
                Now that you have created your repository, you should clone your project to a local directory.
                Copy the clone link (HTTP or SSH) and either use the clone command in your favourite IDE or use the appropriate git command in your terminal, like so:
                <br />
                <Code>git clone <i>[the clone link]</i></Code>
            </Paragraph>
            <Pane elevation={0} background="blueTint" border="muted" padding={10} marginTop={14}>
                <Text className="fss-repository-project-tip" color="muted">
                    A small tip: It is best to keep all your coding projects organized in a workspace directory. Your desktop is usually meant for other stuff ;)
                    </Text>
            </Pane>
            <Button className="fss-repository-project-button" is="a" href={tab.cloneHelpLink} iconBefore="help" height={StyleConstants.smallButtonHeight}>
                <Text className="fss-repository-project-button-text" size={400}>I need help with cloning the project</Text>
            </Button>
        </Pane>
    );

    return (
        <div id="fss-repository-page" className="fss-step-page">
            <header id="fss-repository-header">
                <Heading id="fss-repository-title" is="h1" size={900} className="fss-step-page-title">
                    Creating a repository
                </Heading>
                <Paragraph id="fss-repository-description" marginTop="default" className="fss-step-page-description">
                    When creating a repository online, most of the platforms give you a head start by generating some
                    initial files (for instance: <Code>.gitignore</Code> and <Code>LICENSE</Code> files).<br />
                    So why shouldn't we take advantage of it? This saves us the hassle of
                    initializing a local git repo, generating those files and pushing them to origin.<br />
                    So let's start by choosing your preferred repository hosting service.
                </Paragraph>
            </header>
            <Pane id="fss-repository-project-info" is="section">
                <Pane border background="tint2" padding={20} marginTop={20}>
                    <div><Text className="fss-repository-project-info-key" size={500}>Name:</Text> {name}</div>
                    <div><Text className="fss-repository-project-info-key" size={500}>Code name:</Text> {codeName}</div>
                    <div><Text className="fss-repository-project-info-key" size={500}>Description:</Text> {description}</div>
                </Pane>
            </Pane>
            <Pane id="fss-repository-project-vendors" marginTop={20}>
                <Tablist>
                    {repositoryVendors.map((tab: RepoTab, index: number) => (
                        <SidebarTab key={index} onSelect={() => setCurrentTab(index)} isSelected={currentTab === index}
                            aria-controls={`panel-${index}`}>
                            <Icon icon={tab.icon} />
                            <Text className="fss-repository-project-button-text" size={400}>{tab.name}</Text>
                        </SidebarTab>
                    ))}
                </Tablist>
                <Pane id="fss-repository-project-vendors-repos" background="tint1">
                    {repositoryVendors.map(renderTab)}
                </Pane>
            </Pane>
            <Pane id="fss-repository-project-actions">
                <Button type="submit" iconAfter="arrow-right" height={StyleConstants.smallButtonHeight} onClick={goToCloneAndOpen}>
                    I'm done, let's continue
                </Button>
            </Pane>
        </div>
    );
};

export default RepositoryPage;
