import React, { useState } from "react";
import CardsContainer from "../../core/components/CardsContainer/CardsContainer";
import CategoryFilter from "../../core/components/CategoryFilter/CategoryFilter";
import "./HomePage.scss";
import MyRequestsPage from "../MyRequestsPage/MyRequestsPage";
import CreateTripModal from "../../core/components/CreateTripModal/CreateTripModal";


export default function HomePage() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <button onClick={() => setShowModal(true)}>
        Nova Viagem
      </button>
      {showModal && (
        <CreateTripModal onClose={() => setShowModal(false)} />
      )}
      <div className="home-page">
        <CategoryFilter />
        <CardsContainer />
        <MyRequestsPage />
      </div>
    </div>
  );
}