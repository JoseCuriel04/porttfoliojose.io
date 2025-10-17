import { useTranslation } from 'react-i18next';
import './GitHubStats.css';

export const GitHubStats = () => {
  const { t } = useTranslation();

  return (
    <section id="github-stats">
      <div className="container">
        <div className="section-header">
          <h5>{t("GitHub Stats")}</h5>
          <h2>{t("My Activity")}</h2>
        </div>
        <div className="stats-grid">
          <div className="stat-card">
            <img
              src="https://github-readme-streak-stats.herokuapp.com?user=JoseCuriel04&theme=dracula&border_radius=10"
              alt="GitHub Streak"
              className="stat-image"
            />
          </div>
          <div className="stat-card">
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=JoseCuriel04&layout=compact&theme=dracula&border_radius=10"
              alt="Most Used Languages"
              className="stat-image"
            />
          </div>
        </div>
        <div className="open-source-badge">
          <img
            src="https://badges.frapsoft.com/os/v1/open-source.svg?v=102"
            alt="Open Source Love"
          />
        </div>
      </div>
    </section>
  );
};
