import {Button, Code, Heading, Pane, Paragraph, Text} from "evergreen-ui";
import React, {useContext} from "react";

import {IProjectInfoContextConsumer, ProjectInfoContext} from "../../contexts/ProjectInfoContext";
import {StepProps} from "../../types/steps/steps";

import "./repository-page.scss";

const RepositoryPage: (props: StepProps) => JSX.Element = ({moveToStep}) => {
    const {name, codeName, description} = useContext<IProjectInfoContextConsumer>(ProjectInfoContext);

    return (
        <div id="fss-repository-page">
            <header id="fss-repository-header">
                <Heading id="fss-repository-title" is="h1" size={900} marginTop="default">
                    Creating a repository
                </Heading>
                <Paragraph id="fss-repository-description" marginTop="default">
                    Instead of creating a directory with our code and pushing it to a remote repository, why don't we go
                    the other way around?<br/>
                    Most platforms allow you to generate some files when creating a repo (for
                    instance: <Code>.gitignore</Code> and <Code>LICENSE</Code> files).<br/>
                    Utilizing this, we can create our repo online and simply clone it. This saves us the hassle of
                    initializing a local git repo,
                    generating those files and pushing them to origin.<br/>
                    So choose your preferred repository hosting service and create your repository based on the
                    previously supplied data.
                </Paragraph>
            </header>
            <Pane id="fss-repository-project-info" is="section">
                <Pane border background="tint2" padding={20} marginTop={20}>
                    <div><Text className="fss-repository-project-info-key" size={500}>Name:</Text> {name}</div>
                    <div><Text className="fss-repository-project-info-key" size={500}>Code name:</Text> {codeName}</div>
                    <div><Text className="fss-repository-project-info-key" size={500}>Description:</Text> {description}</div>
                </Pane>
            </Pane>
            <Pane id="fss-repository-project-actions" marginTop="default">
                <Button id="fss-repository-project-actions-github" height={60}>GitHub</Button>
                <Button id="fss-repository-project-actions-github" height={60}>Bitbucket</Button>
                <Button id="fss-repository-project-actions-github" height={60}>GitLab</Button>
            </Pane>
        </div>
    );
};

export default RepositoryPage;
