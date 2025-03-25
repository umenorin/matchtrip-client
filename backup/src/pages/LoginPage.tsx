import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Form, Button } from "../styles/FormStyles";
import Input from "../components/Input/Input";
import { toast } from "react-toastify";
import axios from "axios";


interface User {
  email: string;
  password: string;
}

const LoginPage = ({
  users,
  setLoggedInUser,
}: {
  users: User[];
  setLoggedInUser: (user: string) => void;
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      setLoggedInUser(email);
      toast.success("Login realizado com sucesso!");
      navigate("/home");
    } else {
      toast.error("Email ou senha incorretos!");
    }
  };

  return (
    <Container>
      <h2>Login</h2>
      <Form onSubmit={handleLogin}>
        <Input
          name="email"
          getter={email}
          setter={setEmail}
        />

        <Input
          name="senha"
          getter={password}
          setter={setPassword}
        />
       
        <Button type="submit">Entrar</Button>
      </Form>
      <p>
        Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
      </p>
    </Container>
  );
};

export default LoginPage;
