import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import ListingCard from "../components/ListingCard";

type Props = {};

function Home({}: Props) {
  return (
    <div className="">
      <Header />
      <SearchBar />
      <div>
        <ListingCard />
      </div>
    </div>
  );
}

export default Home;
