import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { LanguageSwitcher } from '../LanguageSwitcher';
import './NavBar.css';
import logo from '../../assets/logo.png'; // Asegúrate de que la ruta sea correcta

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Jose Luis Curiel López Logo" />
        </div>
        <LanguageSwitcher />
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};
