import React, { FunctionComponent, ReactNode } from "react";
import { Pane, Heading, Paragraph, Table } from "evergreen-ui";
import Markdown from "markdown-to-jsx";

interface IMarkdownExampleProps {
    data: string[][];
    options?: {
        classes?: string[]
    };
};

const MarkdownExample: FunctionComponent<IMarkdownExampleProps> = ({ data, options }) => {
    const [headers, ...rows] = data;

    return <Table marginTop={20} border className={options?.classes || ""}>
        <Table.Head height={50}>
            {headers.map((header: string) => (
                <Table.HeaderCell className="fss-table-header">{header}</Table.HeaderCell>
            ))}
        </Table.Head>
        <Table.Body>
            {rows.map((row: string[]) => {
                return (
                    <Table.Row height="auto">
                        {row.map((cell: string) => (
                            <Table.Cell className="fss-table-cell">
                                <Paragraph className="markdown-text" size={500} color="dark" fontFamily='mono'>{cell}</Paragraph>
                            </Table.Cell>
                        ))}
                        <Table.Cell className="fss-table-cell">
                            <Markdown children={row[0]} />
                        </Table.Cell>
                    </Table.Row>
                )
            })}
        </Table.Body>
    </Table>;
};

export default MarkdownExample;