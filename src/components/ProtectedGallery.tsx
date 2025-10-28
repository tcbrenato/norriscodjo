import React, { useState } from "react";
import { albums } from "../albumsData";

export default function ProtectedGallery() {
  const [selectedAlbum, setSelectedAlbum] = useState<string | null>(null);

  if (selectedAlbum) {
    const album = albums.find((a) => a.name === selectedAlbum);

    return (
      <div className="min-h-screen bg-gray-100 py-10 px-4">
        <button
          onClick={() => setSelectedAlbum(null)}
          className="text-blue-600 font-semibold mb-6 underline"
        >
          ← Retour aux albums
        </button>

        <h2 className="text-3xl font-bold text-[#0A3764] mb-8">{album?.name}</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {album?.images.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`${album?.name} ${index + 1}`}
              className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-4xl font-bold text-[#0A3764] mb-10 text-center">
        Galerie Paradise Pic-Nic 📸
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {albums.map((album) => (
          <div
            key={album.name}
            onClick={() => setSelectedAlbum(album.name)}
            className="cursor-pointer bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-transform duration-300 hover:scale-105"
          >
            <img
              src={album.cover}
              alt={album.name}
              className="w-full h-60 object-cover"
            />
            <h3 className="text-center py-4 text-xl font-semibold text-[#0A3764]">
              {album.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
