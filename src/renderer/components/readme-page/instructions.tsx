import {Heading, ListItem, Pane, Paragraph, Table, UnorderedList} from "evergreen-ui";
import Markdown from "markdown-to-jsx";
import React, {ReactNode} from "react";

function renderSubSection(title: string, content: ReactNode, example?: ReactNode): ReactNode {
    return <Pane marginTop={20}>
        <Heading is="h3" size={600}>{title}</Heading>
        <Paragraph size={500} marginTop="default" color="muted">
            {content}
        </Paragraph>
        {example ? example : null}
    </Pane>;
}

interface IExamplesTable {
    headers: string[];
    values: ReactNode[][];
    options?: {
        classes?: string[]
    };
}

function renderMarkdownExample(examplesTable: IExamplesTable): ReactNode {
    return <Table marginTop={20} border className={examplesTable.options?.classes || ""}>
        <Table.Head height={50}>
            {examplesTable.headers.map((header: string) => (
                <Table.HeaderCell className="fss-table-header">{header}</Table.HeaderCell>
            ))}
        </Table.Head>
        <Table.Body>
            {examplesTable.values.map((row: ReactNode[]) => (
                <Table.Row height="auto">
                    {row.map((cell: ReactNode) => (
                        <Table.Cell className="fss-table-cell">{cell}</Table.Cell>
                    ))}
                </Table.Row>
            ))}
        </Table.Body>
    </Table>;
}

