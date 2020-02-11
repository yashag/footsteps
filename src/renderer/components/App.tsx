import {hot} from "react-hot-loader/root";

import React, {FunctionComponent} from "react";

import Footer from "./footer/Footer";
import StepsContainer from "./steps-manager/StepsContainer";

import "./app.scss";

const App: FunctionComponent = () => (
    <>
        <main id="fss-app">
            <StepsContainer />
        </main>
        <Footer />
    </>
);

export default hot(App);
