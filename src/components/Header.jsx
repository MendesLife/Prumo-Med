import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X, ArrowUpRight, MessageCircle, ChevronRight } from 'lucide-react';

export default function Header({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Patologias', href: '#especialidades' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Corpo Clínico', href: '#medicos' },
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Convênios', href: '#convenios' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3.5 sm:px-6 pt-3 sm:pt-4 transition-all pointer-events-none">
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between glass-pill-nav rounded-full px-3.5 sm:px-6 py-2 sm:py-2.5 pointer-events-auto">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group shrink-0">
          <img 
            src="/images/logo-prumo-med.webp" 
            alt="Prumo Med" 
            className="h-6 sm:h-7 md:h-8 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[13px] font-normal text-[#5e6c73] hover:text-[#0c1a1d] transition-colors tracking-tight"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Section: WhatsApp + CTA Button + Mobile Menu Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href="https://wa.me/5562982370012?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Prumo%20Med."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 text-xs text-[#5e6c73] hover:text-[#0e5a66] font-medium transition-colors px-2 py-1"
            title="WhatsApp Prumo Med"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#0e5a66]" />
            <span>(62) 98237-0012</span>
          </a>

          {/* CTA Button visible on sm and desktop */}
          <button
            onClick={() => onOpenBooking('Consulta Geral')}
            className="hidden sm:inline-flex items-center justify-center gap-1.5 bg-[#0e5a66] hover:bg-[#083c44] text-white text-xs sm:text-[13px] font-medium px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-sm hover:shadow transition-all duration-200 cursor-pointer shrink-0"
          >
            <span>Agendar Consulta</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </button>

          {/* Mobile Menu Button - Nordic Pill Style */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden inline-flex items-center gap-1.5 bg-[#f3f5f4] hover:bg-[#eaeeed] active:bg-[#e2e7e6] text-[#0c1a1d] text-xs font-medium px-3 py-1.5 rounded-full border border-[#eaeeed] transition-colors cursor-pointer shrink-0"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <span>{mobileMenuOpen ? 'Fechar' : 'Menu'}</span>
            {mobileMenuOpen ? <X className="w-3.5 h-3.5 text-[#0c1a1d]" /> : <Menu className="w-3.5 h-3.5 text-[#0e5a66]" />}
          </button>
        </div>
      </div>

      {/* Mobile Editorial Drawer */}
      {mobileMenuOpen && (
        <div className="w-full max-w-md mx-auto mt-2 bg-white border border-[#eaeeed] rounded-3xl p-5 shadow-2xl pointer-events-auto lg:hidden animate-fadeIn">
          <div className="divide-y divide-[#eaeeed]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 flex items-center justify-between text-sm sm:text-base font-normal text-[#0c1a1d] hover:text-[#0e5a66] transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-[#8899a0]" />
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-[#eaeeed] space-y-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking('Consulta via Menu Mobile');
              }}
              className="w-full py-3.5 bg-[#0e5a66] hover:bg-[#083c44] text-white text-sm font-medium rounded-full text-center shadow-sm flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <Calendar className="w-4 h-4 text-[#9fded8]" />
              <span>Agendar Consulta Agora</span>
              <ArrowUpRight className="w-4 h-4 opacity-80" />
            </button>

            <a
              href="https://wa.me/5562982370012?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Prumo%20Med."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-[#f3f5f4] hover:bg-[#eaeeed] text-[#0c1a1d] text-xs font-medium rounded-full text-center flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#0e5a66]" />
              <span>WhatsApp: +55 (62) 98237-0012</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
