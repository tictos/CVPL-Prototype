import React from 'react';
import { ShieldAlert, Phone, AlertTriangle, Clock, HeartHandshake, CheckCircle2, MessageSquare } from 'lucide-react';

interface EmergencySectionProps {
  onOpenAppointment: (service?: string) => void;
}

export const EmergencySection: React.FC<EmergencySectionProps> = ({ onOpenAppointment }) => {
  const emergencySteps = [
    {
      step: '01',
      title: 'Gardez votre calme & sécurisez l’animal',
      desc: 'Évitez les mouvements brusques, placez l’animal sur une couverture propre et ne lui donnez aucun médicament humain (paracétamol et aspirine sont toxiques).',
    },
    {
      step: '02',
      title: 'Appelez la permanence CVPL immédiatement',
      desc: 'Composez le +224 654 16 44 01 ou le +224 622 55 11 52 (Appel Direct) pour décrire les symptômes au vétérinaire d’astreinte avant votre arrivée afin que le bloc soit préparé.',
    },
    {
      step: '03',
      title: 'Transportez vers le cabinet au Carrefour ISSEG',
      desc: 'Acheminez l’animal délicatement en maintenant ses voies respiratoires dégagées. Notre équipe vous accueille en priorité absolue.',
    },
  ];

  return (
    <section id="urgences" className="py-20 bg-gradient-to-b from-[#0D223F] to-[#16325B] text-white relative overflow-hidden">
      {/* Ambient emergency glow */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#85C83C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold uppercase tracking-wider border border-rose-500/30">
              <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse"></span>
              <span>Permanence & Urgences Vétérinaires 7j/7</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-white text-balance">
              Que Faire en Cas d’Urgence Vétérinaire à Conakry ?
            </h2>
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              Une intoxication, un accident de la route, une piqûre de serpent, une torsion d'estomac ou une hémorragie nécessitent une intervention sans délai.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:+224622551152"
              className="px-5 py-3.5 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-2xl shadow-xl shadow-rose-600/30 transition-all flex items-center gap-2 text-xs sm:text-sm"
            >
              <Phone className="w-4 h-4 animate-bounce" />
              Appel Direct Urgence : +224 622 55 11 52
            </a>
            <a
              href="https://wa.me/224654164401?text=URGENCE%20VÉTÉRINAIRE%20:%20J'ai%20besoin%20d'une%20prise%20en%20charge%20immédiate"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-2xl shadow-md transition-all flex items-center gap-2 text-xs sm:text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp Urgence
            </a>
          </div>
        </div>

        {/* 3 Step Protocol Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {emergencySteps.map((s, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/10 flex flex-col justify-between hover:bg-white/15 transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-display font-black text-[#85C83C] font-mono">
                    {s.step}
                  </span>
                  <ShieldAlert className="w-5 h-5 text-rose-400" />
                </div>
                <h4 className="text-base font-display font-bold text-white">
                  {s.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  {s.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-[#85C83C] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Prise en charge directe sans attente</span>
              </div>
            </div>
          ))}
        </div>

        {/* Warning Banner on tropical hazards */}
        <div className="bg-rose-950/60 border border-rose-500/30 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-white">
                Attention aux symptômes d'alerte sous notre climat tropical :
              </p>
              <p className="text-[11px] text-slate-300 font-light mt-0.5">
                Abattement soudain, gencives pâles ou jaunâtres (suspicion de piroplasmose/tiques), vomissements répétés, diarrhée hémorragique ou convulsions.
              </p>
            </div>
          </div>
          
          <button
            onClick={() => onOpenAppointment("Urgence Vétérinaire Prioritaire")}
            className="px-5 py-2.5 bg-white text-[#16325B] hover:bg-slate-100 font-bold rounded-xl text-xs whitespace-nowrap cursor-pointer shrink-0"
          >
            Signaler une Urgence en Ligne
          </button>
        </div>

      </div>
    </section>
  );
};
