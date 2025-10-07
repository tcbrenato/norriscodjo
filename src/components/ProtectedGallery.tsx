import React, { useState, useMemo } from 'react';

// --- Données des Images (Catégories mises à jour par Thème d'Activité) ---
const galleryImagesData = [
  {
    url: 'https://i.ibb.co/ZYW3VTg/summer-party-1.jpg',
    title: 'Ambiance de Folie',
    category: 'Ambiance & Fête', // Nouvelle Catégorie Thématique
    tags: ['foule', 'nuit', 'DJ', 'danse']
  },
  {
    url: 'https://i.ibb.co/2MfkWVz/beach-party-1.jpg',
    title: 'Détente sur la Plage',
    category: 'Food & Chill', // Nouvelle Catégorie Thématique
    tags: ['plage', 'jour', 'soleil', 'détente', 'cocktail']
  },
  {
    url: 'https://i.ibb.co/7JfQdV3/dj-set-1.jpg',
    title: 'DJ Set Live',
    category: 'Ambiance & Fête', // Nouvelle Catégorie Thématique
    tags: ['DJ', 'musique', 'scène', 'lumière']
  },
  {
    url: 'https://i.ibb.co/KqpRMZL/crowd-dancing-1.jpg',
    title: 'La Foule en Délire',
    category: 'Ambiance & Fête', // Nouvelle Catégorie Thématique
    tags: ['foule', 'danse', 'énergie', 'ambiance']
  },
  {
    url: 'https://i.ibb.co/9Zcz8vM/food-drinks-1.jpg',
    title: 'Coin Restauration',
    category: 'Food & Chill', // Nouvelle Catégorie Thématique
    tags: ['cocktail', 'food', 'détails', 'restauration']
  },
  {
    url: 'https://i.ibb.co/GVXxJ2s/sunset-beach-1.jpg',
    title: 'Coucher de Soleil',
    category: 'L\'Ambiance Générale', // Nouvelle Catégorie Thématique
    tags: ['sunset', 'plage', 'paysage', 'magie']
  },
  {
    url: 'https://i.ibb.co/9yKPWNL/group-photo-1.jpg',
    title: 'Photo de Groupe Souvenir',
    category: 'Paradise Moments (Shooting)', // Nouvelle Catégorie Thématique
    tags: ['shooting', 'groupe', 'portrait', 'sourire']
  },
  {
    url: 'https://i.ibb.co/ZWpYJTq/fashion-show-1.jpg',
    title: 'Passage du Défilé',
    category: 'Le Défilé de Mode', // Nouvelle Catégorie Thématique
    tags: ['mode', 'défilé', 'mannequin', 'stylisme']
  },
  {
    url: 'https://i.ibb.co/x2XMDwN/games-activities-1.jpg',
    title: 'Animations et Jeux',
    category: 'Paradise Moments (Shooting)', // Nouvelle Catégorie Thématique
    tags: ['jeux', 'fun', 'animation', 'activité']
  }
];

// Fonction pour simuler le téléchargement
const handleDownload = (imageUrl, title) => {
  const link = document.createElement('a');
  link.href = imageUrl;
  link.download = `${title.replace(/\s/g, '_')}_ParadisePicNic.jpg`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function ProtectedGallery() {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [activeTag, setActiveTag] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Extraction de TOUS les noms de catégories thématiques uniques
  const allCategories = ['Tous', ...new Set(galleryImagesData.map(img => img.category))];
  const allTags = [...new Set(galleryImagesData.flatMap(img => img.tags))].sort();

  // --- Logique de Filtrage ---
  const filteredImages = useMemo(() => {
    return galleryImagesData.filter(image => {
      const matchesCategory = activeCategory === 'Tous' || image.category === activeCategory;
      const matchesTag = !activeTag || image.tags.includes(activeTag);
      const matchesSearch = image.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            image.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            image.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesCategory && matchesTag && matchesSearch;
    });
  }, [activeCategory, activeTag, searchQuery]);

  // Gestion du clic sur la catégorie
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setActiveTag(null); // Réinitialiser le tag
  };

  // Gestion du clic sur un tag
  const handleTagClick = (tag) => {
    setActiveTag(tag === activeTag ? null : tag); // Toggle le tag
  };

  return (
    <div className="mt-12 container mx-auto px-4">
      <div className="text-center mb-12">
        <h3 className="text-4xl font-extrabold text-blue-700 mb-2">
          Galerie Paradise Pic-Nic ✨
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Trouvez, filtrez et téléchargez vos meilleurs moments par activité.
        </p>
      </div>

      {/* --- Section de Recherche et Filtrage --- */}
      <div className="mb-8 p-4 bg-gray-50 rounded-lg shadow-inner">
        {/* Barre de Recherche */}
        <input
          type="text"
          placeholder="Rechercher par titre ou mot-clé..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setActiveTag(null);
            setActiveCategory('Tous');
          }}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150"
        />
        
        {/* Filtre par Catégories Thématiques */}
        <p className="text-center text-sm text-gray-500 mb-2">Filtrer par Thème Principal :</p>
        <div className="flex flex-wrap gap-2 mb-4 justify-center">
          {allCategories.map(cat => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              // Utilisation d'une couleur d'accentuation basée sur le thème de l'affiche
              className={`px-4 py-2 text-sm font-semibold rounded-full transition duration-200 ease-in-out whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-blue-100 border border-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tags de Filtrage (Détails) */}
        <p className="text-center text-sm text-gray-500 mb-2">Filtrer par détail/mot-clé :</p>
        <div className="flex flex-wrap gap-2 justify-center max-h-24 overflow-y-auto border p-2 rounded-lg bg-white">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`px-3 py-1 text-xs font-medium rounded-lg transition duration-200 ease-in-out ${
                activeTag === tag
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-orange-200'
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>

      {/* --- Affichage des Résultats --- */}
      {filteredImages.length === 0 ? (
        <div className="text-center p-12 bg-white rounded-xl shadow-lg">
          <p className="text-xl text-red-500 font-semibold">
            Aucune image trouvée pour cette sélection. 😢
          </p>
          <p className="text-gray-500 mt-2">
            Essayez de réinitialiser vos filtres ou de modifier votre recherche.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy" 
              />
              
              {/* Indicateur de Catégorie Thématique sur la vignette */}
              <div className="absolute top-4 left-4 bg-blue-600/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white shadow-lg">
                {image.category}
              </div>

              {/* Overlay pour le titre et le bouton de téléchargement */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h4 className="font-bold text-xl text-white mb-2">{image.title}</h4>
                <p className="text-sm text-orange-300 mb-4">Catégorie : {image.category}</p>
                
                {/* Bouton de Téléchargement */}
                <button
                  onClick={() => handleDownload(image.url, image.title)}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition duration-200 flex items-center justify-center space-x-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L10 11.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v7a1 1 0 11-2 0V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  <span>Télécharger</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}