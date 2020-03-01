import styled from "styled-components";
import { TextInputField } from "evergreen-ui";

import { StepPage } from "../../styles/generic-step.styles";
import StyleConstants from '../../styles/constants';

/* Page Layout */
export const BasicInfoStepPage = styled(StepPage)`
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 1fr 3fr;
  grid-template-areas:
  "header"
  "form";
`;

export const BasicInfoStepPageHeader = styled.header`
  grid-area: header;
`;

/* Info form */
export const BasicInfoForm = styled.form`
  grid-area: form;
`;

export const BasicInfoFormField = styled(TextInputField)`
  width: 16rem;

  &:focus {
    box-shadow: inset 0 0 2px rgba(67, 90, 111, 0.14), inset 0 0 0 1px ${StyleConstants.palette.mediumColor}, 0 0 0 3px #daf3ebba;
  }
`;