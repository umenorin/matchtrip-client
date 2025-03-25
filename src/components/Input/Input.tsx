import "Input.scss";

export default function Input({ children, name, type }: any) {
  return (
    <div className="container">
      <label className="container__label" htmlFor={name}>
        {children}
      </label>
      <input className="container__input" id={name} type={type} />
    </div>
  );
}
