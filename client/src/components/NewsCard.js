import React from "react";

export default function NewsCard({ article, onSave }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="rounded-lg mb-2 w-full h-56 object-cover"
        />
      )}
      <h2 className="font-bold text-lg mb-1">{article.title}</h2>
      <p className="text-gray-700 text-sm mb-2">{article.description}</p>
      <a
        href={article.url}
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 underline"
      >
        Read More
      </a>
      {onSave && (
        <button
          onClick={() => onSave(article)}
          className="block mt-3 bg-green-500 text-white px-3 py-1 rounded"
        >
          Save
        </button>
      )}
    </div>
  );
}
