import "./portfolio.css";
import mern from "../assets/mern.png";
import ecommerce from "../assets/ecommerce.png";
import githubdet from "../assets/githubdet.png";
import entertainment from '../assets/entertainment.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import redirect from '../assets/redirect.png';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import { faDumpsterFire } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const PortfolioComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="main-container">
      {/* Headings Section */}
      <div className="headings">
        <div className="main-heading" data-aos="fade-up">
          <h4>PORTFOLIO</h4>
        </div>
        <div className="secondary-heading" data-aos="fade-up" data-aos-delay="100">
          <h3>Each project is a unique piece of development &nbsp; <FontAwesomeIcon icon={faLeaf} style={{color: "#5baa4b",}} /></h3>
          
        </div>
      </div>

      {/* Project Content Section */}
      <div className="project-content">
        {/* Project 1: Ashutosh's Blog */}
        <div className="project-left" data-aos="fade-left">
          <div className="portfolio-images-left">
            <img src={mern} alt="mern-blog" />
          </div>
          <div className="portfolio-description-left">
            <h4>Ashutosh&apos;s Blog &nbsp; <FontAwesomeIcon icon={faBlog} style={{color: "#B197FC",}} /></h4>
            <p>
              A dynamic full-stack blog application built with the MERN stack and styled
              using Tailwind CSS. It allows users to create, read, update, and delete blog
              posts, providing an interactive platform for seamless content management
              and sharing.
            </p>
            <div className="tech-info">
              <p className="mongo">MongoDB</p>
              <p className="react">React</p>
              <p className="express">Express</p>
              <p className="node">Node.js</p>
              <p className="tailwind">Tailwind CSS</p>
              <p className="auth">OAuth</p>
              <p className="javascript">JavaScript</p>
            </div>
            <div className="code-info">
              <a href="https://github.com/AshutoshSarkar/mern-blog" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2xl"  style={{ color: "#000000" }} />
              </a>
              
              <a href="https://mern-blog-wah1.onrender.com/" target="_blank" rel="noopener noreferrer">
                <img src={redirect} alt="" />
              </a>
             
            </div>
          </div>
        </div>

        {/* Project 2: eMartt */}
        <div className="project-right" data-aos="fade-right">
          <div className="portfolio-description-right">
            <h4>E-MART &nbsp; <FontAwesomeIcon icon={faDumpsterFire} style={{color: "#5c2e0f",}} /></h4>
            <p>
              A responsive e-commerce web application developed using React and Context API 
              for efficient global state management. It provides users with a user-friendly interface 
              for product browsing, cart management, and checkout, offering a smooth and intuitive shopping experience.
            </p>
            <div className="tech-info">
              <p className="react">React</p>
              <p className="api">Context API</p>
              <p className="css">CSS</p>
              <p className="javascript">JavaScript</p>
            </div>
            <div className="code-info">
              <a href="https://github.com/AshutoshSarkar/E_MART" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2xl"  style={{ color: "#000000" }} />
              </a>
             
              <a href="https://emartttttt.netlify.app/" target="_blank" rel="noopener noreferrer">
                <img src={redirect} alt="" />
              </a>
             
            </div>
          </div>
          <div className="portfolio-images-right">
            <img src={ecommerce} alt="ecommerce" />
          </div>
        </div>

        {/* Project 3: GitHub Detector */}
        <div className="project-left" data-aos="fade-left">
          <div className="portfolio-images-left">
            <img src={githubdet} alt="github-detector" />
          </div>
          <div className="portfolio-description-left">
            <h4>GitHub Detector &nbsp; <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#000000",}} /></h4>
            <p>
              A React-based app that leverages the GitHub API to retrieve detailed information 
              about any GitHub user by entering their username. The app displays user profiles, 
              repositories, and activity data, making it easy to explore developer contributions.
            </p>
            <div className="tech-info">
              <p className="html">html</p>
              <p className="api">GitHub API</p>
              <p className="css">CSS</p>
              <p className="javascript">JavaScript</p>
            </div>
            <div className="code-info">
              <a href="https://github.com/AshutoshSarkar/Github-detective" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2xl"  style={{ color: "#000000" }} />
              </a>
              
              <img src={redirect} alt="" />
             
            </div>
          </div>
        </div>

        {/* Project 4: Entertainment Hub */}
        <div className="project-right" data-aos="fade-right">
          <div className="portfolio-description-right">
            <h4>Entertainment Hub &nbsp; <FontAwesomeIcon icon={faFilm} style={{color: "#000000",}} /></h4>
            <p>
              A movie and TV show discovery app built with React and powered by the MovieDB API. 
              Users can search for movies, explore trending content, and access detailed information 
              on films and series, offering a comprehensive entertainment browsing experience.
            </p>
            <div className="tech-info">
              <p className="react">React</p>
              <p className="api">MovieDB API</p>
          
              <p className="javascript">JavaScript</p>
              <p className="css">CSS</p>
            </div>
            <div className="code-info">
              <a href="https://github.com/AshutoshSarkar/Entertainment-hub" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2xl" style={{ color: "#000000" }} />
              </a>
              
              <a href="https://entertainment-hub.example.com/" target="_blank" rel="noopener noreferrer">
                <img src={redirect} alt="" />
              </a>
             <a href="https://entertainment-hub.example.com/" target="_blank" rel="noopener noreferrer" className="hello"></a> 
            </div>
          </div>
          <div className="portfolio-images-right">
            <img src={entertainment} alt="entertainment-hub" />
           
          </div>
         
         

       
        </div>
      </div>
      <Link to="/projects" className="total" >View More projects <FontAwesomeIcon icon={faArrowRight} /></Link>
    </div>
  );
};

export default PortfolioComponent;
