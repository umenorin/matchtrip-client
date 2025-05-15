import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import "./MyRequestsPage.scss";
import {
  FaComments,
  FaPaperPlane,
  FaTimes,
  FaArrowLeft,
  FaStar,
  FaRegStar,
} from "react-icons/fa";
import fotoEnzo from "../../assets/fotoEnzo.png";
import fotoRuan from "../../assets/fotoRuan.png";
import image51 from "../../assets/image51.png";
import image52 from "../../assets/image52.png";
import image53 from "../../assets/image53.png";
import fotoEstela from "../../assets/fotoEstela.png";

// Tipos para as viagens
type Trip = {
  id: string;
  title: string;
  location: string;
  date: string;
  imageSrc: string;
  participants: Participant[];
  messages: Message[];
  status: "ongoing" | "completed";
  rating?: number;
  review?: string;
  feedback?: {
    question1?: string;
    question2?: string;
    question3?: string;
  };
  recommendation?: number;
};

type Participant = {
  id: string;
  name: string;
  photo: string | null;
};

type Message = {
  userId: string;
  text: string;
  time: string;
};

// Dados mockados das viagens curtidas (substitua pelos dados reais)
const mockTrips: Trip[] = [
  {
    id: "1",
    title: "Viagem para o Cataratas",
    location: "Foz do Iguaçu - Brasil",
    date: "21 fev - 30 fev 2023",
    imageSrc: image51,
    participants: [
      { id: "1", name: "João Silva", photo: fotoRuan },
      { id: "2", name: "Maria Santos", photo: fotoEstela },
    ],
    messages: [
      { userId: "1", text: "Olá pessoal, tudo bem?", time: "10:30" },
      { userId: "2", text: "Tudo ótimo! Ansiosa pela viagem!", time: "10:32" },
    ],
    status: "ongoing",
  },
  {
    id: "2",
    title: "Viagem para Praia de Pipa",
    location: "Rio Grande do Norte - Brasil",
    date: "15 mar - 22 mar 2023",
    imageSrc: image52,
    participants: [
      { id: "1", name: "João Silva", photo: fotoEnzo },
      { id: "3", name: "Carlos Oliveira", photo: null },
    ],
    messages: [],
    status: "completed",
    rating: 0,
    review: "",
    feedback: {
      question1: undefined,
      question2: undefined,
      question3: undefined,
    },
    recommendation: undefined,
  },
  {
    id: "3",
    title: "Viagem para Monte Verde",
    location: "Minas Gerais - Brasil",
    date: "10 mai - 15 mai 2023",
    imageSrc: image53,
    participants: [
      { id: "1", name: "João Silva", photo: null },
      { id: "4", name: "Ana Paula", photo: null },
    ],
    messages: [],
    status: "completed",
    rating: 4,
    review: "Adorei a viagem! O local era incrível.",
    feedback: {
      question1: "excellent",
      question2: "yes",
      question3: "very-satisfied",
    },
    recommendation: 9,
  },
];

