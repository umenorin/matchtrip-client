import Input from "../../components/Input/Input";
import "./LoginPage.scss";

import { Link, Form } from "react-router";

const LoginPage = () => {
  return (
    <div className="login-page">
      <h1 className="login-page__title">Login Page</h1>
      <Form className="login-page__form" action="">
        
        {/* <Input type="email" >email</Input> */}
        {/* <Input
          name="email"
          getter={email}
          setter={setEmail}
        />

        <Input
          name="senha"
          getter={password}
          setter={setPassword}
        /> */}
       
        {/* <Button type="submit">Entrar</Button> */}
      </Form>

      {/* Component para links (Recuperar senha, cadastrar) */}
      <p>
        Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
      </p>
    </div>
  );
};

export default LoginPage;
