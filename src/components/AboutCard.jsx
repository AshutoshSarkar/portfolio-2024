import './aboutcard.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import laptop from '../assets/laptop.png'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import image3 from '../assets/image3.png'


const AboutCard = () => {
  return (
    <>
      <div className="container">
        <div className="aboutcard-image">
          <img src={image3} alt="Laptop" />
        </div>
        <div className="aboutcard-content">
          <h4>ABOUT ME</h4>
          <h3>
            A Dedicated Full-Stack Web Developer <br /> 
            based in Uttar Pradesh, India &nbsp; 
            <FontAwesomeIcon className="map-pin" icon={faMapPin} />
          </h3>
          <p>
            As a Full-Stack Developer, I possess an impressive arsenal of skills in both frontend and <br />
            backend technologies, including HTML, CSS, JavaScript, React, Tailwind, SCSS, as well as the MERN <br />
            stack (MongoDB, Express, React, Node.js), SQL, authentication methods, Java, and Python. I excel in <br />
            designing and maintaining responsive websites that offer a smooth user experience while crafting <br />
            dynamic, engaging interfaces through clean and optimized code. With expertise in full-stack <br />
            development, I leverage cutting-edge tools and techniques to build scalable applications. I am also a <br />
            team player who thrives in collaborating with cross-functional teams to produce outstanding web solutions.
          </p>
          <Link to="/about" className="view-more">View More Details <FontAwesomeIcon icon={faArrowRight} /></Link> {/* Add the link */}
        </div>  
      </div>
    </>
  )
}

export default AboutCard;
