import "./LoginPage.scss";

import { Link, Form, useActionData } from "react-router";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const LoginPage = () => {
  const actionData = useActionData();

  return (
    <div className="login-page">
      <div className="login-page__title">
        <h1 className="login-page__title">Faça o Login</h1>
      </div>
      <div className="login-page__form-div">
        <Form className="login-page__form" method="post">
          <Input name="email" type="email" placeholder="Email" />
          {actionData?.errors?.email && <p>{actionData.errors.email}</p>}

          <Input name="password" type="password" placeholder="Senha" />
          {actionData?.errors?.password && <p>{actionData.errors.password}</p>}

          <Button type="submit">Entrar</Button>
        </Form>
      </div>
      {/* Component para links (Recuperar senha, cadastrar) */}
      <p>
        Não tem uma conta? <Link to="/register">Cadastre-se</Link>
      </p>
    </div>
  );
};

export default LoginPage;
