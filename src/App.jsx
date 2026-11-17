import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Specialties from './components/Specialties';
import ClinicalStandard from './components/ClinicalStandard';
import Team from './components/Team';
import InsurancePlans from './components/InsurancePlans';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import PreFooterCTA from './components/PreFooterCTA';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedReason, setSelectedReason] = useState('');

  const handleOpenBooking = (reason = '') => {
    setSelectedReason(typeof reason === 'string' ? reason : '');
    setModalOpen(true);
  };

  const handleCloseBooking = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f9f8] text-[#44555a] font-sans antialiased selection:bg-[#0e5a66] selection:text-white">
      {/* Floating Pill Header */}
      <Header onOpenBooking={() => handleOpenBooking('Consulta Geral')} />

      {/* Main Flow */}
      <main className="flex-grow">
        {/* Inset Canvas Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking('Avaliação Inicial')} />

        {/* 4-Step Hairline Progress Bar */}
        <HowItWorks onOpenBooking={() => handleOpenBooking('Primeiro Passo da Consulta')} />

        {/* About the Studio / Sobre Nós & Stats */}
        <About onOpenBooking={() => handleOpenBooking('Consulta Prumo Med')} />

        {/* Patologias & Tratamentos Grid */}
        <Specialties onOpenBooking={handleOpenBooking} />

        {/* Dark Teal Intermezzo: Padrão Cirúrgico de Excelência */}
        <ClinicalStandard onOpenBooking={() => handleOpenBooking('Avaliação Cirúrgica')} />

        {/* Specialists / Corpo Clínico: 2-Column Split Showcase */}
        <Team onOpenBooking={handleOpenBooking} />

        {/* Convênios & Planos de Saúde */}
        <InsurancePlans onOpenBooking={handleOpenBooking} />

        {/* Testimonials: Editorial Quote Carousel */}
        <Testimonials onOpenBooking={() => handleOpenBooking('Avaliação para Tratamento')} />

        {/* FAQ: Two-Column Sticky Accordion */}
        <FAQ onOpenBooking={handleOpenBooking} />

        {/* Pre-Footer Soft Ice-Mint Banner */}
        <PreFooterCTA onOpenBooking={() => handleOpenBooking('Agendamento Pré-Footer')} />
      </main>

      {/* Footer with Watermark */}
      <Footer onOpenBooking={() => handleOpenBooking('Agendamento')} />

      {/* Interactive Modal */}
      <AppointmentModal 
        isOpen={modalOpen} 
        onClose={handleCloseBooking} 
        initialReason={selectedReason} 
      />

      {/* Floating WhatsApp Pill Button */}
      <FloatingWhatsApp onOpenBooking={() => handleOpenBooking('WhatsApp Rápido')} />
    </div>
  );
}
