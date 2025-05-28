import React, { useState } from "react";
import CardsContainer from "../../core/components/CardsContainer/CardsContainer";
import CategoryFilter from "../../core/components/CategoryFilter/CategoryFilter";
import "./HomePage.scss";
import MyRequestsPage from "../MyRequestsPage/MyRequestsPage";
import CreateTripModal from "../../core/components/CreateTripModal/CreateTripModal";
import Button from "../../core/shared/Button/Button";
import { useAuth } from "../services/context/AuthContext";

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const { user, isAuthenticated } = useAuth();

  return (
    <div className="home-page-container">
      {/* Só mostra o botão se o usuário estiver logado */}
      {isAuthenticated && (
        <div className="button-new-trip">
          <Button type="button" onClick={() => setShowModal(true)}>
            Nova Viagem
          </Button>
          {showModal && <CreateTripModal onClose={() => setShowModal(false)} />}
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