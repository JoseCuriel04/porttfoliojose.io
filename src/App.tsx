import { NavBar } from './components/NavBar/NavBar';
import { Hero } from './components/Hero/Hero';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { FaBars, FaTimes } from 'react-icons/fa';
import './App.css';
import { ToolsIUse } from './components/ToolsIUse/ToolsIUse';

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Skills />
      <Projects />
      <ToolsIUse />
      <Contact />
      <Footer />
      
    </>
  );
}

export default App;
