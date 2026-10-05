import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HighlightCards } from './components/HighlightCards';
import { ServicesSection } from './components/ServicesSection';
import { EmergencySection } from './components/EmergencySection';
import { ClinicStory } from './components/ClinicStory';
import { CostCalculator } from './components/CostCalculator';
import { PharmacyPreview } from './components/PharmacyPreview';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AppointmentCtaBanner } from './components/AppointmentCtaBanner';
import { LocationAndContact } from './components/LocationAndContact';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { EmergencyBanner } from './components/EmergencyBanner';

export default function App() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [selectedServiceForAppointment, setSelectedServiceForAppointment] = useState<string>('');

  const handleOpenAppointment = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForAppointment(serviceName);
    } else {
      setSelectedServiceForAppointment('Consultation générale & Bilan');
    }
    setIsAppointmentOpen(true);
  };

  const handleCloseAppointment = () => {
    setIsAppointmentOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F8FAF9] text-[#1E293B] flex flex-col selection:bg-[#85C83C]/30 selection:text-[#16325B]">
      {/* 3-Zone Top Navbar */}
      <Navbar onOpenAppointment={handleOpenAppointment} />

      {/* Main Showcase Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenAppointment={() => handleOpenAppointment()} />

        {/* 4 Overlapping Highlight Feature Cards */}
        <HighlightCards onOpenAppointment={handleOpenAppointment} />

        {/* Complete Veterinary Services Grid with Category Tabs */}
        <ServicesSection onOpenAppointment={handleOpenAppointment} />

        {/* Dedicated 24/7 Emergency & Guidance Section */}
        <EmergencySection onOpenAppointment={handleOpenAppointment} />

        {/* Clinic Story, Medical Equipment & Team Values */}
        <ClinicStory />

        {/* Interactive Pricing Estimator & Health Packages */}
        <CostCalculator onOpenAppointment={handleOpenAppointment} />

        {/* Certified Veterinary Pharmacy & Care Store */}
        <PharmacyPreview />

        {/* Real Customer Feedback & Attributable Reviews */}
        <TestimonialsSection />

        {/* Mid-Page Quick Appointment Booking Banner */}
        <AppointmentCtaBanner onOpenAppointment={() => handleOpenAppointment()} />

        {/* Interactive Location, Opening Hours & Direct Contact Form */}
        <LocationAndContact />
      </main>

      {/* Clean Brand Footer */}
      <Footer onOpenAppointment={() => handleOpenAppointment()} />

      {/* Interactive Appointment Modal */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={handleCloseAppointment}
        defaultService={selectedServiceForAppointment}
      />

      {/* Floating WhatsApp & Emergency Quick Call Badge */}
      <EmergencyBanner onOpenAppointment={handleOpenAppointment} />
    </div>
  );
}
