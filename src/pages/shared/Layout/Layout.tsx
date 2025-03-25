import "./Layout.scss";

import { Outlet } from "react-router";

export default function Layout() {
    return <div className="layout">
        {/* Header aqui */}
        <h1>Test Layout</h1>

        <main className="layout__content">
            <Outlet />
        </main>
    </div>
}
