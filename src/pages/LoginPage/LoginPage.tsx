import "./LoginPage.scss";

import { Link, Form, useActionData } from "react-router";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const LoginPage = () => {
  const actionData = useActionData();

  return (
    <div className="login-page">
      <h1 className="login-page__title">Login Page</h1>
      <Form className="login-page__form" method="post">
        <Input name="email" type="email" placeholder="Email" />
        {actionData?.errors?.email && <p>{actionData.errors.email}</p>}

        <Input name="password" type="password" placeholder="Senha" />
        {actionData?.errors?.password && <p>{actionData.errors.password}</p>}

        <Button type="submit">Entrar</Button>
      </Form>

      {/* Component para links (Recuperar senha, cadastrar) */}
      <p>
        Não tem uma conta? <Link to="/register">Cadastre-se</Link>
      </p>
    </div>
  );
};

export default LoginPage;
