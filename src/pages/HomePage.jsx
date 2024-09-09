import './home.css';
import HomeContent from '../components/homecontent.jsx';
import AboutCard from '../components/AboutCard.jsx';
import LogoSlider from '../components/logoslider.jsx';
import PortfolioComponent from '../components/portfolioComponent.jsx';


const Home = () => {
  return (
    <>
      <div className="home-content" data-aos="fade-in">
        <HomeContent />
      </div>
      <div className="animated-slider" data-aos="fade-up">
        <LogoSlider />
      </div>
      <div className="aboutcard" data-aos="fade-left">
        <AboutCard />
      </div>
      <div className="portfolio" data-aos="fade-right">
        <PortfolioComponent />
      </div>
      
    </>
  );
}

export default Home;