const MyRequestsPage = () => {
  const { user } = useAuth() ?? { user: { id: "1", name: "Usuário Teste" } };
  const [activeTab, setActiveTab] = useState<"ongoing" | "completed">(
    "ongoing"
  );
  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);
  const [newMessage, setNewMessage] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [tripRating, setTripRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [recommendation, setRecommendation] = useState(0);
  const [feedback, setFeedback] = useState({
    question1: "",
    question2: "",
    question3: "",
  });

  // Filtra as viagens do usuário
  const userTrips = mockTrips;

  const ongoingTrips = userTrips.filter((trip) => trip.status === "ongoing");
  const completedTrips = userTrips.filter(
    (trip) => trip.status === "completed"
  );

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedTrip) return;

    const newMsg = {
      userId: user?.id || "1",
      text: newMessage,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setSelectedTrip({
      ...selectedTrip,
      messages: [...selectedTrip.messages, newMsg],
    });

    setNewMessage("");
  };

  const handleRateTrip = (rating: number) => {
    setTripRating(rating);
  };

  const handleFeedbackChange = (question: string, value: string) => {
    setFeedback({
      ...feedback,
      [question]: value,
    });
  };

  const handleSubmitReview = () => {
    if (!selectedTrip) return;

    // Aqui você enviaria a avaliação para o backend
    const updatedTrip = {
      ...selectedTrip,
      rating: tripRating,
      review: reviewText,
      feedback,
      recommendation,
    };

    console.log("Avaliação enviada:", updatedTrip);
    alert("Avaliação enviada com sucesso!");
    setSelectedTrip(null);
  };

  const handleViewTrip = (trip: Trip) => {
    setSelectedTrip(trip);
    if (trip.status === "completed") {
      setTripRating(trip.rating || 0);
      setReviewText(trip.review || "");
      setFeedback({
        question1: trip.feedback?.question1 ?? "",
        question2: trip.feedback?.question2 ?? "",
        question3: trip.feedback?.question3 ?? "",
      });
      setRecommendation(trip.recommendation || 0);
    }
  };

  return (
    <div className="my-requests-page">
      <header className="my-requests-page__header">
        <button
          className="my-requests-page__back-button"
          onClick={() => window.history.back()}
        >
          <FaArrowLeft />
        </button>
        <h1>Minhas Viagens</h1>
      </header>

      <div className="my-requests-page__tabs">
        <button
          className={`tab-button ${activeTab === "ongoing" ? "active" : ""}`}
          onClick={() => setActiveTab("ongoing")}
        >
          Em Andamento
        </button>
        <button
          className={`tab-button ${activeTab === "completed" ? "active" : ""}`}
          onClick={() => setActiveTab("completed")}
        >
          Finalizadas
        </button>
      </div>

      <div className="my-requests-page__content">
        <div className="my-requests-page__trip-list">
          {(activeTab === "ongoing" ? ongoingTrips : completedTrips).map(
            (trip) => (
              <div
                key={trip.id}
                className={`my-requests-page__trip-card ${
                  selectedTrip?.id === trip.id ? "active" : ""
                }`}
                onClick={() => handleViewTrip(trip)}
              >
                <div className="trip-card__info">
                  <img src={trip.imageSrc} alt={trip.title} />
                  <div>
                    <h3>{trip.title}</h3>
                    <p>{trip.location}</p>
                    <p>{trip.date}</p>
                    <p>
                      Status:{" "}
                      {trip.status === "ongoing" ? "Em andamento" : "Concluída"}
                    </p>
                  </div>
                </div>
                {trip.status === "ongoing" ? (
                  <button
                    className="trip-card__chat-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleViewTrip(trip);
                    }}
                  >
                    <FaComments /> Chat
                  </button>
                ) : (
                  <button
                    className="trip-card__review-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleViewTrip(trip);
                    }}
                  >
                    {trip.rating ? "Ver Avaliação" : "Avaliar"}
                  </button>
                )}
              </div>
            )
          )}
        </div>

        {selectedTrip && (
          <div className="my-requests-page__trip-details">
            <div className="trip-details__header">
              <h2>{selectedTrip.title}</h2>
              <button
                className="trip-details__close-button"
                onClick={() => setSelectedTrip(null)}
              >
                <FaTimes />
              </button>
            </div>

            {selectedTrip.status === "ongoing" ? (
              <div className="trip-details__chat">
                {/* Chat para viagens em andamento (código anterior) */}
                {selectedTrip && (
                  <div className="my-requests-page__chat-container">
                    <div className="chat-container__header">
                      <h3>{selectedTrip.title}</h3>
                      <button
                        className="chat-container__close-button"
                        onClick={() => setSelectedTrip(null)}
                      >
                        <FaTimes />
                      </button>
                    </div>

                    <div className="chat-container__participants">
                      <h4>Participantes:</h4>
                      <div className="participants-list">
                        {selectedTrip.participants.map((participant: any) => (
                          <div key={participant.id} className="participant">
                            {participant.photo ? (
                              <img
                                src={participant.photo}
                                alt={participant.name}
                              />
                            ) : (
                              <div className="participant__placeholder">
                                {participant.name.charAt(0)}
                              </div>
                            )}
                            <span>{participant.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="chat-container__messages">
                      {selectedTrip.messages.length === 0 ? (
                        <p className="no-messages">
                          Nenhuma mensagem ainda. Seja o primeiro a enviar!
                        </p>
                      ) : (
                        selectedTrip.messages.map((msg: any, index: number) => (
                          <div
                            key={index}
                            className={`message ${
                              msg.userId === user?.id ? "sent" : "received"
                            }`}
                          >
                            <div className="message__content">
                              <p>{msg.text}</p>
                              <span className="message__time">{msg.time}</span>
                            </div>
                          </div>
                        ))
                      )}
                    </div>

                    <div className="chat-container__input">
                      <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Digite sua mensagem..."
                        onKeyPress={(e) =>
                          e.key === "Enter" && handleSendMessage()
                        }
                      />
                      <button
                        className="send-button"
                        onClick={handleSendMessage}
                        disabled={!newMessage.trim()}
                      >
                        <FaPaperPlane />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="trip-details__review">
                <h3>Avalie sua experiência</h3>

                <div className="rating-section">
                  <h4>Como você avalia esta viagem?</h4>
                  <div className="stars-rating">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className="star"
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        onClick={() => handleRateTrip(star)}
                      >
                        {star <= (hoverRating || tripRating) ? (
                          <FaStar className="filled" color="blue" />
                        ) : (
                          <FaRegStar />
                        )}
                      </span>
                    ))}
                  </div>
                  <p className="rating-text">
                    {tripRating === 0
                      ? "Selecione uma avaliação"
                      : tripRating === 1
                      ? "Péssima"
                      : tripRating === 2
                      ? "Ruim"
                      : tripRating === 3
                      ? "Boa"
                      : tripRating === 4
                      ? "Muito boa"
                      : "Excelente"}
                  </p>
                </div>

                <div className="feedback-section">
                  <h4>Perguntas sobre a viagem</h4>

                  <div className="feedback-question">
                    <p>Como foi a organização da viagem?</p>
                    <div className="feedback-options">
                      <button
                        className={`feedback-button ${
                          feedback.question1 === "excellent" ? "selected" : ""
                        }`}
                        onClick={() =>
                          handleFeedbackChange("question1", "excellent")
                        }
                      >
                        Excelente
                      </button>
                      <button
                        className={`feedback-button ${
                          feedback.question1 === "good" ? "selected" : ""
                        }`}
                        onClick={() =>
                          handleFeedbackChange("question1", "good")
                        }
                      >
                        Boa
                      </button>
                      <button
                        className={`feedback-button ${
                          feedback.question1 === "regular" ? "selected" : ""
                        }`}
                        onClick={() =>
                          handleFeedbackChange("question1", "regular")
                        }
                      >
                        Regular
                      </button>
                      <button
                        className={`feedback-button ${
                          feedback.question1 === "bad" ? "selected" : ""
                        }`}
                        onClick={() => handleFeedbackChange("question1", "bad")}
                      >
                        Ruim
                      </button>
                    </div>
                  </div>

                  <div className="feedback-question">
                    <p>Você recomendaria este destino?</p>
                    <div className="feedback-options">
                      <button
                        className={`feedback-button ${
                          feedback.question2 === "yes" ? "selected" : ""
                        }`}
                        onClick={() => handleFeedbackChange("question2", "yes")}
                      >
                        Sim
                      </button>
                      <button
                        className={`feedback-button ${
                          feedback.question2 === "maybe" ? "selected" : ""
                        }`}
                        onClick={() =>
                          handleFeedbackChange("question2", "maybe")
                        }
                      >
                        Talvez
                      </button>
                      <button
                        className={`feedback-button ${
                          feedback.question2 === "no" ? "selected" : ""
                        }`}
                        onClick={() => handleFeedbackChange("question2", "no")}
                      >
                        Não
                      </button>
                    </div>
                  </div>

                  <div className="feedback-question">
                    <p>Como avalia a relação custo-benefício?</p>
                    <div className="feedback-options">
                      <button
                        className={`feedback-button ${
                          feedback.question3 === "very-satisfied"
                            ? "selected"
                            : ""
                        }`}
                        onClick={() =>
                          handleFeedbackChange("question3", "very-satisfied")
                        }
                      >
                        Muito satisfeito
                      </button>
                      <button
                        className={`feedback-button ${
                          feedback.question3 === "satisfied" ? "selected" : ""
                        }`}
                        onClick={() =>
                          handleFeedbackChange("question3", "satisfied")
                        }
                      >
                        Satisfeito
                      </button>
                      <button
                        className={`feedback-button ${
                          feedback.question3 === "neutral" ? "selected" : ""
                        }`}
                        onClick={() =>
                          handleFeedbackChange("question3", "neutral")
                        }
                      >
                        Neutro
                      </button>
                      <button
                        className={`feedback-button ${
                          feedback.question3 === "dissatisfied"
                            ? "selected"
                            : ""
                        }`}
                        onClick={() =>
                          handleFeedbackChange("question3", "dissatisfied")
                        }
                      >
                        Insatisfeito
                      </button>
                    </div>
                  </div>
                </div>

                <div className="review-section">
                  <h4>Deixe sua opinião</h4>
                  <textarea
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    placeholder="Conte como foi sua experiência..."
                    rows={4}
                  />
                </div>

                <div className="recommendation-section">
                  <h4>De 0 a 10, quanto você recomenda nosso site?</h4>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    value={recommendation}
                    onChange={(e) =>
                      setRecommendation(parseInt(e.target.value))
                    }
                  />
                  <div className="recommendation-value">
                    <span>0</span>
                    <span>5</span>
                    <span>10</span>
                    <div className="current-value">{recommendation}</div>
                  </div>
                </div>

                <button
                  className="submit-review-button"
                  onClick={handleSubmitReview}
                  disabled={tripRating === 0}
                >
                  Enviar Avaliação
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyRequestsPage;
