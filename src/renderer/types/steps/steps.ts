export enum Steps {
    WELCOME,
    PROJECT_TYPE
}

export interface StepProps {
    moveToStep: (nextPage: Steps) => void;
}

export type StepComponent = (props: StepProps) => JSX.Element;

export type StepToComponent = {
    [key in Steps]: StepComponent;
};
