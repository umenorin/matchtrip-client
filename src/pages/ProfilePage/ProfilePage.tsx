import { useAuth } from "../../context/AuthContext";
import { FaArrowLeft, FaEdit, FaSuitcase, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./ProfilePage.scss";

const ProfilePage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Dados mockados (substitua pelos dados reais do usuário)
  const userData = {
    name: user?.name || "Usuário",
    photo: user?.photo || "",
    bio: "Apaixonado por viagens e aventuras ao ar livre!",
    birthDate: "15/03/1990",
    travelPreferences: ["Praia", "Montanha", "Aventura"],
    budget: "R$ 2.000 - R$ 5.000",
    companionPreferences: "Casais ou pequenos grupos",
  };

  return (
    <div className="profile-page">
      <header className="profile-page__header">
        <button
          className="profile-page__back-button"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft />
        </button>
        <h1>Meu Perfil</h1>
      </header>

      <div className="profile-page__content">
        <div className="profile-page__photo-section">
          <div className="profile-page__photo-container">
            {userData.photo ? (
              <img
                src={userData.photo}
                alt={userData.name}
                className="profile-page__photo"
              />
            ) : (
              <div className="profile-page__photo-placeholder">
                <FaUserCircle />
              </div>
            )}
          </div>
          <h2 className="profile-page__name">{userData.name}</h2>
        </div>

        <div className="profile-page__info-section">
          <div className="profile-page__info-group">
            <h3>Biografia</h3>
            <p>{userData.bio}</p>
          </div>

          <div className="profile-page__info-group">
            <h3>Data de Nascimento</h3>
            <p>{userData.birthDate}</p>
          </div>

          <div className="profile-page__info-group">
            <h3>Preferências de Viagem</h3>
            <div className="profile-page__tags">
              {userData.travelPreferences.map((pref, index) => (
                <span key={index} className="profile-page__tag">
                  {pref}
                </span>
              ))}
            </div>
          </div>

          <div className="profile-page__info-group">
            <h3>Orçamento</h3>
            <p>{userData.budget}</p>
          </div>

          <div className="profile-page__info-group">
            <h3>Preferências de Companhia</h3>
            <p>{userData.companionPreferences}</p>
          </div>
        </div>

        <button
          className="profile-page__edit-button"
          onClick={() => navigate("/profile/edit")}
        >
          <FaEdit /> Editar Perfil
        </button>

        <button
          className="profile-page__trips-button"
          onClick={() => navigate("/my-requests")}
        >
          <FaSuitcase /> Minhas Viagens
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
