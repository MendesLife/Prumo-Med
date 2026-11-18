import React from 'react';
import { MessageCircle, HelpCircle, ArrowUpRight } from 'lucide-react';

export default function InsurancePlans({ onOpenBooking }) {
  const plans = [
    { name: 'Unimed', logo: '/images/convenios/unimed.webp' },
    { name: 'Bradesco Saúde', logo: '/images/convenios/bradesco-saude.webp' },
    { name: 'SulAmérica', logo: '/images/convenios/sulamerica.webp' },
    { name: 'Ipasgo Saúde', logo: '/images/convenios/ipasgo-saude.webp' },
    { name: 'Saúde Caixa', logo: '/images/convenios/saude-caixa.webp' },
    { name: 'Affego Saúde', logo: '/images/convenios/affego-saude.webp' },
    { name: 'Postal Saúde', logo: '/images/convenios/postal-saude.webp' },
    { name: 'Caesan', logo: '/images/convenios/caesan.webp' },
    { name: 'Mais Saúde', logo: '/images/convenios/mais-saude.webp' },
    { name: 'Vivacom', logo: '/images/convenios/vivacom.webp' },
  ];

  return (
    <section id="convenios" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#eaeeed]">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f3f5f4] text-xs text-[#0e5a66] font-medium tracking-wide">
            Convênios & Planos de Saúde
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#0c1a1d] tracking-tight leading-tight">
            Ampla Cobertura para Consultas e Cirurgias
          </h2>
          <p className="text-sm sm:text-base text-[#5e6c73] font-light leading-relaxed">
            Atendimento particular e cobertura hospitalar através dos principais planos de saúde para procedimentos de coluna, nervos e crânio em Goiânia.
          </p>
        </div>

        <button
          onClick={() => onOpenBooking('Consulta de Cobertura de Convênio')}
          className="inline-flex items-center gap-2 bg-[#0e5a66] hover:bg-[#083c44] text-white text-xs sm:text-[13px] font-medium px-5 py-2.5 rounded-full shadow-sm transition-all cursor-pointer self-start md:self-auto shrink-0"
        >
          <MessageCircle className="w-3.5 h-3.5 text-[#9fded8]" />
          <span>Verificar Meu Convênio</span>
        </button>
      </div>

      {/* Grid of Logos Only (2x5 layout on desktop, clean cards) */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-6 border border-[#eaeeed] hover:border-[#0c1a1d]/20 hover:shadow-card transition-all duration-300 flex items-center justify-center h-28 sm:h-32 group"
          >
            <img
              src={plan.logo}
              alt={plan.name}
              title={plan.name}
              className="max-h-12 sm:max-h-14 max-w-[85%] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Reimbursement & Surgical Authorization Guidance Card */}
      <div className="mt-10 bg-[#f3f5f4] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#eaeeed] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0e5a66] shrink-0 border border-[#eaeeed] shadow-sm mt-0.5">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm sm:text-base font-medium text-[#0c1a1d]">
              Como funciona a cobertura cirúrgica e o reembolso?
            </h4>
            <p className="text-xs sm:text-sm text-[#5e6c73] font-light leading-relaxed max-w-3xl">
              As internações e procedimentos cirúrgicos são realizados nos principais hospitais credenciados aos planos de saúde em Goiânia. Para atendimentos particulares ou cirurgias com cobertura parcial, nossa equipe administrativa fornece laudos médicos detalhados e codificação TUSS completa para viabilizar o reembolso junto à sua operadora.
            </p>
          </div>
        </div>

        <button
          onClick={() => onOpenBooking('Orientação sobre Reembolso e Convênio')}
          className="whitespace-nowrap inline-flex items-center gap-2 bg-[#0c1a1d] hover:bg-[#0e5a66] text-white text-xs sm:text-sm font-medium px-6 py-3 rounded-full transition-colors cursor-pointer shrink-0"
        >
          <span>Tirar Dúvidas sobre Meu Plano</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

    </section>
  );
}
