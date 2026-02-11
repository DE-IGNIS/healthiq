export default function Card({ card, onClick, searchQuery }) {
  const highlight = (text) => {
    if (!searchQuery) return text;
    const regex = new RegExp(`(${searchQuery})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  };

  return (
    <div className="card" onClick={() => onClick(card)}>
      <img src={card.image} alt={card.title} />
      <div className="card-body">
        <span className={`tag tag-${card.tag.replace(/\s+/g, '').toLowerCase()}`}>
          {card.tag}
        </span>
        <h3
          className="card-title"
          dangerouslySetInnerHTML={{ __html: highlight(card.title) }}
        />
        <p
          className="card-desc"
          dangerouslySetInnerHTML={{ __html: highlight(card.shortDescription) }}
        />
      </div>
    </div>
  );
}