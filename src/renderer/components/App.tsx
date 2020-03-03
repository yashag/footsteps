import {hot} from "react-hot-loader/root";

import React, {FunctionComponent} from "react";

import Footer from "./footer/Footer";
import StepsContainer from "./steps-manager/StepsContainer";

import GlobalStyle from "../styles/index.styles";
import { FootstepsApp } from "./app.styles";

const App: FunctionComponent = () => (
    <>
        <GlobalStyle />
        <FootstepsApp>
            <StepsContainer />
        </FootstepsApp>
        <Footer />
    </>
);

export default hot(App);
