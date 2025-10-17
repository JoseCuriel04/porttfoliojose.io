import { useTranslation } from 'react-i18next';
import './Services.css';

export const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t("Web Development"),
      description: t("Custom web applications using React, Node.js, and modern technologies."),
      icon: "🌐",
      packages: [
        {
          name: t("Basic Package"),
          description: t("Single-page application with basic features."),
          price: "$500 - $1000"
        },
        {
          name: t("Standard Package"),
          description: t("Multi-page application with advanced features and database integration."),
          price: "$1000 - $2500"
        },
        {
          name: t("Premium Package"),
          description: t("Full-stack application with custom design, advanced features, and deployment."),
          price: "$2500+"
        }
      ]
    },
    {
      title: t("Mobile Development"),
      description: t("Cross-platform mobile apps with Flutter and React Native."),
      icon: "📱",
      packages: [
        {
          name: t("Basic Package"),
          description: t("Simple mobile app with basic features."),
          price: "$800 - $1500"
        },
        {
          name: t("Standard Package"),
          description: t("Mobile app with advanced features and API integration."),
          price: "$1500 - $3000"
        },
        {
          name: t("Premium Package"),
          description: t("Full-featured mobile app with custom design, advanced features, and deployment."),
          price: "$3000+"
        }
      ]
    },
    {
      title: t("UI/UX Design"),
      description: t("User interface and experience design for web and mobile applications."),
      icon: "🎨",
      packages: [
        {
          name: t("Basic Package"),
          description: t("Basic UI/UX design for a single-page application."),
          price: "$300 - $600"
        },
        {
          name: t("Standard Package"),
          description: t("UI/UX design for a multi-page application with interactive elements."),
          price: "$600 - $1200"
        },
        {
          name: t("Premium Package"),
          description: t("Comprehensive UI/UX design with user research, wireframes, prototypes, and usability testing."),
          price: "$1200+"
        }
      ]
    }
  ];

  return (
    <section id="services">
      <div className="container">
        <div className="section-header">
          <h5>{t("My Services")}</h5>
          <h2>{t("What I Offer")}</h2>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-header">
                <span className="service-icon">{service.icon}</span>
                <h3>{service.title}</h3>
              </div>
              <p className="service-description">{service.description}</p>
              <div className="service-packages">
                <h4>{t("Packages")}</h4>
                {service.packages.map((pkg, pkgIndex) => (
                  <div key={pkgIndex} className="package-card">
                    <h5>{pkg.name}</h5>
                    <p>{pkg.description}</p>
                    <p className="package-price">{pkg.price}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
