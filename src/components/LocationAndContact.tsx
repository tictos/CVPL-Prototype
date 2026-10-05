import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle2, Navigation, ExternalLink, PhoneCall } from 'lucide-react';

export const LocationAndContact: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+224 ');
  const [subject, setSubject] = useState('Renseignement général');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setName('');
      setMessage('');
    }, 4000);
  };

  const getDirectWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Bonjour Cabinet Vétérinaire Privé Lambanyi (CVPL),\nJe m'appelle ${name || 'un client'}. ${message || 'Je souhaiterais obtenir des informations.'}`
    );
    return `https://wa.me/224654164401?text=${text}`;
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#85C83C]/15 text-[#589e1b] text-xs font-bold uppercase tracking-wider">
            <span>— Localisation & Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-[#16325B] tracking-tight text-balance">
            Nous Trouver à Lambandji - Kinifi
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
            Situé au <strong>Carrefour ISSEG</strong> à Lambandji (Commune de Ratoma, Conakry). Contactez-nous facilement par WhatsApp ou par appel direct.
          </p>
        </div>

        {/* 2-Column Layout: Contact Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Practical Details & Interactive Map Card (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Address */}
              <div className="bg-[#F8FAF9] p-5 rounded-2xl border border-slate-200 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#16325B] text-[#85C83C] flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Adresse</h4>
                <p className="text-sm font-bold text-[#16325B]">
                  Carrefour ISSEG
                </p>
                <p className="text-xs text-slate-600 font-light">
                  Lambandji Kinifi, Commune de Ratoma, Conakry - Guinée
                </p>
              </div>

              {/* Phone Lines with Direct Call vs WhatsApp Clarification */}
              <div className="bg-[#F8FAF9] p-5 rounded-2xl border border-slate-200 space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#85C83C] text-white flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Téléphones & Canaux</h4>
                
                {/* Number 1: WhatsApp + Appel */}
                <div className="border-b border-slate-200 pb-2">
                  <div className="flex items-center justify-between">
                    <a href="tel:+224654164401" className="text-xs font-bold text-[#16325B] font-mono hover:text-[#85C83C]">
                      +224 654 16 44 01
                    </a>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded">
                      WhatsApp & Appel
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500">Ligne principale & Messagerie</p>
                </div>

                {/* Number 2: Appel Direct & Urgences */}
                <div className="pt-0.5">
                  <div className="flex items-center justify-between">
                    <a href="tel:+224622551152" className="text-xs font-bold text-[#16325B] font-mono hover:text-rose-600">
                      +224 622 55 11 52
                    </a>
                    <span className="text-[10px] bg-blue-100 text-blue-800 font-bold px-1.5 py-0.5 rounded">
                      Appel Direct
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500">Ligne directe & Urgences</p>
                </div>
              </div>

              {/* Exact Hours from Go Africa Online */}
              <div className="bg-[#F8FAF9] p-5 rounded-2xl border border-slate-200 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#16325B] text-white flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Horaires d'Ouverture</h4>
                <div className="text-xs text-slate-700 space-y-0.5 font-light">
                  <p><strong>Lun - Ven :</strong> 08h00 - 20h00</p>
                  <p><strong>Samedi :</strong> 08h00 - 22h00</p>
                  <p><strong>Dimanche :</strong> 10h00 - 13h00</p>
                  <p className="text-[#589e1b] font-semibold text-[11px] pt-1">Permanence urgence assurée</p>
                </div>
              </div>

              {/* Landmarks */}
              <div className="bg-[#F8FAF9] p-5 rounded-2xl border border-slate-200 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#0D5C75] text-white flex items-center justify-center">
                  <Navigation className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Repères d'Accès</h4>
                <p className="text-xs text-slate-600 font-light">
                  Repère Carrefour ISSEG, axe Lambandji. Stationnement sécurisé directement devant le cabinet.
                </p>
              </div>
            </div>

            {/* Visual Conakry Interactive Map Container */}
            <div className="bg-[#16325B] text-white p-6 rounded-3xl relative overflow-hidden shadow-lg border border-slate-100">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#85C83C]/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative z-10 space-y-3">
                <div className="flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#85C83C] whitespace-nowrap shrink-0">
                    Plan de Situation · Ratoma
                  </span>
                  <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded-full text-slate-200 whitespace-nowrap shrink-0">
                    Conakry, Guinée
                  </span>
                </div>

                <h4 className="text-lg font-display font-bold">
                  Cabinet Vétérinaire Privé Lambandji Kinifi (CVPL)
                </h4>

                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Carrefour ISSEG, Lambandji Ratoma. Accès fluide pour les consultations et urgences.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-2.5">
                  <a
                    href="https://wa.me/224654164401"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#25D366] text-white text-xs font-bold rounded-xl hover:bg-[#20bd5a] transition-colors flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    WhatsApp (+224 654 16 44 01)
                  </a>
                  <a
                    href="tel:+224622551152"
                    className="px-4 py-2 bg-white text-[#16325B] text-xs font-bold rounded-xl hover:bg-slate-100 transition-colors flex items-center gap-1.5"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-blue-600" />
                    Appel Direct (+224 622 55 11 52)
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Message Form (6 cols) */}
          <div className="lg:col-span-6 bg-[#F8FAF9] rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl font-display font-bold text-[#16325B] mb-2">
              Envoyez-nous un Message Direct
            </h3>
            <p className="text-xs text-slate-600 mb-6 font-light">
              Une question sur un traitement, un vaccin ou la pharmacie ? Notre équipe vétérinaire vous répond rapidement.
            </p>

            {isSent ? (
              <div className="py-12 text-center space-y-3 bg-white rounded-2xl border border-emerald-200 p-6">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-base font-bold text-[#16325B]">Message Envoyé avec Succès !</h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Merci {name}. Notre équipe du Cabinet Vétérinaire de Lambandji vous recontactera très prochainement.
                </p>
                <div className="pt-2">
                  <a
                    href={getDirectWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2 bg-[#25D366] text-white text-xs font-bold rounded-xl shadow-xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    Discuter aussi sur WhatsApp
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Votre Nom & Prénom *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Ibrahim Diallo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs focus:ring-2 focus:ring-[#85C83C]/20 focus:border-[#85C83C] outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Numéro de Téléphone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+224 654 16 44 01"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs focus:ring-2 focus:ring-[#85C83C]/20 focus:border-[#85C83C] outline-none font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Objet de la Demande</label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs focus:ring-2 focus:ring-[#85C83C]/20 focus:border-[#85C83C] outline-none"
                    >
                      <option value="Renseignement général">Renseignement général</option>
                      <option value="Disponibilité médicament pharmacie">Disponibilité médicament pharmacie</option>
                      <option value="Suivi post-opératoire">Suivi post-opératoire</option>
                      <option value="Devis chirurgie ou soins">Demande de conseils / Soins</option>
                      <option value="Conseils élevage & équidés">Conseils élevage & équidés</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Votre Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Écrivez votre message ici..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs focus:ring-2 focus:ring-[#85C83C]/20 focus:border-[#85C83C] outline-none resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <a
                    href={getDirectWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#25D366] font-bold hover:underline flex items-center gap-1"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    Envoyer directement sur WhatsApp (+224 654 16 44 01)
                  </a>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3 bg-[#16325B] hover:bg-[#0D223F] text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5 text-[#85C83C]" />
                    Envoyer le Message
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
