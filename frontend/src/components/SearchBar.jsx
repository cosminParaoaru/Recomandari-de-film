// Autor: Membrul 2 (UI/UX)
// Descriere: Componentă pentru introducerea titlului filmului. Validată semantic (W3C).

import React, { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== '') {
      onSearch(query);
      setQuery(''); // Curăță input-ul după submit
    }
  };

  return (
    <section className="w-full max-w-2xl mx-auto mb-8">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <label htmlFor="movie-search" className="sr-only">Introdu numele filmului</label>
        <input
          id="movie-search"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ex: The Matrix, Inception..."
          className="flex-1 px-5 py-3 text-gray-700 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-all"
          required
        />
        <button 
          type="submit"
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-200 shadow-md cursor-pointer"
        >
          Caută
        </button>
      </form>
    </section>
  );
}