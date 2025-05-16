import Header from "../Header/Header";
import "./Layout.scss";

import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="layout">
      <Header />

      <main className="layout__content">
        <Outlet />
      </main>
    </div>
  );
}
