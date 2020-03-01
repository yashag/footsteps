import React, { FunctionComponent } from "react";
import { Table } from "evergreen-ui";
import Markdown from "markdown-to-jsx";
import { InstructionExampleCell, InstructionExampleHeaderCell, InstructionExampleMarkdownText } from "./readme-page.styles";

export enum MARKDOWN_CELL_SIZE {
    NORMAL = 1,
    BIG = 2,
    LARGE = 3
}

interface IColumn {
    header: string,
    size?: MARKDOWN_CELL_SIZE
};

interface IMarkdownExampleProps {
    columns: IColumn[],
    data: string[][];
};


const MarkdownExample: FunctionComponent<IMarkdownExampleProps> = ({ columns, data }) => {

    return <Table marginTop={20} border>
        <Table.Head height={50}>
            {columns.map((column: IColumn, headerIndex: number) => {
                const {header, ...headerOptions} = column;
                return (
                    <InstructionExampleHeaderCell key={headerIndex} {...headerOptions}>{header}</InstructionExampleHeaderCell>
                );
            })}
        </Table.Head>
        <Table.Body>
            {data.map((row: string[], rowIndex: number) => {
                return (
                    <Table.Row key={rowIndex} height="auto">
                        {row.map((cell: string, cellIndex: number) => (
                            <InstructionExampleCell key={cellIndex} size={columns[cellIndex].size}>
                                <InstructionExampleMarkdownText>{cell}</InstructionExampleMarkdownText>
                            </InstructionExampleCell>
                        ))}
                        <Table.Cell>
                            <Markdown children={row[0]} />
                        </Table.Cell>
                    </Table.Row>
                )
            })}
        </Table.Body>
    </Table>;
};

export default MarkdownExample;