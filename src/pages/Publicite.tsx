import { TrendingUp, Users, Eye, MessageCircle, Mail, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Publicite() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    message: ''
  });

  const partners2025 = [
    { name: 'Sponsor 1', logo: 'https://i.ibb.co/placeholder1.jpg' },
    { name: 'Sponsor 2', logo: 'https://i.ibb.co/placeholder2.jpg' },
    { name: 'Sponsor 3', logo: 'https://i.ibb.co/placeholder3.jpg' },
    { name: 'Sponsor 4', logo: 'https://i.ibb.co/placeholder4.jpg' }
  ];

  const stats = [
    { icon: Users, value: '2000+', label: 'Participants', color: 'from-blue-400 to-cyan-500' },
    { icon: Eye, value: '50K+', label: 'Vues réseaux sociaux', color: 'from-purple-400 to-pink-500' },
    { icon: MessageCircle, value: '10K+', label: 'Engagements', color: 'from-green-400 to-emerald-500' },
    { icon: TrendingUp, value: '300%', label: 'Croissance annuelle', color: 'from-orange-400 to-red-500' }
  ];

  const packs = [
    {
      name: 'Pack Bronze',
      price: '50 000',
      features: [
        'Logo sur les supports digitaux',
        'Mention sur les réseaux sociaux',
        '2 places offertes'
      ],
      color: 'from-amber-600 to-yellow-700'
    },
    {
      name: 'Pack Argent',
      price: '100 000',
      features: [
        'Logo sur tous les supports',
        'Stand publicitaire',
        'Posts sponsorisés',
        '5 places VIP offertes',
        'Échantillons distribués'
      ],
      color: 'from-gray-400 to-gray-600'
    },
    {
      name: 'Pack Or',
      price: '250 000',
      features: [
        'Sponsor principal',
        'Nom dans le titre événement',
        'Stand premium',
        'Animation dédiée',
        '10 places VIP',
        'Couverture média maximale'
      ],
      color: 'from-yellow-400 to-orange-500'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Merci pour votre intérêt ! Nous vous contacterons bientôt.');
    setFormData({
      companyName: '',
      contactName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-[#0A3764] mb-4">
            Espace Publicitaire
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Boostez votre visibilité en devenant partenaire de Paradise Pic-Nic 2026 !
          </p>
        </div>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-[#0A3764] mb-4">
            Nos partenaires 2025
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Ils nous ont fait confiance
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners2025.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 flex items-center justify-center hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#0A3764] to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <TrendingUp className="w-12 h-12 text-white" />
                  </div>
                  <p className="font-bold text-gray-800">{partner.name}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-[#0A3764] mb-12">
            Statistiques clés
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${stat.color} rounded-xl p-8 text-white text-center hover:scale-105 transition-all`}
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm font-semibold opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-[#0A3764] mb-4">
            Packs publicitaires
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Choisissez la formule qui correspond à vos objectifs
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {packs.map((pack, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-br ${pack.color} p-8 text-white text-center`}>
                  <h3 className="text-2xl font-bold mb-2">{pack.name}</h3>
                  <div className="text-5xl font-extrabold mb-2">{pack.price}</div>
                  <div className="text-sm opacity-90">FCFA</div>
                </div>
                <div className="p-8">
                  <ul className="space-y-3 mb-8">
                    {pack.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <div className="w-2 h-2 bg-[#0A3764] rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full bg-gradient-to-r ${pack.color} text-white py-3 rounded-lg font-bold hover:scale-105 transition-all`}>
                    Je suis intéressé
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="bg-gradient-to-br from-[#0A3764] to-amber-500 rounded-2xl p-8 md:p-12 text-white mb-12">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Avantages pour les sponsors
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Visibilité maximale</h4>
                  <p className="text-sm opacity-90">Exposition auprès de milliers de participants et sur tous nos canaux digitaux</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Cible qualifiée</h4>
                  <p className="text-sm opacity-90">Accès à une audience jeune, active et engagée</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">ROI garanti</h4>
                  <p className="text-sm opacity-90">Retour sur investissement mesurable avec statistiques détaillées</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Engagement direct</h4>
                  <p className="text-sm opacity-90">Interaction en face-à-face avec vos futurs clients</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center text-[#0A3764] mb-8">
              Devenir sponsor
            </h2>

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nom de l'entreprise
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0A3764] focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nom du contact
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0A3764] focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0A3764] focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0A3764] focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all resize-none"
                  placeholder="Parlez-nous de votre projet de partenariat..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#0A3764] to-amber-500 text-white py-4 rounded-lg font-bold text-lg hover:from-blue-900 hover:to-amber-600 transition-all hover:scale-105"
              >
                Envoyer ma demande
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
