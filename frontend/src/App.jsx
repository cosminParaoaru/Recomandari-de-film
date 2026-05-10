// Autor: Membrul 2 (UI Integration & State Handling)
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';

export default function App() {
  const [movieData, setMovieData] = useState(null);
  const [recommendation, setRecommendation] = useState(null);
  const [loading, setLoading] = useState(false);

  // Funcția principală care orchestrează UI-ul
  const handleSearch = (query) => {
    setLoading(true);
    setMovieData(null);
    setRecommendation(null);

    // ==========================================
    // Când Membrul 1 termină utils/api.js, el va înlocui codul 
    // de mai jos cu funcția lui (ex: const result = await fetchMovie(query);)
    // Până atunci, acest MOCK îți permite ție să validezi designul!
    // ==========================================
    setTimeout(() => {
      // Date simulate
      setMovieData({
        Title: query || "Guardians of the Galaxy",
        Year: "2014",
        Rated: "PG-13",
        Runtime: "121 min",
        Genre: "Action, Adventure, Comedy",
        Plot: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe. This is a highly acclaimed Marvel movie with great visuals and storyline.",
        Poster: "https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_SX300.jpg"
      });
      // Recomandare simulată (Verde)
      setRecommendation({ 
        type: 'good', 
        message: 'Scor: 92%. Ar trebui să vizionați acest film chiar acum!' 
      });
      setLoading(false);
    }, 1200); // Simulează un delay de rețea de 1.2 secunde
  };

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-black text-slate-900 mb-4 tracking-tight drop-shadow-sm">
          Recomandări <span className="text-blue-600">Filme</span>
        </h1>
        <p className="text-xl text-slate-600 font-medium">
          Caută un film și află instantaneu decizia publicului.
        </p>
      </div>

      <SearchBar onSearch={handleSearch} />

      {/* Mesaj de încărcare stilizat */}
      {loading && (
        <div className="text-center mt-10">
          <p className="text-blue-600 font-bold text-xl animate-pulse">
            Se interoghează baza de date...
          </p>
        </div>
      )}
      
      {/* Randarea Cardului doar când avem date */}
      {!loading && movieData && (
        <div className="mt-8 animate-fade-in">
          <MovieCard movie={movieData} recommendation={recommendation} />
        </div>
      )}
    </main>
  );
}