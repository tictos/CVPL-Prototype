import React, { useState } from 'react';
import { Phone, MessageSquare, AlertCircle, X, ShieldAlert } from 'lucide-react';

interface EmergencyBannerProps {
  onOpenAppointment: (service?: string) => void;
}

export const EmergencyBanner: React.FC<EmergencyBannerProps> = ({ onOpenAppointment }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* Floating Action Buttons bottom right */}
      <div className="fixed bottom-5 right-5 z-30 flex flex-col items-end gap-3 pointer-events-auto">
        {/* WhatsApp Fast Trigger */}
        <a
          href="https://wa.me/224654164401?text=Bonjour%20Cabinet%20Vétérinaire%20Lambandji%20(CVPL),%20j'ai%20besoin%20d'une%20assistance%20vétérinaire"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-2xl shadow-xl shadow-emerald-600/30 transition-all transform hover:scale-105 active:scale-95 text-xs"
          title="Contacter sur WhatsApp (+224 654 16 44 01)"
        >
          <MessageSquare className="w-5 h-5 fill-white text-[#25D366]" />
          <span className="hidden sm:inline font-semibold">WhatsApp (+224 654 16 44 01)</span>
        </a>

        {/* Emergency Call Floating Badge (Direct Call) */}
        <a
          href="tel:+224622551152"
          className="flex items-center gap-2 px-4 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-2xl shadow-xl shadow-rose-600/30 transition-all transform hover:scale-105 text-xs"
          title="Appel direct d'urgence 7j/7 (+224 622 55 11 52)"
        >
          <Phone className="w-4 h-4 animate-bounce" />
          <span className="font-mono font-bold">Appel Direct 7j/7</span>
        </a>
      </div>
    </>
  );
};
