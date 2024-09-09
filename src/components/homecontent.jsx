import './homecontent.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHand, faMapPin } from "@fortawesome/free-solid-svg-icons";
import image2 from '../assets/image2.jpg';
import { FaGithub, FaLinkedin, FaInstagram  } from "react-icons/fa";
import { faReact, faHtml5, faCss3Alt, faJs , faXTwitter } from "@fortawesome/free-brands-svg-icons";

const HomeContent = () => {
  return (
    <div>
      <div className="content">
        <div className="content-para">
          <h1 className="bottom">
            Full-Stack Web <br />
            Developer&nbsp;
            <FontAwesomeIcon
              icon={faHand}
              className="slow-shake"
              style={{ color: "#FFD43B" }}
            />
          </h1>
          <p>
            Hi, I&apos;m Ashutosh Sarkar. A passionate Full-Stack <br />
            Web Developer based in Uttar Pradesh, India.&nbsp;&nbsp;
            <FontAwesomeIcon className="map-pin" icon={faMapPin} />
          </p>
          <div className="socials">
            <a href="https://github.com/AshutoshSarkar" target="_blank" rel="noopener noreferrer">
              <FaGithub color={"#333"} />
            </a>
            <a href="https://www.linkedin.com/in/ashutosh-sarkar-07362322b/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin color={'#0077B5'} />
            </a>
            <a href="https://www.instagram.com/ashuuu.uh/" target="_blank" rel="noopener noreferrer">
              <FaInstagram color={'#d62976'} />
            </a>
            <a href="https://x.com/unicontenthub?t=XCi2i__MQuQIK2UrLsowuQ&s=09" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faXTwitter} color={'#000000'} />
            </a>
          </div>
          <div className="tech-stack">
            <p>Tech Stack</p>
            <p>|</p>
            <div className="text-icon">
              <FontAwesomeIcon
                icon={faReact}
                size="2xl"
                style={{ color: "#74C0FC" }}
              />
              <FontAwesomeIcon
                icon={faHtml5}
                size="2xl"
                style={{ color: "#d13a15" }}
              />
              <FontAwesomeIcon
                icon={faCss3Alt}
                size="2xl"
                style={{ color: "#18629a" }}
              />
              <FontAwesomeIcon
                icon={faJs}
                size="2xl"
                style={{ color: "#FFD43B" }}
              />
            </div>
          </div>
        </div>

        {/* Moved the image to its own container */}
        <div className="content-image">
          <img src={image2} alt="Profile" />
        </div>
        
        {/* AboutCard component placed after all other content */}
      
      </div>
    </div>
  )
}

export default HomeContent
