
import './ProjectPage.css';
import mern from '../assets/mern.png';
import ecommerce from '../assets/ecommerce.png';
import githubdet from '../assets/githubdet.png';
import entertainment from '../assets/entertainment.png';
import stock from '../assets/stock.jpg';
import todo from '../assets/todo.png';
import tic from '../assets/tic.png';
import weather from '../assets/weather.png';
import api from '../assets/api.png';

const projects = [
  {
    id: 1,
    title: 'Ashutosh\'s Blog',
    description: 'A blog writing application created using MERN stack and OAuth authentication.',
    imgSrc: mern,
    liveDemoLink: 'https://mern-blog-wah1.onrender.com/',
    githubLink: 'https://github.com/AshutoshSarkar/mern-blog'
  },
  {
    id: 2,
    title: 'E-MART',
    description: 'An e-commerce website created using React, redux and Context API.',
    imgSrc: ecommerce,
    liveDemoLink: 'https://emartttttt.netlify.app/',
    githubLink: 'https://github.com/AshutoshSarkar/E_MART'
  },
  {
    id: 3,
    title: 'GitHub Detector',
    description: 'A web application to search GitHub users using GitHub API created using HTML, CSS and JavaScript.',
    imgSrc: githubdet,
    liveDemoLink: '#',
    githubLink: 'https://github.com/AshutoshSarkar/Github-detective'
  },
  {
    id: 4,
    title: 'Entertainment Hub',
    description: 'A web application to search movies and TV shows using TMDB API created using React.',
    imgSrc: entertainment,
    liveDemoLink: '#',
    githubLink: 'https://github.com/AshutoshSarkar/Entertainment-hub'
  },
  {
    id: 4,
    title: 'Stock Price Predictor',
    description: 'A Web application created using python and machine learning to predict future price of a particular stock .',
    imgSrc: stock,
    liveDemoLink: '#',
    githubLink: 'https://github.com/AshutoshSarkar/Stock-Price-Predictor'
  },
  {
    id: 4,
    title: 'Blog application backend API',
    description: 'A complete backend api design for blog application created using MERN Stack.',
    imgSrc: api,
    liveDemoLink: '#',
    githubLink: 'https://github.com/AshutoshSarkar/blog-app-backend-design'
  },
  {
    id: 4,
    title: 'Garage Management System',
    description: 'A web application to manage functionalities of a garage created using MERN stack with OTP verification.',
    imgSrc: api,
    liveDemoLink: '#',
    githubLink: 'https://github.com/AshutoshSarkar/garage-management-system-'
  },
  {
    id: 4,
    title: 'Todo App',
    description: 'A simple todo application created using HTML, CSS and JavaScript.',
    imgSrc: todo,
    liveDemoLink: '#',
    githubLink: 'https://github.com/AshutoshSarkar/to-do-backend-design'
  },
  {
    id: 4,
    title: 'Mini Projects',
    description: 'Small projects created using HTML, CSS and JavaScript.',
    imgSrc: weather,
    liveDemoLink: '#',
    githubLink: 'https://github.com/AshutoshSarkar/mini-projects'
  },
  {
    id: 4,
    title: 'Tic-Tac-Toe Game',
    description: 'A simple tic-tac-toe game created using HTML, CSS and JavaScript.',
    imgSrc: tic,
    liveDemoLink: '#',
    githubLink: 'https://github.com/AshutoshSarkar/tic-tac-toe'
  },
  {
    id: 4,
    title: 'Authentication Backend API',
    description: 'A complete backend api design for authentication system created using MERN Stack.',
    imgSrc: api,
    liveDemoLink: '#',
    githubLink: 'https://github.com/AshutoshSarkar/authentication-backend-design'
  },
  {
    id: 4,
    title: 'File and Folder Upload backend API',
    description: 'A complete backend api design for file and folder upload system created using MERN.',
    imgSrc: api,
    liveDemoLink: '#',
    githubLink: 'https://github.com/AshutoshSarkar/FileNFolder-Upload-Backend-Design'
  }
];

const ProjectPage = () => {
  return (
    <section id="projects">
      <h1 className="project-title">My Projects</h1>
      <div className="projects-container">
        {projects.map(project => (
          <div key={project.id} className="color-container">
            <img src={project.imgSrc} alt={project.title} className="project-img" />
            <h2>{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <div className="button-group">
              <a href={project.liveDemoLink} className="project-btn">Live Demo</a>
              <a href={project.githubLink} className="project-btn">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectPage;
