import styled from "styled-components";
import { Pane } from "evergreen-ui";

import StylesConstants from '../../styles/constants';

export const FootstepsHeader = styled(Pane).attrs({
  is: "header",
  background: "tint2",
  border: true
})`
  width: ${StylesConstants.sizes.full};

  padding: 0.5rem 1.5rem;
`;