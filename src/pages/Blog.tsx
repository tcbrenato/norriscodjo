import { Calendar, User, ArrowRight } from 'lucide-react';

export default function Blog() {
  const articles = [
    {
      title: 'Les coulisses de Paradise Pic-Nic 2025',
      excerpt: 'Découvrez comment nous avons organisé la plus grande édition à ce jour avec plus de 1500 participants !',
      author: 'Équipe Paradise',
      date: '15 septembre 2025',
      image: 'https://i.ibb.co/ZYW3VTg/blog-1.jpg',
      category: 'Événement'
    },
    {
      title: '10 conseils pour profiter au maximum du pic-nic',
      excerpt: 'Préparez-vous pour une journée inoubliable avec nos astuces et recommandations.',
      author: 'Marie K.',
      date: '10 septembre 2025',
      image: 'https://i.ibb.co/2MfkWVz/blog-2.jpg',
      category: 'Conseils'
    },
    {
      title: 'Interview : DJ Sunshine parle de son set 2025',
      excerpt: 'Le DJ star de notre dernière édition partage ses meilleurs moments et ses attentes pour 2026.',
      author: 'Thomas B.',
      date: '5 septembre 2025',
      image: 'https://i.ibb.co/7JfQdV3/blog-3.jpg',
      category: 'Interview'
    },
    {
      title: 'Mode d\'été : Les tendances qui ont marqué 2025',
      excerpt: 'Retour sur le défilé de mode et les looks qui ont fait sensation lors du Paradise Pic-Nic.',
      author: 'Sophie L.',
      date: '1 septembre 2025',
      image: 'https://i.ibb.co/KqpRMZL/blog-4.jpg',
      category: 'Mode'
    },
    {
      title: 'Recettes estivales : Nos cocktails signatures',
      excerpt: 'Reproduisez chez vous les délicieux cocktails qui ont fait le succès de nos éditions précédentes.',
      author: 'Chef Alex',
      date: '25 août 2025',
      image: 'https://i.ibb.co/9Zcz8vM/blog-5.jpg',
      category: 'Gastronomie'
    },
    {
      title: 'Galerie photos : Les meilleurs moments 2023-2025',
      excerpt: 'Revivez en images les trois premières éditions du Paradise Pic-Nic à travers notre sélection photo.',
      author: 'Photographe Pro',
      date: '20 août 2025',
      image: 'https://i.ibb.co/GVXxJ2s/blog-6.jpg',
      category: 'Galerie'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-[#0A3764] mb-4">
            Blog Paradise Pic-Nic
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Actualités, conseils, interviews et bien plus encore !
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-48 bg-gradient-to-br from-[#0A3764] to-blue-600 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Calendar className="w-16 h-16 text-white opacity-50" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white px-3 py-1 rounded-full text-sm font-semibold text-[#0A3764]">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-3 hover:text-amber-600 transition-colors">
                  {article.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                </div>

                <button className="flex items-center gap-2 text-[#0A3764] font-semibold hover:gap-3 transition-all">
                  Lire l'article
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-[#0A3764] to-amber-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-blue-900 hover:to-amber-600 transition-all hover:scale-105">
            Voir plus d'articles
          </button>
        </div>

        <div className="mt-20 bg-gradient-to-r from-[#0A3764] to-amber-500 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Restez informés !
          </h2>
          <p className="text-xl mb-6">
            Inscrivez-vous à notre newsletter pour ne rien manquer
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 outline-none"
            />
            <button className="bg-white text-[#0A3764] px-6 py-3 rounded-lg font-bold hover:bg-amber-50 transition-all">
              S'inscrire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
