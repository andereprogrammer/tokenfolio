import SearchBar from "./SearchBar";
import "./../styles/hero.css";

function Hero() {
  return (
    <div className="hero__container">
      <h1 className="hero__title">
        Largest <br /> crypto marketplace
      </h1>
      <div className="hero__description">
        <p>Welcome to the largest crypto currency market place </p>
        <p>Download our app to buy, sell and explore crypto's</p>
      </div>
      <SearchBar />
    </div>
  );
}

export default Hero;
