import React, { useState, useEffect } from 'react';
import { CVPLLogo } from './CVPLLogo';
import { Phone, Calendar, Menu, X, Clock, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenAppointment: (service?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAppointment }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Notification / Emergency Ribbon */}
      <div className="bg-[#0D223F] text-slate-200 text-xs py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 xl:gap-8 whitespace-nowrap min-w-0">
            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <MapPin className="w-3.5 h-3.5 text-[#85C83C] shrink-0" />
              <span className="truncate">Carrefour ISSEG, Lambandji Ratoma</span>
            </div>
            <div className="hidden xl:flex items-center gap-1.5 whitespace-nowrap">
              <Clock className="w-3.5 h-3.5 text-[#85C83C] shrink-0" />
              <span>Lun - Ven : 08h-20h | Sam : 08h-22h | Dim : 10h-13h</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3 whitespace-nowrap shrink-0">
            <span className="hidden lg:flex items-center gap-1.5 text-emerald-300 font-medium whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
              Appel direct :
            </span>
            <a
              href="tel:+224654164401"
              className="font-mono text-white hover:text-[#85C83C] transition-colors flex items-center gap-1 font-semibold whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#85C83C] shrink-0" />
              +224 654 16 44 01
            </a>
            <span className="hidden lg:inline text-slate-500">|</span>
            <a
              href="tel:+224622551152"
              className="hidden lg:inline font-mono text-white hover:text-[#85C83C] transition-colors font-semibold whitespace-nowrap"
            >
              +224 622 55 11 52
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar (Strict 3-zone contract, Single-line controls) */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100 py-2.5'
            : 'bg-white py-3.5 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Zone 1: Official CVPL Logo Mark */}
          <a href="#" className="flex items-center group shrink-0">
            <CVPLLogo size="md" />
          </a>

          {/* Zone 2: Clean 1-Line Navigation Links */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-7 text-sm font-semibold text-slate-700 whitespace-nowrap shrink-0">
            <a
              href="#services"
              className="hover:text-[#16325B] transition-colors py-1 whitespace-nowrap shrink-0"
            >
              Services
            </a>
            <a
              href="#urgences"
              className="hover:text-rose-700 text-rose-600 transition-colors py-1 font-bold whitespace-nowrap shrink-0"
            >
              Urgences 7j/7
            </a>
            <a
              href="#clinique"
              className="hover:text-[#16325B] transition-colors py-1 whitespace-nowrap shrink-0"
            >
              Le Cabinet
            </a>
            <a
              href="#pharmacie"
              className="hover:text-[#16325B] transition-colors py-1 whitespace-nowrap shrink-0"
            >
              Pharmacie
            </a>
            <a
              href="#tarifs"
              className="hover:text-[#16325B] transition-colors py-1 whitespace-nowrap shrink-0"
            >
              Plan de Soins
            </a>
            <a
              href="#contact"
              className="hover:text-[#16325B] transition-colors py-1 whitespace-nowrap shrink-0"
            >
              Contact & Accès
            </a>
          </nav>

          {/* Zone 3: Primary Actions (Single-line, non-breaking) */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0 whitespace-nowrap">
            <a
              href="tel:+224654164401"
              className="px-3.5 py-2 text-xs font-bold text-[#16325B] bg-[#16325B]/5 hover:bg-[#16325B]/10 rounded-xl transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0"
              title="Appel direct au cabinet"
            >
              <Phone className="w-3.5 h-3.5 text-[#16325B] shrink-0" />
              <span className="font-mono">Appel Direct</span>
            </a>
            <button
              onClick={() => onOpenAppointment()}
              className="px-4.5 py-2.5 text-xs font-bold text-white bg-[#F97316] hover:bg-[#EA580C] rounded-xl shadow-md shadow-orange-500/20 transition-all transform active:scale-95 flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 shrink-0" />
              <span>Prendre Rendez-vous</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden shrink-0">
            <button
              onClick={() => onOpenAppointment()}
              className="px-3 py-1.5 text-xs font-bold text-white bg-[#F97316] rounded-lg whitespace-nowrap"
            >
              RDV
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 animate-fadeIn">
            <nav className="flex flex-col space-y-2.5 text-sm font-semibold text-slate-700">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-slate-50"
              >
                Services Vétérinaires
              </a>
              <a
                href="#urgences"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-slate-50 text-rose-600 font-bold"
              >
                Urgences Vétérinaires 7j/7
              </a>
              <a
                href="#clinique"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-slate-50"
              >
                Le Cabinet & L'Équipe
              </a>
              <a
                href="#pharmacie"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-slate-50"
              >
                Pharmacie & Soins
              </a>
              <a
                href="#tarifs"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-slate-50"
              >
                Plan de Soins Personnalisé
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-slate-50"
              >
                Nous Trouver à Lambandji
              </a>
            </nav>

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAppointment();
                }}
                className="w-full py-3 text-center text-sm font-bold text-white bg-[#F97316] rounded-xl shadow-md cursor-pointer"
              >
                Prendre Rendez-vous en Ligne
              </button>
              
              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href="tel:+224654164401"
                  className="py-2.5 text-center text-xs font-bold text-[#16325B] bg-slate-100 rounded-xl flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#85C83C]" />
                  <span>Appel direct 1</span>
                </a>
                <a
                  href="tel:+224622551152"
                  className="py-2.5 text-center text-xs font-bold text-[#16325B] bg-slate-100 rounded-xl flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#85C83C]" />
                  <span>Appel direct 2</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
