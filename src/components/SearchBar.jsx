import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value.trim().toLowerCase());
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <div className="search-container">
      <input
        type="text"
        id="searchInput"
        placeholder="Search diseases (e.g. Diabetes, Viral, Fever...)"
        value={query}
        onChange={handleChange}
      />
      {query && (
        <button id="clearSearch" onClick={handleClear}>
          ✕
        </button>
      )}
    </div>
  );
}