import { useEffect, useRef, useState } from "react";
import { Form, useActionData } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./ModalLogin.scss";

interface ModalLoginProps {
  onClose: () => void;
  onRegisterClick: () => void;
}

const ModalLogin = ({ onClose, onRegisterClick }: ModalLoginProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const actionData = useActionData();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Fechar ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="modal-login__overlay">
      <div className="modal-login__content" ref={modalRef}>
        <h1 className="modal-login__title">Faça o Login</h1>

        <Form className="modal-login__form" method="post" action="/login">
          <div className="modal-login__input-group">
            <label className="modal-login__label">Email</label>
            <Input
              name="email"
              type="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              className="modal-login__input"
            />
            {actionData?.errors?.email && (
              <p className="modal-login__error">{actionData.errors.email}</p>
            )}
          </div>

          <div className="modal-login__input-group">
            <label className="modal-login__label">Senha</label>
            <Input
              name="password"
              type="password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              className="modal-login__input"
            />
            {actionData?.errors?.password && (
              <p className="modal-login__error">{actionData.errors.password}</p>
            )}
          </div>

          <div className="modal-login__divider"></div>

          <Button type="submit" className="modal-login__submit">
            Próximo
          </Button>
        </Form>

        <div className="modal-login__footer">
          <p>
            Não é membro?{" "}
            <button
              type="button"
              className="modal-login__register-link"
              onClick={onRegisterClick}
            >
              cadastre-se
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalLogin;
