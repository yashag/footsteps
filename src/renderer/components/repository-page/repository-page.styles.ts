import styled from "styled-components";
import { Pane, Tablist, Button,Text } from "evergreen-ui";

import { StepPage, StepPageTab } from "../../styles/generic-step.styles";
import StyleConstants from '../../styles/constants';


/* Page Layout */
export const RepositoryStepPage = styled(StepPage)`
  grid-template-columns: repeat(1, 1fr);
  grid-template-areas: "header" "info" "vendors" "actions";
`;

export const RespositoryStepPageHeader = styled.header`
  grid-area: header;
`;

export const ProjectInfo = styled(Pane).attrs({
  is: "section"
})`
  grid-area: info;
`;

export const ProjectVendors = styled(Pane)`
    grid-area: vendors;
    display: flex;
    margin-top: ${StyleConstants.spacing.small};
`;

/* Repository tabs */
const vendorTabWidth = 12;
export const VendorsTablist = styled(Tablist)`
  flex-basis: ${vendorTabWidth}rem;
`;
export const VendorTab = styled(StepPageTab)`
  width: ${vendorTabWidth}rem;

  & > span {
    display: flex;
    align-items: center;
  }
`;

/* Repository tab panel */
export const VendorsDetailsContainer = styled(Pane).attrs({
  background: "tint1"
})`
  flex: 1;
  margin-left: ${StyleConstants.spacing.small};
`;

export const VendorLinkButton = styled(Button).attrs({
  is: "a"
})`
  height: ${StyleConstants.button.sizes.height.small}px;
  margin-top: 0.4rem;
`;

export const ProjectTip = styled(Text).attrs({
  color: "muted"
})`
  font-style: italic;
`;

/* Page actions */
export const ActionsPanel = styled(Pane)`
    grid-area: actions;
    margin-top: 3rem;
`;