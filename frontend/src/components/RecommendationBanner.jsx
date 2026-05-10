// Autor: Membrul 2 (UI/UX)
// Descriere: Banner dinamic care își schimbă culoarea pe baza prop-ului "type" (good, bad, neutral).

import React from 'react';

export default function RecommendationBanner({ type, message }) {
  // Maparea culorilor Tailwind în funcție de tipul recomandării
  const styles = {
    good: "bg-green-100 border-green-500 text-green-900",
    bad: "bg-red-100 border-red-500 text-red-900",
    neutral: "bg-yellow-100 border-yellow-500 text-yellow-900",
  };

  const currentStyle = styles[type] || styles.neutral;

  return (
    <aside className={`mt-6 p-5 border-l-4 rounded-r-xl shadow-sm ${currentStyle}`}>
      <p className="font-extrabold text-lg tracking-wide">{message}</p>
    </aside>
  );
}