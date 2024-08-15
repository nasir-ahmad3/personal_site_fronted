import './App.css';
import Nav from './components/Nav/Nav';
import Footer from './components/footer/Footer';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import BlogDetail from './components/BlogList/BlogDetail'
import Home from './pages/Home/Home'
import Blog from './pages/BlogPage/Blog';
import Projects from './pages/Projects/Projects';
import Services from './pages/Services/Services';
import AboutMe from './pages/AboutMe/AboutMe'
import ContactMe from './pages/ContactMe/ContactMe';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ScrollContainer, ScrollPage} from 'react-scroll-motion';


function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration
      once: true,
    });
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      setMousePosition({ x: mouseX, y: mouseY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      
          <BrowserRouter>
            <Nav />
            <div className="mouseeffect" style={{ left: mousePosition.x, top: mousePosition.y }}></div>
            <Routes>
              <Route  path='/' element={<Home />} />
              <Route  path='/blog/' element={<Blog />}/>
              <Route  path='/blog/:id' element={<BlogDetail />} />
              <Route  path="/projects/" element={<Projects />}/>
              <Route  path="/services/" element={<Services />}/>
              <Route  path='/about/' element={<AboutMe />}/>
              <Route  path='/contact/' element={<ContactMe />}/>
            </Routes>
            <Footer />
          </BrowserRouter>
    </>
  );
}

export default App;
