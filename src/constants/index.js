import {
  GATEWAY,
  FOOD,
  XOXO,
  INVESTMENTCALCULATER,
  PLACEPICKER,
  NEWSAPP,
  TECHQUIZ,
  js,
  mySQL,
  tail,
  sql,
  react,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  GWT,
  LD,
  ATS
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

export const services = [
  { title: "JS", icon: js },
  { title: "React", icon: react },
  { title: "SQL", icon: sql },
  { title: "Tailwind", icon: tail },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "SQL", icon: mySQL },
  // { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Assistant Programmer",
    company_name: "Labour Department, Govt of Karnataka",
    icon: LD,
    iconBg: "#161329",
    date: "April 2023 - Present",
    points: [
      "Department Software Management: Responsible for the efficient management of the Karnataka Building and Other Construction Workers' Welfare Board (KBOCWWB) software to ensure seamless operations.",
      "Software Development and Implementation for Registration and Schemes: Collaborated closely with the outsourced vendor Global INC team for the successful front-end development and implementation of the KBOCWWB software. This effort led to the successful registration of 5 Million users and the provision of benefits from 12 different Govt schemes to the registered users.",
      "Cess Collection Software Development and Implementation: Teamed up with the outsourced vendor EpicMinds IT Pvt. Ltd. to develop the BOCWB cess collection software, designed to collec approximately 555 Crores of cess annually"
    ],
  },
  {
    title: "Project Intern",
    company_name: "Annu Tech Solutions",
    icon: ATS,
    iconBg: "#161329",
    date: "March 2022 - June 2022",
    points: [
      "Trained on technologies like Html, CSS, Bootstrap, Javascript, SQLite, and Flask.",
      "Worked on real time project called “Food Supply Chain Management System”.",
    ],
  },
  {
    title: "Freelancer",
    company_name: "",
    icon: GWT,
    iconBg: "#161329",
    date: "December 2022 - March 2023",
    points: [
      "a ",
      " WXYZ",
    ],
  },
];

export const projects = [
  {
    name: "Gateway World Tour",
    description:
      "As a freelance project, developed a web application for Gateway World Tour, a travel agency, enabling users to book travel arrangements online. The application is hosted on GoDaddy. This application will give you a responsive user experience.",
    tags: [
      { name: "Flask", color: "pink-text-gradient" },
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "bootstrap 5.3.0", color: "pink-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
      { name: "Sqlite 3", color: "pink-text-gradient" },
    ],
    image: GATEWAY,
    source_code_link: "https://www.gatewayworldtour.com/tours",
  },
  {
    name: "Food Ordering App",
    description:
      "A user-friendly food ordering app that allows customers to browse menus, place orders, and track deliveries in real-time. Designed for convenience, it streamlines the entire food ordering process from selection to doorstep delivery.",
    tags: [
      { name: "ReactJS", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "blue-text-gradient" },
      { name: "Node JS", color: "blue-text-gradient" },
      { name: "Redux", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: FOOD,
    source_code_link: "https://github.com/Mallikarjun1540/Food_Court_App",
  },
  {
    name: "Daily News App (NewsMonkey)",
    description:
      "NewsMonkey - its an online news application where you can see day to day updated news. It fetches the top news from different online sources. ",
    tags: [
      { name: "ReactJS", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
      { name: "Fetching Daily News Using News API", color: "blue-text-gradient" },
    ],
    image: NEWSAPP,
    source_code_link: "https://github.com/Mallikarjun1540/NewsMonkey",
  },
  {
    name: "Tech Quiz",
    description:
      "Tech Quiz is an online quiz app designed to help users prepare for technical interviews. It offers topic-wise quizzes on programming, data structures, algorithms, and more. With real-time scoring and feedback, it provides an engaging and effective learning experience.",
    tags: [
      { name: "ReactJS", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "blue-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: TECHQUIZ,
    source_code_link:
      "https://github.com/Mallikarjun1540/React-Tech-Quiz",
  },
  {
    name: "XOXO Application (X-O-X Game)",
    description:
      "XOXO is a tic-tac-toe game built with React, featuring interactive gameplay and real-time winner detection. It showcases React hooks, state management, and responsive UI design.",
    tags: [
      { name: "ReactJS", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "blue-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: XOXO,
    source_code_link: "https://github.com/Mallikarjun1540/Tic-Tac-Toe-React-Game",
  },
  {
    name: "Investment Calculater",
    description:
      "An interactive Investment Calculator built using React to help users estimate returns based on inputs like amount, rate, and duration. It features dynamic updates and a responsive UI for a smooth user experience. Designed with reusable components and clean code structure.",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
    ],
    image: INVESTMENTCALCULATER,
    source_code_link: "https://github.com/Mallikarjun1540/Investment-Calculator",
  },
  {
    name: "PlacePicker",
    description:
      "A Place Picker app built with React that requests the user's location to display nearby places. It helps users quickly find and sort locations based on proximity",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
      { name: "User's Location to sort the places", color: "pink-text-gradient" },

    ],

    image: PLACEPICKER,
    source_code_link: "https://github.com/Mallikarjun1540/Placepicker-ReactApp",
  },
];
