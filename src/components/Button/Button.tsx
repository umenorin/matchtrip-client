import { Link } from "react-router";

import "./Button.scss";

// TODO
export default function Button({ children, type, navigateTo }) {
  if (type === "link")
    return (
      <Link to={navigateTo} className={`button`}>
        {children}
      </Link>
    );
  return <button className={`button`}>{children}</button>;
}
