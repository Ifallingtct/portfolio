import { Link } from "react-router-dom";

import { projects } from "../data/projects";
import "../styles/Portfolio.css";

function Projects() {
  return (
    <main className="portfolio-page">
      <section className="content-section">
        <div className="container">
          <h1 className="section-title">Các Dự Án Thành Phần</h1>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <img src={project.image} alt={project.title} />
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <Link className="primary-button" to={`/du-an/${project.id}`}>
                    Xem chi tiết
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Projects;
