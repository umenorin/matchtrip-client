import "./HomePage.scss";

export default function HomePage({ userName }: any) {
  return (
      <div className="home-page">
        <h1 className="home-page__title">Bem vindo, {userName}</h1>

        {/* LOGOUT BUTTON - Deveria estar no header (Layout.tsx) */}
        {/* <Button>Sair</Button> */}
      </div>
    );
}
