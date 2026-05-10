// Autor: Membrul 2 (UI/UX)
// Descriere: Card responsive pentru afișarea datelor filmului, construit cu tag-uri semantice HTML5.

import React from 'react';
import RecommendationBanner from './RecommendationBanner';

export default function MovieCard({ movie, recommendation }) {
  if (!movie) return null;

  return (
    <article className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto flex flex-col md:flex-row border border-gray-100">
      
      {/* Zona Posterului */}
      <figure className="md:w-1/3 flex-shrink-0 bg-gray-100 m-0">
        <img 
          src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400x600?text=Poster+Indisponibil"} 
          alt={`Poster oficial pentru filmul ${movie.Title}`} 
          className="w-full h-full object-cover min-h-[400px]"
        />
      </figure>

      {/* Zona de Detalii */}
      <div className="p-8 md:w-2/3 flex flex-col justify-between text-left">
        <header>
          <h2 className="text-3xl font-black text-gray-900 mb-2">
            {movie.Title} <span className="text-gray-500 text-2xl font-medium">({movie.Year})</span>
          </h2>
          <div className="flex flex-wrap gap-3 text-xs text-gray-600 font-bold uppercase tracking-wider mb-6">
            <span className="bg-gray-100 px-3 py-1 rounded-md border border-gray-200">{movie.Rated}</span>
            <span className="bg-gray-100 px-3 py-1 rounded-md border border-gray-200">{movie.Runtime}</span>
            <span className="bg-gray-100 px-3 py-1 rounded-md border border-gray-200">{movie.Genre}</span>
          </div>
        </header>

        <section className="mb-6 flex-grow">
          <h3 className="text-lg font-bold text-gray-800 mb-2">Sinopsis:</h3>
          <p className="text-gray-600 leading-relaxed text-base">{movie.Plot}</p>
        </section>

        {/* Randarea condiționată a banner-ului */}
        {recommendation && (
          <RecommendationBanner type={recommendation.type} message={recommendation.message} />
        )}
      </div>
    </article>
  );
}