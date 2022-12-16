// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "GNU AGPLv3") {
    return "![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)";
  } else if (license === "GNU GPLv3") {
    return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
  } else if (license === "GNU LGPLv3") {
    return "![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)";
  } else if (license === "MPL 2.0") {
    return "![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)";
  } else if (license === "Apache 2.0") {
    return "![License: Apache 2.0 (https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
  } else if (license === "Boost Software 1.0") {
    return "![License: Boost Software 1.0](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]";
  } else if (license === "MIT") {
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  } else if (license === "Unlicense") {
    return "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]";
  } else {
    return " ";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "GNU AGPLv3") {
    return "[License link: AGPL v3](https://www.gnu.org/licenses/agpl-3.0)";
  } else if (license === "GNU GPLv3") {
    return "[License link: GPL v3](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "GNU LGPLv3") {
    return "[License link: LGPL v3](https://www.gnu.org/licenses/lgpl-3.0)";
  } else if (license === "MPL 2.0") {
    return "[License: MPL 2.0](https://opensource.org/licenses/MPL-2.0)";
  } else if (license === "Apache 2.0") {
    return "[License link: Apache 2.0] (https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "Boost Software 1.0") {
    return "[License link: Boost Software 1.0](https://www.boost.org/LICENSE_1_0.txt)]";
  } else if (license === "MIT") {
    return "[License link: MIT](https://opensource.org/licenses/MIT)]";
  } else if (license === "Unlicense") {
    return "[License link: Unlicense](http://unlicense.org/)";
  } else {
    return " ";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != "") {
    return "";
  } else {
    return data.license;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# Project Title
${data.title}
${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}
# Description
${data.description}
# Table of Contents 
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#Installation)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Contact-Information)
  
# Installation
${data.installation}
# Usage
${data.usage}
# License 
${data.license}
# Contributing 
${data.contributing}
# Tests
${data.tests}
# Contact Information 
* GitHub Username: [${data.userName}](https://www.github.com/${data.userName})
* Contact Email: ${data.Email}
`;
}

module.exports = generateMarkdown;

// GNU AGPLv3  return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
// GNU GPLv3 return [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
// GNU LGPLv3  return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
// Mozilla Public License 2.0 return [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0);
// Apache License 2.0   return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
// MIT License  return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
// Boost Software License 1.0   return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
// The Unlicense return [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/);
