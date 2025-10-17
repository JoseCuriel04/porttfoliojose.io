import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // NavBar
      "Home": "Home",
      "Skills": "Skills",
      "Projects": "Projects",
      "Contact": "Contact",

      // Hero
      "Hello, my name is": "Hello, my name is",
      "Jose Luis": "Jose Luis",
      "Curiel López": "Curiel López",
      "Student of Computer Systems Engineering at UPT Tulancingo.": "Student of Computer Systems Engineering at UPT Tulancingo.",
      "Passionate about technology, software development, and automation.": "Passionate about technology, software development, and automation.",
      "Contact Me": "Contact Me",
      "Download CV": "Download CV",

      // Skills
      "My Skills": "My Skills",
      "Technologies and Tools": "Technologies and Tools",
      "Programming Languages": "Programming Languages",
      "Frameworks and Tools": "Frameworks and Tools",

      // Projects
      "Portfolio": "Portfolio",
      "My Projects": "My Projects",
      "EduSphere": "EduSphere",
      "Educational platform for school management.": "Educational platform for school management.",
      "SafeAlert": "SafeAlert",
      "Mobile app for reporting emergencies in real time.": "Mobile app for reporting emergencies in real time.",
      "Penitentiary System": "Penitentiary System",
      "System for managing information in penitentiary centers.": "System for managing information in penitentiary centers.",
      "Moodle Custom": "Moodle Custom",
      "Customization and extension of the Moodle platform.": "Customization and extension of the Moodle platform.",
      "View Code": "View Code",
      "Live Demo": "Live Demo",
      "More Info": "More Info",

      // Tools
      "My Tools": "My Tools",
      "Tools I Use": "Tools I Use",

      // Certifications
      "My Certifications": "My Certifications",
      "Certifications": "Certifications",
      "Database Administrator": "Database Administrator",
      "Basic Computing": "Basic Computing",
      "Front-end Developer": "Front-end Developer",
      "Introduction to Programming": "Introduction to Programming",
      "Python 101 for Data Science": "Python 101 for Data Science",
      "Python Fundamentals 1": "Python Fundamentals 1",
      "CCNA Enterprise Networking, Security, and Automation": "CCNA Enterprise Networking, Security, and Automation",
      "CCNA Switching, Routing, and Wireless Essentials": "CCNA Switching, Routing, and Wireless Essentials",
      "CCNA Introduction to Networks": "CCNA Introduction to Networks",
      "Fortinet Certified Fundamentals in Cybersecurity": "Fortinet Certified Fundamentals in Cybersecurity",

      // Services
      "My Services": "My Services",
      "What I Offer": "What I Offer",
      "Web Development": "Web Development",
      "Custom web applications using React, Node.js, and modern technologies.": "Custom web applications using React, Node.js, and modern technologies.",
      "Mobile Development": "Mobile Development",
      "Cross-platform mobile apps with Flutter and React Native.": "Cross-platform mobile apps with Flutter and React Native.",
      "UI/UX Design": "UI/UX Design",
      "User interface and experience design for web and mobile applications.": "User interface and experience design for web and mobile applications.",
      "Packages": "Packages",
      "Basic Package": "Basic Package",
      "Single-page application with basic features.": "Single-page application with basic features.",
      "Standard Package": "Standard Package",
      "Multi-page application with advanced features and database integration.": "Multi-page application with advanced features and database integration.",
      "Premium Package": "Premium Package",
      "Full-stack application with custom design, advanced features, and deployment.": "Full-stack application with custom design, advanced features, and deployment.",
      "Simple mobile app with basic features.": "Simple mobile app with basic features.",
      "Mobile app with advanced features and API integration.": "Mobile app with advanced features and API integration.",
      "Full-featured mobile app with custom design, advanced features, and deployment.": "Full-featured mobile app with custom design, advanced features, and deployment.",
      "Basic UI/UX design for a single-page application.": "Basic UI/UX design for a single-page application.",
      "UI/UX design for a multi-page application with interactive elements.": "UI/UX design for a multi-page application with interactive elements.",
      "Comprehensive UI/UX design with user research, wireframes, prototypes, and usability testing.": "Comprehensive UI/UX design with user research, wireframes, prototypes, and usability testing.",

      // GitHub Stats
      "GitHub Stats": "GitHub Stats",
      "My Activity": "My Activity",

      // Contact
      "Let's Work Together": "Let's Work Together",
      "Your Name": "Your Name",
      "Your Email": "Your Email",
      "Subject": "Subject",
      "Your Message": "Your Message",
      "Send Message": "Send Message",

      // Footer
      "All rights reserved": "All rights reserved"
    }
  },
  es: {
    translation: {
      // NavBar
      "Home": "Inicio",
      "Skills": "Habilidades",
      "Projects": "Proyectos",
      "Contact": "Contacto",

      // Hero
      "Hello, my name is": "Hola, mi nombre es",
      "Jose Luis": "Jose Luis",
      "Curiel López": "Curiel López",
      "Student of Computer Systems Engineering at UPT Tulancingo.": "Estudiante de Ingeniería en Sistemas Computacionales en UPT Tulancingo.",
      "Passionate about technology, software development, and automation.": "Apasionado por la tecnología, el desarrollo de software y la automatización.",
      "Contact Me": "Contáctame",
      "Download CV": "Descargar CV",

      // Skills
      "My Skills": "Mis Habilidades",
      "Technologies and Tools": "Tecnologías y Herramientas",
      "Programming Languages": "Lenguajes de Programación",
      "Frameworks and Tools": "Frameworks y Herramientas",

      // Projects
      "Portfolio": "Portafolio",
      "My Projects": "Mis Proyectos",
      "EduSphere": "EduSphere",
      "Educational platform for school management.": "Plataforma educativa para la gestión escolar.",
      "SafeAlert": "SafeAlert",
      "Mobile app for reporting emergencies in real time.": "Aplicación móvil para reportar emergencias en tiempo real.",
      "Penitentiary System": "Sistema Penitenciario",
      "System for managing information in penitentiary centers.": "Sistema para gestionar información en centros penitenciarios.",
      "Moodle Custom": "Moodle Custom",
      "Customization and extension of the Moodle platform.": "Personalización y extensión de la plataforma Moodle.",
      "View Code": "Ver Código",
      "Live Demo": "Demo en Vivo",
      "More Info": "Más Info",

      // Tools
      "My Tools": "Mis Herramientas",
      "Tools I Use": "Herramientas que Uso",

      // Certifications
      "My Certifications": "Mis Certificaciones",
      "Certifications": "Certificaciones",
      "Database Administrator": "Administrador de Bases de Datos",
      "Basic Computing": "Cómputo Básico",
      "Front-end Developer": "Desarrollador Front-end",
      "Introduction to Programming": "Introducción a la Programación",
      "Python 101 for Data Science": "Python 101 para Ciencia de Datos",
      "Python Fundamentals 1": "Fundamentos de Python 1",
      "CCNA Enterprise Networking, Security, and Automation": "CCNA: Enterprise Networking, Seguridad y Automatización",
      "CCNA Switching, Routing, and Wireless Essentials": "CCNA: Switching, Routing y Wireless Essentials",
      "CCNA Introduction to Networks": "CCNA: Introducción a las Redes",
      "Fortinet Certified Fundamentals in Cybersecurity": "Fundamentos de Ciberseguridad Certificados por Fortinet",

      // Services
      "My Services": "Mis Servicios",
      "What I Offer": "Lo Que Ofrezco",
      "Web Development": "Desarrollo Web",
      "Custom web applications using React, Node.js, and modern technologies.": "Aplicaciones web personalizadas usando React, Node.js y tecnologías modernas.",
      "Mobile Development": "Desarrollo Móvil",
      "Cross-platform mobile apps with Flutter and React Native.": "Aplicaciones móviles multiplataforma con Flutter y React Native.",
      "UI/UX Design": "Diseño UI/UX",
      "User interface and experience design for web and mobile applications.": "Diseño de interfaz y experiencia de usuario para aplicaciones web y móviles.",
      "Packages": "Paquetes",
      "Basic Package": "Paquete Básico",
      "Single-page application with basic features.": "Aplicación de una sola página con características básicas.",
      "Standard Package": "Paquete Estándar",
      "Multi-page application with advanced features and database integration.": "Aplicación multipágina con características avanzadas e integración de base de datos.",
      "Premium Package": "Paquete Premium",
      "Full-stack application with custom design, advanced features, and deployment.": "Aplicación full-stack con diseño personalizado, características avanzadas y despliegue.",
      "Simple mobile app with basic features.": "Aplicación móvil simple con características básicas.",
      "Mobile app with advanced features and API integration.": "Aplicación móvil con características avanzadas e integración de API.",
      "Full-featured mobile app with custom design, advanced features, and deployment.": "Aplicación móvil completa con diseño personalizado, características avanzadas y despliegue.",
      "Basic UI/UX design for a single-page application.": "Diseño UI/UX básico para una aplicación de una sola página.",
      "UI/UX design for a multi-page application with interactive elements.": "Diseño UI/UX para una aplicación multipágina con elementos interactivos.",
      "Comprehensive UI/UX design with user research, wireframes, prototypes, and usability testing.": "Diseño UI/UX completo con investigación de usuarios, wireframes, prototipos y pruebas de usabilidad.",

      // GitHub Stats
      "GitHub Stats": "Estadísticas de GitHub",
      "My Activity": "Mi Actividad",

      // Contact
      "Let's Work Together": "Trabajemos Juntos",
      "Your Name": "Tu Nombre",
      "Your Email": "Tu Email",
      "Subject": "Asunto",
      "Your Message": "Tu Mensaje",
      "Send Message": "Enviar Mensaje",

      // Footer
      "All rights reserved": "Todos los derechos reservados"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
