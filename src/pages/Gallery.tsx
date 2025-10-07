import { useState, useEffect } from 'react';
import { Camera } from 'lucide-react';
import GalleryForm from '../components/GalleryForm';
import ProtectedGallery from '../components/ProtectedGallery';
import TestimonialCard from '../components/TestimonialCard';
import { supabase } from '../lib/supabase';

interface Testimonial {
  id: string;
  author_name: string;
  message: string;
  created_at: string;
}

export default function Gallery() {
  const [hasAccess, setHasAccess] = useState(false);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    loadTestimonials();
  }, []);

  const loadTestimonials = async () => {
    const { data } = await supabase
      .from('testimonials')
      .select('*')
      .order('created_at', { ascending: false });

    if (data) {
      setTestimonials(data);
    }
  };

  const handleFormSuccess = () => {
    setHasAccess(true);
    loadTestimonials();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#0A3764] to-blue-600 rounded-full mb-6">
            <Camera className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#0A3764] mb-4">
            Galerie Paradise Pic-Nic
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Revivez la magie des précédentes éditions ! Pour accéder à la galerie complète,
            veuillez remplir le formulaire ci-dessous.
          </p>
        </div>

        {!hasAccess ? (
          <GalleryForm onSuccess={handleFormSuccess} />
        ) : (
          <ProtectedGallery />
        )}

        {testimonials.length > 0 && (
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A3764] mb-4">
                Mur de témoignages
              </h2>
              <p className="text-gray-600">
                Découvrez les expériences et attentes de notre communauté
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map(testimonial => (
                <TestimonialCard
                  key={testimonial.id}
                  authorName={testimonial.author_name}
                  message={testimonial.message}
                  createdAt={testimonial.created_at}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
