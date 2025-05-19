import { FaEdit, FaSuitcase, FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.scss';
import { useState, useRef, useEffect } from 'react';
import { useAuth } from '../services/context/AuthContext';

const ProfilePage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Dados mockados (substitua pelos dados reais do usuário)
  const userData = {
    name: user?.name || 'Usuário',
    photo: user?.photo || '',
    bio: 'Apaixonado por viagens e aventuras ao ar livre!',
    birthDate: '15/03/1990',
    travelPreferences: ['Praia', 'Montanha', 'Aventura'],
    budget: 'R$ 2.000 - R$ 5.000',
    companionPreferences: 'Casais ou pequenos grupos',
  };

  const [travelPreferences, setTravelPreferences] = useState<string[]>(
    userData.travelPreferences
  );
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const travelOptions = [
    'Praia',
    'Montanha',
    'Aventura',
    'Cultura',
    'Gastronomia',
    'Ecoturismo',
  ];

  const budgetOptions = [
    'R$ 0 - R$ 1.000',
    'R$ 1.000 - R$ 2.000',
    'R$ 2.000 - R$ 5.000',
    'R$ 5.000 - R$ 10.000',
    'Acima de R$ 10.000',
  ];

  const companionOptions = [
    'Casais',
    'Pequenos grupos',
    'Família',
    'Sozinho',
    'Amigos',
    'Pets',
  ];

  // Estados para os inputs
  const [bio, setBio] = useState(userData.bio);
  const [birthDate, setBirthDate] = useState(userData.birthDate);

  const [budget, setBudget] = useState<string[]>(
    [userData.budget] // ou [] se quiser começar vazio
  );
  const [budgetDropdownOpen, setBudgetDropdownOpen] = useState(false);
  const budgetDropdownRef = useRef<HTMLDivElement>(null);

  const [companions, setCompanions] = useState<string[]>(
    userData.companionPreferences
      ? userData.companionPreferences.split(/, ?/)
      : []
  );
  const [companionsDropdownOpen, setCompanionsDropdownOpen] = useState(false);
  const companionsDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
      if (
        budgetDropdownRef.current &&
        !budgetDropdownRef.current.contains(event.target as Node)
      ) {
        setBudgetDropdownOpen(false);
      }
      if (
        companionsDropdownRef.current &&
        !companionsDropdownRef.current.contains(event.target as Node)
      ) {
        setCompanionsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (companionsDropdownOpen && companionsDropdownRef.current) {
      companionsDropdownRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [companionsDropdownOpen]);

  // Remove unused toggleItem function

  // Toggle travel preference option
  function toggleOption(option: string) {
    setTravelPreferences((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  }

  // Toggle budget option
  function toggleBudget(option: string) {
    setBudget((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  }

  // Toggle companion option
  function toggleCompanion(option: string) {
    setCompanions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  }

  return (
    <div className="profile-page">
      <header className="profile-page__header">
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
          <div className="profile-page__info-bio">
            <h3>Biografia</h3>
            <input
              type="text"
              className="profile-page__input"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Digite sua biografia"
            />
          </div>

          <div className="profile-page__info-nascimento">
            <h3>Data de Nascimento</h3>
            <input
              type="date"
              className="profile-page__input"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              placeholder="Data de nascimento"
            />
          </div>

          <div className="profile-page__info-preferencias">
            <h3>Preferências de Viagem</h3>
            <div
              className="profile-page__dropdown-multiselect"
              ref={dropdownRef}
            >
              <div
                className="profile-page__dropdown-selected"
                onClick={() => setDropdownOpen((open) => !open)}
              >
                {travelPreferences.length === 0 ? (
                  <span className="profile-page__dropdown-placeholder">
                    Selecione...
                  </span>
                ) : (
                  travelPreferences.map((pref, idx) => (
                    <span key={idx} className="profile-page__tag">
                      {pref}
                      <button
                        type="button"
                        className="profile-page__tag-remove"
                        onClick={(e) => {
                          e.stopPropagation();
                          setTravelPreferences((prev) =>
                            prev.filter((item) => item !== pref)
                          );
                        }}
                      >
                        ×
                      </button>
                    </span>
                  ))
                )}
                <span className="profile-page__dropdown-arrow">
                  {dropdownOpen ? '▲' : '▼'}
                </span>
              </div>
              {dropdownOpen && (
                <div className="profile-page__dropdown-list">
                  {travelOptions.map((option) => (
                    <div
                      key={option}
                      className={`profile-page__dropdown-item${
                        travelPreferences.includes(option) ? ' selected' : ''
                      }`}
                      onClick={() => toggleOption(option)}
                    >
                      <input
                        type="checkbox"
                        checked={travelPreferences.includes(option)}
                        readOnly
                      />
                      <span>{option}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="profile-page__info-orcamento">
            <h3>Orçamento</h3>
            <div
              className="profile-page__dropdown-multiselect"
              ref={budgetDropdownRef}
            >
              <div
                className="profile-page__dropdown-selected"
                onClick={() => setBudgetDropdownOpen((open) => !open)}
              >
                {budget.length === 0 ? (
                  <span className="profile-page__dropdown-placeholder">
                    Selecione...
                  </span>
                ) : (
                  budget.map((option, idx) => (
                    <span key={idx} className="profile-page__tag">
                      {option}
                      <button
                        type="button"
                        className="profile-page__tag-remove"
                        onClick={(e) => {
                          e.stopPropagation();
                          setBudget((prev) =>
                            prev.filter((item) => item !== option)
                          );
                        }}
                      >
                        ×
                      </button>
                    </span>
                  ))
                )}
                <span className="profile-page__dropdown-arrow">
                  {budgetDropdownOpen ? '▲' : '▼'}
                </span>
              </div>
              {budgetDropdownOpen && (
                <div className="profile-page__dropdown-list">
                  {budgetOptions.map((option) => (
                    <div
                      key={option}
                      className={`profile-page__dropdown-item${
                        budget.includes(option) ? ' selected' : ''
                      }`}
                      onClick={() => toggleBudget(option)}
                    >
                      <input
                        type="checkbox"
                        checked={budget.includes(option)}
                        readOnly
                      />
                      <span>{option}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="profile-page__info-companions">
            <h3>Preferências de Companhia</h3>
            <div
              className="profile-page__dropdown-multiselect"
              ref={companionsDropdownRef}
            >
              <div
                className="profile-page__dropdown-selected"
                onClick={() => setCompanionsDropdownOpen((open) => !open)}
              >
                {companions.length === 0 ? (
                  <span className="profile-page__dropdown-placeholder">
                    Selecione...
                  </span>
                ) : (
                  companions.map((option, idx) => (
                    <span key={idx} className="profile-page__tag">
                      {option}
                      <button
                        type="button"
                        className="profile-page__tag-remove"
                        onClick={(e) => {
                          e.stopPropagation();
                          setCompanions((prev) =>
                            prev.filter((item) => item !== option)
                          );
                        }}
                      >
                        ×
                      </button>
                    </span>
                  ))
                )}
                <span className="profile-page__dropdown-arrow">
                  {companionsDropdownOpen ? '▲' : '▼'}
                </span>
              </div>
              {companionsDropdownOpen && (
                <div className="profile-page__dropdown-list">
                  {companionOptions.map((option) => (
                    <div
                      key={option}
                      className={`profile-page__dropdown-item${
                        companions.includes(option) ? ' selected' : ''
                      }`}
                      onClick={() => toggleCompanion(option)}
                    >
                      <input
                        type="checkbox"
                        checked={companions.includes(option)}
                        readOnly
                      />
                      <span>{option}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="profile-page__buttons">
            <button
              className="profile-page__edit-button profile-page__edit-button--save"
              onClick={() => navigate('/profile')}
            >
              <FaEdit /> Salvar alteração
            </button>

            <button
              className="profile-page__edit-button profile-page__edit-button--discard"
              onClick={() => navigate('/profile')}
            >
              <FaEdit /> Descartar Alteração
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
