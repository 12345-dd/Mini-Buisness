import React from "react";

export default function ResultCard({ data, onRegenerate }) {
  return (
    <div className="mt-8 w-full max-w-md bg-white rounded-2xl shadow-lg p-6 space-y-4 text-center">
      <h3 className="text-2xl font-bold text-indigo-700 mb-2">
        Business Data
      </h3>

      <p className="text-lg">
        <span className="font-semibold text-yellow-500">&#11088; {data.rating}</span>{" "}
        | <span className="text-gray-600">{data.reviews} Reviews</span>
      </p>

      <p className="text-sm text-gray-700">for <span className="italic">{data.name}, {data.location}</span></p>

      <div className="mt-4">
        <p className="text-sm font-medium text-gray-800 mb-1">SEO Headline</p>
        <p className="text-indigo-600 italic font-semibold">“{data.headline}”</p>
      </div>

      <button
        onClick={onRegenerate}
        className="mt-4 w-full bg-purple-600 text-white font-medium py-2 rounded-md hover:bg-purple-700 transition"
      >
        &#128257; Regenerate Headline
      </button>
    </div>
  );
}

