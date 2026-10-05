import React, { useState } from 'react';
import { Check, ArrowRight, ShieldCheck, HeartPulse, Stethoscope, Sparkles } from 'lucide-react';

interface CostCalculatorProps {
  onOpenAppointment: (serviceName?: string) => void;
}

export const CostCalculator: React.FC<CostCalculatorProps> = ({ onOpenAppointment }) => {
  const [animal, setAnimal] = useState<'dog' | 'cat' | 'other'>('dog');
  const [selectedItems, setSelectedItems] = useState<string[]>([
    'consultation',
    'vaccin',
    'vermifuge',
  ]);

  const careOptionsData = {
    dog: [
      { id: 'consultation', name: 'Consultation & Bilan Général de Santé', desc: 'Examen clinique minutieux, auscultation cardiaque et contrôle général', icon: '🩺' },
      { id: 'vaccin', name: 'Vaccination Complète (Rage & CHPPiL)', desc: 'Protection antivirale essentielle + carnet de santé officiel délivré', icon: '💉' },
      { id: 'vermifuge', name: 'Traitement Antiparasitaire (Tiques & Vers)', desc: 'Protection renforcée adaptée au climat chaud et humide de Conakry', icon: '🛡️' },
      { id: 'sterilization', name: 'Chirurgie Préventive & Stérilisation', desc: 'Intervention sécurisée sous anesthésie générale et suivi post-opératoire', icon: '✂️' },
      { id: 'detartrage', name: 'Hygiène Bucco-Dentaire & Détartrage', desc: 'Assainissement des gencives et élimination du tartre par ultrasons', icon: '✨' },
      { id: 'laboratoire', name: 'Bilan de Laboratoire & Dépistage Sanguin', desc: 'Recherche immédiate d’hémoparasites (babésiose) et analyse hématologique', icon: '🔬' },
      { id: 'toilettage', name: 'Toilettage Thérapeutique & Soin Dermatologique', desc: 'Bain traitant antiparasitaire, entretien du pelage et soin des oreilles', icon: '🛁' },
    ],
    cat: [
      { id: 'consultation', name: 'Consultation & Examen Spécifique Félin', desc: 'Approche apaisée, examen clinique doux et contrôle de vitalité', icon: '🩺' },
      { id: 'vaccin', name: 'Vaccination Féline (Typhus - Coryza - Rage)', desc: 'Immunisation complète et délivrance du certificat officiel', icon: '💉' },
      { id: 'vermifuge', name: 'Déparasitage Interne & Externe Félin', desc: 'Pipettes spot-on et vermifugation ciblée', icon: '🛡️' },
      { id: 'sterilization', name: 'Ovariectomie & Castration Chat', desc: 'Chirurgie mini-invasive avec récupération rapide', icon: '✂️' },
      { id: 'detartrage', name: 'Soins Dentaires & Traitement Gingival', desc: 'Prévention des gingivo-stomatites et confort buccal', icon: '✨' },
      { id: 'laboratoire', name: 'Tests Sérologiques Rapides (FIV / FeLV)', desc: 'Dépistage instantané sur prélèvement sanguin', icon: '🔬' },
    ],
    other: [
      { id: 'consultation', name: 'Consultation Spéciale (Équin / Élevage)', desc: 'Audit sanitaire sur site ou au cabinet à Lambanyi', icon: '🩺' },
      { id: 'vaccin', name: 'Vaccination & Prophylaxie Cheptel', desc: 'Protocoles sanitaires certifiés pour fermes avicoles et élevages', icon: '💉' },
      { id: 'vermifuge', name: 'Vermifugation Collective & Lutte Parasitaire', desc: 'Traitements de masse adaptés aux troupeaux et chevaux', icon: '🛡️' },
      { id: 'chirurgie', name: 'Intervention Vétérinaire d’Urgence', desc: 'Prise en charge traumatologique ou obstétrique rapide', icon: '✂️' },
    ],
  };

  const currentOptions = careOptionsData[animal];

  const toggleItem = (id: string) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const animalLabels = {
    dog: 'Chien',
    cat: 'Chat',
    other: 'Équin / Élevage',
  };

  return (
    <section id="tarifs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16325B]/10 text-[#16325B] text-xs font-bold uppercase tracking-wider">
            <span>— Plan de Soins Personnalisé</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-[#16325B] tracking-tight text-balance">
            Configurez le <span className="text-[#85C83C]">Programme Santé</span> de Votre Animal
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
            Sélectionnez les actes et bilans recommandés selon l’espèce et les besoins de votre compagnon pour préparer au mieux sa consultation à Lambanyi.
          </p>
        </div>

        {/* Plan Box */}
        <div className="bg-[#F8FAF9] rounded-[2rem] sm:rounded-3xl border border-slate-200/80 p-5 sm:p-8 lg:p-10 shadow-sm max-w-4xl mx-auto">
          
          {/* Step 1: Species selector */}
          <div className="space-y-3 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              1. Sélectionnez votre animal :
            </span>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {[
                { id: 'dog', label: '🐕 Chien', sub: 'Canin' },
                { id: 'cat', label: '🐈 Chat', sub: 'Félin' },
                { id: 'other', label: '🐎 Équin', sub: 'Élevage & Autre' },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setAnimal(t.id as any);
                    setSelectedItems(['consultation', 'vaccin']);
                  }}
                  className={`py-2.5 sm:py-3 px-2 sm:px-4 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center ${
                    animal === t.id
                      ? 'bg-[#16325B] text-white border-[#16325B] shadow-md'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <p className="text-xs sm:text-sm font-bold whitespace-nowrap">{t.label}</p>
                  <p className={`text-[10px] sm:text-xs mt-0.5 whitespace-nowrap ${animal === t.id ? 'text-slate-300' : 'text-slate-400'}`}>
                    {t.sub}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Select services */}
          <div className="space-y-3 mb-8">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                2. Cochez les soins et bilans souhaités :
              </span>
              <span className="text-xs font-semibold text-[#85C83C] bg-[#85C83C]/10 px-2.5 py-0.5 rounded-full">
                {selectedItems.length} acte(s) sélectionné(s)
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentOptions.map((item) => {
                const isChecked = selectedItems.includes(item.id);
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleItem(item.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start justify-between gap-3 ${
                      isChecked
                        ? 'bg-white border-[#85C83C] shadow-sm ring-1 ring-[#85C83C]/30'
                        : 'bg-white/70 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-lg mt-0.5 flex items-center justify-center shrink-0 transition-colors ${
                          isChecked ? 'bg-[#85C83C] text-white' : 'border border-slate-300 bg-white'
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs">{item.icon}</span>
                          <p className="text-xs font-bold text-[#16325B] leading-tight">{item.name}</p>
                        </div>
                        <p className="text-[11px] text-slate-500 font-light mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Summary & Booking Trigger */}
          <div className="bg-[#16325B] text-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs text-[#85C83C] font-bold uppercase tracking-wider flex items-center gap-1.5 justify-center sm:justify-start">
                <ShieldCheck className="w-4 h-4" />
                Plan personnalisé pour {animalLabels[animal]}
              </span>
              <p className="text-sm sm:text-base font-display font-bold text-white">
                {selectedItems.length} prestation(s) sélectionnée(s) pour votre visite
              </p>
              <p className="text-[11px] text-slate-300">
                Prise en charge personnalisée au cabinet de Lambanyi-Kinifi par nos vétérinaires diplômés.
              </p>
            </div>

            <button
              onClick={() => onOpenAppointment(`Plan personnalisé : ${animalLabels[animal]} (${selectedItems.length} prestations)`)}
              className="w-full sm:w-auto px-7 sm:px-8 py-3.5 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold rounded-xl sm:rounded-2xl shadow-lg shadow-orange-500/30 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-sm cursor-pointer whitespace-nowrap"
            >
              Prendre RDV avec ce Plan
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
