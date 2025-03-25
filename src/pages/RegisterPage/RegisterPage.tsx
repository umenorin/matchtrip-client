import { Form, Link } from "react-router";
import "./RegisterPage.scss";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

export default function RegisterPage() {
  return (
    <div className="register-page">
      <h1 className="register-page__title">Cadastro</h1>
      <Form className="register-page__form">
        <Input name="name" type="text" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Email" />
        <Input name="tel" type="tel" placeholder="Número de Telefone" />
        <Input name="password" type="password" placeholder="Senha" />
        <Input name="password" type="password" placeholder="Confirmar Senha" />
        <Button  type="submit" >Cadastrar</Button>
      </Form>
      {/* É necessário fazer um componente para essa parte de link, e cirar um outro
        componente para esquecer a senha
      */}
      <div>
        <p>Já tem uma conta? <Link to="/">Faça login</Link></p>
      </div>
    </div>
  );
}
