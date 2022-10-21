// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "None") {
    return ""
  }
  else if (license == "Apache 2.0 License") {
    return "(https://opensource.org/licenses/Apache-2.0)"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "None") {
    return ""
  }
  else {
    return `\n## License
    \nThis project is licensed under the ${license}.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  \n## Description
  \n${data.description}
  \n## Table of Contents
  \n- [Installation](#installation)
  \n- [Usage](#usage)
  \n- [License](#license)
  \n- [Contributing](#contributing)
  \n- [Tests](#tests)
  \n- [Questions](#questions)
  \n## Installation
  \nInstall the project by:
  \n${data.install}
  \n## Usage
  \n${data.usage}
  ${renderLicenseSection(data.license)}
  \n## Contributing
  \n${data.contributing}
  \n## Tests
  \nTo run tests, run the following command:
  \n${data.test}
  \n## Questions
  \nIf you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at ${data.username}.
`;
}

module.exports = generateMarkdown;
