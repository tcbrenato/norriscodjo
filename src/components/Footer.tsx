import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#061A2F] text-white pt-10 pb-6">
      {/* Ligne tricolore en haut */}
      <div className="h-1 w-full flex">
        <div className="flex-1 bg-green-600"></div>
        <div className="flex-1 bg-yellow-400"></div>
        <div className="flex-1 bg-red-600"></div>
      </div>

      {/* Logo et titre centré */}
      <div className="text-center mt-10 mb-8">
        <div className="flex justify-center mb-4">
          <img
            src="/logo.png"
            alt="Logo Paradise Pic-Nic"
            className="w-20 h-20 object-contain"
          />
        </div>
        <h3 className="text-xl font-bold uppercase">
          Paradise Pic-Nic
        </h3>
        <p className="text-sm text-gray-300">Cotonou - Summer Vibes 2026</p>
      </div>

      {/* Sections principales */}
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-t border-gray-700 pt-10">
        <div>
          <h4 className="font-bold text-sm mb-3 text-orange-400 uppercase">
            L'Événement
          </h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#">À propos</a></li>
            <li><a href="#">Programme</a></li>
            <li><a href="#">Artistes</a></li>
            <li><a href="#">Partenaires</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm mb-3 text-orange-400 uppercase">
            Informations
          </h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#">Acheter un pass</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Sécurité & Règlement</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm mb-3 text-orange-400 uppercase">
            Suivez-nous
          </h4>
          <div className="flex gap-3 mb-3">
            <a
              href="#"
              className="bg-white text-[#061A2F] p-2 rounded-full hover:bg-orange-400 hover:text-white transition"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="bg-white text-[#061A2F] p-2 rounded-full hover:bg-orange-400 hover:text-white transition"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="bg-white text-[#061A2F] p-2 rounded-full hover:bg-orange-400 hover:text-white transition"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-sm mb-3 text-orange-400 uppercase">
            Contact
          </h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-orange-400" />
              +229 61 23 45 67
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-orange-400" />
              contact@paradisepicnic.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-orange-400" />
              Cotonou, Bénin
            </li>
          </ul>
        </div>
      </div>

      {/* Bas du footer */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        <p>© 2025 Paradise Pic-Nic — Tous droits réservés</p>
        <p className="mt-1 text-gray-500 text-xs">
          Conçu avec ❤️ par <span className="text-orange-400 font-semibold">Rénato TCHOBO</span>
        </p>
      </div>
    </footer>
  );
}
