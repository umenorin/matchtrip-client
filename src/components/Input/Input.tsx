import "./Input.scss";

export default function Input({ name, type, placeholder }: any) {
  return (
    <div className="container">
      <input
        className="container__input"
        id={name}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}
