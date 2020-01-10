export enum Steps {
    WELCOME,
    PROJECT_TYPE
}

export type StepToComponent = {
    [key in Steps]: () => JSX.Element;
};
