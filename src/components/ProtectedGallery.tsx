export default function ProtectedGallery() {
  const galleryImages = [
    {
      url: 'https://i.ibb.co/ZYW3VTg/summer-party-1.jpg',
      title: 'Summer Vibes 2023',
      category: '2023'
    },
    {
      url: 'https://i.ibb.co/2MfkWVz/beach-party-1.jpg',
      title: 'Ambiance plage',
      category: '2023'
    },
    {
      url: 'https://i.ibb.co/7JfQdV3/dj-set-1.jpg',
      title: 'DJ Set Live',
      category: '2024'
    },
    {
      url: 'https://i.ibb.co/KqpRMZL/crowd-dancing-1.jpg',
      title: 'La foule en délire',
      category: '2024'
    },
    {
      url: 'https://i.ibb.co/9Zcz8vM/food-drinks-1.jpg',
      title: 'Nourriture & Boissons',
      category: '2024'
    },
    {
      url: 'https://i.ibb.co/GVXxJ2s/sunset-beach-1.jpg',
      title: 'Coucher de soleil magique',
      category: '2023'
    },
    {
      url: 'https://i.ibb.co/9yKPWNL/group-photo-1.jpg',
      title: 'Photo de groupe',
      category: '2025'
    },
    {
      url: 'https://i.ibb.co/ZWpYJTq/fashion-show-1.jpg',
      title: 'Défilé de mode',
      category: '2025'
    },
    {
      url: 'https://i.ibb.co/x2XMDwN/games-activities-1.jpg',
      title: 'Jeux et animations',
      category: '2025'
    }
  ];

  return (
    <div className="mt-12">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">
          Galerie Paradise Pic-Nic
        </h3>
        <p className="text-gray-600">
          Revivez les meilleurs moments des éditions précédentes
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="group relative aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-yellow-400 animate-pulse"></div>
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-lg font-semibold">{image.title}</div>
                <div className="text-sm">{image.category}</div>
              </div>
            </div>
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-orange-600">
              {image.category}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-6 text-white">
                <h4 className="font-bold text-lg">{image.title}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
