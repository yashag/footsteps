import { Button, Code, Icon, Pane, Text } from "evergreen-ui";
import React, { Dispatch, FunctionComponent, SetStateAction, useContext, useState } from "react";

import { IProjectInfoContextConsumer, ProjectInfoContext } from "../../contexts/ProjectInfoContext";
import { StepProps, Steps } from "../../types/steps/steps";
import {repositoryVendors, IRepositoryVendorInfo} from "./repository-vendors";
import VendorTabPanel from './VendorTabPanel';

import StyleConstants from "../../styles/constants";
import { StepPageTitle, StepPageDescription } from "../../styles/generic-step.styles";
import { RespositoryStepPageHeader, ProjectInfo, ProjectVendors, VendorsTablist, VendorTab, VendorsDetailsContainer, ActionsPanel, RepositoryStepPage } from "./repository-page.styles";


const RepositoryPage: FunctionComponent<StepProps> = ({ moveToStep }) => {
    const { name, codeName, description } = useContext<IProjectInfoContextConsumer>(ProjectInfoContext);
    const [currentTab, setCurrentTab]: [number, Dispatch<SetStateAction<number>>] = useState<number>(0);

    const goToCloneAndOpen: () => void = () => {
        moveToStep(Steps.README);
    };

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
                    {repositoryVendors.map((tab: IRepositoryVendorInfo, index: number) => (
                        <VendorTab key={index} onSelect={() => setCurrentTab(index)} isSelected={currentTab === index} aria-controls={`panel-${index}`}>
                            <Icon icon={tab.icon} />
                            <Text size={StyleConstants.button.sizes.small.text}>{tab.name}</Text>
                        </VendorTab>
                    ))}
                </VendorsTablist>
                <VendorsDetailsContainer>
                    {repositoryVendors.map((tab: IRepositoryVendorInfo, index: number) => (
                        <VendorTabPanel key={index} tab={tab} active={index === currentTab} />
                    ))}
                </VendorsDetailsContainer>
            </ProjectVendors>
            <ActionsPanel>
                <Button type="submit" iconAfter="arrow-right" height={StyleConstants.button.sizes.small.height} onClick={goToCloneAndOpen}>
                    I'm done, let's continue
                </Button>
            </ActionsPanel>
        </RepositoryStepPage>
    );
};

export default RepositoryPage;
