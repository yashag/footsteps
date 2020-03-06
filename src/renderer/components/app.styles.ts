import styled from "styled-components";

import { FootstepsFooter } from "./footer/footer.styles";
import StyleConstants from '../styles/constants';

export const FootstepsApp = styled.main `
    min-height: calc(${StyleConstants.sizes.full} - ${StyleConstants.footer.height});

    background-color: ${StyleConstants.palette.backgroundColor};
`;