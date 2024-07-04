const COMMANDS = [
  {
    command: "about",
    description: "About Me",
  },
  {
    command: "education",
    description: "My Education",
  },
  {
    command: "skills",
    description: "My Tech Skills",
  },
  {
    command: "projects",
    description: "My Tech Projects",
  },
  {
    command: "resume",
    description: "My Resume",
  },
  {
    command: "contact",
    description: "Contact Me",
  },
  // {
  //   command: "blog",
  //   description: "Visit my blog",
  // },
  // {
  //   command: "youtube",
  //   description: "Visit my youtube channel (@livecode247)",
  // },
  {
    command:
      // 'clear <span style="color: var(--primary)">(Ctrl+L shortcut)</span>',
      "clear",
    description: "Clear terminal",
  },
];

const getProjects = async () => {
  const projects = await (await fetch("/api/projects")).json();
  const projectHTML =
    `<h3>My Projects (You can scroll)</h3>` +
    projects
      .map(
        (project) => `<div class="command">
        <a href="${project.link}" target="_blank"><b class="command">${
          project.name
        }</b></a> - <b>${project.stack.join(", ")}</b>
        <p class="meaning">${project.description}</p>
      </div>`
      )
      .join("");
  return projectHTML;
};

const getContacts = async () => {
  const contactMediums = await (await fetch("/api/contacts")).json();
  return contactMediums
    .map(
      (contact) => `<div style="display: flex; justify-content: space-between;">
      <p style="font-size: 15px">${contact.medium}</p>
      <a class="meaning" href="${contact.link}" target="_blank">${contact.username}</a>
    </div>`
    )
    .join("");
};

export const CONTENTS = {
  help: () =>
    COMMANDS.map(
      (command) => `<div style="display: flex; justify-content: space-between;">
        <p style="font-size: 15px">${command.command}</p>
        <p>${command.description}</p>
      </div>`
    ).join("") +
    `<br />
      <div class="command">Type one of the above to view. For eg. <span style="color: var(--secondary)">about</span></div>`,
  about: () => `Hi 👋, I'm Karthik.<br/>
    Enthusiastic Full Stack Developer from Kochi, India, crafting user-friendly websites.
    Exploring Web3 and Machine Learning to bring innovation to every project.
    <br/><br/>`   
 ,
  education:
    () => `Pursuing a Bachelor of Technology in Computer Science at <a href="https://cusat.ac.in/" target="_blank">Cochin University of Science and Technology,Kochi</a> with an expected graduation in 2025.`,
  skills: () => `
  I am experienced with Javascript, Typescript and Python and the web technologies dominating at the time:<br />
  <div class="skill"><b>frameworks</b>: ReactJS, NextJS, Django, and Express<br /></div>
  <div class="skill"><b>database</b>: MongoDB, Firestore, and MySQL<br /></div>
  I also have good knowledge of git version control.<br /><br />

  `,
  projects: getProjects,
  contact: getContacts,
  resume: () => {
    window.open("https://drive.google.com/file/d/1wwaHhg3TomGhDizrPC7Z98NEMKmn82lP/view", "_blank");
    return "";
  },
  error: (input) =>
    `<div class="help-command">sh: Unknown command: ${input}</div><div class="help-command">See \`help\` for info`,
};

function getAge(dateString) {
  const today = new Date();
  const birthDate = new Date(dateString);

  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;

  return age;
}
