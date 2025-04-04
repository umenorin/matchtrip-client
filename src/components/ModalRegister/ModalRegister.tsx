import { Form } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./ModalRegister.scss";
import { useEffect, useRef, useState } from "react";

interface ModalRegisterProps {
  onClose: () => void;
  onLoginClick: () => void;
}

const ModalRegister = ({ onClose, onLoginClick }: ModalRegisterProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("BR");
  const countries = [
    { code: "BR", name: "Brasil" },
    { code: "US", name: "Estados Unidos" },
    { code: "PT", name: "Portugal" },
    // Adicione mais países conforme necessário
  ];

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
    <div className="modal-register__overlay">
      <div className="modal-register__content" ref={modalRef}>
        <h1 className="modal-register__title">Cadastro</h1>

        <Form className="modal-register__form" method="post" action="/register">
          {/* Nome Completo */}
          <div className="modal-register__input-group">
            <label className="modal-register__label">Nome Completo</label>
            <Input
              name="name"
              type="text"
              className="modal-register__input"
              required
            />
          </div>

          {/* Email */}
          <div className="modal-register__input-group">
            <label className="modal-register__label">Email</label>
            <Input
              name="email"
              type="email"
              className="modal-register__input"
              required
            />
          </div>

          {/* Telefone */}
          <div className="modal-register__input-group">
            <label className="modal-register__label">Telefone</label>
            <Input
              name="numberPhone"
              type="tel"
              className="modal-register__input"
              placeholder="Ex: 11999999999"
              pattern="[0-9]{11}"
              title="Digite um número com DDD (11 dígitos)"
              required
            />
          </div>

          {/* CPF */}
          <div className="modal-register__input-group">
            <label className="modal-register__label">CPF</label>
            <Input
              name="cpf"
              type="text"
              className="modal-register__input"
              placeholder="Somente números"
              pattern="[0-9]{11}"
              title="Digite um CPF válido (11 dígitos)"
              required
            />
          </div>

          {/* Data de Nascimento */}
          <div className="modal-register__input-group">
            <label className="modal-register__label">Data de Nascimento</label>
            <Input
              name="birthDate"
              type="date"
              className="modal-register__input"
              max={new Date().toISOString().split("T")[0]}
              required
            />
          </div>

          {/* País de Origem */}
          <div className="modal-register__input-group">
            <label className="modal-register__label">País de Origem</label>
            <select
              name="country"
              className="modal-register__input"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              required
            >
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          {/* Gênero */}
          <div className="modal-register__input-group">
            <label className="modal-register__label">Gênero</label>
            <select
              name="gender"
              className="modal-register__input"
              value={selectedGender}
              onChange={(e) => setSelectedGender(e.target.value)}
              required
            >
              <option value="">Selecione...</option>
              <option value="male">Masculino</option>
              <option value="female">Feminino</option>
              <option value="other">Outro</option>
              <option value="prefer-not-to-say">Prefiro não dizer</option>
            </select>
          </div>

          {/* Senha */}
          <div className="modal-register__input-group">
            <label className="modal-register__label">Senha</label>
            <Input
              name="password"
              type="password"
              className="modal-register__input"
              placeholder="Mínimo 8 caracteres"
              minLength="8"
              required
            />
          </div>

          {/* Confirmar Senha */}
          <div className="modal-register__input-group">
            <label className="modal-register__label">Confirmar Senha</label>
            <Input
              name="confirmPassword"
              type="password"
              className="modal-register__input"
              placeholder="Digite novamente sua senha"
              minLength="8"
              required
            />
          </div>

          <div className="modal-register__divider"></div>

          <Button type="submit" className="modal-register__submit">
            Cadastrar
          </Button>
        </Form>

        <div className="modal-register__footer">
          <p>
            Já tem uma conta?{" "}
            <button
              className="modal-register__login-link"
              onClick={onLoginClick}
            >
              Faça login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};
export default ModalRegister;
