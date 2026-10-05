import React, { useState } from 'react';
import { Pill, ShoppingBag, ShieldCheck, Sparkles, MessageSquare, Check, Phone } from 'lucide-react';

export const PharmacyPreview: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'parasite' | 'food' | 'hygiene' | 'vitamins'>('all');

  const products = [
    {
      id: 1,
      name: 'Comprimés Anti-Tiques & Puces (Bravecto / NexGard)',
      category: 'parasite',
      tag: 'Best-Seller Climat Chaud',
      desc: 'Protection systémique complète contre les tiques vectrices de babésiose et les puces. Action rapide en moins de 8 heures.',
      availability: 'En stock au cabinet',
    },
    {
      id: 2,
      name: 'Colliers Antiparasitaires Longue Durée (Seresto / Scalibor)',
      category: 'parasite',
      tag: 'Protection 7-8 mois',
      desc: 'Diffusion continue contre les tiques, puces et moustiques. Résistant à l’eau.',
      availability: 'En stock au cabinet',
    },
    {
      id: 3,
      name: 'Vermifuges Polyvalents Vétérinaires (Milbemax / Drontal)',
      category: 'parasite',
      tag: 'Large Spectre',
      desc: 'Élimination des vers ronds (ascaris, ankylostomes) et vers plats (ténias) chez le chiot, chaton et adulte.',
      availability: 'En stock au cabinet',
    },
    {
      id: 4,
      name: 'Croquettes Haut de Gamme & Médicalisées (Royal Canin / Pro Plan)',
      category: 'food',
      tag: 'Nutrition Premium',
      desc: 'Formules spécifiques pour chiots de grande race, chats stérilisés, sensibilités digestives et maintien du pelage.',
      availability: 'Plusieurs formats disponibles',
    },
    {
      id: 5,
      name: 'Shampoing Médical & Antiseptique à la Chlorhexidine',
      category: 'hygiene',
      tag: 'Soins Dermatologiques',
      desc: 'Nettoie en profondeur, soulage les démangeaisons, traite les pyodermites bactériennes et les dermatites à levures.',
      availability: 'En stock au cabinet',
    },
    {
      id: 6,
      name: 'Complément Croissance & Calcium (Pet-Phos / Vital Pet)',
      category: 'vitamins',
      tag: 'Croissance Optimale',
      desc: 'Équilibre phospho-calcique indispensable pour la minéralisation osseuse des chiots et la lactation des femelles.',
      availability: 'En stock au cabinet',
    },
  ];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  const getWhatsAppProductLink = (productName: string) => {
    const text = encodeURIComponent(
      `Bonjour Cabinet Vétérinaire Privé Lambandji (CVPL),\nJe souhaite me renseigner sur la disponibilité et le tarif du produit suivant en pharmacie :\n- ${productName}\n\nMerci !`
    );
    return `https://wa.me/224654164401?text=${text}`;
  };

  return (
    <section id="pharmacie" className="py-20 bg-[#F8FAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 w-full max-w-none lg:max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#85C83C]/15 text-[#589e1b] text-xs font-bold uppercase tracking-wider">
              <span>— Pharmacie & Boutique Vétérinaire Agréée</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-[#16325B] tracking-tight text-balance w-full">
              Médicaments Vétérinaires & Produits de Soin Certifiés
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed max-w-3xl">
              Une pharmacie vétérinaire complète au sein de notre cabinet au Carrefour ISSEG, Lambandji. Tous nos produits sont rigoureusement stockés sous température contrôlée avec garantie d'authenticité.
            </p>
          </div>

          <div className="w-full sm:w-auto shrink-0 pt-2 lg:pt-0">
            <a
              href="https://wa.me/224654164401?text=Bonjour%20CVPL,%20je%20souhaite%20commander%20des%20produits%20en%20pharmacie"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold rounded-xl shadow-md transition-all whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4 shrink-0" />
              <span>Commander sur WhatsApp</span>
              <span className="hidden sm:inline font-mono font-normal text-[11px] opacity-90">(+224 654 16 44 01)</span>
            </a>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { id: 'all', label: 'Tous les Rayons' },
            { id: 'parasite', label: 'Antiparasitaires (Tiques & Vers)' },
            { id: 'food', label: 'Aliments & Nutrition' },
            { id: 'hygiene', label: 'Hygiène & Dermatologie' },
            { id: 'vitamins', label: 'Vitamines & Croissance' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#16325B] text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-2xl border border-slate-200 p-5 flex flex-col justify-between hover:shadow-md hover:border-[#85C83C] transition-all"
            >
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#589e1b] bg-[#EBF8DC] px-2.5 py-1 rounded-md whitespace-nowrap shrink-0">
                    {prod.tag}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-medium whitespace-nowrap shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                    <span>{prod.availability}</span>
                  </div>
                </div>

                <h4 className="text-sm font-display font-bold text-[#16325B] leading-snug">
                  {prod.name}
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  {prod.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">Origine certifiée</span>
                <a
                  href={getWhatsAppProductLink(prod.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 bg-slate-100 hover:bg-[#85C83C] hover:text-white text-[#16325B] text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  Demander le Prix
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
