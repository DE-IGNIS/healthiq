import Card from './Card';

export default function CardGrid({ cards, onCardClick, searchQuery }) {
  if (cards.length === 0) {
    return <p className="no-results">No results found</p>;
  }

  return (
    <div className="grid" id="cardGrid">
      {cards.map((card, index) => (
        <Card
          key={index}
          card={card}
          onClick={onCardClick}
          searchQuery={searchQuery}
        />
      ))}
    </div>
  );
}