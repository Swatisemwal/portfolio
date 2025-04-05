import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  
  html,
  css,
  reactjs,
 
  tailwind,
  
  starbucks,
  tesla,

  carrent,
  jobit,
  tripguide,

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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Javascript Developer",
    icon: backend,
  },
  {
    title: "Web Designer",
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
    name: "React JS",
    icon: reactjs,
  },
  
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "HITGOC ",
    icon: starbucks,
    iconBg: "#383E56",
    date: "January 2023 - July 2023",
    points: [
      "Developed server-side applications using NextJS that reduced response time.",
      "Used Apollo Client for GraphQL integration, which resulted in a reduction in API response time",
      "Developed and implemented React components using React Router to enhance navigation UX.",
      "Integrated context api for state management, optimizing application performance and reducing load time",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "MomKidCare Company",
    icon: tesla,
    iconBg: "#2c335c",
    date: "March 2024 - November 2024",
    points: [
      "Enhanced user experience by optimizing components forefficiency and minimizing load times, reducing page load by 30%.",
      "Integrated RESTful APIs to ensure dynamic content and updated user data on the client side, troubleshooting and resolving front-end issues for a smooth workflow",
      "Built a comprehensive admin dashboard for bookings, allowing client administrators to efficiently manage bookings, view analytics, and track user engagement.",
      "Implemented complex data visualization features with charts and tables to present booking trends, using React and charting libraries.",
    ],
  },
];

const projects = [
  {
    name: "Admin Dashboard",
    description:
      "A responsive and user-friendly admin dashboard built using React and Tailwind CSS. It features dynamic data visualization, user management, and real-time updates. The dashboard includes interactive charts, authentication, CRUD operations, and role-based access control—designed to provide seamless backend management for web applications.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Hotel & Stay Project",
    description:
      "A fully responsive hotel booking web application designed to enhance the travel experience. Built with modern web technologies like React, Tailwind CSS, and Firebase, it allows users to search, filter, and book accommodations with ease. Features include real-time room availability, booking management, secure authentication, and perfect for showcasing dynamic UI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next>js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://www.mohansbinsarretreat.com/",
  },
  {
    name: "Mayank Resort",
    description:
      "A visually appealing and fully responsive user interface for a luxury resort website. Designed using modern UI/UX principles with tools like HTML, CSS, and Tailwind CSS. The interface includes elegant layouts for home, rooms, gallery, and contact pages—crafted to deliver a smooth and engaging user experience for potential guests.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://www.mayanksrudrakshresort.com/",
  },
];

export { services, technologies, experiences, projects };
