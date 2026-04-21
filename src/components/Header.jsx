import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">

      <div className="logo">trohanoi</div>

      <nav className="nav">
        <Link to="/home" className="nav-item">Trang chủ</Link>
        <Link to="/rooms" className="nav-item">Tìm phòng</Link>
        <Link to="/post" className="nav-item">Đăng bài</Link>
        <Link to="/contact" className="nav-item">Liên hệ</Link>
      </nav>

      <div className="actions">
        <Link to="/login" className="btn login">Login</Link>
        <Link to="/register" className="btn register">Register</Link>
      </div>
    </header>
  );
}

export default Header;