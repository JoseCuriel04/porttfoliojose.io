import { useTranslation } from 'react-i18next';
import './Certifications.css';

export const Certifications = () => {
  const { t } = useTranslation();

  const certifications = [
    {
      name: t("Database Administrator"),
      badge: "https://img.shields.io/badge/📚_Administrador_de_Bases_de_Datos-282c34?style=for-the-badge&logo=mysql&logoColor=white",
      link: "https://github.com/JoseCuriel04/Cursos/blob/main/Administrador%20de%20bases%20de%20datos.pdf"
    },
    {
      name: t("Basic Computing"),
      badge: "https://img.shields.io/badge/💻_Cómputo_Básico-282c34?style=for-the-badge&logo=windows&logoColor=blue",
      link: "https://github.com/JoseCuriel04/Cursos/blob/main/Cómputo%20básico.pdf"
    },
    {
      name: t("Front-end Developer"),
      badge: "https://img.shields.io/badge/🌐_Desarrollador_Front--end-282c34?style=for-the-badge&logo=javascript&logoColor=yellow",
      link: "https://github.com/JoseCuriel04/Cursos/blob/main/Desarrollador%20Front-end.pdf"
    },
    {
      name: t("Introduction to Programming"),
      badge: "https://img.shields.io/badge/👨‍💻_Introducción_a_la_Programación-282c34?style=for-the-badge&logo=codepen&logoColor=white",
      link: "https://github.com/JoseCuriel04/Cursos/blob/main/Introducción%20a%20la%20programación.pdf"
    },
    {
      name: t("Python 101 for Data Science"),
      badge: "https://img.shields.io/badge/🐍_Python_101_for_Data_Science-282c34?style=for-the-badge&logo=python&logoColor=yellow",
      link: "https://github.com/JoseCuriel04/Cursos/blob/main/Python%20101%20for%20Data%20Science.pdf"
    },
    {
      name: t("Python Fundamentals 1"),
      badge: "https://img.shields.io/badge/🐍_Fundamentos_de_Python_1_(Cisco_NetAcad)-282c34?style=for-the-badge&logo=cisco&logoColor=blue",
      link: "https://github.com/JoseCuriel04/Cursos/blob/main/Fundamentos%20de%20Python%201.pdf"
    },
    {
      name: t("CCNA Enterprise Networking, Security, and Automation"),
      badge: "https://img.shields.io/badge/🔒_CCNAv7:_Enterprise_Networking%2C_Security%2C_and_Automation-282c34?style=for-the-badge&logo=cisco&logoColor=blue",
      link: "https://github.com/JoseCuriel04/Cursos/blob/main/CCNAv7%20Enterprise%20Networking%2C%20Security%2C%20and%20Automation.pdf"
    },
    {
      name: t("CCNA Switching, Routing, and Wireless Essentials"),
      badge: "https://img.shields.io/badge/📡_CCNAv7:_Switching%2C_Routing%2C_and_Wireless_Essentials-282c34?style=for-the-badge&logo=cisco&logoColor=blue",
      link: "https://github.com/JoseCuriel04/Cursos/blob/main/CCNAv7%20Switching%2C%20Routing%2C%20and%20Wireless%20Essentials.pdf"
    },
    {
      name: t("CCNA Introduction to Networks"),
      badge: "https://img.shields.io/badge/🌐_CCNAv7:_Introduction_to_Networks-282c34?style=for-the-badge&logo=cisco&logoColor=blue",
      link: "https://github.com/JoseCuriel04/Cursos/blob/main/CCNAv7%20Introduction%20to%20Networks.pdf"
    },
    {
      name: t("Fortinet Certified Fundamentals in Cybersecurity"),
      badge: "https://img.shields.io/badge/🔐_Fortinet_Certified_Fundamentals_in_Cybersecurity-282c34?style=for-the-badge&logo=fortinet&logoColor=red",
      link: "https://github.com/JoseCuriel04/Cursos/blob/main/Fortinet%20Certified%20Fundamentals%20in%20Cybersecurity.pdf"
    }
  ];

  return (
    <section id="certifications">
      <div className="container">
        <div className="section-header">
          <h5>{t("My Certifications")}</h5>
          <h2>{t("Certifications")}</h2>
        </div>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card">
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                <img src={cert.badge} alt={cert.name} className="cert-badge" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
