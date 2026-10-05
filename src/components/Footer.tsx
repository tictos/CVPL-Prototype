import React from 'react';
import { CVPLLogo } from './CVPLLogo';
import { MapPin, Phone, Mail, Clock, Heart, ShieldCheck, ChevronRight, MessageSquare, PhoneCall } from 'lucide-react';

interface FooterProps {
  onOpenAppointment: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAppointment }) => {
  return (
    <footer className="bg-[#0D223F] text-slate-300 pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Presentation (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white p-2.5 rounded-2xl inline-block">
              <CVPLLogo size="md" />
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-light">
              Le <strong>Cabinet Vétérinaire Privé de Lambandji Kinifi (CVPL)</strong> est votre centre de référence en médecine et chirurgie vétérinaire à Conakry. Nous assurons la santé et le bien-être de vos animaux de compagnie, chevaux et élevages.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <a
                href="https://wa.me/224654164401"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-[#25D366] text-white flex items-center gap-1.5 text-xs font-semibold hover:bg-[#20bd5a] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
              <a
                href="tel:+224622551152"
                className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-[#85C83C] hover:text-[#0D223F] text-white flex items-center gap-1.5 text-xs font-semibold transition-colors"
                aria-label="Appel Direct"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Appel Direct</span>
              </a>
              <a
                href="https://www.goafricaonline.com/gn/106820-cabinet-veterinaire-prive-lambanyi-kinifi-veterinaires-conakry-guinee"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-[11px] font-semibold transition-colors"
              >
                Go Africa Online ↗
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-display font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="hover:text-[#85C83C] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#85C83C]" />
                  Accueil
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#85C83C] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#85C83C]" />
                  Nos Services
                </a>
              </li>
              <li>
                <a href="#urgences" className="hover:text-[#85C83C] transition-colors flex items-center gap-1 text-rose-400">
                  <ChevronRight className="w-3 h-3 text-rose-400" />
                  Urgences 7j/7
                </a>
              </li>
              <li>
                <a href="#clinique" className="hover:text-[#85C83C] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#85C83C]" />
                  Le Cabinet & Équipe
                </a>
              </li>
              <li>
                <a href="#pharmacie" className="hover:text-[#85C83C] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#85C83C]" />
                  Pharmacie Animale
                </a>
              </li>
              <li>
                <a href="#tarifs" className="hover:text-[#85C83C] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#85C83C]" />
                  Plan de Soins Personnalisé
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Veterinary Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-display font-bold text-white uppercase tracking-wider">
              Nos Prestations
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-[#85C83C] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#85C83C]" />
                  Consultations & Vaccinations
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#85C83C] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#85C83C]" />
                  Chirurgie & Stérilisations
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#85C83C] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#85C83C]" />
                  Analyses de Laboratoire
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#85C83C] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#85C83C]" />
                  Soins Bucco-Dentaires
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#85C83C] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#85C83C]" />
                  Lutte Tiques & Parasites
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#85C83C] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#85C83C]" />
                  Suivi Équestre & Élevages
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Schedule (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-display font-bold text-white uppercase tracking-wider">
              Cabinet Lambandji
            </h4>
            
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#85C83C] shrink-0 mt-0.5" />
                <span>Carrefour ISSEG, Lambandji Ratoma, Conakry - Guinée</span>
              </div>

              <div className="space-y-1 pt-1">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                  <a href="https://wa.me/224654164401" className="hover:text-white font-mono text-[11px]">
                    +224 654 16 44 01 <span className="text-[#25D366] text-[10px]">(WhatsApp)</span>
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <a href="tel:+224622551152" className="hover:text-white font-mono text-[11px]">
                    +224 622 55 11 52 <span className="text-blue-300 text-[10px]">(Appel Direct)</span>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <Clock className="w-4 h-4 text-[#85C83C] shrink-0 mt-0.5" />
                <div className="space-y-0.5 text-[11px]">
                  <p>Lun - Ven : 08h00 - 20h00</p>
                  <p>Samedi : 08h00 - 22h00</p>
                  <p>Dimanche : 10h00 - 13h00 (Urgences)</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenAppointment}
                className="w-full py-2.5 px-4 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold rounded-xl text-xs shadow-md transition-all cursor-pointer"
              >
                Prendre Rendez-vous
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Cabinet Vétérinaire Privé de Lambandji Kinifi (CVPL). Tous droits réservés.
          </p>
          <p className="flex items-center gap-1.5 text-slate-300">
            <span>Soigner Aujourd'hui pour un Avenir Plus Sain</span>
            <span className="text-[#85C83C]">🐾</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
