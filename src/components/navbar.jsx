import { NavLink, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-right">
          <a href="https://www.instagram.com/knj_moto?igsh=YTM4bml5d21rMWdv">Knj-moto</a>
        </div>
        <div className="nav-left">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
          <NavLink to="/products" className={({ isActive }) => (isActive ? "active" : "")}>
            Gallery
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </>
  );
}