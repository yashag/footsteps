import { Pane, Paragraph, Strong, UnorderedList, ListItem } from "evergreen-ui";
import React, { FunctionComponent } from "react";

import StyleConstants from "../../styles/constants";
import { StepProps, Steps } from "../../types/steps/steps";
import instructions from "./readme-instructions";
import { ReadmeInstructions, ReadmeStepPage, ReadmeStepPageHeader, ReadmePageSeparator, ReadMoreText } from "./readme-page.styles";
import { StepPageTitle, StepPageDescription } from "../../styles/generic-step.styles";

const ReadmePage: FunctionComponent<StepProps> = ({ moveToStep }) => {
    const goToBasicInfoForm: () => void = () => {
        moveToStep(Steps.BASIC_INFO);
    };

    return (
        <ReadmeStepPage>
            <ReadmeStepPageHeader>
                <StepPageTitle>Readme</StepPageTitle>
                <StepPageDescription>
                    You might have generated a README.md when creating your repository (as was recommended in the previous step).
                    Whether you did or not, we still have to make sure the README is on point and that it contains all necessary info,
                    so everyone who will approach your project will know their way around it.
                </StepPageDescription>
                <StepPageDescription>
                    It is a good opportunity to note that README.md files are written in <Strong size={600}>Markdown</Strong> (hence the .md extension).
                    Markdown allows you add light-weight formatting to your text, making the your file more readable and
                    well organized upon rendering.
                </StepPageDescription>
            </ReadmeStepPageHeader>
            <ReadmePageSeparator />
            <ReadmeInstructions>
                <Paragraph id="fss-readme-instructions-text" size={StyleConstants.text.size.normal}>
                    Let's break it apart then. A good structure to follow would look something like this
                    (Obviously this is not set in stone, and making your own personal adjustments is always welcomed):
                </Paragraph>
                <Pane id="fss-readme-instructions-list" marginTop="default">
                    {instructions}
                </Pane>
            </ReadmeInstructions>
            <ReadMoreText>
                You can read more about writing good Readmes here:
                <UnorderedList size={StyleConstants.text.size.normal} icon="link">
                    <ListItem>
                        <a href="https://www.makeareadme.com/">Make a Readme</a> by <a href="https://www.dannyguo.com/">Danny Guo</a>
                    </ListItem>
                    <ListItem>
                        <a href="https://medium.com/@meakaakka/a-beginners-guide-to-writing-a-kickass-readme-7ac01da88ab3">A Beginners Guide to writing a Kickass README ✍</a> by <a href="https://medium.com/@meakaakka">Akash Nimare</a>
                    </ListItem>
                    <ListItem>
                        <a href="https://gist.github.com/PurpleBooth/109311bb0361f32d87a2">README-Template</a> by <a href="https://gist.github.com/PurpleBooth">Billie Thompson</a>
                    </ListItem>
                </UnorderedList>
            </ReadMoreText>
        </ReadmeStepPage>
    );
};

export default ReadmePage;
