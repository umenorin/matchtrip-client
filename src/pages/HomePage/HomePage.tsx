import "./HomePage.scss";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import image51 from "../../assets/image51.png";
import image52 from "../../assets/image52.png";
import image53 from "../../assets/image53.png";
import image54 from "../../assets/image54.png";
import fotoEnzo from "../../assets/fotoEnzo.png";
import fotoRuan from "../../assets/fotoRuan.png";
import { useEffect, useState } from "react";
import MobileSidebar from "../../components/MobileSidebar/MobileSidebar";
import Card from "../../components/Card/Card";
import { FaHeart, FaTimes, FaUser, FaUserFriends } from "react-icons/fa";
import ModalOpenTrip from "../../components/ModalOpenTrip/ModalOpenTrip";

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

export default function HomePage() {
  const [_windowWidht, setWindowWidht] = useState(window.innerWidth);
  const [selectedTrip, setSelectedTrip] = useState<TripData | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);

  const handleCardClick = (trip: TripData) => {
    setSelectedTrip(trip);
  };

  const handleCloseModal = () => {
    setSelectedTrip(null);
  };

  const handleLikeTrip = (index: number) => {
    if (favorites.includes(index)) {
      setFavorites(favorites.filter((i) => i !== index));
    } else {
      setFavorites([...favorites, index]);
    }
    handleCloseModal();
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidht(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    <div className="home-page">
      {/* Filtro de categorias */}
      <CategoryFilter />

      <section className="cards-container">
        {trips.map((trip, index) => (
          <div key={index} onClick={() => handleCardClick(trip)}>
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

      {selectedTrip && (
        <ModalOpenTrip onClose={handleCloseModal}>
          <div className="trip-modal">
            <div className="trip-modal__header">
              <h2>{selectedTrip.title}</h2>
              <p className="trip-modal__location">{selectedTrip.location}</p>
              {/* <p className="trip-modal__date">{selectedTrip.date}</p> */}
            </div>

            <div className="trip-modal__image-container">
              <img
                src={selectedTrip.imageSrc}
                alt={selectedTrip.title}
                className="trip-modal__image"
              />
            </div>

            <div className="trip-modal__general-info">
              <div className="trip-modal__info-item">
                <h4>Mês da viagem</h4>
                <p>{selectedTrip.month}</p>
              </div>
              <div className="trip-modal__info-item">
                <h4>Transporte principal</h4>
                <p>{selectedTrip.transport}</p>
              </div>
            </div>

            <div className="trip-modal__section">
              <div className="trip-modal__section-header">
                <h3>
                  <FaUserFriends /> Participantes
                </h3>
                <div className="trip-modal__participants-count">
                  {selectedTrip.participants?.length || 0}/
                  {selectedTrip.maxParticipants}
                </div>
              </div>
              <div className="trip-modal__participants">
                {selectedTrip.participants?.map((participant, idx) => (
                  <div key={idx} className="trip-modal__participant">
                    {participant.photo ? (
                      <img
                        src={participant.photo}
                        alt={participant.name}
                        className="trip-modal__participant-photo"
                      />
                    ) : (
                      <div className="trip-modal__participant-icon">
                        <FaUser />
                      </div>
                    )}
                    <span>{participant.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="trip-modal__max-participants">
              <label htmlFor="maxParticipants">
                Número máximo de participantes:
              </label>
              <input
                type="number"
                id="maxParticipants"
                value={selectedTrip.maxParticipants}
                min={selectedTrip.participants?.length || 1}
                readOnly
                className="trip-modal__participants-input"
              />
            </div>

            <div className="trip-modal__actions">
              <button
                className="trip-modal__button trip-modal__button--reject"
                onClick={handleCloseModal}
              >
                <FaTimes /> Não tenho interesse
              </button>
              <button
                className={`trip-modal__button trip-modal__button--like ${favorites.includes(trips.indexOf(selectedTrip)) ? "liked" : ""}`}
                onClick={() => handleLikeTrip(trips.indexOf(selectedTrip))}
              >
                <FaHeart />{" "}
                {favorites.includes(trips.indexOf(selectedTrip))
                  ? "Adicionado"
                  : "Curtir"}
              </button>
            </div>
          </div>
        </ModalOpenTrip>
      )}

      <MobileSidebar />
    </div>
  );
}
