import { useState, useRef } from 'react';
import axios from "axios";
import {
  FaCamera,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaMoneyBillWave,
} from 'react-icons/fa';
import Button from '../../shared/Button/Button';
import Input from '../../shared/Input/Input';
import './CreateTripModal.scss';

interface CreateTripModalProps {
  onClose: () => void;
}

interface TripData {
  tripPhoto: File | null;
  groupName: string;
  tripType: string;
  travelersCount: number;
  financialProfile: string;
  location: string;
  tripDate: string;
}

const CreateTripModal = ({ onClose }: CreateTripModalProps) => {
  const [formData, setFormData] = useState<TripData>({
    tripPhoto: null,
    groupName: '',
    tripType: 'turismo',
    travelersCount: 2,
    financialProfile: 'medio',
    location: '',
    tripDate: '',
  });

  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "travelersCount" ? Number(value) : value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData((prev) => ({ ...prev, tripPhoto: file }));

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Função real para criar viagem
  const createTrip = async (data: TripData) => {
    const apiUrl = `${import.meta.env.VITE_LOCAL_API}/api/travel/create`;
    const tripForm = new FormData();
    tripForm.append("name", data.groupName);
    tripForm.append("description", data.tripType);
    tripForm.append("city", data.location);
    tripForm.append("country", "Brasil"); // ajuste se necessário
    tripForm.append("startDate", data.tripDate);
    tripForm.append("endDate", data.tripDate); // ajuste se houver campo específico
    tripForm.append("limitTravelers", String(data.travelersCount));
    tripForm.append("financialProfile", data.financialProfile);
    if (data.tripPhoto) {
      tripForm.append("imageTravel", data.tripPhoto);
    }

    await axios.post(apiUrl, tripForm, {
      withCredentials: true,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createTrip(formData);
    onClose();
  };

  return (
    <div className="create-trip-modal__overlay">
      <div className="create-trip-modal__content">
        <button className="create-trip-modal__close" onClick={onClose}>
          &times;
        </button>

        <h2 className="create-trip-modal__title">Criar Nova Viagem</h2>

        <form onSubmit={handleSubmit} className="create-trip-modal__form">
          {/* Foto da Viagem */}
          <div className="create-trip-modal__photo-upload">
            <label className="create-trip-modal__photo-label">
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                onChange={handleFileChange}
                className="create-trip-modal__photo-input"
              />
              {previewImage ? (
                <img
                  src={previewImage}
                  alt="Preview da viagem"
                  className="create-trip-modal__photo-preview"
                />
              ) : (
                <>
                  <FaCamera className="create-trip-modal__photo-icon" />
                  <span>Adicionar Foto da Viagem</span>
                </>
              )}
            </label>
          </div>

          {/* Nome do Grupo */}
          <div className="create-trip-modal__input-group">
            <label className="create-trip-modal__label">Nome do Grupo</label>
            <Input
              name="groupName"
              type="text"
              value={formData.groupName}
              onChange={handleInputChange}
              placeholder="Ex: Amigos da Praia"
              required
            />
          </div>

          {/* Tipo de Viagem */}
          <div className="create-trip-modal__input-group">
            <label className="create-trip-modal__label">Tipo de Viagem</label>
            <select
              name="tripType"
              value={formData.tripType}
              onChange={handleInputChange}
              className="create-trip-modal__select"
              required
            >
              <option value="turismo">Turismo</option>
              <option value="negocios">Negócios</option>
              <option value="aventura">Aventura</option>
              <option value="romantica">Romântica</option>
              <option value="familiar">Familiar</option>
            </select>
          </div>

          {/* Quantidade de Viajantes */}
          <div className="create-trip-modal__input-group">
            <label className="create-trip-modal__label">
              <FaUsers className="create-trip-modal__field-icon" />
              Quantos viajantes?
            </label>
            <Input
              name="travelersCount"
              type="number"
              min="1"
              max="20"
              value={formData.travelersCount}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Perfil Financeiro */}
          <div className="create-trip-modal__input-group">
            <label className="create-trip-modal__label">
              <FaMoneyBillWave className="create-trip-modal__field-icon" />
              Perfil Financeiro
            </label>
            <select
              name="financialProfile"
              value={formData.financialProfile}
              onChange={handleInputChange}
              className="create-trip-modal__select"
              required
            >
              <option value="economico">Econômico</option>
              <option value="medio">Médio</option>
              <option value="luxo">Luxo</option>
            </select>
          </div>

          {/* Local */}
          <div className="create-trip-modal__input-group">
            <label className="create-trip-modal__label">
              <FaMapMarkerAlt className="create-trip-modal__field-icon" />
              Local da Viagem
            </label>
            <Input
              name="location"
              type="text"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="Ex: Praia de Pipa - RN"
              required
            />
          </div>

          {/* Data Prevista */}
          <div className="create-trip-modal__input-group">
            <label className="create-trip-modal__label">
              <FaCalendarAlt className="create-trip-modal__field-icon" />
              Data Prevista
            </label>
            <Input
              name="tripDate"
              type="date"
              value={formData.tripDate}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="create-trip-modal__actions">
            <Button type="link" navigateTo="/">
              Cancelar
            </Button>
            <Button type="submit" navigateTo="/">
              Criar Viagem
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTripModal;