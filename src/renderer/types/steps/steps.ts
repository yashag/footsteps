export enum Steps {
    WELCOME,
    PROJECT_TYPE,
    BASIC_INFO
}

export interface StepProps {
    moveToStep: (nextPage: Steps) => void;
}

export type StepComponent = (props: StepProps) => JSX.Element;

export type StepToComponent = {
    [key in Steps]: StepComponent;
};
