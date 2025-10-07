import React, { useState, useMemo } from 'react';

// --- Données des Images (Utilisation des données thématiques précédentes) ---
const galleryImagesData = [
  // J'utilise une version simplifiée ici, mais les données complètes sont utilisées
  // Dans le composant ProtectedGallery (voir code précédent pour les détails complets)
  { url: 'https://i.ibb.co/ZYW3VTg/summer-party-1.jpg', title: 'Ambiance de Folie', category: 'Ambiance & Fête', tags: ['foule', 'nuit'] },
  { url: 'https://i.ibb.co/2MfkWVz/beach-party-1.jpg', title: 'Détente sur la Plage', category: 'Food & Chill', tags: ['plage', 'cocktail'] },
  { url: 'https://i.ibb.co/7JfQdV3/dj-set-1.jpg', title: 'DJ Set Live', category: 'Ambiance & Fête', tags: ['DJ', 'musique'] },
  { url: 'https://i.ibb.co/9yKPWNL/group-photo-1.jpg', title: 'Photo de Groupe Souvenir', category: 'Paradise Moments (Shooting)', tags: ['shooting', 'groupe'] },
  { url: 'https://i.ibb.co/ZWpYJTq/fashion-show-1.jpg', title: 'Passage du Défilé', category: 'Le Défilé de Mode', tags: ['mode', 'défilé'] },
  { url: 'https://i.ibb.co/GVXxJ2s/sunset-beach-1.jpg', title: 'Coucher de Soleil', category: 'L\'Ambiance Générale', tags: ['sunset', 'plage'] },
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

// =========================================================================
// NOUVEAU COMPOSANT : Aperçu Général de la Galerie
// =========================================================================

/**
 * Affiche une grille de 6 images en aperçu avec un bouton pour basculer vers la vue complète.
 * @param {Function} onViewAllClick - Fonction pour basculer vers la vue complète.
 */
function GalleryOverview({ onViewAllClick }) {
  // Prend les 6 premières images pour un aperçu rapide
  const overviewImages = galleryImagesData.slice(0, 6);

  return (
    <div className="mt-12 container mx-auto px-4 py-8 bg-white shadow-2xl rounded-2xl">
      <h3 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3">
        Derniers Moments Capturés ✨
      </h3>
      <p className="text-gray-600 mb-8">
        Un aperçu des photos les plus récentes. Cliquez sur **"Voir toutes les photos"** pour accéder à la galerie complète et aux filtres.
      </p>

      {/* Grille d'Aperçu */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {overviewImages.map((image, index) => (
          <div
            key={index}
            className="aspect-square overflow-hidden rounded-lg shadow-md"
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Bouton Voir Toutes les Photos */}
      <div className="text-center mt-10">
        <button
          onClick={onViewAllClick}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 flex items-center justify-center mx-auto space-x-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span>Voir toutes les photos ({galleryImagesData.length})</span>
        </button>
      </div>
    </div>
  );
}

// =========================================================================
// COMPOSANT PRINCIPAL : Galerie Complète (Vue avec Filtres)
// =========================================================================

/**
 * Affiche la galerie complète avec les options de recherche et de filtrage.
 * (Reprend le code de la réponse précédente pour la vue complète)
 */
function FullGalleryView({ onBackToOverviewClick }) {
    const [activeCategory, setActiveCategory] = useState('Tous');
    const [activeTag, setActiveTag] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const allCategories = ['Tous', ...new Set(galleryImagesData.map(img => img.category))];
    const allTags = [...new Set(galleryImagesData.flatMap(img => img.tags))].sort();

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

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        setActiveTag(null);
    };

    const handleTagClick = (tag) => {
        setActiveTag(tag === activeTag ? null : tag);
    };

    return (
        <div className="mt-12 container mx-auto px-4">
            <div className="text-center mb-12">
                <button
                    onClick={onBackToOverviewClick}
                    className="bg-gray-200 text-gray-700 hover:bg-gray-300 text-sm font-semibold py-2 px-4 rounded-lg mb-4 flex items-center mx-auto transition duration-200"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Retour à l'aperçu
                </button>
                <h3 className="text-4xl font-extrabold text-blue-700 mb-2">
                    Galerie Complète & Filtrage
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Utilisez les filtres par activité ou la barre de recherche pour trouver vos photos !
                </p>
            </div>

            {/* Section de Recherche et Filtrage */}
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

            {/* Affichage des Résultats */}
            {filteredImages.length === 0 ? (
                <div className="text-center p-12 bg-white rounded-xl shadow-lg">
                    <p className="text-xl text-red-500 font-semibold">
                        Aucune image trouvée pour cette sélection. 😢
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredImages.map((image, index) => (
                        <div
                            key={index}
                            className="group relative aspect-square overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
                        >
                            <img
                                src={image.url}
                                alt={image.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                loading="lazy" 
                            />
                            
                            <div className="absolute top-4 left-4 bg-blue-600/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white shadow-lg">
                                {image.category}
                            </div>

                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <h4 className="font-bold text-xl text-white mb-2">{image.title}</h4>
                                <p className="text-sm text-orange-300 mb-4">Catégorie : {image.category}</p>
                                
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


// =========================================================================
// COMPOSANT CONTENEUR PRINCIPAL (Gère l'affichage Aperçu/Complet)
// =========================================================================

export default function ProtectedGallery() {
  // Gère l'état d'affichage : 'overview' (aperçu) ou 'full' (complet)
  const [viewMode, setViewMode] = useState('overview'); 

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      <header className="bg-blue-600 text-white p-6 text-center shadow-xl">
        <h1 className="text-4xl font-extrabold">Paradise Pic-Nic Gallery</h1>
        <p className="text-sm opacity-90 mt-1">L'endroit où vos souvenirs prennent vie.</p>
      </header>

      {viewMode === 'overview' ? (
        <GalleryOverview onViewAllClick={() => setViewMode('full')} />
      ) : (
        <FullGalleryView onBackToOverviewClick={() => setViewMode('overview')} />
      )}
    </div>
  );
}