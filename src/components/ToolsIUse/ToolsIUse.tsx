import { useTranslation } from 'react-i18next';
import {
  FaLaptopCode, FaFigma, FaDocker, FaGitAlt,
  FaReact, FaNodeJs, FaPython, FaJava,
  FaHtml5, FaCss3Alt, FaJs
} from 'react-icons/fa';
import { SiTypescript, SiFirebase, SiMysql } from 'react-icons/si';
import './ToolsIUse.css';

export const ToolsIUse = () => {
  const { t } = useTranslation();

  const tools = [
    { name: "VS Code", icon: <FaLaptopCode /> },
    { name: "Figma", icon: <FaFigma /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Java", icon: <FaJava /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "MySQL", icon: <SiMysql /> },
  ];

  return (
    <section id="tools">
      <div className="container">
        <div className="section-header">
          <h5>{t("My Tools")}</h5>
          <h2>{t("Tools I Use")}</h2>
        </div>
        <div className="tools-grid">
          {tools.map((tool, index) => (
            <div key={index} className="tool-card">
              <div className="tool-icon">{tool.icon}</div>
              <p>{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
