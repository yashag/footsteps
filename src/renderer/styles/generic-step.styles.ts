import styled from "styled-components";
import { Heading, Paragraph, Button, Code, SidebarTab } from "evergreen-ui";

import StyleConstants from "./constants";

export const StepPage = styled.div`
  display: grid;
  grid-auto-rows: minmax(min-content, max-content);

  height: ${StyleConstants.size.full};

  padding: 0 4rem;
`;

export const StepPageTitle = styled(Heading).attrs({
  is: "h1",
  size: 900
})`
  margin-top: 1rem;

  color: ${StyleConstants.palette.mainColor};
`;

const descriptionFontSize: number = 22;
export const StepPageDescription = styled(Paragraph).attrs({
  marginTop: "default"
})`
  font-size: ${descriptionFontSize}px;
  line-height: ${descriptionFontSize + 10}px;
  text-align: justify;
`;

const buttonIconSize: number = 1.6;
export const StepPageButton = styled(Button)`
  & > svg.fss-step-page-button-icon {
    width: ${buttonIconSize}rem;
    height: ${buttonIconSize}rem;
  }
`;

const tabIconSize: number = 1;
export const StepPageTab = styled(SidebarTab)`
  &[role="tab"] > svg.fss-step-page-button-icon, &[role="tab"] > span > svg.fss-step-page-button-icon {
    margin-right: 0.6rem;
    width: ${tabIconSize}rem;
    height: ${tabIconSize}rem;
  }

  &:hover {
    background-color: ${StyleConstants.palette.lightColor};
    cursor: pointer;
  }

  &:focus {
    outline-color: ${StyleConstants.palette.lightColor}
  }

  &[aria-selected=true] {
    background-color: ${StyleConstants.palette.mediumColor};
  }
`;

export const StepPageSeparator = styled.div`
  height: 2px;
  width: ${StyleConstants.size.full};
  margin: 1rem 0;

  background-color: #ebecec;
`;

export const StepPageCodeSample = styled(Code)`
  display: inline-block;
  margin: 0.4rem 0;
`;