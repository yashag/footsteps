import styled from "styled-components";

import StylesConstants from '../../styles/constants';

export const FootstepsFooter = styled.footer `
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;

    height: ${StylesConstants.footer.height};
    width: ${StylesConstants.sizes.full};

    background-color: ${StylesConstants.palette.lightColor};

    text-align: center;
`;

export const FooterLink = styled.a`
    text-decoration: none;
    color: ${StylesConstants.palette.linkColor};
`;