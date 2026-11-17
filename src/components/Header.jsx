import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X, ArrowUpRight } from 'lucide-react';

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
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-3.5 sm:pt-4 transition-all pointer-events-none">
      <div className="max-w-5xl mx-auto flex items-center justify-between glass-pill-nav rounded-full px-4 sm:px-6 py-2.5 sm:py-3 pointer-events-auto">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group shrink-0">
          <img 
            src="/images/logo-prumo-med.webp" 
            alt="Prumo Med" 
            className="h-7 sm:h-8 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
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

        {/* CTA Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center justify-center gap-1.5 bg-[#0e5a66] hover:bg-[#083c44] text-white text-xs sm:text-[13px] font-medium px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
          >
            <span>Agendar Consulta</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-full text-[#44555a] hover:text-[#0c1a1d] hover:bg-slate-100 transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="max-w-md mx-auto mt-2 bg-white/95 backdrop-blur-xl border border-slate-200/80 rounded-3xl p-5 shadow-float space-y-4 pointer-events-auto lg:hidden animate-fadeIn">
          <div className="grid gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl text-sm font-medium text-[#44555a] hover:text-[#0c1a1d] hover:bg-[#f3f5f4] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-[#eaeeed]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 bg-[#0e5a66] hover:bg-[#083c44] text-white text-sm font-medium rounded-full text-center shadow-sm flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Consulta Agora</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
