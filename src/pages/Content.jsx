import { useState, useEffect } from "react";
import Heading from "../components/Heading";
import SearchBar from "../components/SearchBar";
import CardGrid from "../components/CardGrid";
import Modal from "../components/Modal";
import { cardsData } from "../data/cardData";

import "./styling/Content.css";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);

  const filteredCards = cardsData.filter((card) => {
    if (!searchQuery) return true;
    const text = [card.title, card.tag, card.shortDescription]
      .join(" ")
      .toLowerCase();
    return text.includes(searchQuery);
  });

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const openModal = (card) => {
    setSelectedCard(card);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedCard(null);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section className="page">
      <Heading />

      <SearchBar onSearch={handleSearch} />

      <CardGrid
        cards={filteredCards}
        onCardClick={openModal}
        searchQuery={searchQuery}
      />

      {selectedCard && <Modal card={selectedCard} onClose={closeModal} />}
    </section>
  );
}
