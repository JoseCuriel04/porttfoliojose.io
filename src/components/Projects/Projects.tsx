import { useTranslation } from 'react-i18next';
import './Projects.css';

export const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: "EduSphere",
      tech: "HTML, CSS, JavaScript, PHP",
      description: t("Educational platform for school management."),
      codeLink: "https://github.com/JoseCuriel04/EduSphere", // Reemplaza con el enlace real a tu código
      demoLink: "https://github.com/JoseCuriel04/EduSphere" // Reemplaza con el enlace real a la demo
    },
    {
      title: "SafeAlert",
      tech: "Flutter, Django, Firebase",
      description: t("Mobile app for reporting emergencies in real time."),
      codeLink: "https://github.com/JoseCuriel04/SafeAlert", // Reemplaza con el enlace real a tu código
      demoLink: "https://github.com/JoseCuriel04/SafeAlert" // Reemplaza con el enlace real a la demo
    },
    {
      title: t("Penitentiary System"),
      tech: "Java, MySQL",
      description: t("System for managing information in penitentiary centers."),
      codeLink: "https://github.com/JoseCuriel04/Penitenciario", // Reemplaza con el enlace real a tu código
      demoLink: "https://proyectopenitenciario.onrender.com/login/?next=" // Reemplaza con el enlace real a la demo
    },
    {
      title: "Moodle Custom",
      tech: "PHP, MySQL",
      description: t("Customization and extension of the Moodle platform."),
      codeLink: "https://docs.moodle.org/all/es/Página_Principal", // Reemplaza con el enlace real a tu código
      demoLink: "http://200.79.182.105/moodle/" // Reemplaza con el enlace real a la demo
    },
  ];

  return (
    <section id="projects">
      <div className="container">
        <div className="section-header">
          <h5>{t("Portfolio")}</h5>
          <h2>{t("My Projects")}</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-tech">{project.tech}</p>
                <p>{project.description}</p>
                <div className="project-links">
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                    {t("View Code")}
                  </a>
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    {t("Live Demo")}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
