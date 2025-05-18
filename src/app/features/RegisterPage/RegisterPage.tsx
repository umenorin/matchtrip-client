import { Form, Link } from "react-router-dom";
import "./RegisterPage.scss";
import Input from "../../core/shared/Input/Input";
import Button from "../../core/shared/Button/Button";

export default function RegisterPage() {
  return (
    <div className="register-page">
      <h1 className="register-page__title">Crie sua conta</h1>
      <div className="formulario">
        <Form className="register-page__form" method="post">
          <div className="page__form-inputs">
            <Input
              name="name"
              type="text"
              placeholder="Nome Completo"
              required
            />
            <Input name="email" type="email" placeholder="Email" required />
            <Input
              name="uniqueIdentification"
              type="text"
              placeholder="CPF (somente números)"
              title="Digite um CPF válido (11 dígitos)"
              required
            />
            <Input
              name="numberPhone"
              type="tel"
              placeholder="Número de Telefone (com DDD)"
              title="Digite um número com DDD (ex: 11999999999)"
            />
            <Input
              name="password"
              type="password"
              placeholder="Senha (mínimo 8 caracteres)"
              minLength={8}
              required
            />
            <Input
              name="nationality"
              type="text"
              placeholder="Nacionalidade (ex: BR)"
              pattern="[A-Za-z]{2}"
              title="Código de 2 letras (ex: BR)"
              required
            />
            <Input
              name="age"
              type="number"
              placeholder="Idade"
              min={18}
              max={120}
              required
            />
            <select name="gender" required className="container__input">
              <option value="">Selecione o gênero</option>
              <option value="male">Masculino</option>
              <option value="female">Feminino</option>
              <option value="other">Outro</option>
              <option value="prefer-not-to-say">Prefiro não dizer</option>
            </select>
          </div>
          <Button type="link" navigateTo="/">
            Cadastrar
          </Button>
        </Form>
        <div className="register-page__link">
          <p>
            Já tem uma conta? <Link to="/login">Faça login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
