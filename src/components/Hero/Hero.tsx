import { useTranslation } from 'react-i18next';
import './Hero.css';

export const Hero = () => {
  const { t } = useTranslation();

  const downloadCV = () => {
    window.open('https://github.com/JoseCuriel04/Cursos/raw/main/my-cv.pdf', '_blank');
  };

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h5>{t("Hello, my name is")}</h5>
          <h1>{t("Jose Luis")} <span className="highlight">{t("Curiel López")}</span></h1>
          <p>
            {t("Student of Computer Systems Engineering at UPT Tulancingo.")} {t("Passionate about technology, software development, and automation.")}
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn">
              {t("Contact Me")} <i className="fas fa-paper-plane"></i>
            </a>
            <button className="btn btn-outline" onClick={downloadCV}>
              {t("Download CV")} <i className="fas fa-download"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
