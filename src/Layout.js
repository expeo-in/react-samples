import { Outlet } from "react-router-dom";
import Nav from "./Nav";

export default function Layout() {
  return (
    <>
      <header className="mb-3">
        <Nav />
      </header>
      <main className="mb-3">
        <Outlet></Outlet>
      </main>
      <footer>&copy; My React app</footer>
    </>
  );
}
