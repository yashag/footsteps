import { MARKDOWN_CELL_SIZE } from "./MarkdownExample";
import styled, { css } from "styled-components";
import { Table, Paragraph, Pane } from "evergreen-ui";

import { StepPage, StepPageSeparator } from "../../styles/generic-step.styles";

/* Page Layout */
export const ReadmeStepPage = styled(StepPage)`
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(auto-fit, 1fr);
    grid-template-areas: "header" "separator" "instructions";
`;

export const ReadmeStepPageHeader = styled.header`
    grid-area: header;
`;

export const ReadmePageSeparator = styled(StepPageSeparator)`
    grid-area: separator;
`;

/* Readme Instructions */
export const ReadmeInstructions = styled(Pane)`
    grid-area: instructions;
    margin-top: 0.6rem;
`;

/* Instruction example table cells */
type CELL_SIZE = { size?: MARKDOWN_CELL_SIZE };
const cellFlexGrow = css<CELL_SIZE>`
    flex-grow: ${({ size }) => size ?? MARKDOWN_CELL_SIZE.NORMAL}
`;
export const InstructionExampleHeaderCell = styled(Table.HeaderCell) <CELL_SIZE>`
    ${cellFlexGrow}
`;
export const InstructionExampleCell = styled(Table.Cell) <CELL_SIZE>`
    ${cellFlexGrow}
`;

/* Instruction example markdown */
export const InstructionExampleMarkdownText = styled(Paragraph).attrs({
    size: 500,
    color: "dark",
    fontFamily:'mono'
})`
    padding: 0.4rem 0;
    white-space: pre-wrap;
`;