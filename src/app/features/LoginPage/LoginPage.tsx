import "./LoginPage.scss";
import { Link, Form, useActionData } from "react-router";
import { useState } from "react";
import Loading from "../../core/components/Loading/Loading";
import Input from "../../core/shared/Input/Input";
import Button from "../../core/shared/Button/Button";

const LoginPage = () => {
  const actionData = useActionData();
  const [loading, _setLoading] = useState(false);

  function handleSubmit() {
    _setLoading(true);
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
          <Form
            className="login-page__form"
            method="post"
            onSubmit={handleSubmit}
          >
            <Input name="email" type="email" placeholder="Email" />
            {actionData?.errors?.email && <p>{actionData.errors.email}</p>}

            <Input name="password" type="password" placeholder="Senha" />
            {actionData?.errors?.password && (
              <p>{actionData.errors.password}</p>
            )}

            <Button navigateTo={undefined} type="submit">
              Entrar
            </Button>
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
