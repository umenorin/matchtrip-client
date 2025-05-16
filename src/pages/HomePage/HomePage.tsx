import "./HomePage.scss";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import CardsContainer from "../../components/CardsContainer/CardsContainer";

export default function HomePage() {
  return (
    <div className="home-page">
      <CategoryFilter />
      <CardsContainer />
    </div>
  );
}
