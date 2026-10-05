import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, Phone, MessageSquare, AlertCircle, Sparkles, ShieldCheck } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  defaultService = '',
}) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [petType, setPetType] = useState('Chien');
  const [petName, setPetName] = useState('');
  const [petAge, setPetAge] = useState('');
  const [service, setService] = useState(defaultService || 'Consultation générale & Bilan');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('09:00 - 11:00');
  const [ownerName, setOwnerName] = useState('');
  const [ownerPhone, setOwnerPhone] = useState('+224 ');
  const [location, setLocation] = useState('Lambanyi');
  const [notes, setNotes] = useState('');
  const [isEmergency, setIsEmergency] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refNumber = `CVPL-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(refNumber);
    setStep('success');
  };

  const getWhatsAppLink = () => {
    const message = encodeURIComponent(
      `Bonjour Cabinet Vétérinaire Privé Lambandji (CVPL),\n\nJe souhaite confirmer un rendez-vous vétérinaire :\n- Réf : ${bookingRef}\n- Propriétaire : ${ownerName}\n- Contact : ${ownerPhone}\n- Quartier : ${location}\n- Animal : ${petName || 'Non spécifié'} (${petType}, ${petAge || 'Âge non précisé'})\n- Service : ${service}\n- Date & Heure : ${date || "Dès que possible"} (${timeSlot})\n- Urgence : ${isEmergency ? 'OUI' : 'Non'}\n- Notes : ${notes || 'Aucune'}\n\nMerci de me confirmer la disponibilité.`
    );
    return `https://wa.me/224654164401?text=${message}`;
  };

  const handleResetAndClose = () => {
    setStep('form');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#16325B] text-white px-6 py-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#85C83C]/20 flex items-center justify-center text-[#85C83C]">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-display font-bold">Prendre Rendez-vous</h3>
              <p className="text-xs text-slate-300">Cabinet Vétérinaire Privé de Lambanyi - Conakry</p>
            </div>
          </div>
          <button
            onClick={handleResetAndClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-1">
          {step === 'form' ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Emergency Banner Toggle */}
              <div
                onClick={() => setIsEmergency(!isEmergency)}
                className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                  isEmergency
                    ? 'bg-rose-50 border-rose-300 text-rose-900'
                    : 'bg-emerald-50/60 border-emerald-200/80 text-emerald-900 hover:border-emerald-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                      isEmergency ? 'bg-rose-500 text-white' : 'bg-[#85C83C] text-white'
                    }`}
                  >
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">
                      {isEmergency ? '🚨 Cas d’urgence vétérinaire prioritaire' : 'Consultation classique ou programmée'}
                    </p>
                    <p className="text-xs opacity-80">
                      {isEmergency
                        ? 'Votre demande sera traitée en priorité par le vétérinaire de garde.'
                        : 'Cochez si votre animal nécessite une intervention immédiate.'}
                    </p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={isEmergency}
                  onChange={(e) => setIsEmergency(e.target.checked)}
                  className="w-5 h-5 text-rose-600 rounded focus:ring-rose-500 accent-rose-600 cursor-pointer"
                />
              </div>

              {/* Animal Information */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700">1. Votre Animal</h4>
                
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-2">Type d’animal</label>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    {['Chien', 'Chat', 'Cheval', 'Élevage / Avicole', 'Autre'].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setPetType(type)}
                        className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                          petType === type
                            ? 'bg-[#16325B] text-white border-[#16325B] shadow-sm'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Nom de l’animal</label>
                    <input
                      type="text"
                      placeholder="Ex: Rex, Luna, Sultan..."
                      value={petName}
                      onChange={(e) => setPetName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#85C83C] focus:ring-2 focus:ring-[#85C83C]/20 outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Âge ou Race</label>
                    <input
                      type="text"
                      placeholder="Ex: 2 ans / Berger Allemand"
                      value={petAge}
                      onChange={(e) => setPetAge(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#85C83C] focus:ring-2 focus:ring-[#85C83C]/20 outline-none text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Service Selection */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700">2. Prestation Souhaitée</h4>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Motif de la visite</label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#85C83C] focus:ring-2 focus:ring-[#85C83C]/20 outline-none text-sm bg-white"
                  >
                    <option value="Consultation générale & Bilan">Consultation générale & Bilan de santé</option>
                    <option value="Vaccination (Rage, Parvovirose, CHPPiL)">Vaccination (Rage, Parvovirose, CHPPiL...)</option>
                    <option value="Chirurgie & Stérilisation">Chirurgie vétérinaire & Stérilisation</option>
                    <option value="Laboratoire & Analyses sanguines">Analyses de laboratoire & Dépistage</option>
                    <option value="Dentisterie & Détartrage">Soins dentaires & Détartrage</option>
                    <option value="Traitement Antiparasitaire (Tiques/Puces)">Traitement antiparasitaire (Tiques, puces, vers)</option>
                    <option value="Toilettage médical & Soins d’hygiène">Toilettage médical & Soins d'hygiène</option>
                    <option value="Soins d'urgence">Soins d'urgence & Traumatologie</option>
                    <option value="Visite à domicile / Élevage">Visite à domicile / Suivi d'élevage en Guinée</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Date souhaitée</label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#85C83C] focus:ring-2 focus:ring-[#85C83C]/20 outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Créneau horaire</label>
                    <select
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#85C83C] focus:ring-2 focus:ring-[#85C83C]/20 outline-none text-sm bg-white"
                    >
                      <option value="08:30 - 10:30 (Matinée)">08h30 - 10h30 (Matinée)</option>
                      <option value="10:30 - 12:30 (Midi)">10h30 - 12h30 (Midi)</option>
                      <option value="14:00 - 16:30 (Après-midi)">14h00 - 16h30 (Après-midi)</option>
                      <option value="16:30 - 18:30 (Fin de journée)">16h30 - 18h30 (Fin de journée)</option>
                      <option value="Urgence immédiate">Urgence immédiate (Sans délai)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Owner Information */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700">3. Vos Coordonnées</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Nom complet *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Amadou Diallo"
                      value={ownerName}
                      onChange={(e) => setOwnerName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#85C83C] focus:ring-2 focus:ring-[#85C83C]/20 outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Téléphone / WhatsApp en Guinée *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+224 622 00 00 00"
                      value={ownerPhone}
                      onChange={(e) => setOwnerPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#85C83C] focus:ring-2 focus:ring-[#85C83C]/20 outline-none text-sm font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Votre Quartier à Conakry</label>
                  <input
                    type="text"
                    placeholder="Ex: Lambanyi, Kinifi, Kobaya, Kipé, Nongo, Taouyah..."
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#85C83C] focus:ring-2 focus:ring-[#85C83C]/20 outline-none text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Symptômes ou précisions (Facultatif)</label>
                  <textarea
                    rows={2}
                    placeholder="Décrivez brièvement les symptômes ou vos questions particulières..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-[#85C83C] focus:ring-2 focus:ring-[#85C83C]/20 outline-none text-sm resize-none"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
                <p className="text-xs text-slate-500 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#85C83C]" />
                  Confirmation immédiate par SMS ou WhatsApp
                </p>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold rounded-xl shadow-lg shadow-orange-500/20 transition-all transform active:scale-98 cursor-pointer text-sm"
                >
                  Confirmer le Rendez-vous →
                </button>
              </div>
            </form>
          ) : (
            <div className="py-6 text-center space-y-6">
              <div className="w-16 h-16 bg-[#85C83C]/20 text-[#6CA52E] rounded-full flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h4 className="text-2xl font-display font-bold text-[#16325B]">
                  Demande de Rendez-vous Enregistrée !
                </h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Merci <strong>{ownerName}</strong>. Notre équipe au Cabinet Vétérinaire Privé de Lambanyi a bien reçu votre demande pour <strong>{petName || petType}</strong>.
                </p>
              </div>

              {/* Booking Summary Card */}
              <div className="bg-[#F8FAF9] p-5 rounded-2xl border border-slate-200 text-left max-w-md mx-auto space-y-2 text-xs">
                <div className="flex justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500">Numéro de Référence :</span>
                  <span className="font-bold text-[#16325B] font-mono">{bookingRef}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Service :</span>
                  <span className="font-semibold text-slate-800">{service}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Date & Créneau :</span>
                  <span className="font-semibold text-slate-800">{date || 'Au plus tôt'} · {timeSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Lieu :</span>
                  <span className="font-semibold text-slate-800">Cabinet Lambanyi - Kinifi</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-slate-500">Contact :</span>
                  <span className="font-mono text-slate-800">{ownerPhone}</span>
                </div>
              </div>

              {/* WhatsApp & Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl shadow-md transition-all text-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  Transmettre sur WhatsApp (+224)
                </a>
                <button
                  onClick={handleResetAndClose}
                  className="w-full sm:w-auto px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl transition-all text-sm cursor-pointer"
                >
                  Terminer
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
