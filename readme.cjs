module.exports = ({ name, description, content }) => `
# ${name}

${description.replace("date-fns", "`date-fns`")}

## Install

\`\`\`
npm i ${name}   
\`\`\`

${content}

`;
