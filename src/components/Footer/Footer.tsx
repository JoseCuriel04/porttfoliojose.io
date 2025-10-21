import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './Footer.css';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="container">
        <div className="social-links">
          <a href="https://www.linkedin.com/in/jose-luis-curiel-lopez-8b0932374?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/JoseCuriel04" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="mailto:joselcl04@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
        <p>© 2025 Jose Luis Curiel López. {t("All rights reserved")}</p>
      </div>
    </footer>
  );
};
