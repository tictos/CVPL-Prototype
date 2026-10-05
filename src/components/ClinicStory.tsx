import React from 'react';
import { ShieldCheck, Award, HeartHandshake, Microscope, Stethoscope, CheckCircle2, MapPin, Clock } from 'lucide-react';
import clinicExamImg from '../assets/images/african_vet_exam_clinic_1791217700023.jpg';

export const ClinicStory: React.FC = () => {
  return (
    <section id="clinique" className="py-20 bg-[#F8FAF9] relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-[#85C83C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image with overlays and badges (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Primary Photo */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 aspect-[4/3]">
                <img
                  src={clinicExamImg}
                  alt="Vétérinaire examinant un chiot dans la salle d'examen du Cabinet Vétérinaire Privé de Lambandji"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Trust Badge */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-100 max-w-xs space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#16325B] text-[#85C83C] flex items-center justify-center font-bold">
                    <Microscope className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-xs text-[#16325B]">Plateau Technique</h5>
                    <p className="text-[10px] text-slate-500">Laboratoire & Équipements Modernes</p>
                  </div>
                </div>
                <p className="text-[11px] text-slate-600 border-t border-slate-100 pt-2 font-light">
                  Analyses microscopiques, anesthésie sécurisée et monitoring cardiaque.
                </p>
              </div>

              {/* Top Experience Chip */}
              <div className="absolute -top-4 -left-4 bg-[#85C83C] text-[#0D223F] px-4 py-2 rounded-xl shadow-lg font-bold text-xs flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#0D223F]" />
                <span>Cabinet Référent à Lambanyi</span>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Core Values (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16325B]/10 text-[#16325B] text-xs font-bold uppercase tracking-wider">
                <span>— Notre Histoire & Vocation</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-[#16325B] tracking-tight text-balance">
                Le Cabinet Vétérinaire Privé de Lambanyi (CVPL)
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light">
                Implanté au cœur de la commune de <strong>Ratoma à Conakry (Lambanyi - Kinifi)</strong>, notre cabinet vétérinaire a été fondé avec une mission claire : apporter des soins médicaux et chirurgicaux rigoureux, bienveillants et accessibles pour chaque animal.
              </p>
            </div>

            {/* 4 Pillars */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3.5 bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-[#EBF8DC] text-[#589e1b] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#16325B]">Hygiène & Stérilisation Médicale</h4>
                  <p className="text-xs text-slate-600 font-light mt-0.5">
                    Protocoles d’asepsie chirurgicaux, désinfection systématique des salles et matériel médical certifié.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-[#EBF8DC] text-[#589e1b] flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#16325B]">Approche Douce Sans Stress</h4>
                  <p className="text-xs text-slate-600 font-light mt-0.5">
                    Manipulation apaisée de vos chiens et chats pour réduire l’anxiété liée aux visites vétérinaires.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-[#EBF8DC] text-[#589e1b] flex items-center justify-center shrink-0">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#16325B]">Traçabilité des Médicaments & Vaccins</h4>
                  <p className="text-xs text-slate-600 font-light mt-0.5">
                    Produits pharmaceutiques 100% originaux, conservés sous chaîne du froid rigoureuse.
                  </p>
                </div>
              </div>
            </div>

            {/* Live Clinic Stats */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-200">
              <div className="bg-white p-3 rounded-xl border border-slate-200 text-center">
                <span className="block text-xl font-display font-black text-[#16325B] tabular-nums">
                  5 000+
                </span>
                <span className="text-[11px] text-slate-500 font-medium">Animaux Suivis</span>
              </div>

              <div className="bg-white p-3 rounded-xl border border-slate-200 text-center">
                <span className="block text-xl font-display font-black text-[#85C83C] tabular-nums">
                  100%
                </span>
                <span className="text-[11px] text-slate-500 font-medium">Dévouement</span>
              </div>

              <div className="bg-white p-3 rounded-xl border border-slate-200 text-center">
                <span className="block text-xl font-display font-black text-[#F97316] tabular-nums">
                  7j / 7
                </span>
                <span className="text-[11px] text-slate-500 font-medium">Permanence Urgence</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
