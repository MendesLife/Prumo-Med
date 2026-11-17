import React from 'react';
import { Cpu, Microscope, ShieldCheck, ArrowRight } from 'lucide-react';

export default function ClinicalStandard({ onOpenBooking }) {
  const pillars = [
    {
      title: 'Cirurgia Minimamente Invasiva',
      desc: 'Incisões milimétricas, preservação da musculatura paravertebral, menor sangramento e retorno antecipado às atividades.',
      icon: Microscope,
    },
    {
      title: 'Neuronavegação & Visão 3D',
      desc: 'Localização anatômica em tempo real para procedimentos de crânio e coluna com margem de segurança submilimétrica.',
      icon: Cpu,
    },
    {
      title: 'Monitorização Neurofisiológica',
      desc: 'Acompanhamento eletrofisiológico intraoperatório contínuo das vias motoras e sensitivas durante todo o ato cirúrgico.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="px-3 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Inset Deep Teal Container (Aveline Dark Section) */}
      <div className="max-w-7xl mx-auto rounded-[28px] lg:rounded-[36px] bg-[#083c44] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-card">
        
        {/* Subtle Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#9fded8]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs text-[#9fded8] font-normal tracking-wide">
            Padrão Cirúrgico de Excelência
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-medium tracking-tight text-white leading-tight">
            Tecnologia de ponta e máxima segurança para procedimentos de alta complexidade.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            A Prumo Med combina técnicas cirúrgicas refinadas com infraestrutura hospitalar de primeiro nível em Goiânia, assegurando o menor impacto tecidual e os melhores desfechos clínicos.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="mt-12 pt-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#9fded8]">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-medium text-white">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-300 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Action Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-xs text-slate-300 font-light">
            Indicações cirúrgicas rigorosas baseadas em consensos médicos internacionais.
          </div>
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 bg-[#9fded8] hover:bg-white text-[#083c44] text-xs sm:text-sm font-medium px-6 py-3 rounded-full transition-colors cursor-pointer shadow-sm"
          >
            <span>Agendar Consulta Avaliativa</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
