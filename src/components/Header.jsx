import { NavLink } from "react-router-dom";
import "../styles/Header.css";

const getNavClass = ({ isActive }) =>
  isActive ? "nav-item active" : "nav-item";

function Header() {
  return (
    <header className="header">
        <NavLink to="/gioi-thieu" className={getNavClass}>Giới thiệu</NavLink>
        <NavLink to="/du-an" className={getNavClass}>Dự án</NavLink>
        <NavLink to="/ky-nang" className={getNavClass}>Kỹ năng</NavLink>
        <NavLink to="/tong-ket" className={getNavClass}>Tổng kết</NavLink>
    </header>
  );
}

export default Header;
