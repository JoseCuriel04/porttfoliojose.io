import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../LanguageSwitcher';
import './NavBar.css';
import logo from '../../assets/logo.png';

export const NavBar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav>
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Jose Luis Curiel López Logo" />
        </div>

        {/* Selector de idioma */}
        <LanguageSwitcher />

        {/* Botón para menú móvil */}
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Enlaces de navegación */}
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={closeMenu}>{t("Home")}</a></li>
          <li><a href="#skills" onClick={closeMenu}>{t("Skills")}</a></li>
          <li><a href="#projects" onClick={closeMenu}>{t("Projects")}</a></li>
          <li><a href="#certifications" onClick={closeMenu}>{t("Certifications")}</a></li>
          <li><a href="#services" onClick={closeMenu}>{t("My Services")}</a></li>
          <li><a href="#contact" onClick={closeMenu}>{t("Contact")}</a></li>
        </ul>
      </div>
    </nav>
  );
};
