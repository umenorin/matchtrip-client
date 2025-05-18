import "./LoginPage.scss";
import { Link, Form, useActionData } from "react-router";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Loading from "../../components/Loading/Loading";
import { useState } from "react";

const LoginPage = () => {
  const actionData = useActionData();
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    setLoading(true);
    // O Form do react-router vai continuar o submit normalmente
  }

  return (
    <div className="login-page">
      <div className="login-page__title">
        <h1 className="login-page__title">Faça o Login</h1>
      </div>
      <div className="login-page__form-div">
        {loading ? (
          <Loading />
        ) : (
          <Form className="login-page__form" method="post" onSubmit={handleSubmit}>
            <Input name="email" type="email" placeholder="Email" />
            {actionData?.errors?.email && <p>{actionData.errors.email}</p>}

            <Input name="password" type="password" placeholder="Senha" />
            {actionData?.errors?.password && <p>{actionData.errors.password}</p>}

            <Button type="submit">Entrar</Button>
          </Form>
        )}
      </div>
      <p>
        Não tem uma conta? <Link to="/register">Cadastre-se</Link>
      </p>
    </div>
  );
};

export default LoginPage;