import styled from "styled-components";

import { StepPage, StepPageTitle } from "../../styles/generic-step.styles";
import StyleConstants from '../../styles/constants';
import { Paragraph, Pane } from "evergreen-ui";

/* Page Layout */
export const WelcomeStepPage = styled(StepPage)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto-fill, minmax(8rem, 1fr));
  grid-row-gap: 0.4rem;
  grid-template-areas:
          "title title title"
          "content content content"
          "actions actions actions";
  justify-content: center;
  align-content: stretch;
`;

export const WelcomeTitle = styled.div`
  grid-area: title;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  margin-top: 5rem;

  .fss-logo {
    width: 3rem;
    height: 3rem;
  }
`;

export const WelcomeTitleText = styled(StepPageTitle)`
  text-align: center;
`;

export const WelcomeContent = styled(Paragraph)`
  grid-area: content;

  margin: 0;
  padding: 0 4rem;

  font-size: 26px;
  line-height: 34px;
  text-align: center;
`;

/* Page actions */
export const ActionsPanel = styled(Pane)`
  grid-area: actions;
  margin-top: 2rem;

  text-align: center;
`;