import { Link } from "react-router-dom";

import "./Button.scss";

type ButtonProps = {
  children: React.ReactNode;
  type: "button" | "link";
  navigateTo?: string;
};

export default function Button({ children, type, navigateTo }: ButtonProps) {
  if (type === "link" && navigateTo)
    return (
      <Link to={navigateTo} className="button">
        {children}
      </Link>
    );
  return <button className="button">{children}</button>;
}