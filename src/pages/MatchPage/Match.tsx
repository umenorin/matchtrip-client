import { useState } from "react";
import GroupCard from "../../app/core/components/GroupCard/GroupCard";
import Schedule from "../../app/core/components/Schedule/Schedule";
import MembersList from "../../app/core/components/MembersList/MembersList";
import MatchActions from "../../app/core/components/MatchActions/MatchActions";
import ModalMatchConfirm from "../../app/core/components/ModalMatchConfirm/ModalMatchConfirm";
import MatchConfirm from "../../app/core/components/MatchConfirm/MatchConfirm";

export default function Match() {
  const [showConfirm, setShowConfirm] = useState(false);

  const group = {
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    title: "Viagem para o Praia de Pipa",
    location: "Rio Grande do Norte - Brasil",
    date: "21 fev - 30 fev",
    users: "3/10",
  };

  const members = [
    {
      name: "Ruan Costa",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Estela Paula",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Estela Paula",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    },
  ];

  // Função para abrir o modal ao dar match
  function handleLike() {
    setShowConfirm(true);
  }

  return (
    <div className="match-page">
      <div className="match-page__card">
        <div className="match-page__container">
          <section className="match-page__group">
            <h2>Grupos de Viagem</h2>
            <GroupCard {...group} />
            <Schedule />
          </section>
          <section className="match-page__members">
            <h2>Grupo da Viagem</h2>
            <MembersList members={members} />
          </section>
        </div>
      </div>
      {/* Passa a função handleLike para MatchActions */}
      <MatchActions onLike={handleLike} />
      {/* Modal de confirmação de match */}
      {showConfirm && (
        <ModalMatchConfirm onClose={() => setShowConfirm(false)}>
          <MatchConfirm onSend={() => setShowConfirm(false)} />
        </ModalMatchConfirm>
      )}
    </div>
  );
}
