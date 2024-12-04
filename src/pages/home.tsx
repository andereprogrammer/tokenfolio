import Listing from "../components/Listing";
import Hero from "../components/Hero";
import Loader from "../components/Loader";
import { useCoinContext } from "../hooks/useCoinContext";

function Home() {
  const { loading } = useCoinContext();

  return (
    <div>
      {loading ? <Loader /> : null}
      <Hero />
      <Listing />
    </div>
  );
}

export default Home;
