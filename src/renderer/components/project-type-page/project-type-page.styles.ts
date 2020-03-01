import styled from "styled-components";
import { Pane, Text } from "evergreen-ui";

import { StepPage, StepPageButton } from "../../styles/generic-step.styles";
import StyleConstants from '../../styles/constants';

/* Page Layout */
export const ProjectTypeStepPage = styled(StepPage)`
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(auto-fit, 1fr);
  grid-template-areas: "header" "actions";
`;

export const ProjectTypeStepPageHeader = styled.header`
  grid-area: header;
`;

/* Page actions */
export const ActionsPanel = styled(Pane)`
  grid-area: actions;

  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;

  min-height: 12rem;
`;

export const ProjectTypeButton = styled(StepPageButton).attrs({
  height: StyleConstants.button.sizes.normal.height
})`
  width: 20rem;
  padding: 0 ${StyleConstants.spacing.small};

  & > svg, & > img {
    margin: 0;
  }
`;

export const ProjectTypeButtonText = styled(Text)`
  display: inline-block;
  margin-left: ${StyleConstants.spacing.small};
`;