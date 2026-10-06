// `model` (optional) is a .glb file in /public shown in a 3D viewer on the project page
export const PROJECTS = [
  {
    id: "kirby-mario-galaxy",
    title: "Kirby x Mario Galaxy Redesigned in Unity 3D",
    meta: "Baltimore, MD · September 2025",
    tag: "Unity · C# · Blender",
    summary: "A reimagining of a Mario Galaxy-style level in Unity, built around a custom faux gravity system for spherical open-world traversal.",
    bullets: [
      "Created custom animations utilizing Unity's built-in animator.",
      "Developed a faux gravity system in C# for a spherical open-world traversal experience.",
      "Altered 3D models in Blender.",
    ],
  },
  {
    id: "3d-printed-tricopter",
    title: "3D Printed Tricopter",
    meta: "Baltimore, MD · May 2025 – Present",
    tag: "C · Arduino · Blender",
    summary: "A custom multirotor build combining 3D-printed hardware with a modified open-source flight stabilization system.",
    model: "tricopter.glb",
    bullets: [
      "Modifying an open-sourced Arduino-based flight stabilization system to fit a custom multirotor setup in C.",
      "Designing circuits for radio communication.",
      "Soldering electronic components to boards for custom wiring setups.",
      "Designing & 3D printing the body of a Tricopter in Blender.",
    ],
  },
  {
    id: "discord-bot",
    title: "Discord Bot",
    meta: "Baltimore, MD · August 2022 – Present",
    tag: "Python · BeautifulSoup · SQLite · RegEx",
    summary: "A web-scraping Discord bot that sends update notifications for manga releases and manages per-server game data.",
    bullets: [
      "Developing a web scraping Discord bot for sending recent updates on manga releases.",
      "Analyzing data collected from websites in a database using BeautifulSoup, RegEx, and SQLite.",
      "Managing user information and storing it in a database for games in Discord servers.",
    ],
  },
  {
    id: "PoserAI",
    title: "PoserAI",
    meta: "Baltimore, MD · January 2024 – Present",
    tag: "React · Python · Node.js  · SQLite ",
    summary: "A web chat bot for skateboarding knowledge, generating images of the user skateboarding, and teaching skate lessons. Because who doesn't want to be a skater? or at least look like one....",
    bullets: [
      "Developing a web application that utilizes the OpenAI API to generate 3D character poses based on user input.",
      "Implementing a React frontend with a Node.js and Express backend for seamless user experience.",
      "Storing user-generated poses and preferences in a MongoDB database for future retrieval and customization.",
    ],
  }
]
