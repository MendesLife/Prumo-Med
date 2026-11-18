import React from 'react';
import { ArrowUpRight, Cpu, Microscope, Heart, Award, ShieldCheck } from 'lucide-react';

export default function About({ onOpenBooking }) {
  const stats = [
    { value: '+1.500', label: 'Cirurgias anuais', sub: 'Procedimentos de coluna e crânio' },
    { value: '100%', label: 'Foco exclusivo', sub: 'Patologias vertebrais e neurológicas' },
    { value: '4.9 ★', label: 'Satisfação dos pacientes', sub: 'Recomendações e avaliações' },
    { value: '30 dias', label: 'Retorno incluído', sub: 'Acompanhamento de exames' },
  ];

  return (
    <section id="sobre" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      
      {/* Top Editorial Statement */}
      <div className="space-y-6 max-w-4xl">
        
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f3f5f4] text-xs text-[#0e5a66] font-medium tracking-wide">
          Sobre a Prumo Med
        </div>

        {/* Dual-Tone Headline (Aveline Signature) */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-medium tracking-tight leading-[1.2] text-[#0c1a1d]">
          Referência em Ortopedia de Coluna e Neurocirurgia em Goiânia.{' '}
          <span className="text-[#5e6c73] font-light">
            Formação nas mais renomadas instituições do Brasil e experiência internacional, unindo precisão técnica, tecnologia de ponta e acolhimento humanizado.
          </span>
        </h2>

        {/* Doctors Cluster Pill */}
        <div className="inline-flex items-center gap-3 bg-white border border-[#eaeeed] px-3.5 py-1.5 rounded-full shadow-sm">
          <div className="flex -space-x-2">
            <img src="/images/dr-vinicius-rios.webp" alt="Dr. Vinicius" className="w-7 h-7 rounded-full object-cover border-2 border-white" />
            <img src="/images/dr-fernando-esperidiao.webp" alt="Dr. Fernando" className="w-7 h-7 rounded-full object-cover border-2 border-white" />
            <img src="/images/dr-lucas-praxedes.png" alt="Dr. Lucas" className="w-7 h-7 rounded-full object-cover border-2 border-white" />
            <img src="/images/dr-matheus-guisoni.jpg" alt="Dr. Matheus" className="w-7 h-7 rounded-full object-cover border-2 border-white" />
          </div>
          <span className="text-xs text-[#0c1a1d] font-medium">
            4 especialistas integrados · Ortopedia & Neurocirurgia
          </span>
        </div>

      </div>

      {/* 4-Column Stats Grid with Hairlines */}
      <div className="mt-14 pt-10 border-t border-[#eaeeed] grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, idx) => (
          <div 
            key={idx} 
            className={`space-y-1 ${idx !== 0 ? 'lg:border-l lg:border-[#eaeeed] lg:pl-8' : ''}`}
          >
            <div className="text-3xl sm:text-4xl font-medium text-[#0c1a1d] tracking-tight">
              {stat.value}
            </div>
            <div className="text-xs sm:text-sm font-medium text-[#0c1a1d]">
              {stat.label}
            </div>
            <div className="text-xs text-[#5e6c73] font-light">
              {stat.sub}
            </div>
          </div>
        ))}
      </div>

      {/* Large Architectural / Surgical Operating Room Photo Card */}
      <div className="mt-14 rounded-[28px] lg:rounded-[36px] overflow-hidden relative shadow-card group">
        <img 
          src="/images/centro-cirurgico-moderno.jpg" 
          alt="Centro Cirúrgico de Alta Tecnologia" 
          className="w-full h-[360px] sm:h-[480px] lg:h-[540px] object-cover transition-transform duration-700 group-hover:scale-102"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a1d]/80 via-transparent to-transparent"></div>

        {/* Floating Pill Badge at Bottom Left (Aveline Style) */}
        <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-auto bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-card max-w-sm sm:max-w-md border border-white/20">
          <div className="flex items-center gap-2 text-xs font-medium text-[#0e5a66] uppercase tracking-wider mb-1">
            <ShieldCheck className="w-4 h-4 text-[#0e5a66]" />
            <span>Infraestrutura Hospitalar de Ponta</span>
          </div>
          <p className="text-xs sm:text-[13px] text-[#44555a] font-light leading-relaxed">
            Procedimentos realizados nos principais hospitais de Goiânia com suporte de neuronavegação, microscopia cirúrgica Zeiss e monitorização neurofisiológica intraoperatória.
          </p>
        </div>

        {/* Action Button at Bottom Right */}
        <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 hidden sm:block">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 bg-[#0e5a66] hover:bg-[#083c44] text-white text-xs sm:text-sm font-medium px-5 py-3 rounded-full shadow-md transition-all cursor-pointer"
          >
            <span>Conhecer Nossos Especialistas</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </section>
  );
}
