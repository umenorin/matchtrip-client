import {
  FaCocktail,
  FaUmbrellaBeach,
  FaPalette,
  FaTree,
  FaHeart,
} from "react-icons/fa";
import { useState } from "react";
import "./CategoryFilter.scss";

export default function CategoryFilter() {
  const categories = [
    { name: "Relaxar", icon: <FaCocktail size={18} /> },
    { name: "Praia", icon: <FaUmbrellaBeach size={18} /> },
    { name: "Artístico", icon: <FaPalette size={18} /> },
    { name: "Natureza", icon: <FaTree size={18} /> },
    { name: "Romântico", icon: <FaHeart size={18} /> },
  ];

  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div className="category-filter">
      <div className="category-filter__options">
        {categories.map((category) => (
          <button
            key={category.name}
            className={`category-filter__option ${
              activeCategory === category.name
                ? "category-filter__option--active"
                : ""
            }`}
            onClick={() =>
              setActiveCategory(
                activeCategory === category.name ? null : category.name,
              )
            }
          >
            <div className="category-filter__icon-container">
              <span className="category-filter__icon">{category.icon}</span>
              <span className="category-filter__name">{category.name}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
