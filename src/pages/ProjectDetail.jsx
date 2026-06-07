import { Link, Navigate, useParams } from "react-router-dom";

import { projects } from "../data/projects";
import "../styles/Portfolio.css";

function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return <Navigate to="/du-an" replace />;
  }

  if (project.sections) {
    return (
      <main className="portfolio-page">
        <section className="content-section">
          <div className="container">
            <Link className="back-link" to="/du-an">
              Quay lại danh sách dự án
            </Link>

            <article className="report-card">
              <p className="eyebrow">Chi tiết dự án</p>
              <h1>{project.reportTitle}</h1>

              <div className="report-meta">
                {project.meta.map((item) => (
                  <p key={item.label}>
                    <strong>{item.label}:</strong> {item.value}
                  </p>
                ))}
              </div>

              <div className="report-sections">
                {project.sections.map((section) => (
                  <section className="report-section" key={section.heading}>
                    <h2>{section.heading}</h2>

                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}

                    {section.image && (
                      <figure className="report-figure">
                        <img src={section.image} alt={section.figure} />
                        <figcaption>{section.figure}</figcaption>
                      </figure>
                    )}

                    {!section.image && (
                      <p className="figure-caption">{section.figure}</p>
                    )}
                  </section>
                ))}
              </div>

              <section className="report-section">
                <h2>Kết luận</h2>
                <p>{project.conclusion}</p>
              </section>
            </article>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="portfolio-page">
      <section className="content-section">
        <div className="container">
          <Link className="back-link" to="/du-an">
            Quay lại danh sách dự án
          </Link>

          <article className="detail-layout">
            <img className="detail-image" src={project.image} alt={project.title} />

            <div className="detail-content">
              <p className="eyebrow">Chi tiết dự án</p>
              <h1>{project.title}</h1>
              <p className="detail-description">{project.description}</p>

              <div className="detail-block">
                <h2>Mục tiêu</h2>
                <p>{project.goal}</p>
              </div>

              <div className="detail-block">
                <h2>Nội dung thực hiện</h2>
                <ul>
                  {project.content.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="detail-block">
                <h2>Kỹ năng liên quan</h2>
                <div className="tag-list">
                  {project.skills.map((skill) => (
                    <span className="tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default ProjectDetail;
