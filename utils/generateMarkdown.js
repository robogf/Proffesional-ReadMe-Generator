// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

  ##Description 
  ${data.Description}

  ## Table of Contents 
  [Installation](#installation)
  [Usage](#usage)
  [Tests](#tests)
  [Contributers](#contributing)
  [User Links](#Links)

  ## installation 
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Tests 
  ${data.tests}

  ## Contributers
  ${data.contributing}

  ## Links 
  --[Author's Github](https://github.com/${data.github}) \n
 --Email: ${data.email}
`;
}

module.exports = generateMarkdown;
