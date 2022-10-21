// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "None") {
    return ""
  }
  else if (license == "Apache 2.0 License") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]"
  }
  else if (license == "Boost Software License 1.0") {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-blue.svg)]"
  }
  else if (license == "BSD 3-Clause License") {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]"
  }
  else if (license == "BSD 2-Clause License") {
    return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-blue.svg)]"
  }
  else if (license == "GNU General Public License v3.0") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]"
  }
  else if (license == "GNU General Public License v2.0") {
    return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]"
  }
  else if (license == "GNU Affero General Public v3.0") {
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]"
  }
  else if (license == "MIT License") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)]"
  }
  else if (license == "Mozilla Public License 2.0") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-blue.svg)]"
  }
  else if (license == "The Unlicense") {
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]"
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "None") {
    return ""
  }
  else if (license == "Apache 2.0 License") {
    return "(https://opensource.org/licenses/Apache-2.0)"
  }
  else if (license == "Boost Software License 1.0") {
    return "(https://www.boost.org/LICENSE_1_0.txt)"
  }
  else if (license == "BSD 3-Clause License") {
    return "(https://opensource.org/licenses/BSD-3-Clause)"
  }
  else if (license == "BSD 2-Clause License") {
    return "(https://opensource.org/licenses/BSD-2-Clause)"
  }
  else if (license == "GNU General Public License v3.0") {
    return "(https://www.gnu.org/licenses/gpl-3.0)"
  }
  else if (license == "GNU General Public License v2.0") {
    return "(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
  }
  else if (license == "GNU Affero General Public v3.0") {
    return "(https://www.gnu.org/licenses/agpl-3.0)"
  }
  else if (license == "MIT License") {
    return "(https://opensource.org/licenses/MIT)"
  }
  else if (license == "Mozilla Public License 2.0") {
    return "(https://opensource.org/licenses/MPL-2.0)"
  }
  else if (license == "The Unlicense") {
    return "(http://unlicense.org/)"
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
  \n${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}
  \n## Description
  \n${data.description}
  \n## Table of Contents
  \n- [Installation](#installation)
  \n- [Usage](#usage)
  ${((license) => {
      if (license == "None") {
        return ""
      }
      else {
        return "\n- [License](#license)"
      }
    })(data.license)
    }
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
  \nIf you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.username}](https://github.com/${data.username}).
`;
}

module.exports = generateMarkdown;
