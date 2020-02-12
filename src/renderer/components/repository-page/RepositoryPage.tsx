import {Button, Code, Heading, Icon, Pane, Paragraph, Text} from "evergreen-ui";
import React, {useContext} from "react";

import {IProjectInfoContextConsumer, ProjectInfoContext} from "../../contexts/ProjectInfoContext";
import {StepProps} from "../../types/steps/steps";

import StyleConstants from "../../styles/constants.json";
import BitbucketIcon from "../assets/bitbucket-icon.svg";
import GitHubIcon from "../assets/github-icon.svg";
import GitLabIcon from "../assets/gitlab-icon.svg";
import "./repository-page.scss";

const RepositoryPage: (props: StepProps) => JSX.Element = ({moveToStep}) => {
    const {name, codeName, description} = useContext<IProjectInfoContextConsumer>(ProjectInfoContext);

    return (
        <div id="fss-repository-page" className="fss-step-page">
            <header id="fss-repository-header">
                <Heading id="fss-repository-title" is="h1" size={900} className="fss-step-page-title">
                    Creating a repository
                </Heading>
                <Paragraph id="fss-repository-description" marginTop="default" className="fss-step-page-description">
                    When creating a repository online, most of the platforms give you a head start by generating some
                    initial files (for instance: <Code>.gitignore</Code> and <Code>LICENSE</Code> files).<br/>
                    So why shouldn't we take advantage of it? This saves us the hassle of
                    initializing a local git repo, generating those files and pushing them to origin.<br/>
                    Choose your preferred repository hosting service and create your repository based on the
                    previously supplied data.
                </Paragraph>
            </header>
            <Pane id="fss-repository-project-info" is="section">
                <Pane border background="tint2" padding={20} marginTop={20}>
                    <div><Text className="fss-repository-project-info-key" size={500}>Name:</Text> {name}</div>
                    <div><Text className="fss-repository-project-info-key" size={500}>Code name:</Text> {codeName}</div>
                    <div><Text className="fss-repository-project-info-key" size={500}>Description:</Text> {description}
                    </div>
                </Pane>
            </Pane>
            <Pane id="fss-repository-project-vendors">
                <Pane id="fss-repository-project-vendors-repos" marginTop={20}>
                    <Button className="fss-repository-project-button" is="a" href="https://github.com/new" height={StyleConstants.buttonHeight}>
                        <Icon icon={<GitHubIcon className="fss-step-page-button-icon" fill="#181717" />} />
                        <Text className="fss-repository-project-button-text" size={600}>GitHub</Text>
                    </Button>
                    <Button className="fss-repository-project-button" is="a" href="https://bitbucket.org/repo/create" height={StyleConstants.buttonHeight}>
                        <Icon icon={<BitbucketIcon className="fss-step-page-button-icon" fill="#0052CC" />} />
                        <Text className="fss-repository-project-button-text" size={600}>Bitbucket</Text>
                    </Button>
                    <Button className="fss-repository-project-button" is="a" href="https://gitlab.com/projects/new" height={StyleConstants.buttonHeight}>
                        <Icon icon={<GitLabIcon className="fss-step-page-button-icon" fill="#FCA121" />} />
                        <Text className="fss-repository-project-button-text" size={600}>GitLab</Text>
                    </Button>
                </Pane>
            </Pane>
            <Pane id="fss-repository-project-actions">
                <Button type="submit" iconAfter="arrow-right" height={36}>I'm done, let's continue</Button>
            </Pane>
        </div>
    );
};

export default RepositoryPage;
