import { Link } from 'react-router-dom';
import './AboutPage.css';
import image3 from '../assets/image3.png';
import certification from '../assets/certification.jpeg'; // Replace with your actual image paths
import certification2 from '../assets/certification2.jpg';
import certification3 from '../assets/certification3.jpg';
import certification4 from '../assets/certification4.jpg';
// import certification3 from '../assets/certification3.jpg';
// import certification3 from '../assets/certification3.jpg';
import { FaReact as ReactIcon, FaNodeJs as NodeIcon, FaJava as JavaIcon, FaGithub as GithubIcon, FaCss3Alt as CssIcon, FaHtml5 as HtmlIcon, FaGit as GitIcon, FaDatabase as DatabaseIcon } from 'react-icons/fa';
import { SiTypescript as TypescriptIcon, SiPython as PythonIcon, SiDart as DartIcon, SiExpress as ExpressIcon, SiNextdotjs as NextjsIcon, SiRedux as ReduxIcon, SiBootstrap as BootstrapIcon, SiSass as SassIcon, SiMongodb as MongodbIcon, SiFirebase as FirebaseIcon } from 'react-icons/si';
import { MdCode as VscodeIcon, MdOpenInBrowser as ChromeIcon, MdWeb as FirefoxIcon } from 'react-icons/md';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Profile Section */}
      <section className="profile-section">
        <div className="profile-photo-wrapper">
          <img
            src={image3}
            alt="Ashutosh Sarkar"
            className="profile-photo"
          />
        </div>
        <div className="button-group-s">
          <a
            href="https://drive.google.com/file/d/14mN0AMzfMS9_-2XMRm0KXXWVzT3ST-ZL/view?usp=sharing"
            className="btn view-resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=14mN0AMzfMS9_-2XMRm0KXXWVzT3ST-ZL"
            className="btn download-resume"
            download
          >
            Download Resume
          </a>
          <Link to="/contact" className="btn contact-me">
            Contact Me
          </Link>
        </div>
      </section>

      {/* Introduction */}
      <section className="introduction-section">
        <h2 className="intro-heading">I&apos;m Ashutosh Sarkar, Based in Mathura</h2>
        <p className="intro-paragraph">
          I am a self-taught, goal-oriented full-stack developer specializing in back-end and front-end development. I am deeply committed to perpetual learning and self-improvement, actively seeking opportunities to acquire new insights and refine my development skills, regardless of the circumstances, favorable or challenging.
        </p>
        <p className="intro-paragraph">
          As a Full-Stack Developer, I possess an impressive arsenal of skills in both frontend and backend technologies, including HTML, CSS, JavaScript, React, Tailwind, SCSS, as well as the MERN stack (MongoDB, Express, React, Node.js), SQL, authentication methods, Java, and Python. I excel in designing and maintaining responsive websites that offer a smooth user experience while crafting dynamic, engaging interfaces through clean and optimized code. With expertise in full-stack development, I leverage cutting-edge tools and techniques to build scalable applications. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web solutions.
        </p>
      </section>

      {/* Tech Stack and Skills Section */}
      <section className="skills-section">
        <h2 className="section-heading">Tech Stack and Skills</h2>
        <div className="skills-grid">
          {/* Card for Technologies */}
          <div className="skill-card tech-card">
            <h3>Technologies</h3>
            <p>Tools and frameworks I use to build robust applications.</p>
            <div className="icon-grid">
              <div className="icon-item"><ReactIcon size={40} /><span>React</span></div>
              <div className="icon-item"><NextjsIcon size={40} /><span>Next.js</span></div>
              <div className="icon-item"><NodeIcon size={40} /><span>Node.js</span></div>
              <div className="icon-item"><ExpressIcon size={40} /><span>Express</span></div>
              <div className="icon-item"><ReduxIcon size={40} /><span>Redux</span></div>
              <div className="icon-item"><BootstrapIcon size={40} /><span>Bootstrap</span></div>
              <div className="icon-item"><SassIcon size={40} /><span>Sass</span></div>
              <div className="icon-item"><MongodbIcon size={40} /><span>MongoDB</span></div>
              <div className="icon-item"><FirebaseIcon size={40} /><span>Firebase</span></div>
              <div className="icon-item"><HtmlIcon size={40} /><span>HTML</span></div>
              <div className="icon-item"><CssIcon size={40} /><span>CSS</span></div>
            </div>
          </div>
          {/* Card for Languages */}
          <div className="skill-card language-card">
            <h3>Languages</h3>
            <p>Programming languages I am proficient in.</p>
            <div className="icon-grid">
              <div className="icon-item"><JavaIcon size={40} /><span>Java</span></div>
              <div className="icon-item"><CssIcon size={40} /><span>JavaScript</span></div>
              <div className="icon-item"><TypescriptIcon size={40} /><span>TypeScript</span></div>
              <div className="icon-item"><PythonIcon size={40} /><span>Python</span></div>
              <div className="icon-item"><DartIcon size={40} /><span>Dart</span></div>
              <div className="icon-item"><DatabaseIcon size={40} /><span>SQL</span></div>
            </div>
          </div>
          {/* Card for Tools */}
          <div className="skill-card tools-card">
            <h3>Tools</h3>
            <p>Development tools and browsers I frequently use.</p>
            <div className="icon-grid">
              <div className="icon-item"><VscodeIcon size={40} /><span>VS Code</span></div>
              <div className="icon-item"><GithubIcon size={40} /><span>GitHub</span></div>
              <div className="icon-item"><GitIcon size={40} /><span>Git</span></div>
              <div className="icon-item"><ChromeIcon size={40} /><span>Google Chrome</span></div>
              <div className="icon-item"><FirefoxIcon size={40} /><span>Firefox</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="work-experience-section">
        <h2 className="section-heading">Work Experience</h2>
        <div className="experience-grid">
          {/* Example Experience Card */}
          <div className="experience-card">
            <h3>JOVAC</h3>
            <p className='role'>Trainee/Full Stack Web Developer Intern</p>
            <p>June 2022 - Aug 2022</p>
            <p>
              Worked on developing and maintaining web applications using MERN Stack, React and Node.js. Collaborated with cross-functional teams to design and implement new features.
            </p>
          </div>
          {/* Add more experience cards as necessary */}
        </div>
      </section>

      {/* Certification Section */}
      <section className="certification-section">
        <h2 className="section-heading">Certifications</h2>
        <div className="certification-grid">
          <div className="certification-card">
            <img
              src={certification}
              alt="Certification 1"
              className="certification-image"
            />
            <p className="certification-text">
              Certification from IIT-Bombay on placement preparation conference.
            </p>
          </div>
          <div className="certification-card">
            <img
              src={certification2}
              alt="Certification 2"
              className="certification-image"
            />
            <p className="certification-text">
              Gold Medal Certificate from GLA University for completing Web-Development Bootcamp.
            </p>
          </div>
          <div className="certification-card">
            <img
              src={certification3}
              alt="Certification 3"
              className="certification-image"
            />
            <p className="certification-text">
            Gold Medal Certificate from GLA University for completing Hybrid Mobile Application Development.
            </p>
          </div>
          {/* Add more certification cards as necessary */}
          <div className="certification-card">
            <img
              src={certification4}
              alt="Certification 4"
              className="certification-image"
            />
            <p className="certification-text">
             Certification from AWS for completing Basic fundamentals of Cloud Computing and AWS.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
