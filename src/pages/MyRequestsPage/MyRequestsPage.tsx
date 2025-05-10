import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import "./MyRequestsPage.scss";
import { FaArrowLeft, FaComments, FaPaperPlane, FaTimes } from "react-icons/fa";
import fotoEnzo from "../../assets/fotoEnzo.png";
import fotoRuan from "../../assets/fotoRuan.png";
import image51 from "../../assets/image51.png";
import image52 from "../../assets/image52.png";
import fotoEstela from "../../assets/fotoEstela.png";

// Dados mockados das viagens curtidas (substitua pelos dados reais)
const mockTrips = [
  {
    id: "1",
    title: "Viagem para o Cataratas",
    location: "Foz do Iguaçu - Brasil",
    date: "21 fev - 30 fev",
    imageSrc: image51,
    participants: [
      { id: "1", name: "João Silva", photo: fotoEnzo },
      { id: "2", name: "Maria Santos", photo: fotoRuan },
      { id: "3", name: "Carlos Oliveira" },
    ],
    messages: [
      { userId: "1", text: "Olá pessoal, tudo bem?", time: "10:30" },
      { userId: "2", text: "Tudo ótimo! Ansiosa pela viagem!", time: "10:32" },
      { userId: "3", text: "Alguém já fez o check-in?", time: "11:15" },
    ],
  },
  {
    id: "2",
    title: "Viagem para Praia de Pipa",
    location: "Rio Grande do Norte - Brasil",
    date: "15 mar - 22 mar",
    imageSrc: image52,
    participants: [
      { id: "4", name: "Ana Paula", photo: fotoEstela },
      { id: "5", name: "Pedro Costa" },
    ],
    messages: [],
  },
];

const MyRequestsPage = () => {
  const { user } = useAuth();
  const [selectedTrip, setSelectedTrip] = useState<any>(null);
  const [newMessage, setNewMessage] = useState("");

  // Filtra apenas as viagens que o usuário atual está participando
  const userTrips = mockTrips;

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedTrip) return;

    // Aqui você faria a chamada à API para enviar a mensagem
    const newMsg = {
      userId: user?.id || "1", // Usando '1' como mock
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

      <div className="my-requests-page__content">
        <div className="my-requests-page__trip-list">
          {userTrips.map((trip) => (
            <div
              key={trip.id}
              className={`my-requests-page__trip-card ${
                selectedTrip?.id === trip.id ? "active" : ""
              }`}
              onClick={() => setSelectedTrip(trip)}
            >
              <div className="trip-card__info">
                <img src={trip.imageSrc} alt={trip.title} />
                <div>
                  <h3>{trip.title}</h3>
                  <p>{trip.location}</p>
                  <p>{trip.date}</p>
                  <p>Participantes: {trip.participants.length}</p>
                </div>
              </div>
              <button
                className="trip-card__chat-button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedTrip(trip);
                }}
              >
                <FaComments /> Chat
              </button>
            </div>
          ))}
        </div>

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
                      <img src={participant.photo} alt={participant.name} />
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
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
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
    </div>
  );
};

export default MyRequestsPage;
