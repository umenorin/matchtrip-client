import { useState, useRef, useEffect } from "react";
import { FaCamera } from "react-icons/fa";
import Input from "../../shared/Input/Input";
import Button from "../../shared/Button/Button";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./ModalRegister.scss";

interface ModalRegisterProps {
  onClose: () => void;
  onLoginClick: () => void;
}

const ModalRegister = ({ onClose, onLoginClick }: ModalRegisterProps) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const { setUserPhoto } = useContext(AuthContext);
  const modalRef = useRef<HTMLDivElement>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cpf: "",
    birthDate: "",
    country: "BR",
    gender: "",
    password: "",
    confirmPassword: "",
    profilePhoto: null as File | null,
  });

  const countries = [
    { code: "BR", name: "Brasil" },
    { code: "US", name: "Estados Unidos" },
    { code: "PT", name: "Portugal" },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData((prev) => ({ ...prev, profilePhoto: file }));

      const reader = new FileReader();
      reader.onloadend = () => {
        const photoUrl = reader.result as string;
        setPreviewImage(photoUrl);
        setUserPhoto(photoUrl); // Salva a foto no contexto
      };
      reader.readAsDataURL(file);
    }
  };

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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const renderStep1 = () => (
    <div className="modal-register__content" ref={modalRef}>
      <button className="modal-register__close" onClick={onClose}>
        &times;
      </button>

      <h1 className="modal-register__title">Cadastro</h1>

      {/* Nome Completo */}
      <div className="modal-register__input-group">
        <label className="modal-register__label">Nome Completo</label>
        <Input
          name="name"
          type="text"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>

      {/* Email */}
      <div className="modal-register__input-group">
        <label className="modal-register__label">Email</label>
        <Input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>

      {/* Telefone */}
      <div className="modal-register__input-group">
        <label className="modal-register__label">Telefone</label>
        <Input
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleInputChange}
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
          value={formData.cpf}
          onChange={handleInputChange}
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
          value={formData.birthDate}
          onChange={handleInputChange}
          max={new Date().toISOString().split("T")[0]}
          required
        />
      </div>

      {/* País de Origem */}
      <div className="modal-register__input-group">
        <label className="modal-register__label">País de Origem</label>
        <select
          name="country"
          value={formData.country}
          onChange={handleInputChange}
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
          value={formData.gender}
          onChange={handleInputChange}
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
          value={formData.password}
          onChange={handleInputChange}
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
          value={formData.confirmPassword}
          onChange={handleInputChange}
          placeholder="Digite novamente sua senha"
          minLength="8"
          required
        />
      </div>

      <div className="modal-register__divider"></div>

      <Button
        type="button"
        onClick={() => setStep(2)}
        className="modal-register__next-btn"
      >
        Próximo
      </Button>

      <div className="modal-register__footer">
        <p>
          Já tem uma conta?{" "}
          <button className="modal-register__login-link" onClick={onLoginClick}>
            Faça login
          </button>
        </p>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="modal-register__content" ref={modalRef}>
      <button className="modal-register__close" onClick={onClose}>
        &times;
      </button>

      <h2 className="modal-register__title">Foto de Perfil</h2>
      <div className="modal-register__photo-upload">
        <label className="modal-register__photo-label">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="modal-register__photo-input"
          />
          {previewImage ? (
            <img
              src={previewImage}
              alt="Preview"
              className="modal-register__photo-preview"
            />
          ) : (
            <>
              <FaCamera className="modal-register__photo-icon" />
              <span>Adicionar Foto</span>
            </>
          )}
        </label>

        <div className="modal-register__photo-actions">
          <Button type="button" variant="outline" onClick={() => setStep(3)}>
            Pular
          </Button>
          <Button type="button" onClick={() => setStep(3)}>
            Próximo
          </Button>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="modal-register__content" ref={modalRef}>
      <button className="modal-register__close" onClick={onClose}>
        &times;
      </button>

      <h2 className="modal-register__title">Confirmação</h2>
      <div className="modal-register__confirmation">
        <div className="modal-register__confirmation-details">
          <p>
            <strong>Nome:</strong> {formData.name}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
          <p>
            <strong>CPF:</strong> {formData.cpf}
          </p>
          <p>
            <strong>País:</strong>{" "}
            {countries.find((c) => c.code === formData.country)?.name}
          </p>
          <p>
            <strong>Gênero:</strong>{" "}
            {formData.gender === "male"
              ? "Masculino"
              : formData.gender === "female"
              ? "Feminino"
              : formData.gender === "other"
              ? "Outro"
              : "Prefiro não dizer"}
          </p>

          {previewImage && (
            <div className="modal-register__confirmation-photo">
              <strong>Foto:</strong>
              <img
                src={previewImage}
                alt="Preview"
                className="modal-register__photo-preview-small"
              />
            </div>
          )}
        </div>

        <div className="modal-register__confirmation-actions">
          <Button type="button" variant="outline" onClick={() => setStep(2)}>
            Voltar
          </Button>
          <Button
            type="button"
            onClick={() => {
              // Lógica de cadastro aqui
              console.log("Dados para cadastro:", formData);
              onClose();
            }}
            className="modal-register__submit"
          >
            Cadastrar
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="modal-register__overlay">
      {step === 1 && renderStep1()}
      {step === 2 && renderStep2()}
      {step === 3 && renderStep3()}
    </div>
  );
};

export default ModalRegister;
