import { Form, Link } from "react-router";
import "./RegisterPage.scss";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

export default function RegisterPage() {
  return (
    <div className="register-page">
      <h1 className="register-page__title">Cadastro</h1>
      <Form className="register-page__form" method="post">
        {/* Nome Completo */}
        <Input name="name" type="text" placeholder="Nome Completo" required />

        {/* Email */}
        <Input name="email" type="email" placeholder="Email" required />

        {/* Telefone */}
        <Input
          name="numberPhone"
          type="tel"
          placeholder="Número de Telefone (com DDD)"
          title="Digite um número com DDD (ex: 11999999999)"
        />

        {/* Senha */}
        <Input
          name="password"
          type="password"
          placeholder="Senha (mínimo 8 caracteres)"
          minLength="8"
          required
        />

        {/* Idade */}
        <Input
          name="age"
          type="number"
          placeholder="Idade"
          min="18"
          max="120"
          required
        />

        {/* CPF/Identificação Única */}
        <Input
          name="uniqueIdentification"
          type="text"
          placeholder="CPF (somente números)"
          title="Digite um CPF válido (11 dígitos)"
          required
        />

        {/* Nacionalidade */}
        <Input
          name="nationality"
          type="text"
          placeholder="Nacionalidade (ex: BR)"
          pattern="[A-Za-z]{2}"
          title="Código de 2 letras (ex: BR)"
          required
        />

        {/* Gênero */}
        <select name="gender" required className="container__input">
          <option value="">Selecione o gênero</option>
          <option value="male">Masculino</option>
          <option value="female">Feminino</option>
          <option value="other">Outro</option>
          <option value="prefer-not-to-say">Prefiro não dizer</option>
        </select>
        <Button type="submit">Cadastrar</Button>
      </Form>
      {/* É necessário fazer um componente para essa parte de link, e cirar um outro
        componente para esquecer a senha
      */}
      <div>
        <p>
          Já tem uma conta? <Link to="/">Faça login</Link>
        </p>
      </div>
    </div>
  );
}
