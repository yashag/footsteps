import {Steps, StepToComponent} from "../../types/steps/steps";

import BasicInfoPage from "../../components/basic-info-page/BasicInfoPage";
import ProjectTypePage from "../../components/project-type-page/ProjectTypePage";
import RepositoryPage from "../../components/repository-page/RepositoryPage";
import WelcomePage from "../../components/welcome-page/WelcomePage";

const STEPS_MAPPING: StepToComponent = {
    [Steps.WELCOME]: WelcomePage,
    [Steps.PROJECT_TYPE]: ProjectTypePage,
    [Steps.BASIC_INFO]: BasicInfoPage,
    [Steps.REPOSITORY]: RepositoryPage
};

export default STEPS_MAPPING;
