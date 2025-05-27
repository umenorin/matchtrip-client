import { useState, useRef } from "react";
import { FaCamera } from "react-icons/fa";
import Input from "../../shared/Input/Input";
import "./CreateTripModal.scss";
import { Form } from "react-router-dom";
interface CreateTripModalProps {
  onClose: () => void;
}

interface TripData {
  imageTravel: File | null;
  name: string;
  description: string;
  country: string;
  city: string;
  startDate: string; // ou Date, se estiver lidando com objetos Date
  endDate: string; // idem acima
  limitTravelers: number;
}

const CreateTripModal = ({ onClose }: CreateTripModalProps | any) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [formData, setFormData] = useState<TripData>({
    imageTravel: null,
    name: "",
    description: "",
    country: "",
    city: "",
    startDate: "", // ou new Date() se for trabalhar com objetos Date
    endDate: "", // idem acima
    limitTravelers: 0, // ou outro valor padrão
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'travelersCount' ? Number(value) : value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };


  return (
    <div className="create-trip-modal__overlay">
      <div className="create-trip-modal__content">
        <button className="create-trip-modal__close" onClick={onClose}>
          &times;
        </button>

        <h2 className="create-trip-modal__title">Criar Nova Viagem</h2>

        <Form
          method="post"
          encType="multipart/form-data"
          className="create-trip-modal__form"
        >
          {/* Foto da Viagem */}
          <div className="create-trip-modal__photo-upload">
            <label className="create-trip-modal__photo-label">
              <input
                type="file"
                name="imageTravel"
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

          {/* Nome da Viagem */}
          <div className="create-trip-modal__input-group">
            <label className="create-trip-modal__label">Nome da Viagem</label>
            <Input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Ex: Viagem dos sonhos"
              className="create-trip-modal__input"
              required
            />
          </div>

          {/* Descrição */}
          <div className="create-trip-modal__input-group">
            <label className="create-trip-modal__label">Descrição</label>
            <Input
              name="description"
              type="text"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Uma viagem inesquecível"
              className="create-trip-modal__input"
              required
            />
          </div>

          {/* País */}
          <div className="create-trip-modal__input-group">
            <label className="create-trip-modal__label">País</label>
            <Input
              name="country"
              type="text"
              value={formData.country}
              onChange={handleInputChange}
              placeholder="Ex: França"
              className="create-trip-modal__input"
              required
            />
          </div>

          {/* Cidade */}
          <div className="create-trip-modal__input-group">
            <label className="create-trip-modal__label">Cidade</label>
            <Input
              name="city"
              type="text"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="Ex: Paris"
              className="create-trip-modal__input"
              required
            />
          </div>

          {/* Data de Início */}
          <div className="create-trip-modal__input-group">
            <label className="create-trip-modal__label">Data de Início</label>
            <Input
              name="startDate"
              type="date"
              value={formData.startDate}
              onChange={handleInputChange}
              className="create-trip-modal__input"
              required
            />
          </div>

          {/* Data de Término */}
          <div className="create-trip-modal__input-group">
            <label className="create-trip-modal__label">Data de Término</label>
            <Input
              name="endDate"
              type="date"
              value={formData.endDate}
              onChange={handleInputChange}
              className="create-trip-modal__input"
              required
            />

          </div>

          {/* Limite de Viajantes */}
          <div className="create-trip-modal__input-group">
            <label className="create-trip-modal__label">
              Limite de Viajantes
            </label>
            <Input
              name="limitTravelers"
              type="number"
              value={formData.limitTravelers}
              onChange={handleInputChange}
              min={1}
              max={50}
              className="create-trip-modal__input"
              required
            />
          </div>

          {/* Botão de Enviar */}
          <button type="submit" className="create-trip-modal__submit-button">
            Criar Viagem
          </button>
        </Form>
      </div>
    </div>
  );
};

export default CreateTripModal;
