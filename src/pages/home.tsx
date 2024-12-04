import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Listing from "../components/Listing";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Loader from "../components/Loader";
import { useCoinContext } from "../hooks/useCoinContext";

type Props = {};

function Home({}: Props) {
  const { loading } = useCoinContext();
  return (
    <div>
      <Header />
      {loading ? <Loader /> : null}
      <Hero />
      <Listing />
      <Footer />
    </div>
  );
}

export default Home;
