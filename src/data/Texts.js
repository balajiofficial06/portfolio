import todoimg from '../components/images/todo.png'
import employeTrakingImg from '../components/images/employee-tracking.jpg'
import portfolioImg from '../components/images/portfolioCover.jpg'
import tourBookingImg from '../components/images/tourBooking.jpg'


export const Texts = {
  aboutme:
    "I am a dedicated software developer with a passion for continual learning and growth. With a strong commitment to staying ahead in the ever-evolving tech landscape, I consistently seek out new knowledge and skills to enhance my expertise. Proficient in problem-solving and adept at generating innovative ideas, I strive to create efficient and impactful solutions in the world of software development. Download my CV to view my exprience and skills.",
};

export const projects = [
  {
    title: "Todo App",
    url: "https://todo-devs.netlify.app/",
    images: todoimg,
    description:
      "A simple task management application built using the MERN stack for efficient organization and tracking of tasks.",
    stack: "frontend",
  },
  {
    title: "Employee Tracker",
    images: employeTrakingImg,
    url: "https://github.com/balajiofficial06/employe_tracker.git",
    description:
      "An employee management system created using the MERN stack, designed to keep track of employee details, attendance, and performance.",
    stack: "fullstack",
  },
  {
    title: "Personal Portfolio",
    url: "https://github.com/balajiofficial06/portfolio.git",
    images: portfolioImg,
    description:
      "A personal portfolio website showcasing your skills, experience, and projects, developed using the MERN stack to highlight your professional achievements.",
    stack: "frontend",
  },
  {
    title: "Tour Booking App",
    images: tourBookingImg,
    url: "https://github.com/balajiofficial06/Natours.git",
    description:
      "A comprehensive tour booking application created with the MERN stack to facilitate the booking and management of tours, activities, and accommodations.",
    stack: "backend",
  },
];
