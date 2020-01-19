import React, {Component, Context, createContext, ReactNode} from "react";

const initialState = {name: "", description: "", codeName: ""};
type ProjectInfoContextProps = {
    children?: ReactNode
};
type ProjectInfoContextState = Readonly<typeof initialState>;

export interface IProjectInfoContextConsumer extends Partial<ProjectInfoContextState> {
    updateProjectInfo?: (updatedInfo: Partial<ProjectInfoContextState>) => void;
}
export const ProjectInfoContext: Context<IProjectInfoContextConsumer> = createContext<IProjectInfoContextConsumer>(initialState);

class ProjectInfoContextProvider extends Component<ProjectInfoContextProps, ProjectInfoContextState> {
    public state: ProjectInfoContextState = {...initialState};

    public updateProjectInfo(updatedInfo: Partial<ProjectInfoContextState>): void {
        this.setState({...this.state, ...updatedInfo});
    }

    public render(): JSX.Element {
        return (
            <ProjectInfoContext.Provider value={{...this.state, updateProjectInfo: this.updateProjectInfo}}>
                {this.props.children}
            </ProjectInfoContext.Provider>
        );
    }
}

export default ProjectInfoContextProvider;
