import "../styles/Portfolio.css";

const skills = [
  {
    title: "Tìm kiếm thông tin",
    description: "Biết sử dụng Google Scholar và đánh giá nguồn học thuật.",
  },
  {
    title: "Sử dụng AI",
    description: "Viết Prompt hiệu quả và ứng dụng AI trong học tập.",
  },
  {
    title: "Làm việc nhóm",
    description: "Sử dụng Google Workspace và công cụ cộng tác trực tuyến.",
  },
  {
    title: "Quản lý dữ liệu",
    description: "Tổ chức thư mục và quản lý tài nguyên số khoa học.",
  },
];

function Skills() {
  return (
    <main className="portfolio-page">
      <section className="content-section">
        <div className="container">
          <h1 className="section-title">Kỹ Năng Đạt Được</h1>

          <div className="skills-grid">
            {skills.map((skill) => (
              <article className="skill-box" key={skill.title}>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Skills;
