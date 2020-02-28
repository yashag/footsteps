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

    constructor(props: ProjectInfoContextProps) {
        super(props);

        this.updateProjectInfo = this.updateProjectInfo.bind(this);
    }

    public updateProjectInfo(updatedInfo: Partial<ProjectInfoContextState>): void {
        this.setState({...this.state, ...updatedInfo});
    }

    public render(): React.ReactNode {
        return (
            <ProjectInfoContext.Provider value={{...this.state, updateProjectInfo: this.updateProjectInfo}}>
                {this.props.children}
            </ProjectInfoContext.Provider>
        );
    }
}

export default ProjectInfoContextProvider;
