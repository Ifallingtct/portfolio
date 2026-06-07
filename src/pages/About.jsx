import "../styles/Portfolio.css";

import avatar from "../assets/images/avatar.jpg";
import weatherApp from "../assets/images/weather_app.png";
import rentalapp from "../assets/images/rental_app.png";

import auction1 from "../assets/images/auction1.png";
import auction2 from "../assets/images/auction2.png";
import auction3 from "../assets/images/auction3.png";
import auction4 from "../assets/images/auction4.png";

function About() {
  return (
    <main className="portfolio-page about-portfolio">
      <section id="home" className="hero-intro">
        <div className="container hero-intro-content">
          <h1>
            DESIGN &
            <br />
            ILLUSTRATION
            <br />
            PORTFOLIO
          </h1>

        </div>
      </section>

      <section id="credentials" className="content-section about-credentials">
        <div className="container credentials-layout">
          <div className="credentials-left">
            <h2>MY CREDENTIALS</h2>
            <div className="info-card">
              <p><strong>Nguyễn Đức Duy</strong></p>
              <p>04 / 07 / 2007</p>
              <p>Nam</p>
              <p>Information System – K70<br />University of Engineering and Technology</p>
              <p>2025 – 2029</p>
              <p>Hobby: Đọc sách, xem phim, lập trình và thử nghiệm công nghệ.</p>
            </div>
          </div>

          <div className="credentials-right">
            <img
              src={avatar}
              alt="Ảnh đại diện Nguyễn Đức Duy"
            />
          </div>
        </div>

        <div className="container contact-grid">
          <article className="contact-card">
            <h3>Address</h3>
            <p>Võ Cường, Bắc Ninh, Việt Nam</p>
          </article>
          <article className="contact-card">
            <h3>Phone</h3>
            <p>+84 961 270 553</p>
          </article>
          <article className="contact-card">
            <h3>Email</h3>
            <p>duybnk1235@gmail.com</p>
          </article>
        </div>
      </section>

      <section id="projects" className="content-section about-projects">
        <div className="container">
          <h2 className="section-title">MY PAST PROJECTS</h2>
          <div className="project-grid">
            <article className="project-card">
              <img src={rentalapp} alt="Rental House Website" />
              <div className="project-content">
                <h3>Rental House Website</h3>
                <p>Website giới thiệu bất động sản với giao diện rõ ràng, trực quan và thân thiện với người dùng.</p>
                <a href="">Link repo:</a>
              </div>
            </article>
            <article className="project-card">
              <img src={weatherApp} alt="Weather App" />
              <div className="project-content">
                <h3>Weather App</h3>
                <p>Ứng dụng dự báo thời tiết với dữ liệu cập nhật, bố cục đơn giản và trải nghiệm tốt trên mọi thiết bị.</p>
                <a href="https://github.com/Ifallingtct/frontend_weather_app">Link repo:</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="auction" className="content-section about-recent">
        <div className="container recent-layout">
          <div className="recent-title">
            <h2>MY MOST RECENT PROJECT</h2>
            <div className="recent-info">
              <h3>Auction App</h3>
              <p>Java • JavaFX • MySQL • Socket Programming</p>
              <p>Ứng dụng đấu giá trực tuyến giúp người dùng quản lý tài khoản, đăng tin và theo dõi giao dịch một cách dễ dàng.</p>
              <a href="https://github.com/quangtm08/BTL_Nhom1_AuctionSystem">Link repo:</a>

            </div>
          </div>
          <div className="recent-gallery">
            <img src={auction1} alt="Auction project preview" />
            <img src={auction2} alt="Auction project overview" />
            <img src={auction3} alt="Auction system design" />
            <img src={auction4} alt="Auction interface" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
