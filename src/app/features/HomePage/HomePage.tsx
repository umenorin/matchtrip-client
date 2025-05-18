import CardsContainer from "../../core/components/CardsContainer/CardsContainer";
import CategoryFilter from "../../core/components/CategoryFilter/CategoryFilter";
import "./HomePage.scss";

export default function HomePage() {
  return (
    <div className="home-page">
      <CategoryFilter />
      <CardsContainer />
    </div>
  );
}
