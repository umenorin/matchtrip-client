import "./Button.scss";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  size?: "small" | "medium" | "large" | "full-width";
  [key: string]: any;
}

export default function Button({
  children,
  onClick,
  type = "button",
  size = "medium",
  ...attributes
}: ButtonProps) {
  return (
    <button
      className={`button button--${size}`}
      onClick={onClick}
      type={type}
      {...attributes}
    >
      {children}
    </button>
  );
}
