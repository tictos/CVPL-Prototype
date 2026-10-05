import React from 'react';
import { Calendar, ArrowRight, Phone, MessageSquare, Sparkles } from 'lucide-react';
import happyOwnerImg from '../assets/images/african_happy_pet_owner_1791217710164.jpg';

interface AppointmentCtaBannerProps {
  onOpenAppointment: () => void;
}

export const AppointmentCtaBanner: React.FC<AppointmentCtaBannerProps> = ({ onOpenAppointment }) => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Container inspired by the mockup */}
        <div className="relative rounded-3xl sm:rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-r from-[#0D5C75] via-[#0F4C5C] to-[#0A3B47] text-white p-6 sm:p-8 md:p-10 lg:p-12 overflow-hidden shadow-2xl border border-white/10">
          
          {/* Subtle Ambient Decorative Shapes */}
          <div className="absolute top-0 right-1/3 w-64 h-64 bg-[#85C83C]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#16325B]/60 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Column: Copy & Actions (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#85C83C]"></span>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#85C83C]">
                  Facile & Rapide
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-black tracking-tight text-white leading-tight text-balance">
                Prenez Rendez-vous Vétérinaire Dès Aujourd'hui
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-slate-200 leading-relaxed font-light max-w-xl">
                La santé de votre animal est notre priorité. Choisissez votre créneau en quelques clics ou contactez directement notre équipe à Lambandji pour une prise en charge rapide.
              </p>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                <button
                  onClick={onOpenAppointment}
                  className="px-6 sm:px-7 py-3 sm:py-3.5 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold rounded-xl sm:rounded-2xl shadow-xl shadow-orange-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 text-xs sm:text-sm md:text-base cursor-pointer"
                >
                  <Calendar className="w-4 sm:w-5 h-4 sm:h-5" />
                  <span>Prendre Rendez-vous</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>

                <a
                  href="tel:+224654164401"
                  className="px-4 sm:px-5 py-3 sm:py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl sm:rounded-2xl border border-white/20 transition-all flex items-center gap-2 text-xs sm:text-sm"
                >
                  <Phone className="w-4 h-4 text-[#85C83C]" />
                  +224 654 16 44 01
                </a>
              </div>
            </div>

            {/* Right Column: High Quality Pet & Owner Visual (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl aspect-[16/10] bg-slate-900">
                <img
                  src={happyOwnerImg}
                  alt="Propriétaire souriante avec son animal de compagnie soigné au cabinet vétérinaire de Lambandji"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
