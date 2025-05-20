import { useState } from 'react';
import GroupCard from '../../core/components/GroupCard/GroupCard';
import Schedule from '../../core/components/Schedule/Schedule';
import MembersList from '../../core/components/MembersList/MembersList';
import MatchActions from '../../core/components/MatchActions/MatchActions';
import ModalMatchConfirm from '../../core/components/ModalMatchConfirm/ModalMatchConfirm';
import MatchConfirm from '../../core/components/MatchConfirm/MatchConfirm';
import './Match.scss';
import { useParams } from "react-router-dom";

export default function Match() {
  const [showConfirm, setShowConfirm] = useState(false);

  const group = {
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    title: 'Viagem para o Praia de Pipa',
    location: 'Rio Grande do Norte - Brasil',
    date: '21 fev - 30 fev',
    users: '3/10',
  };

  const members = [
    {
      id: 1,
      name: 'Ruan Costa',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      id: 2,
      name: 'Estela Paula',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      id: 3,
      name: 'Estela Paula',
      avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
    },
  ];

  function handleLike() {
    setShowConfirm(true);
  }

  return (
    <div className="match-page__body">
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
        <MatchActions onLike={handleLike} />
      </div>
      {showConfirm && (
        <ModalMatchConfirm onClose={() => setShowConfirm(false)}>
          <MatchConfirm onSend={() => setShowConfirm(false)} />
        </ModalMatchConfirm>
      )}
    </div>
  );
}