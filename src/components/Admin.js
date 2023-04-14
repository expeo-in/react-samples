import { Outlet, Link } from "react-router-dom";

export default function Admin() {
  return (
    <>
      <h1>Admin</h1>
      <div className="d-flex">
        <ul className="me-5">
          <li>
            <Link to="/admin">Admin Home</Link>
          </li>
          <li>
            <Link to="/admin/report">Report</Link>
          </li>
        </ul>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}
