import { useAuth } from "../../context/AuthContext";
import { FaArrowLeft, FaSave, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Form } from "react-router-dom";
import "./EditProfilePage.scss";

const EditProfilePage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Dados iniciais do formulário
  const initialData = {
    name: user?.name || "",
    bio: "Apaixonado por viagens e aventuras ao ar livre!",
    birthDate: "1990-03-15",
    travelPreferences: "Praia,Montanha,Aventura",
    budget: "2000-5000",
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
        <h1>Editar Perfil</h1>
      </header>

      <Form method="post" className="profile-page__content">
        <div className="profile-page__photo-section">
          <div className="profile-page__photo-container">
            {user?.photo ? (
              <img 
                src={user.photo} 
                alt={user.name} 
                className="profile-page__photo"
              />
            ) : (
              <div className="profile-page__photo-placeholder">
                <FaUserCircle />
              </div>
            )}
            <input
              type="file"
              id="profile-photo"
              name="photo"
              accept="image/*"
              className="profile-page__photo-input"
            />
            <label htmlFor="profile-photo" className="profile-page__photo-label">
              Alterar Foto
            </label>
          </div>
        </div>

        <div className="profile-page__info-section">
          <div className="profile-page__info-group">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={initialData.name}
              required
            />
          </div>

          <div className="profile-page__info-group">
            <label htmlFor="bio">Biografia</label>
            <textarea
              id="bio"
              name="bio"
              defaultValue={initialData.bio}
              rows={3}
            />
          </div>

          <div className="profile-page__info-group">
            <label htmlFor="birthDate">Data de Nascimento</label>
            <input
              type="date"
              id="birthDate"
              name="birthDate"
              defaultValue={initialData.birthDate}
            />
          </div>

          <div className="profile-page__info-group">
            <label htmlFor="travelPreferences">Preferências de Viagem (separadas por vírgula)</label>
            <input
              type="text"
              id="travelPreferences"
              name="travelPreferences"
              defaultValue={initialData.travelPreferences}
            />
          </div>

          <div className="profile-page__info-group">
            <label htmlFor="budget">Orçamento (ex: 2000-5000)</label>
            <input
              type="text"
              id="budget"
              name="budget"
              defaultValue={initialData.budget}
            />
          </div>

          <div className="profile-page__info-group">
            <label htmlFor="companionPreferences">Preferências de Companhia</label>
            <input
              type="text"
              id="companionPreferences"
              name="companionPreferences"
              defaultValue={initialData.companionPreferences}
            />
          </div>
        </div>

        <button 
          type="submit"
          className="profile-page__edit-button"
        >
          <FaSave /> Salvar Alterações
        </button>
      </Form>
    </div>
  );
};

export default EditProfilePage;