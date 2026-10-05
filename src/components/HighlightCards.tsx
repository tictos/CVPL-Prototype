import React, { useState } from 'react';
import { ShieldCheck, PlusCircle, HeartPulse, MessageSquare, ArrowRight, X, Sparkles, CheckCircle2, Phone } from 'lucide-react';

interface HighlightCardsProps {
  onOpenAppointment: (service?: string) => void;
}

interface FeatureDetail {
  id: string;
  icon: React.ReactNode;
  title: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  ctaLabel: string;
  badge?: string;
}

export const HighlightCards: React.FC<HighlightCardsProps> = ({ onOpenAppointment }) => {
  const [selectedFeature, setSelectedFeature] = useState<FeatureDetail | null>(null);

  const features: FeatureDetail[] = [
    {
      id: 'preventive',
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      title: 'Soins Préventifs',
      shortDesc: 'Examens périodiques et vaccinations régulières pour garder votre animal en pleine forme.',
      fullDesc: 'La prévention est la clé d’une vie longue et saine pour votre animal. À Lambanyi-Kinifi, nous réalisons des bilans de santé exhaustifs, des protocoles vaccinaux adaptés (Rage, Parvovirose, Maladie de Carré, Leptospirose) et des traitements vermifuges périodiques.',
      benefits: [
        'Calendrier vaccinal personnalisé et carnet de santé',
        'Dépistage précoce des affections parasitaires et virales',
        'Examens cliniques complets (cœur, yeux, oreilles, pelage)',
        'Traitements préventifs tiques et puces adaptés au climat de Conakry'
      ],
      ctaLabel: 'Planifier un Bilan Préventif',
      badge: 'Essentiel'
    },
    {
      id: 'emergency',
      icon: <PlusCircle className="w-6 h-6 text-white" />,
      title: 'Services d’Urgence',
      shortDesc: 'Prise en charge médicale et chirurgicale immédiate 7j/7 en cas de détresse vitale.',
      fullDesc: 'En cas d’accident, d’intoxication, de crise convulsive ou d’urgence chirurgicale, notre cabinet vétérinaire à Lambanyi dispose d’un service d’intervention rapide et d’une unité de réanimation pour stabiliser votre compagnon.',
      benefits: [
        'Permanence téléphonique 7j/7 sur appel d’urgence',
        'Chirurgie traumatologique et hémostase d’urgence',
        'Oxygénothérapie et perfusion pour réhydratation intensive',
        'Hospitalisation surveillée jour et nuit'
      ],
      ctaLabel: 'Appeler les Urgences Immédiatement',
      badge: '7j/7'
    },
    {
      id: 'wellness',
      icon: <HeartPulse className="w-6 h-6 text-white" />,
      title: 'Programmes Nutrition',
      shortDesc: 'Plans diététiques personnalisés et compléments de croissance adaptés.',
      fullDesc: 'Une alimentation adéquate prévient 80% des pathologies métaboliques. Nous formulons des régimes sur-mesure pour chiots en croissance, chiennes gestantes, chats stérilisés et animaux âgés en Guinée.',
      benefits: [
        'Sélection de croquettes de haute digestibilité',
        'Compléments minéraux et vitaminiques (calcium, omégas)',
        'Gestion du surpoids et des intolérances alimentaires',
        'Suivi de la courbe de poids et bilan corporel'
      ],
      ctaLabel: 'Demander un Conseil Nutrition',
      badge: 'Sur-mesure'
    },
    {
      id: 'advice',
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      title: 'Conseils & Élevage',
      shortDesc: 'Accompagnement expert pour élevages canins, équins et fermes avicoles.',
      fullDesc: 'Au-delà des animaux de compagnie, le Cabinet Vétérinaire Privé de Lambanyi accompagne les éleveurs, les propriétaires de chevaux et les exploitations avicoles de Conakry et de l’intérieur du pays.',
      benefits: [
        'Audit sanitaire et biosécurité des élevages avicoles',
        'Suivi de reproduction et assistance à la mise bas',
        'Protocoles de prophylaxie collective pour cheptels',
        'Conseils d’éducation canine et comportement'
      ],
      ctaLabel: 'Consulter nos Spécialistes',
      badge: 'Expertise'
    }
  ];

  return (
    <section className="relative -mt-16 md:-mt-20 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 4 Cards Grid matching the mockup structure */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {features.map((feature) => (
          <div
            key={feature.id}
            onClick={() => setSelectedFeature(feature)}
            className="group relative bg-[#0D5C75] hover:bg-[#0F4C5C] text-white p-6 rounded-3xl shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 border border-white/10 cursor-pointer flex flex-col justify-between"
          >
            {/* Top Row: Icon circle + Badge */}
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-white/15 group-hover:bg-[#85C83C] flex items-center justify-center transition-colors duration-300">
                {feature.icon}
              </div>
              {feature.badge && (
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-200 bg-white/10 px-2.5 py-1 rounded-full">
                  {feature.badge}
                </span>
              )}
            </div>

            {/* Title & Short Description */}
            <div className="space-y-2 mb-4">
              <h3 className="text-lg font-display font-bold text-white group-hover:text-[#85C83C] transition-colors">
                {feature.title}
              </h3>
              <p className="text-xs text-slate-200 leading-relaxed font-light line-clamp-3">
                {feature.shortDesc}
              </p>
            </div>

            {/* Learn More Link */}
            <div className="pt-2 border-t border-white/10 flex items-center gap-1.5 text-xs font-bold text-[#85C83C] group-hover:text-white transition-colors">
              <span>En savoir plus</span>
              <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Feature Detail Interactive Modal */}
      {selectedFeature && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div
            className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-[#16325B] text-white p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#85C83C] flex items-center justify-center text-white">
                  {selectedFeature.icon}
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold">{selectedFeature.title}</h4>
                  <p className="text-xs text-slate-300">Cabinet Vétérinaire Privé de Lambanyi</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedFeature(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label="Fermer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 space-y-5">
              <p className="text-sm text-slate-600 leading-relaxed">
                {selectedFeature.fullDesc}
              </p>

              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-[#16325B] mb-3">
                  Ce que nous prenons en charge :
                </h5>
                <ul className="space-y-2.5">
                  {selectedFeature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#85C83C] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-end gap-3">
                {selectedFeature.id === 'emergency' ? (
                  <a
                    href="tel:+224622000000"
                    className="w-full sm:w-auto px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    Appeler l'Urgence : +224 622 00 00 00
                  </a>
                ) : (
                  <button
                    onClick={() => {
                      const sName = selectedFeature.title;
                      setSelectedFeature(null);
                      onOpenAppointment(sName);
                    }}
                    className="w-full sm:w-auto px-6 py-3 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold rounded-xl shadow-md transition-all text-sm cursor-pointer"
                  >
                    {selectedFeature.ctaLabel} →
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
