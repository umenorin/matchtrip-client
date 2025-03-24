import { useNavigate } from "react-router-dom";
import { Button, Container } from "../styles/FormStyles";

const HomePage = ({ user }: { user: string }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };
  return (
    <Container>
      <h2>Bem vindo, {user}</h2>
      <Button onClick={handleLogout}>Sair</Button>
    </Container>
  );
};
export default HomePage;
