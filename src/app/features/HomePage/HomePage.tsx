import React, { useState } from "react";
import CardsContainer from "../../core/components/CardsContainer/CardsContainer";
import CategoryFilter from "../../core/components/CategoryFilter/CategoryFilter";
import "./HomePage.scss";
import MyRequestsPage from "../MyRequestsPage/MyRequestsPage";
import CreateTripModal from "../../core/components/CreateTripModal/CreateTripModal";
import { useAuth } from "../services/context/AuthContext";

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const { user} = useAuth();

  return (
    <div className="home-page-container">
      {/* Só mostra o botão se o usuário estiver logado */}
      {user && (
        <div className="button-new-trip">
          <button type="button" onClick={() => setShowModal(true)}>
            Nova Viagem
          </button>
          {showModal && <CreateTripModal/>}
        </div>
      )}
      
      <div className="home-page">
        <CategoryFilter />
        <CardsContainer />
        <MyRequestsPage />
      </div>
    </div>
  );
}