import { Clock, MapPin, Ticket, Music, Users, Camera, Utensils, Sparkles } from 'lucide-react';

export default function Programme() {
  const schedule = [
    { time: '14:00', activity: 'Ouverture des portes', icon: Users, color: 'from-blue-400 to-cyan-500' },
    { time: '14:30', activity: 'Accueil & Installation', icon: MapPin, color: 'from-green-400 to-emerald-500' },
    { time: '15:00', activity: 'Début des animations', icon: Sparkles, color: 'from-purple-400 to-pink-500' },
    { time: '16:00', activity: 'DJ Set - Session 1', icon: Music, color: 'from-orange-400 to-red-500' },
    { time: '17:00', activity: 'Shooting Photo', icon: Camera, color: 'from-yellow-400 to-orange-500' },
    { time: '18:00', activity: 'Pause gourmande', icon: Utensils, color: 'from-red-400 to-pink-500' },
    { time: '19:00', activity: 'Défilé de mode', icon: Sparkles, color: 'from-pink-400 to-purple-500' },
    { time: '20:00', activity: 'DJ Set - Session 2', icon: Music, color: 'from-orange-400 to-red-500' },
    { time: '22:00', activity: 'Clôture', icon: Users, color: 'from-gray-400 to-gray-600' }
  ];

  const tickets = [
    {
      name: 'Pass Standard',
      price: '5 000',
      features: ['Accès à l\'événement', 'Animations', 'Une boisson offerte'],
      color: 'from-orange-400 to-yellow-400',
      popular: false
    },
    {
      name: 'Pass VIP',
      price: '10 000',
      features: ['Accès VIP', 'Toutes animations', 'Boissons illimitées', 'Espace réservé', 'Shooting photo privé'],
      color: 'from-purple-400 to-pink-400',
      popular: true
    },
    {
      name: 'Pass Groupe (5+)',
      price: '20 000',
      features: ['5 places', 'Accès prioritaire', 'Table réservée', 'Bouteille offerte'],
      color: 'from-blue-400 to-cyan-400',
      popular: false
    }
  ];

  const artists = [
    { name: 'DJ Sunshine', role: 'Main DJ', image: 'https://i.ibb.co/ZYW3VTg/dj-1.jpg' },
    { name: 'MC Vibes', role: 'Animateur', image: 'https://i.ibb.co/2MfkWVz/mc-1.jpg' },
    { name: 'Fashion Crew', role: 'Défilé', image: 'https://i.ibb.co/7JfQdV3/fashion-1.jpg' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Programme & Billetterie
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez le programme complet de Paradise Pic-Nic 2026 et réservez votre place dès maintenant !
          </p>
        </div>

        <section className="mb-20">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Clock className="w-8 h-8 text-orange-500" />
            <h2 className="text-3xl font-bold text-gray-800">Programme de la journée</h2>
          </div>

          <div className="space-y-4">
            {schedule.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-6">
                  <div className={`bg-gradient-to-br ${item.color} p-4 rounded-xl flex-shrink-0`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-bold text-orange-600">{item.time}</span>
                      <span className="text-xl font-semibold text-gray-800">{item.activity}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Music className="w-8 h-8 text-orange-500" />
            <h2 className="text-3xl font-bold text-gray-800">Artistes invités</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {artists.map((artist, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-64 bg-gradient-to-br from-orange-400 to-yellow-400 flex items-center justify-center">
                  <Music className="w-24 h-24 text-white opacity-50" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{artist.name}</h3>
                  <p className="text-orange-600 font-semibold">{artist.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-center gap-3 mb-8">
            <Ticket className="w-8 h-8 text-orange-500" />
            <h2 className="text-3xl font-bold text-gray-800">Tarifs & Billets</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {tickets.map((ticket, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                  ticket.popular ? 'ring-4 ring-orange-400' : ''
                }`}
              >
                {ticket.popular && (
                  <div className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white text-center py-2 font-bold">
                    LE PLUS POPULAIRE
                  </div>
                )}
                <div className={`bg-gradient-to-br ${ticket.color} p-8 text-white text-center`}>
                  <h3 className="text-2xl font-bold mb-2">{ticket.name}</h3>
                  <div className="text-5xl font-extrabold mb-2">{ticket.price}</div>
                  <div className="text-sm opacity-90">FCFA</div>
                </div>
                <div className="p-8">
                  <ul className="space-y-3 mb-8">
                    {ticket.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full bg-gradient-to-r ${ticket.color} text-white py-3 rounded-lg font-bold hover:scale-105 transition-all`}>
                    Acheter maintenant
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Réservation de groupe ?</h3>
            <p className="mb-6">Contactez-nous pour des offres spéciales sur mesure !</p>
            <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-orange-50 transition-all">
              Nous contacter
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
