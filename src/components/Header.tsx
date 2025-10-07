import { useState } from "react";
import { Menu, X, Home, Facebook, Instagram, Linkedin, Globe } from "lucide-react";

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export default function Header({ onNavigate, currentPage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: "home", label: "Accueil" },
    { id: "gallery", label: "Galerie" },
    { id: "programme", label: "Programme" },
    { id: "publicite", label: "Publicité" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      {/* --- Bandeau supérieur --- */}
      <div className="bg-[#0A3764] text-white text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center h-10">
          {/* Logo + titre */}
          <div className="flex items-center gap-3">
            <img
              src="https://i.ibb.co/tP8X2QDc/42f6ffd3-e9e1-4992-b561-ee9a99b6c187.jpg"
              alt="Paradise Pic-Nic"
              className="w-8 h-8 bg-white rounded-full object-contain"
            />
            <div>
              <p className="font-semibold leading-none">Paradise Pic-Nic</p>
              <p className="text-xs opacity-80">Summer Vibes 2026</p>
            </div>
          </div>

          {/* Langue + réseaux sociaux */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 hover:underline">
              <Globe className="w-4 h-4" />
              Français
            </button>
            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-amber-400"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="hover:text-amber-400"><Linkedin className="w-4 h-4" /></a>
              <a href="#" className="hover:text-amber-400"><Instagram className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* --- Barre de navigation principale --- */}
      <div className="border-t border-gray-200 bg-white">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          {/* Icône accueil (style comme dans ton image) */}
          <button
            onClick={() => onNavigate("home")}
            className={`flex items-center justify-center w-14 h-14 ${
              currentPage === "home"
                ? "bg-[#0A3764] text-white"
                : "text-[#0A3764] hover:bg-gray-100"
            } transition rounded-md`}
          >
            <Home className="w-6 h-6" />
          </button>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.slice(1).map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-[#0A3764] font-medium transition hover:text-amber-500 ${
                  currentPage === item.id ? "border-b-2 border-amber-500 pb-1" : ""
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Bouton call-to-action */}
          <button className="hidden md:block bg-[#0A3764] text-white px-5 py-2 rounded-full font-semibold hover:bg-amber-500 transition">
            Acheter un pass
          </button>

          {/* Menu mobile toggle */}
          <button
            className="md:hidden text-[#0A3764]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0A3764] text-white animate-in slide-in-from-top">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left py-3 px-4 hover:bg-amber-500 ${
                  currentPage === item.id ? "bg-amber-500" : ""
                }`}
              >
                {item.label}
              </button>
            ))}
            <button className="w-full bg-white text-[#0A3764] py-3 font-semibold">
              Acheter un pass
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
