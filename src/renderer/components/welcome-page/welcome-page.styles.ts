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
`;

const logoWidth = 22;
const logoHeight = 13;
export const FootstepsLogo = styled.img`
  width: ${logoWidth}rem;
  height: ${logoHeight}rem;

  @media (max-width: 600px) {
    width: ${logoWidth / 2}rem;
    height: ${logoHeight / 2}rem;
  }

  @media (max-width: 250px) {
    width: ${logoWidth / 4}rem;
    height: ${logoHeight / 4}rem;
  }
`;

export const WelcomeTitleText = styled(StepPageTitle)`
  margin-top: 0;
  text-align: center;
`;

export const WelcomeContent = styled(Paragraph)`
  grid-area: content;
  margin-top: ${StyleConstants.spacing.small};

  padding: 0 4rem;

  font-size: 26px;
  line-height: 34px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 18px;
    padding: 0;
  }

  @media (max-width: 250px) {
    font-size: 10px;
    padding: 0;
  }
`;

/* Page actions */
export const ActionsPanel = styled(Pane)`
  grid-area: actions;
  margin-top: 2rem;

  text-align: center;
`;