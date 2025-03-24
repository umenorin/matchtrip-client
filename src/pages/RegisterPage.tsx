import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Container, Form, Input, Button } from "../styles/FormStyles";
import { toast } from "react-toastify";

export interface User {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
}

const RegisterPage = ({
  setUsers,
}: {
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    // Verifica se todos os campos estão preenchidos
    if (!fullName || !email || !phoneNumber || !password || !confirmPassword) {
      toast.error("Preencha todos os campos!");
      return;
    }

    // Verifica se a senha e a confirmação coincidem
    if (password !== confirmPassword) {
      toast.error("As senhas não coincidem!");
      return;
    }

    setUsers((prevUsers) => {
      if (prevUsers.some((user) => user.email === email)) {
        toast.error("Este email já está cadastrado!");
        return prevUsers;
      }

      toast.success("Cadastro realizado com sucesso!");
      return [...prevUsers, { fullName, email, phoneNumber, password }];
    });

    navigate("/");
  };

  return (
    <Container>
      <h2>Cadastro</h2>
      <Form onSubmit={handleRegister}>
        <Input
          type="text"
          placeholder="Nome Completo"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="tel"
          placeholder="Número de Telefone"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Confirmar Senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button type="submit">Cadastrar</Button>
      </Form>
      <p>
        Já tem uma conta? <Link to="/">Faça login</Link>
      </p>
    </Container>
  );
};

export default RegisterPage;
