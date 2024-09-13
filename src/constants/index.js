import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Automation Engineer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "DIY Intern",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2022 - Mar 2022",
    points: [
      "I worked extensively with Figma, designing intuitive and user-friendly interfaces that enhance engagement.",
      "I transitioned into frontend development, implementing the UI and ensuring the final product was both aesthetically pleasing and functionally robust.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Apprenticeship",
    company_name: "Persistent Systems",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Apr 2022 - Jul 2022",
    points: [
      "I focused on mastering key programming languages like Python, C++, Java, and DBMS",
      "Built a strong foundation in multiple programming languages, enhanced my problem-solving abilities.",
      "Prepared for more advanced software development challenges.",
      "Worked extensively on debugging errors and code reviews.",
    ],
  },
  {
    title: "SDE Intern",
    company_name: "NIQ",
    icon: shopify,
    iconBg: "#383E56",
    date: "Feb 2023 - Jul 2023",
    points: [
      "I significantly expanded my technical skill set by mastering several key technologies and tools.",
      "I gained proficiency in Java and Python, both of which strengthened my programming fundamentals",
      "I delved into PySpark and Databricks, which enhanced my understanding of big data processing and distributed computing.",
      "I developed skills in DBeaver for database management and automation testing using Selenium, where I created automated test scripts to ensure web application quality.",
      "I explored AWS services, which enhanced my understanding of cloud computing and infrastructure management.",
      "This combination of skills has strengthened my capabilities in automation, data engineering, and cloud computing.",
    ],
  },
  {
    title: "Engineer",
    company_name: "NIQ",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "Jul 2023 - Present",
    points: [
      "As a full-time member of the QA team at NielsenIQ, I am responsible for ensuring the quality and reliability of our software products.",
      "My role involves conducting functional, smoke, and regression testing to verify that applications meet specified requirements and function as expected across different scenarios.",
      "In my role focusing on UI automation at NielsenIQ, I leverage a comprehensive tech stack that includes testing using tools, framework and languages like Maven, TestNG, Selenium and Java",
      "Additionally, I am actively learning Playwright, a modern automation framework that offers advanced capabilities for testing web applications.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Interact++",
    description:
      "Interact++ is a social media website that serves the purpose of efficient interaction between students in the same college.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "MERN stack",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Sign Language Recognition from Video Sequences",
    description:
      "A real-time end to end web application which used Deep learning models like CNN, RNN, Xgboost and mediapipe.",
    tags: [
      {
        name: "Deep Learning",
        color: "blue-text-gradient",
      },
      {
        name: "XgBoost",
        color: "green-text-gradient",
      },
      {
        name: "MediaPipe",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Stock Trend Prediction",
    description:
      "This project is designed to offer users a data-driven approach to forecasting future stock price movements using historical market data.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Keras",
        color: "green-text-gradient",
      },
      {
        name: "Streamlit",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
