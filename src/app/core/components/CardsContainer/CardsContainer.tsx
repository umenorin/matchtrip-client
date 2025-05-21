import image51 from "../../../../assets/image51.png";
import image52 from "../../../../assets/image52.png";
import image53 from "../../../../assets/image53.png";
import image54 from "../../../../assets/image54.png";
import fotoEnzo from "../../../../assets/fotoEnzo.png";
import fotoRuan from "../../../../assets/fotoRuan.png";
import Card from "./Card/Card";
import { useNavigate } from "react-router-dom";
import "./CardsContainer.scss";

interface TripData {
  imageSrc: string;
  title: string;
  location: string;
  date: string;
  status: string;
  maxParticipants: number;
  participants?: Array<{
    name: string;
    photo?: string;
  }>;
  month?: string;
  transport?: string;
}


export default function CardsContainer() {
  const navigate = useNavigate();

  const trips: TripData[] = [
    {
      imageSrc: image51,
      title: "Viagem para o Cataratas",
      location: "Foz do Iguaçu - Brasil",
      date: "21 fev - 30 fev",
      status: "1/2",
      maxParticipants: 6,
      month: "Fevereiro",
      transport: "Avião e Ônibus turístico",
      participants: [
        { name: "Enzo Laiber", photo: fotoEnzo },
        { name: "Ruan Costa", photo: fotoRuan },
      ],
    },
    {
      imageSrc: image52,
      title: "Viagem para o Praia de Pipa",
      location: "Rio Grande do Norte - Brasil",
      date: "21 fev - 30 fev",
      status: "1/2",
      maxParticipants: 2,
      month: "Fevereiro",
      transport: "Ônibus executivo",
      participants: [{ name: "Carlos Oliveira" }, { name: "Ana Paula" }],
    },
    {
      imageSrc: image53,
      title: "Viagem para o Monte Verde",
      location: "Monte Verde - Brasil",
      date: "21 fev - 30 fev",
      status: "1/2",
      maxParticipants: 2,
      month: "Fevereiro",
      transport: "Carro particular",
      participants: [{ name: "Pedro Costa" }, { name: "Juliana Almeida" }],
    },
    {
      imageSrc: image54,
      title: "Viagem Campus do Jordão e a Serra da Mantiqueira",
      location: "São Paulo - Brasil",
      date: "21 fev - 30 fev",
      status: "1/2",
      maxParticipants: 2,
      month: "Fevereiro",
      transport: "Trem",
      participants: [{ name: "Fernanda Gomes" }, { name: "Ricardo Nunes" }],
    },
  ];

  return (
    <section className="cards-container">
      {trips.map((trip, index) => (
        <div
          key={index}
          onClick={() => navigate("/match")}
          style={{ cursor: "pointer" }}
        >
          <Card
            imageSrc={trip.imageSrc}
            title={trip.title}
            location={trip.location}
            date={trip.date}
            status={`${trip.participants?.length || 0}/${trip.maxParticipants}`}
          />
        </div>
      ))}
    </section>
  );
}