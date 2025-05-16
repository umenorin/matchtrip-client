import "./Button.scss";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  [key: string]: any;
}

export default function Button({
  children,
  onClick,
  type = "button",
  ...attributes
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      {...attributes}
    >
      <p className="button__content">{children}</p>
    </button>
  );
}
