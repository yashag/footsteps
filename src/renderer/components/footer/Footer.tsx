import React, {FunctionComponent} from "react";
import { FootstepsFooter, FooterLink } from "./footer.styles";

const Footer: FunctionComponent = () => (
    <FootstepsFooter>
        <span>© Created by <FooterLink href="https://github.com/yashag" target="_blank">Yasha Gootkin</FooterLink></span>
    </FootstepsFooter>
);

export default Footer;