const titleMarkdown: string = `# FootSteps`;
const TitleSubSection = renderSubSection("Title",
    <>
        Obviously you should start with the name of your project. Either underline it with equal signs(=) or put a
        hash symbol(#) followed by a space in front of it.
        <br/>
        Another option is replacing the text version of your project's title with an image/logo.
        <br/>
    </>,
    renderMarkdownExample({
        headers: ["Option 1", "Options 2", "Rendered result"],
        values: [
            [<>FootSteps<br/>=========</>, titleMarkdown, <Markdown children={titleMarkdown}/>]
        ]
    })
);

const DescriptionSubSection = renderSubSection("Description",
    <>
        The description is your chance to shortly explain what your project is about: what it does, who are your
        potential clients, what problems are you solving.
        <br/>
        Example:
        <br/>
        Footsteps will help you and guide you through the process of creating your own project.
        You no longer have to memorize and worry about steps you forgot about. Just follow the footsteps!
        <br/>
        (Looks familiar?)
    </>
);

const badgesMarkdown: string[] = [
    `[![Generic badge](https://img.shields.io/badge/<SUBJECT>-<STATUS>-<COLOR>.svg)](https://shields.io/)`,
    `[![Coverage](https://img.shields.io/badge/mood-weird-blue.svg)](https://shields.io/)`,
    `[![GitHub license](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/yashag/footsteps/blob/master/LICENSE)`,
    `[![Github all releases](https://img.shields.io/github/downloads/Naereen/StrapDown.js/total.svg)](https://GitHub.com/Naereen/StrapDown.js/releases/)`
];
const BadgesSubSection = renderSubSection("Badges",
    <>
        You might have seen badges before, if you have had the chance to look at a Readme of a large project.
        Badges are essentially a customized label, which emphasizes a certain achievement/state of your project.
        Through badges you can show the number of downloads, code coverage, license, version of your project and
        much more. They may also serve as links to external content.
        To use badges you will need to externally create them first. You could do that with <a href="https://shields.io/">Shields</a>
    </>,
    renderMarkdownExample({
        headers: ["Markdown", "Rendered result"],
        values: [
            [
                <Paragraph className="markdown-text" size={500} color="dark">{badgesMarkdown[0]}</Paragraph>,
                <Markdown children={badgesMarkdown[0]}/>
            ], [
                <Paragraph className="markdown-text" size={500} color="dark">{badgesMarkdown[1]}</Paragraph>,
                <Markdown children={badgesMarkdown[1]}/>
            ], [
                <Paragraph className="markdown-text" size={500} color="dark">{badgesMarkdown[2]}</Paragraph>,
                <Markdown children={badgesMarkdown[2]} />
            ], [
                <Paragraph className="markdown-text" size={500} color="dark">{badgesMarkdown[3]}</Paragraph>,
                <Markdown children={badgesMarkdown[3]} />
            ]
        ],
        options: {
            classes: ["large-first-col"]
        }
    })
);

const VisualSubSection = renderSubSection("Visuals",
    <>
        Oftentimes it is easier to explain a concept using imagery. This is no exception.
        Adding screenshots, GIFs or even videos (depending on the markdown rendering engine or other creative solutions)
        will help users immensely in understanding what your project is intended for and how to efficiently use it.
    </>
);

const installationMarkdown: string = `
## Installation

You can install the package with either npm or yarn.

\`\`\`bash
npm install foobar
\`\`\``;
const InstallationSubSection = renderSubSection("Installation",
    <>
        Here you should show your users all the available ways to install your project. If there are any
        requirements/prerequisites this is the place to mention them.
    </>,
    renderMarkdownExample({
        headers: ["Markdown", "Rendered results"],
        values: [
            [<Paragraph className="markdown-text" size={500} color="dark">{installationMarkdown}</Paragraph>, <Markdown children={installationMarkdown} />]
        ]
    })
);

const usageMarkdown: string =
`## Usage

You can either require and use the code programmatically:

\`\`\`js
const footSteps = require('foot-steps');

footSteps.doNothing(); // does nothing
\`\`\`

Or you can use our code through the available CLI:

\`\`\`bash
npx fss do-nothing
\`\`\``;
const UsageSubsection = renderSubSection("Usage",
    <>
        State all the ways your project could be used. Here are several suggestions:
        <UnorderedList>
            <ListItem>Requiring the file at the top and calling a function/constructor</ListItem>
            <ListItem>Using CLI commands</ListItem>
            <ListItem>Running the project and calling and endpoint</ListItem>
        </UnorderedList>
        Obviously those are just suggestions. There might be a lot more ways to use your project.
        Make sure you explain them <strong>all</strong> clearly, so your users would be able to to setup quickly and easily.
        Also make sure you do not miss any important steps. If there are any extra steps or prerequisites to run your project, describe them in detail.
        Remember, the better your "Usage" description is, the more users would stick by your project and give it a better chance.
    </>,
    renderMarkdownExample({
        headers: ["Markdown", "Rendered Results"],
        values: [
            [<Paragraph className="markdown-text" size={500} color="dark">{usageMarkdown}</Paragraph>, <Markdown children={usageMarkdown} />]
        ]
    })
);

const supportMarkdown: string[] = [
`## Support

Tested in Chrome 74-75, Firefox 66-67, IE 11, Edge 18, Safari 11-12, & Node.js 8-12.
Works regardless of operating system.

Please lets us know if you have found any problem.
`,
`## Issues/Bugs

If you find any bug, please check if an existing issue was already reported in our Github repository page.
If not, please open an issue following our issues guidelines

[Github issues page](https://github.com/yashag/footsteps/issues)

[Gitter/Spectrum chat](https://spectrum.chat/footsteps)
`
];
const SupportSubsection = renderSubSection("Support/Bugs/Issues",
    <>
        When opening a Support/Bugs/Issues subsections, you mainly what your user to understand what to expect and how to handle the situation if something goes wrong.
        Which is why it is a good idea to state what you have tested and is definitely supported as well as where to turn to, so users can let you know if they have an issue.
        Any platform you are reachable on could potentially be used for that purpose, the more common ones being: Github issues page, Spectrum, Gitter, etc...
    </>,
    renderMarkdownExample({
        headers: ["Markdown", "Rendered Results"],
        values: [
            [<Paragraph className="markdown-text" size={500} color="dark">{supportMarkdown[0]}</Paragraph>, <Markdown children={supportMarkdown[0]} />],
            [<Paragraph className="markdown-text" size={500} color="dark">{supportMarkdown[1]}</Paragraph>, <Markdown children={supportMarkdown[1]} />]
        ],
        options: {
            classes: ["big-first-col"]
        }
    })
);

const futureMarkdown: string =
`## Roadmap

In future versions we plan to add:

* more steps
* automatic file creation
* steps completion checks
`;
const FutureSubsection = renderSubSection("Roadmap/Future plans",
    <>
        This is where you should talk about the next versions of your project: what will they entail, which issues will they address, what is your current timeline, etc..
    </>,
    renderMarkdownExample({
        headers: ["Markdown", "Rendered Results"],
        values: [
            [<Paragraph className="markdown-text" size={500} color="dark">{futureMarkdown}</Paragraph>, <Markdown children={futureMarkdown} />]
        ]
    })
);

const contributingMarkdown: string =
`## Contributing

You are welcome to push pull requests to our project, but please make sure you are following the contribution guidelines.
You can read them in the CONTRIBUTING.MD file in our Github repository.
`;
const ContributingSubsection = renderSubSection("Contributing",
    <>
        If you want contributions to be made to your project, or for collaborators to join you in maintaining it, this would be a perfect place to let them know.
        You should share a contribution guideline (more on that later) and elaborate on how exactly they can offer you help.
        For instance you might want people to submit their code fully tested, which is why you should acknowledge at this point that untested code would not be entering your repository.
    </>,
    renderMarkdownExample({
        headers: ["Markdown", "Rendered Results"],
        values: [
            [<Paragraph className="markdown-text" size={500} color="dark">{contributingMarkdown}</Paragraph>, <Markdown children={contributingMarkdown} />]
        ],
    })
);

const acknowledgmentsMarkdown: string =
`## Acknowledgments

I would like to thank all our amazing collaborators for giving their hand in making this an awesome project:

* [Yasha](https://github.com/yashag)
`;
const AcknowledgmentsSubsection = renderSubSection("Authors/Credits/Collaborators and acknowledgments",
    <>
        Speaking of collaboration, you should always express gratitude towards the people who have helped you along the road. This would be a great opportunity to do so.
    </>,
    renderMarkdownExample({
        headers: ["Markdown", "Rendered Results"],
        values: [
            [<Paragraph className="markdown-text" size={500} color="dark">{acknowledgmentsMarkdown}</Paragraph>, <Markdown children={acknowledgmentsMarkdown} />]
        ],
    })
);

const SponsorshipSubsection = renderSubSection("Sponsors/Backers",
    "Coming soon");

const licenseMarkdown: string[] = [
`## License

[MIT](https://choosealicense.com/licenses/mit/)
`,
`## License

This project is portected under the [BSD-3-Clause](https://opensource.org/licenses/BSD-3-Clause) license.
`,
`## License
Copyright 2020 Yasha Gootkin

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
`
];
const LicenseSubsection = renderSubSection("Authors/Credits/Collaborators and acknowledgments",
    <>
        We will touch on licenses later on, but it is a common practice to attach them you your Readme, either as a link or as copy pasted text.
    </>,
    renderMarkdownExample({
        headers: ["Markdown", "Rendered Results"],
        values: [
            [<Paragraph className="markdown-text" size={500} color="dark">{licenseMarkdown[0]}</Paragraph>, <Markdown children={licenseMarkdown[0]} />],
            [<Paragraph className="markdown-text" size={500} color="dark">{licenseMarkdown[1]}</Paragraph>, <Markdown children={licenseMarkdown[1]} />],
            [<Paragraph className="markdown-text" size={500} color="dark">{licenseMarkdown[2]}</Paragraph>, <Markdown children={licenseMarkdown[2]} />]
        ],
    })
);

const statusMarkdown: string =
`## Project Status

Please note this is project was created for educational purposes, hence it will no longer be supported.
Please do not use this in production under any circumstances.
`;
const StatusSubsection = renderSubSection("Project Status",
    <>
        You might have touched on this topic in the "Roadmap/Future plans" section,
        but if your project is slowing down, picking up th pace, deprecating anything, you might want to add this section as well.
    </>,
    renderMarkdownExample({
        headers: ["Markdown", "Rendered Results"],
        values: [
            [<Paragraph className="markdown-text" size={500} color="dark">{statusMarkdown}</Paragraph>, <Markdown children={statusMarkdown} />]
        ],
    })
);

export default [
    TitleSubSection,
    DescriptionSubSection,
    BadgesSubSection,
    VisualSubSection,
    InstallationSubSection,
    UsageSubsection,
    SupportSubsection,
    FutureSubsection,
    ContributingSubsection,
    AcknowledgmentsSubsection,
    SponsorshipSubsection,
    LicenseSubsection,
    StatusSubsection
];
