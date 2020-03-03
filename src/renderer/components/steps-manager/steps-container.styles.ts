import styled from "styled-components";

import Header from "../header/Header";

export const FootStepsHeaderContainer = styled(Header)`
    position: fixed;
    top: 0;

    z-index: 10;
`;

export const FootstepsStepsContainer = styled.div`
    min-height: inherit;
    padding-bottom: 2rem;
`;