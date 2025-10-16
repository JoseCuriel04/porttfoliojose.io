import { useTranslation } from 'react-i18next';
import {
  FaHtml5, FaCss3Alt, FaJs, FaPhp, FaPython, FaJava, FaGitAlt, FaDatabase,
  FaReact, FaNodeJs
} from 'react-icons/fa';
import { SiDart, SiFirebase, SiMysql, SiTypescript } from 'react-icons/si';
import './Skills.css';

export const Skills = () => {
  const { t } = useTranslation();

  const languages = [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'PHP', icon: <FaPhp /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'Dart', icon: <SiDart /> },
    { name: 'TypeScript', icon: <SiTypescript /> }
  ];

  const tools = [
    { name: 'React', icon: <FaReact /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Flutter', icon: <SiDart /> },
    { name: 'Django', icon: <FaPython /> },
    { name: 'Firebase', icon: <SiFirebase /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'Git', icon: <FaGitAlt /> },
  ];

  return (
    <section id="skills">
      <div className="container">
        <div className="section-header">
          <h5>{t("My Skills")}</h5>
          <h2>{t("Technologies and Tools")}</h2>
        </div>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>{t("Programming Languages")}</h3>
            <div className="skill-icons">
              {languages.map((lang, index) => (
                <div key={index} className="skill-icon">
                  {lang.icon}
                  <span>{lang.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="skill-card">
            <h3>{t("Frameworks and Tools")}</h3>
            <div className="skill-icons">
              {tools.map((tool, index) => (
                <div key={index} className="skill-icon">
                  {tool.icon}
                  <span>{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
