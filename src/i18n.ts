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
      // En la sección 'en'
      "Live Demo": "Live Demo",
      "More Info": "More Info",

      // Tools
      "My Tools": "My Tools",
      "Tools I Use": "Tools I Use",

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
      // En la sección 'es'
      "Live Demo": "Demo en Vivo",
      "More Info": "Más Info",
      // Tools
      "My Tools": "Mis Herramientas",
      "Tools I Use": "Herramientas que Uso",

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
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
