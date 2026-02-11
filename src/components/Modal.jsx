export default function Modal({ card, onClose }) {
  if (!card) return null;

  return (
    <div className="modal" style={{ display: 'flex' }} onClick={(e) => {
      if (e.target.classList.contains('modal')) onClose();
    }}>
      <div className="modal-box">
        <button className="close-btn" onClick={onClose}>✕</button>

        <div
          className="modal-hero"
          id="modalHero"
          style={{ backgroundImage: `url(${card.image})` }}
        >
          <span className="modal-tag">{card.tag}</span>
          <h2 id="modalTitle">{card.title}</h2>
        </div>

        <div className="modal-content">
          <h4>Introduction</h4>
          <p>{card.overview}</p>

          <h4>Causes And Symptoms</h4>
          <p>{card.history}</p>

          <h4>Prevention And Control</h4>
          <ul>
            {card.facts.map((fact, i) => (
              <li key={i}>{fact}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}