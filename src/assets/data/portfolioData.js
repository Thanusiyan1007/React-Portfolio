import portfolioImg01 from "../images/portfolio-01.png";
import portfolioImg02 from "../images/portfolio-02.png";
import portfolioImg03 from "../images/portfolio-03.png";
import portfolioImg04 from "../images/portfolio-04.png";

const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg01,
    category: "Web-Design",
    title: "service Provider Website",
    description:
      "Developed a comprehensive web application for VNS Service Station, including features for service display,booking management, reminders, and an admin dashboard. Integrated real-time booking availability and an AI chatbot for service recommendations. The project utilizes React.js for the frontend and MySQL for the backend database. The goal was to create an easy-to-use platform for customers and administrators to manage services seamlessly.",
    technologies: ["React.js, MySQL, Node.js, Figma"],
    siteUrl: "https://github.com/Thanusiyan1007/VNS_SERVICE_STATION_PROJECT",
  },
  {
    id: "02",
    imgUrl: portfolioImg04,
    category: "UI/UX-Design",
    title: "Commercial Bank Digital User Interface",
    description:
      "Redesigned the Commercial Bank mobile app to improve usability and simplify navigation. The original app was difficult to use with a confusing layout, so I created a user-friendly, modern design that enhances the overall user experience, making banking simpler and more accessible.",
    technologies: [" Figma"],
    siteUrl: "https://www.behance.net/gallery/205184361/Commercial-Bank-Digital-User-Interface",
  },{
    id: "03",
    imgUrl: portfolioImg03,
    category: "UI/UX-Design",
    title: "ThuriSpark (PVT) LTD Webpage",
    description:
      "Created an intuitive, visually appealing webpage design for ThuriSpark, focusing on UI/UX to enhance the user experience for design services and educational courses. The design ensures smooth navigation and clear information flow.",
    technologies: [" Figma"],
    siteUrl: "https://www.behance.net/gallery/203388585/ThuriSpark-%28PVT%29-LTD",
  },{
    id: "04",
    imgUrl: portfolioImg02,
    category: "UI/UX-Design",
    title: "AdWise Campaign Management System",
    description:
      "Designed and developed the AdWise Campaign Management System to streamline the process of campaign creation, execution, and monitoring. Focused on user-centric design for easy navigation and an intuitive interface. The platform provides administrators with the tools to manage campaigns effectively, analyze performance, and optimize strategies for maximum impact. The project was built using React.js for the frontend and a modern design system created with Figma to ensure consistency and ease of use.",
    technologies: [" Figma"],
    siteUrl: "https://www.behance.net/gallery/206215125/Adwise-Campaign-Management-System",
  },
  
];

export default portfolios;
