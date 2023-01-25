module.exports = ({ name, description, author, content, peerDependencies }) => `
# ${name}

${description.replace("date-fns", "`date-fns`")}

## Install

\`\`\`
npm i ${name}}
\`\`\`

${content}

`;
