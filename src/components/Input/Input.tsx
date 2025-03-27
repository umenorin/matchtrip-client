import "./Input.scss";

export default function Input({ name, type, placeholder, ...props }: any) {
  return (
    <div className="container">
      <input
        className="container__input"
        name={name}  
        id={name}
        type={type}
        placeholder={placeholder}
        {...props} 
      />
    </div>
  );
}