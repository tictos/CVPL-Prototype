import React from 'react';
import { Calendar, Phone, Award, ShieldCheck, Heart, ArrowRight, Play, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenAppointment: () => void;
  onOpenVideo?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppointment }) => {
  return (
    <section className="relative bg-gradient-to-b from-[#0D5C75] via-[#0F4C5C] to-[#0A3B47] text-white pt-8 pb-28 md:pt-14 md:pb-36 overflow-hidden">
      {/* Decorative Organic Backdrop Circles & Curves */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#85C83C]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#16325B]/40 blur-3xl pointer-events-none" />
      
      {/* Subtle Paw Pattern in Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#85C83C_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 md:space-y-7">
            {/* Tagline / Subtitle */}
            <div className="inline-flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#85C83C]"></span>
              <span className="text-xs md:text-sm font-extrabold uppercase tracking-widest text-[#85C83C]">
                Santé Animale & Sérénité Familiale à Conakry
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-display font-black tracking-tight leading-[1.15] text-white text-balance">
              Des Soins Vétérinaires de <span className="text-[#85C83C]">Confiance</span> pour Vos Compagnons
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-light">
              Nous offrons des soins vétérinaires bienveillants, rigoureux et complets pour assurer la santé, le bonheur et la longévité de vos chiens, chats, équins et élevages à <strong>Lambanyi-Kinifi</strong>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenAppointment}
                className="px-7 py-3.5 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold rounded-2xl shadow-xl shadow-orange-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 text-sm sm:text-base cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                Prendre Rendez-vous
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <a
                href="#clinique"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-2xl border border-white/20 backdrop-blur-sm transition-all flex items-center gap-2 text-sm sm:text-base"
              >
                <ShieldCheck className="w-5 h-5 text-[#85C83C]" />
                Découvrir la Clinique
              </a>
            </div>

            {/* 3 Pillars / Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#85C83C]">
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-200">
                  Vétérinaires Qualifiés
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#85C83C]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-200">
                  Plateau Technique Moderne
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#85C83C]">
                  <Heart className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-200">
                  Soins avec Compassion
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Backing decorative glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#85C83C]/30 to-[#16325B]/40 rounded-[2.5rem] blur-xl" />

              {/* Main Photo Frame */}
              <div className="relative rounded-[2.25rem] overflow-hidden border-4 border-white/20 shadow-2xl bg-slate-900 aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="/src/assets/images/african_hero_vet_doctor_1791217688473.jpg"
                  alt="Médecin vétérinaire au Cabinet Vétérinaire Privé de Lambanyi avec un chien et un chat"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A3B47]/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating Guinea Clinic Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-slate-100 flex items-center justify-between text-slate-900">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#85C83C] text-white flex items-center justify-center font-bold text-xs">
                      GN
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#16325B]">Cabinet Agréé à Conakry</p>
                      <p className="text-[10px] text-slate-500">Lambanyi - Kinifi, Ratoma</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      Disponible
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating review chip */}
              <div className="hidden sm:flex absolute -top-4 -left-4 bg-[#16325B] text-white px-4 py-2.5 rounded-2xl shadow-xl border border-white/15 items-center gap-2.5 animate-pulse-glow">
                <span className="text-lg">⭐</span>
                <div>
                  <div className="flex items-center gap-1 text-xs font-bold">
                    <span>4.9 / 5</span>
                    <span className="text-slate-300 font-normal">· Avis Clients</span>
                  </div>
                  <p className="text-[10px] text-[#85C83C]">Référence soins à Conakry</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
