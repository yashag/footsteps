import {hot} from "react-hot-loader/root";

import React from "react";

import "./footer.scss";

const Footer: () => JSX.Element = () => (
    <footer id="fss-footer">
        <span>© Copyrighted to <a className="fss-copyright-link" href="https://github.com/yashag" target="_blank">Yasha Gootkin</a></span>
    </footer>
);

export default hot(Footer);
