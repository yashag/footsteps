import React, { FunctionComponent, ReactNode } from "react";
import { Pane, Heading, Paragraph } from "evergreen-ui";

interface IInstructionProps {
    title: string,
    content: ReactNode,
    children?: ReactNode
};

const Instruction: FunctionComponent<IInstructionProps> = ({ title, content, children }) => {
    return <Pane marginTop={20}>
        <Heading is="h3" size={600}>{title}</Heading>
        <Paragraph size={500} marginTop="default" color="muted">
            {content}
        </Paragraph>
        {children}
    </Pane>;
}

export default Instruction;