import { useEffect, useState } from "react";
import { Calendar, Users, Camera, TrendingUp } from "lucide-react";
import Countdown from "../components/Countdown";
import TestimonialCard from "../components/TestimonialCard";
import { supabase } from "../lib/supabase";
import { motion, useAnimation } from "framer-motion";
import { useMediaQuery } from "react-responsive";

interface HomeProps {
  onNavigate: (page: string) => void;
}

interface Testimonial {
  id: string;
  author_name: string;
  message: string;
  created_at: string;
}

export default function Home({ onNavigate }: HomeProps) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  // 🔹 Détection mobile
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const controls = useAnimation();

  useEffect(() => {
    loadTestimonials();
  }, []);

  useEffect(() => {
    // Si on est sur mobile → rotation infinie
    if (isMobile) {
      controls.start({
        rotate: [0, 360],
        transition: {
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        },
      });
    } else {
      controls.stop(); // stoppe la rotation sur desktop
    }
  }, [isMobile, controls]);

  const loadTestimonials = async () => {
    const { data } = await supabase
      .from("testimonials")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(6);

    if (data) setTestimonials(data);
  };

  const activities = [
    {
      icon: Camera,
      title: "Shooting Photo & Vidéo",
      description:
        "Immortalisez vos moments forts grâce à nos studios photo et équipes médias professionnelles.",
    },
    {
      icon: Users,
      title: "Networking & Ambiance Chill",
      description:
        "Un espace convivial pour rencontrer, échanger et collaborer dans une atmosphère détendue.",
    },
    {
      icon: Calendar,
      title: "Programme Structuré",
      description:
        "Un déroulé d’activités bien pensé pour vivre une journée inoubliable, du matin au soir.",
    },
    {
      icon: TrendingUp,
      title: "Défilé & Expo Fashion",
      description:
        "Découvrez les talents locaux à travers une scène mode et exposition créative.",
    },
  ];

  const heroImage =
    "https://i.ibb.co/tP8X2QDc/42f6ffd3-e9e1-4992-b561-ee9a99b6c187.jpg";

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* === SECTION HERO === */}
      <section className="bg-[#0A3764] text-white pt-32 pb-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center text-center md:text-left">
          {/* Texte Hero */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Paradise Pic-Nic <span className="text-[#F9D342]">2026</span>
            </h1>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-md mb-8">
              Le rendez-vous estival incontournable de Cotonou 🌴  
              Musique, art, détente, et ambiance ensoleillée vous attendent le{" "}
              <strong>29 Août 2026</strong>.
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 w-full sm:w-auto">
              <button
                onClick={() => onNavigate("programme")}
                className="bg-[#F9D342] text-[#0A3764] hover:bg-[#ffe067] transition-colors px-8 py-3 rounded-full font-semibold shadow-md w-full sm:w-auto"
              >
                Voir le programme
              </button>
              <button
                onClick={() => onNavigate("gallery")}
                className="border border-white text-white hover:bg-white hover:text-[#0A3764] transition-colors px-8 py-3 rounded-full font-semibold shadow-md w-full sm:w-auto"
              >
                Accéder à la galerie
              </button>
            </div>
          </motion.div>

          {/* Image Hero avec rotation continue sur mobile */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <motion.img
              src={heroImage}
              alt="Paradise Picnic 2026"
              className="rounded-full border-4 border-white shadow-2xl w-[85%] h-[85%] object-cover"
              animate={controls}
            />
          </motion.div>
        </div>
      </section>

      {/* === SECTION COUNTDOWN === */}
      <section className="bg-[#F9F9F9] py-16 text-center">
        <div className="max-w-5xl mx-auto">
          <Countdown />
        </div>
      </section>

      {/* === SECTION À PROPOS === */}
      <section className="py-24 px-6 md:px-16 bg-gradient-to-b from-white to-[#E6F0FF] text-center">
        <div className="max-w-6xl mx-auto space-y-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A3764] mb-4">
              À propos de Paradise Pic-Nic
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Depuis 2023, <strong>Paradise Pic-Nic</strong> s’impose comme le plus grand
              événement estival du Bénin. Entre musique, détente et art de vivre, 
              chaque édition rassemble plus de 1 000 participants dans une ambiance unique.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 mt-10">
            {[
              {
                year: "2023",
                title: "1ʳᵉ Édition",
                text: "500 participants à Fidjrossè. Une première expérience réussie.",
              },
              {
                year: "2024 - 2025",
                title: "Éditions Sold Out",
                text: "Des collaborations locales et internationales remarquées.",
              },
              {
                year: "2026",
                title: "Nouvelle Édition",
                text: "Encore plus immersive, plus artistique et plus festive.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <h3 className="text-2xl font-bold text-[#0A3764] mb-2">
                  {item.year}
                </h3>
                <p className="text-gray-500 mb-2 font-semibold">
                  {item.title}
                </p>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === SECTION ACTIVITÉS === */}
      <section className="py-24 px-6 md:px-16 bg-white text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A3764] mb-6">
            Les temps forts de l’édition 2025
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-14">
            Des expériences uniques, des performances inoubliables, et une énergie incomparable.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-[#F9FAFB] rounded-2xl shadow-md hover:shadow-xl p-8 text-left md:text-center"
              >
                <activity.icon className="w-10 h-10 text-[#0A3764] mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-[#0A3764] mb-2">
                  {activity.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {activity.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === SECTION TÉMOIGNAGES === */}
      {testimonials.length > 0 && (
        <section className="py-24 px-6 md:px-16 bg-gradient-to-b from-[#E6F0FF] to-white text-center">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A3764] mb-6">
              Témoignages des participants
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-14">
              Découvrez ce que les participants disent de leur expérience Paradise.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  authorName={testimonial.author_name}
                  message={testimonial.message}
                  createdAt={testimonial.created_at}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
