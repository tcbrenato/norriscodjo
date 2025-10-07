import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface GalleryFormProps {
  onSuccess: () => void;
}

export default function GalleryForm({ onSuccess }: GalleryFormProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    zone: '',
    testimonial: ''
  });

  const zones = [
    'Cotonou',
    'Porto-Novo',
    'Bohicon',
    'Abomey',
    'Parakou',
    'Ouidah',
    'Autre'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error: participantError } = await supabase
        .from('participants')
        .insert({
          first_name: formData.firstName,
          last_name: formData.lastName,
          phone: formData.phone,
          email: formData.email,
          zone: formData.zone
        });

      if (participantError) throw participantError;

      if (formData.testimonial.trim()) {
        const { error: testimonialError } = await supabase
          .from('testimonials')
          .insert({
            author_name: `${formData.firstName} ${formData.lastName}`,
            message: formData.testimonial
          });

        if (testimonialError) throw testimonialError;
      }

      onSuccess();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
      <h3 className="text-2xl font-bold text-[#0A3764] mb-6 text-center">
        Accédez à la galerie
      </h3>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Nom <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0A3764] focus:ring-2 focus:ring-blue-200 outline-none transition-all"
            placeholder="Votre nom"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Prénoms <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0A3764] focus:ring-2 focus:ring-blue-200 outline-none transition-all"
            placeholder="Vos prénoms"
          />
        </div>
      </div>

      <div className="mt-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Téléphone / WhatsApp <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
          placeholder="+229 XX XX XX XX"
        />
      </div>

      <div className="mt-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Email <span className="text-red-500">*</span>
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

      <div className="mt-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Zone de résidence <span className="text-red-500">*</span>
        </label>
        <select
          required
          value={formData.zone}
          onChange={(e) => setFormData({ ...formData, zone: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
        >
          <option value="">Sélectionnez votre zone</option>
          {zones.map(zone => (
            <option key={zone} value={zone}>{zone}</option>
          ))}
        </select>
      </div>

      <div className="mt-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Témoignage (optionnel)
        </label>
        <textarea
          value={formData.testimonial}
          onChange={(e) => setFormData({ ...formData, testimonial: e.target.value })}
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all resize-none"
          placeholder="Partagez votre expérience ou vos attentes..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full mt-8 bg-gradient-to-r from-[#0A3764] to-amber-500 text-white py-4 rounded-lg font-bold text-lg hover:from-blue-900 hover:to-amber-600 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            Accéder à la galerie 📸
          </>
        )}
      </button>
    </form>
  );
}
