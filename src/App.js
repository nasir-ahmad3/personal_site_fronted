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

function App() {

  return (
    <>
      <BrowserRouter>
        <Nav />
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
