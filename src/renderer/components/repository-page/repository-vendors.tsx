import React from "react";

import BitbucketIcon from "../assets/bitbucket-icon.svg";
import GitHubIcon from "../assets/github-icon.svg";
import GitLabIcon from "../assets/gitlab-icon.svg";

export default [{
    name: "GitHub",
    newRepoLink: "https://github.com/new",
    icon: <GitHubIcon className="fss-step-page-button-icon" fill="#181717"/>,
    cloneHelpLink: "https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository"
}, {
    name: "Bitbucket",
    newRepoLink: "https://bitbucket.org/repo/create",
    icon: <BitbucketIcon className="fss-step-page-button-icon" fill="#0052CC"/>,
    cloneHelpLink: "https://confluence.atlassian.com/bitbucket/clone-a-repository-223217891.html"
}, {
    name: "GitLab",
    newRepoLink: "https://gitlab.com/projects/new",
    icon: <GitLabIcon className="fss-step-page-button-icon" fill="#FCA121"/>,
    cloneHelpLink: "https://docs.gitlab.com/ee/gitlab-basics/start-using-git.html#clone-a-repository"
}];
