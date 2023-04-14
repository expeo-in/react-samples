import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  const style = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "normal",
  });
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          My React App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              className="nav-link active"
              aria-current="page"
              to="/"
              style={style}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link active"
              aria-current="page"
              to="/about"
              style={style}
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link active"
              aria-current="page"
              to="/contact"
              style={style}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link active"
              aria-current="page"
              to="/users?sortBy=name&sortOrder=desc"
              style={style}
            >
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link active"
              aria-current="page"
              to="/admin"
              style={style}
            >
              Admin
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link active"
              aria-current="page"
              to="/tasks"
              style={style}
            >
              Tasks
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
