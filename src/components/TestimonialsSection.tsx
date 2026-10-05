import React, { useState } from 'react';
import { Star, MessageSquarePlus, CheckCircle2, User, X } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  location: string;
  pet: string;
  rating: number;
  text: string;
  date: string;
}

export const TestimonialsSection: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: '1',
      name: 'Mohamed Camara',
      location: 'Lambanyi, Conakry',
      pet: 'Berger Allemand (Rocky, 3 ans)',
      rating: 5,
      text: 'Le docteur a sauvé mon berger allemand suite à une crise de babésiose aiguë causée par des tiques. Diagnostic posé immédiatement et traitement efficace. Une équipe d’un grand professionnalisme !',
      date: 'Il y a 2 semaines',
    },
    {
      id: '2',
      name: 'Aïssatou Bah',
      location: 'Kipé - Centre Émetteur',
      pet: 'Chatte Européenne (Minette, 1 an)',
      rating: 5,
      text: 'Stérilisation de ma chatte réalisée sans aucune complication. Les locaux sont très propres, et le suivi post-opératoire par WhatsApp m’a beaucoup rassurée. Je recommande vivement le CVPL.',
      date: 'Le mois dernier',
    },
    {
      id: '3',
      name: 'Dr. Ousmane Soumah',
      location: 'Kobaya, Ratoma',
      pet: 'Rottweiler & Ferme Avicole',
      rating: 5,
      text: 'Je fais suivre mes chiens de garde ainsi que le programme vaccinal de mon poulailler par le Cabinet Vétérinaire Privé de Lambanyi. Produits originaux et conseils toujours avisés.',
      date: 'Il y a 3 semaines',
    },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [newName, setNewName] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newPet, setNewPet] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newText, setNewText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newText) return;

    const newRev: Review = {
      id: Date.now().toString(),
      name: newName,
      location: newLocation || 'Conakry, Guinée',
      pet: newPet || 'Animal de compagnie',
      rating: newRating,
      text: newText,
      date: "À l'instant",
    };

    setReviews([newRev, ...reviews]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setModalOpen(false);
      setNewName('');
      setNewLocation('');
      setNewPet('');
      setNewText('');
    }, 1500);
  };

  return (
    <section className="py-20 bg-[#F8FAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16325B]/10 text-[#16325B] text-xs font-bold uppercase tracking-wider">
              <span>— Témoignages & Avis Clients</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-[#16325B] tracking-tight text-balance">
              La Confiance de Milliers de Propriétaires à Conakry
            </h2>
            <p className="text-sm text-slate-600 font-light leading-relaxed">
              Découvrez les retours d'expérience authentiques des familles et éleveurs qui nous confient la santé de leurs compagnons à Lambanyi.
            </p>
          </div>

          <div className="w-full sm:w-auto shrink-0">
            <button
              onClick={() => setModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#16325B] hover:bg-[#0D223F] text-white text-xs sm:text-sm font-bold rounded-xl shadow transition-all whitespace-nowrap cursor-pointer"
            >
              <MessageSquarePlus className="w-4 h-4 text-[#85C83C] shrink-0" />
              <span className="whitespace-nowrap">Partager Votre Avis</span>
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#85C83C] transition-colors"
            >
              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < rev.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'
                      }`}
                    />
                  ))}
                  <span className="text-xs text-slate-400 font-mono ml-1">{rev.date}</span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                  "{rev.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-9 h-9 min-w-[2.25rem] min-h-[2.25rem] aspect-square rounded-full bg-[#16325B] text-[#85C83C] flex items-center justify-center font-bold text-xs shrink-0 select-none shadow-xs">
                  {rev.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-[#16325B] truncate">{rev.name}</h4>
                  <p className="text-[10px] text-slate-500 truncate">
                    {rev.pet} · <span className="text-[#85C83C] font-medium">{rev.location}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Write Review Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-slate-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-display font-bold text-[#16325B]">Partager Votre Expérience</h3>
              <button
                onClick={() => setModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <p className="font-bold text-[#16325B] text-sm">Merci pour votre témoignage !</p>
                <p className="text-xs text-slate-500">Votre avis aide d'autres propriétaires à Conakry.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Votre Nom *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Fatoumata Camara"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#85C83C]/20 outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Quartier (Conakry)</label>
                    <input
                      type="text"
                      placeholder="Ex: Lambanyi, Kipé..."
                      value={newLocation}
                      onChange={(e) => setNewLocation(e.target.value)}
                      className="w-full px-4 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#85C83C]/20 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Animal</label>
                    <input
                      type="text"
                      placeholder="Ex: Chiot Labrador"
                      value={newPet}
                      onChange={(e) => setNewPet(e.target.value)}
                      className="w-full px-4 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#85C83C]/20 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Note globale</label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <button
                        type="button"
                        key={s}
                        onClick={() => setNewRating(s)}
                        className="cursor-pointer p-1"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            s <= newRating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Votre Commentaire *</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Partagez votre avis sur les soins reçus au Cabinet Vétérinaire Privé de Lambanyi..."
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#85C83C]/20 outline-none resize-none"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="px-4 py-2 bg-slate-100 text-slate-600 rounded-xl text-xs font-semibold cursor-pointer"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-[#F97316] text-white rounded-xl text-xs font-bold hover:bg-[#EA580C] transition-colors cursor-pointer"
                  >
                    Publier l'Avis
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
