import {FunctionComponent} from "react";

export enum Steps {
    WELCOME,
    PROJECT_TYPE,
    BASIC_INFO,
    REPOSITORY,
    README
}

export interface StepProps {
    moveToStep: (nextPage?: Steps) => void;
}

export type StepComponent = FunctionComponent<StepProps>;

export type StepToComponent = {
    [key in Steps]: StepComponent;
};
