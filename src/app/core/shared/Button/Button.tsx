import { Link } from "react-router";

import "./Button.scss";

// Tipagem rápida usando any
export default function Button({ children, type, navigateTo }: { children: any; type: any; navigateTo: any }) {
  if (type === "link")
    return (
      <Link to={navigateTo} className={`button`}>
        {children}
      </Link>
    );
  return <button className={`button`}>{children}</button>;
}