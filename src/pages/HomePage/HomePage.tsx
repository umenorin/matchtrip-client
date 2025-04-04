import "./HomePage.scss";
import logo from "../../assets/logo.png";
import Button from "../../components/Button/Button";
import Navbar from "../../components/Navbar/Navbar";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import image51 from "../../assets/image51.png";
import image52 from "../../assets/image52.png";
import image53 from "../../assets/image53.png";
import image54 from "../../assets/image54.png";
import responsiveLogo from "../../assets/ResponsiveLogo.png";
import { useEffect, useState } from "react";
import MobileSidebar from "../../components/MobileSidebar/MobileSidebar";
import Card from "../../components/Card/Card";
import UserDropdown from "../../components/UserDropdown/UserDropdown";

export default function HomePage({ userName }: any) {
  const [windowWidht, setWindowWidht] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidht(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const showLogo = windowWidht >= 1270;
  const showResponsiveLogo = windowWidht < 1270 && windowWidht > 430;

  const trips = [
    {
      imageSrc: image51,
      title: "Viagem para o Cataratas",
      location: "Foz do Iguaçu - Brasil",
      date: "21 fev - 30 fev",
      status: "1/2",
    },
    {
      imageSrc: image52,
      title: "Viagem para o Praia de Pipa",
      location: "Rio Grande do Norte - Brasil",
      date: "21 fev - 30 fev",
      status: "1/2",
    },
    {
      imageSrc: image53,
      title: "Viagem para o Monte Verde",
      location: "Monte Verde - Brasil",
      date: "21 fev - 30 fev",
      status: "1/2",
    },
    {
      imageSrc: image54,
      title: "Viagem Campus do Jordão e a Serra da Mantiqueira",
      location: "São Paulo - Brasil",
      date: "21 fev - 30 fev",
      status: "1/2",
    },
    // Adicione mais cards conforme necessário
  ];

  return (
    <div className="home-page">
      <header className="home-page__header">
        {/* Lado esquerdo - Logo */}
        <div>
          {showLogo && (
            <img src={logo} alt="Logo" className="home-page__logo" />
          )}
          {showResponsiveLogo && (
            <img
              src={responsiveLogo}
              alt="Logo Responsivo"
              className="home-page__responsive-logo"
            />
          )}
        </div>
        {/* Centro - Navbar */}
        <div className="home-page__navbar">
          <Navbar title="Aonde você quer ir?" />
        </div>
        {/* Lado direito - Ações */}
        <div className="home-page__actions">
          <Button size="medium">Criar nova Viagem</Button>
          <UserDropdown />
        </div>
      </header>
      {/* Filtro de categorias */}
      <section className="home-page__filter">
        <CategoryFilter />
      </section>

      <section className="cards-container">
        {trips.map((trip, index) => (
          <Card
            key={index}
            imageSrc={trip.imageSrc}
            title={trip.title}
            location={trip.location}
            date={trip.date}
            status={trip.status}
          />
        ))}
      </section>

      <MobileSidebar />
    </div>
  );
}
