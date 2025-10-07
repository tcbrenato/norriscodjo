import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message envoyé ! Nous vous répondrons dans les plus brefs délais.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Contactez-nous
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une question ? Une suggestion ? N'hésitez pas à nous contacter !
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Envoyez-nous un message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                  placeholder="votre.email@exemple.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                  placeholder="Objet de votre message"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all resize-none"
                  placeholder="Votre message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white py-4 rounded-lg font-bold text-lg hover:from-orange-600 hover:to-yellow-500 transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Envoyer le message
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Informations de contact</h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-gradient-to-br from-orange-400 to-yellow-400 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                  <p className="text-gray-600">contact@paradisepicnic.com</p>
                  <p className="text-gray-600">info@paradisepicnic.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-gradient-to-br from-green-400 to-emerald-400 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Téléphone / WhatsApp</h3>
                  <p className="text-gray-600">+229 XX XX XX XX</p>
                  <p className="text-gray-600">+229 YY YY YY YY</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-gradient-to-br from-blue-400 to-cyan-400 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Adresse</h3>
                  <p className="text-gray-600">Cotonou, Bénin</p>
                  <p className="text-gray-600">Lieu exact communiqué aux participants</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-yellow-400 rounded-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Suivez-nous sur les réseaux sociaux</h3>
              <div className="flex gap-4">
                <a href="#" className="bg-white/20 hover:bg-white/30 p-4 rounded-lg transition-all hover:scale-110">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="bg-white/20 hover:bg-white/30 p-4 rounded-lg transition-all hover:scale-110">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="bg-white/20 hover:bg-white/30 p-4 rounded-lg transition-all hover:scale-110">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
              <p className="mt-4 text-sm opacity-90">
                Restez informés de toutes nos actualités et surprises !
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="h-96 bg-gradient-to-br from-orange-400 to-yellow-400 flex items-center justify-center">
            <div className="text-center text-white">
              <MapPin className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Carte Google Maps</h3>
              <p>Lieu exact révélé après inscription</p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gray-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Mentions légales</h2>
          <div className="max-w-3xl mx-auto text-gray-600 space-y-4">
            <p>
              <strong>Organisateur :</strong> Paradise Pic-Nic Events
            </p>
            <p>
              <strong>Directeur de publication :</strong> Rénato TCHOBO
            </p>
            <p>
              <strong>Hébergement web :</strong> Services cloud sécurisés
            </p>
            <p className="text-sm text-gray-500 text-center mt-8">
              © 2025 Paradise Pic-Nic - Tous droits réservés | Créé avec passion par Rénato TCHOBO
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
