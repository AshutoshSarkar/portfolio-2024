import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar.jsx";
import Home from "./pages/HomePage.jsx";
import About from "./pages/AboutPage.jsx";
import Projects from "./pages/ProjectPage.jsx";
import Contact from "./pages/ContactPage.jsx";
import ScrollToTop from './components/ScrollToTop.jsx'; // Import ScrollToTop
import './app.css';

function App() {
  return (
    <Router>
      <ScrollToTop />  {/* Scroll to top on route change */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
