import React, { useState } from 'react';
import petCareImg from '../assets/images/veterinary_dog_cat_care_1791217162878.jpg';
import { 
  Stethoscope, 
  FlaskConical, 
  Scissors, 
  Sparkles, 
  ShieldAlert, 
  Bug, 
  Activity, 
  Layers,
  ArrowRight,
  CheckCircle2,
  Calendar
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenAppointment: (serviceName?: string) => void;
}

interface ServiceItem {
  id: string;
  category: 'all' | 'pet' | 'surgery' | 'lab' | 'farm';
  icon: React.ReactNode;
  title: string;
  shortDesc: string;
  longDesc: string;
  serviceBadge: string;
  keyPoints: string[];
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenAppointment }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'pet' | 'surgery' | 'lab' | 'farm'>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const servicesList: ServiceItem[] = [
    {
      id: 'checkups',
      category: 'pet',
      icon: <Stethoscope className="w-6 h-6 text-[#16325B]" />,
      title: 'Consultations Générales & Vaccins',
      shortDesc: 'Examens de santé complets, vaccins (Rage, Parvovirose, CHPPiL) et suivi pédiatrique.',
      longDesc: 'Chaque consultation commence par une anamnèse détaillée et un examen clinique minutieux : auscultation cardio-pulmonaire, palpation abdominale, examen buccal, contrôle des oreilles et du pelage. Nous établissons un protocole vaccinal conforme aux normes internationales et au contexte épidémiologique de la Guinée.',
      serviceBadge: 'Examen & Carnet Officiel',
      keyPoints: [
        'Bilan de santé systématique complet',
        'Vaccination contre la Rage et maladies canines/félines',
        'Délivrance de carnet de santé officiel et certificat de vaccination',
        'Conseils personnalisés de croissance et de comportement'
      ]
    },
    {
      id: 'diagnostics',
      category: 'lab',
      icon: <FlaskConical className="w-6 h-6 text-[#16325B]" />,
      title: 'Laboratoire & Diagnostics',
      shortDesc: 'Analyses sanguines, microscopie, coprologie et tests sérologiques rapides.',
      longDesc: 'Notre plateau technique permet d’obtenir des résultats fiables en quelques minutes pour orienter le traitement sans attendre : recherche d’hémoparasites (Babésiose / Ehrlichiose), tests rapides Parvovirose / FIV-FeLV, examens dermatologiques par raclage et cytologie.',
      serviceBadge: 'Résultats Rapides sur Place',
      keyPoints: [
        'Dépistage des parasites sanguins (tiques et moustiques)',
        'Analyses d’urine et coproscopie parasitaire',
        'Tests sérologiques viraux instantanés',
        'Cytologie cutanée et examen des otites'
      ]
    },
    {
      id: 'surgery',
      category: 'surgery',
      icon: <Scissors className="w-6 h-6 text-[#16325B]" />,
      title: 'Chirurgie Vétérinaire',
      shortDesc: 'Stérilisation, césariennes, chirurgie des tissus mous et traumatologie.',
      longDesc: 'Notre bloc opératoire à Lambanyi répond aux standards stricts d’asepsie avec matériel chirurgical stérilisé à l’autoclave et protocole anesthésique sécurisé. Nous assurons les chirurgies de convenance (ovariectomie, castration) ainsi que les chirurgies thérapeutiques d’urgence.',
      serviceBadge: 'Bloc Stérile & Anesthésie Sécurisée',
      keyPoints: [
        'Castration et ovariectomie chez le chien et le chat',
        'Césariennes d’urgence et dystocies',
        'Chirurgie des plaies, abcès et tumeurs cutanées',
        'Suivi post-opératoire rigoureux et gestion de la douleur'
      ]
    },
    {
      id: 'nutrition',
      category: 'pet',
      icon: <Sparkles className="w-6 h-6 text-[#16325B]" />,
      title: 'Alimentation & Nutrition Médicalisée',
      shortDesc: 'Régimes adaptés aux chiots, chiennes gestantes, séniors et pathologies.',
      longDesc: 'Une alimentation de qualité est la première médecine pour votre animal. Nous sélectionnons des gammes d’aliments vétérinaires certifiés et formulons des rations équilibrées pour éviter les carences calciques fréquentes et les troubles digestifs.',
      serviceBadge: 'Plans Diététiques Personnalisés',
      keyPoints: [
        'Plans nutritionnels pour chiots de grande race',
        'Croquettes hypoallergéniques et gastro-intestinales',
        'Compléments en calcium, acides gras oméga-3 et vitamines',
        'Conseils de transition alimentaire et rationnement'
      ]
    },
    {
      id: 'dental',
      category: 'pet',
      icon: <Activity className="w-6 h-6 text-[#16325B]" />,
      title: 'Soins Bucco-Dentaires',
      shortDesc: 'Détartrage ultrasonique, polissage, extractions et hygiène des gencives.',
      longDesc: 'Le tartre accumulé est responsable de gingivites douloureuses, de mauvaise haleine et peut disséminer des bactéries vers le cœur ou les reins. Nous réalisons des soins dentaires complets sous anesthésie légère pour assainir la bouche de votre animal.',
      serviceBadge: 'Détartrage Piézo-électrique',
      keyPoints: [
        'Détartrage piézo-électrique et polissage des dents',
        'Traitement des gingivites et stomatites',
        'Extraction des dents mobiles ou fracturées',
        'Prescription de gels antiseptiques et conseils d’entretien'
      ]
    },
    {
      id: 'parasite',
      category: 'pet',
      icon: <Bug className="w-6 h-6 text-[#16325B]" />,
      title: 'Lutte Tiques, Puces & Parasites',
      shortDesc: 'Protection antiparasitaire renforcée contre les vecteurs de maladies à Conakry.',
      longDesc: 'Le climat chaud et humide de Conakry favorise la prolifération des tiques et des puces, vecteurs de maladies graves comme la babésiose. Nous vous guidons vers les molécules les plus efficaces (comprimés longue durée, pipettes, colliers certifiés).',
      serviceBadge: 'Protection Efficace & Certifiée',
      keyPoints: [
        'Protocoles antiparasitaires externes (comprimés à effet rémanent)',
        'Vermifugation stratégique contre les vers ronds et plats',
        'Traitement environnemental et désinfection des chenils',
        'Protection contre les gales auriculaires et corporelles'
      ]
    },
    {
      id: 'hospitalization',
      category: 'surgery',
      icon: <ShieldAlert className="w-6 h-6 text-[#16325B]" />,
      title: 'Hospitalisation & Urgences Médicales',
      shortDesc: 'Prise en charge intensive avec perfusion continue et surveillance vétérinaire.',
      longDesc: 'Pour les animaux souffrant de gastro-entérite sévère, de parvovirose, d’intoxication ou en convalescence post-opératoire, notre espace d’hospitalisation garantit un suivi continu, une fluidothérapie intraveineuse et une administration des traitements à intervalles réguliers.',
      serviceBadge: 'Surveillance Médicale Continue',
      keyPoints: [
        'Boxes individuels propres, calmes et climatisés',
        'Fluidothérapie continue et contrôle des électrolytes',
        'Surveillance des constantes vitales (température, hydratation)',
        'Nouvelles quotidiennes transmises au propriétaire par WhatsApp'
      ]
    },
    {
      id: 'farm',
      category: 'farm',
      icon: <Layers className="w-6 h-6 text-[#16325B]" />,
      title: 'Santé Équine & Élevages Avicoles',
      shortDesc: 'Suivi sanitaire de cheptels, fermes avicoles et soins aux chevaux en Guinée.',
      longDesc: 'Notre équipe intervient également auprès des éleveurs et centres équestres pour le suivi sanitaire régulier, les plans de vaccination avicole contre Newcastle et Gumboro, les bilans parasitaires de troupeaux et les soins aux équidés.',
      serviceBadge: 'Intervention sur Site & Conseils',
      keyPoints: [
        'Visites et audits sanitaires de fermes avicoles',
        'Soins aux chevaux (dentisterie équine, boiteries, vermifuges)',
        'Assistance sanitaire aux élevages porcins et bovins',
        'Fourniture de vaccins et compléments vétérinaires en gros'
      ]
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? servicesList 
    : servicesList.filter(s => s.category === activeCategory || (activeCategory === 'pet' && (s.category === 'pet' || s.category === 'surgery')));

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#85C83C]/15 text-[#589e1b] text-xs font-bold uppercase tracking-wider">
            <span>— Nos Services Vétérinaires</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-[#16325B] tracking-tight text-balance">
            Une Prise en Charge Complète Sous <span className="text-[#85C83C]">un Même Toit</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
            De la consultation préventive de routine aux interventions chirurgicales et diagnostics avancés, nous offrons une expertise globale pour la santé de vos animaux à Conakry.
          </p>

          {/* Interactive Filter Control Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              { id: 'all', label: 'Tous les Services' },
              { id: 'pet', label: 'Chiens & Chats' },
              { id: 'surgery', label: 'Chirurgie & Urgences' },
              { id: 'lab', label: 'Laboratoire & Diagnostics' },
              { id: 'farm', label: 'Élevage & Équins' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-[#16325B] text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Grid: Left Feature Spotlight + Right Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Visual Column */}
          <div className="lg:col-span-4 bg-gradient-to-br from-[#EBF8DC] via-[#F4FAF0] to-[#E2F3D0] p-6 sm:p-8 rounded-3xl border border-[#85C83C]/30 relative overflow-hidden flex flex-col justify-between shadow-sm">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#85C83C]/20 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 space-y-3 mb-6">
              <div className="inline-block bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#16325B]">
                💚 Bien-être Animal
              </div>
              <h3 className="text-2xl font-display font-black text-[#16325B] leading-snug">
                Des Animaux Sains,<br />Des Familles Heureuses.
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Notre engagement au quotidien : écouter, soigner avec douceur et accompagner chaque propriétaire avec pédagogie et bienveillance.
              </p>
            </div>

            {/* Showcase Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-white mb-6">
              <img
                src={petCareImg}
                alt="Chien et chat en bonne santé au cabinet vétérinaire de Lambandji"
                className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#16325B]">
                <CheckCircle2 className="w-4 h-4 text-[#85C83C]" />
                <span>Matériel stérile et locaux désinfectés</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#16325B]">
                <CheckCircle2 className="w-4 h-4 text-[#85C83C]" />
                <span>Traitements adaptés au climat guinéen</span>
              </div>

              <button
                onClick={() => onOpenAppointment()}
                className="w-full mt-2 py-3 px-4 bg-[#16325B] hover:bg-[#0D223F] text-white text-xs font-bold rounded-xl shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#85C83C]" />
                Planifier une Consultation
              </button>
            </div>
          </div>

          {/* Right Services Grid (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="group p-5 bg-[#F8FAF9] hover:bg-white rounded-2xl border border-slate-200/80 hover:border-[#85C83C] hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-slate-100 flex items-center justify-center group-hover:bg-[#85C83C]/20 transition-colors">
                      {service.icon}
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 bg-white px-2.5 py-1 rounded-md border border-slate-100">
                      {service.serviceBadge}
                    </span>
                  </div>

                  <h4 className="text-base font-display font-bold text-[#16325B] group-hover:text-[#0F4C5C] transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-[#16325B] group-hover:text-[#589e1b]">
                  <span>Détails & Prise de RDV</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-[#16325B] text-white p-6 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center text-[#16325B]">
                  {selectedService.icon}
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold">{selectedService.title}</h3>
                  <span className="text-xs text-[#85C83C] font-semibold">Cabinet Vétérinaire Privé de Lambanyi</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-1">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Description du Service</h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {selectedService.longDesc}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#16325B] mb-3">Points Clés & Protocoles</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.keyPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-[#85C83C] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#F4FAF0] p-4 rounded-2xl border border-[#85C83C]/30 flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-[#16325B]">Accompagnement & Prise en Charge</p>
                  <p className="text-slate-600">{selectedService.serviceBadge} · Suivi vétérinaire attentif et conseils personnalisés</p>
                </div>
                <span className="px-3 py-1 bg-white text-emerald-800 font-bold rounded-lg border border-emerald-200">
                  Sur RDV ou Urgence
                </span>
              </div>

              {/* CTAs */}
              <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl cursor-pointer"
                >
                  Fermer
                </button>
                <button
                  onClick={() => {
                    const title = selectedService.title;
                    setSelectedService(null);
                    onOpenAppointment(title);
                  }}
                  className="w-full sm:w-auto px-7 py-3 bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-bold rounded-xl shadow-lg shadow-orange-500/20 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Prendre RDV pour ce service
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
