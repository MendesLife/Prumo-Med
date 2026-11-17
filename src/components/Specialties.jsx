import React, { useState } from 'react';
import { 
  Activity, 
  Disc, 
  Zap, 
  Minimize2, 
  ShieldAlert, 
  Brain, 
  GitCommit, 
  HeartPulse, 
  Stethoscope,
  ArrowUpRight
} from 'lucide-react';

export default function Specialties({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('todos');

  const specialties = [
    {
      id: 'dor-lombar',
      category: 'coluna',
      title: 'Dor Lombar',
      icon: Activity,
      tag: 'Coluna Lombar',
      approach: 'Conservador ou Cirúrgico',
      summary: 'Avaliação da origem da dor e tratamento focado em alívio e função, incluindo indicação cirúrgica quando necessária.',
    },
    {
      id: 'dor-cervical',
      category: 'coluna',
      title: 'Dor Cervical',
      icon: ShieldAlert,
      tag: 'Coluna Cervical',
      approach: 'Diagnóstico & Descompressão',
      summary: 'Diagnóstico preciso de dor no pescoço com ou sem irradiação para os braços (cervicobraquialgia).',
    },
    {
      id: 'hernia-de-disco',
      category: 'coluna',
      title: 'Hérnia de Disco',
      icon: Disc,
      tag: 'Patologia Vertebral',
      approach: 'Endoscopia & Microcirurgia',
      summary: 'Tratamento conservador ou cirúrgico conforme indicação clínica (endoscopia de coluna ou microdiscectomia).',
    },
    {
      id: 'dor-ciatica',
      category: 'nervos',
      title: 'Dor Ciática',
      icon: Zap,
      tag: 'Nervos & Compressão',
      approach: 'Alívio & Bloqueios',
      summary: 'Dor irradiada pela perna com origem na compressão radicular lombar, com rápida intervenção analgésica.',
    },
    {
      id: 'escoliose',
      category: 'coluna',
      title: 'Escoliose',
      icon: GitCommit,
      tag: 'Deformidades da Coluna',
      approach: 'Avaliação & Alinhamento',
      summary: 'Avaliação e tratamento cirúrgico e conservador de casos de escoliose em adolescentes e adultos.',
    },
    {
      id: 'estenose',
      category: 'coluna',
      title: 'Estenose Lombar / Cervical',
      icon: Minimize2,
      tag: 'Canal Vertebral',
      approach: 'Descompressão Minimamente Invasiva',
      summary: 'Estreitamento do canal medular com compressão de raízes nervosas e dificuldade para caminhar.',
    },
    {
      id: 'tumores-coluna',
      category: 'coluna',
      title: 'Tumores da Coluna',
      icon: Stethoscope,
      tag: 'Oncologia Vertebral',
      approach: 'Abordagem Microcirúrgica',
      summary: 'Avaliação e tratamento cirúrgico especializado de tumores envolvendo a coluna vertebral.',
    },
    {
      id: 'tumores-cerebrais',
      category: 'cranio',
      title: 'Tumores Cerebrais',
      icon: Brain,
      tag: 'Neurocirurgia de Crânio',
      approach: 'Segurança & Neuronavegação',
      summary: 'Abordagem neurocirúrgica de tumores intracranianos com foco em máxima segurança funcional.',
    },
    {
      id: 'aneurismas-mavs',
      category: 'cranio',
      title: 'Aneurismas Cerebrais e MAVs',
      icon: HeartPulse,
      tag: 'Neurocirurgia Vascular',
      approach: 'Microcirurgia de Precisão',
      summary: 'Atuação em aneurismas e malformações arteriovenosas com as técnicas vasculares mais avançadas.',
    }
  ];

  const filtered = activeCategory === 'todos' 
    ? specialties 
    : specialties.filter(s => s.category === activeCategory);

  return (
    <section id="especialidades" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#eaeeed]">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f3f5f4] text-xs text-[#0e5a66] font-medium tracking-wide">
            Patologias & Cuidados
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-medium text-[#0c1a1d] tracking-tight leading-tight">
            Tratamos Sua Dor com Precisão e Cuidado
          </h2>
          <p className="text-sm sm:text-base text-[#5e6c73] font-light">
            Ortopedistas e Neurocirurgiões especialistas em patologias da coluna, nervos e crânio em Goiânia.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveCategory('todos')}
            className={`px-4 py-2 rounded-full text-xs sm:text-[13px] font-medium transition-all cursor-pointer ${
              activeCategory === 'todos'
                ? 'bg-[#0c1a1d] text-white shadow-sm'
                : 'bg-[#f3f5f4] text-[#5e6c73] hover:text-[#0c1a1d]'
            }`}
          >
            Todas
          </button>
          <button
            onClick={() => setActiveCategory('coluna')}
            className={`px-4 py-2 rounded-full text-xs sm:text-[13px] font-medium transition-all cursor-pointer ${
              activeCategory === 'coluna'
                ? 'bg-[#0c1a1d] text-white shadow-sm'
                : 'bg-[#f3f5f4] text-[#5e6c73] hover:text-[#0c1a1d]'
            }`}
          >
            Coluna Vertebral
          </button>
          <button
            onClick={() => setActiveCategory('nervos')}
            className={`px-4 py-2 rounded-full text-xs sm:text-[13px] font-medium transition-all cursor-pointer ${
              activeCategory === 'nervos'
                ? 'bg-[#0c1a1d] text-white shadow-sm'
                : 'bg-[#f3f5f4] text-[#5e6c73] hover:text-[#0c1a1d]'
            }`}
          >
            Nervos & Dor
          </button>
          <button
            onClick={() => setActiveCategory('cranio')}
            className={`px-4 py-2 rounded-full text-xs sm:text-[13px] font-medium transition-all cursor-pointer ${
              activeCategory === 'cranio'
                ? 'bg-[#0c1a1d] text-white shadow-sm'
                : 'bg-[#f3f5f4] text-[#5e6c73] hover:text-[#0c1a1d]'
            }`}
          >
            Crânio & Vascular
          </button>
        </div>
      </div>

      {/* Grid of Cards (Aveline Card Architecture) */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="bg-[#f3f5f4] hover:bg-white rounded-3xl p-7 border border-[#eaeeed] hover:border-[#0c1a1d]/15 shadow-sm hover:shadow-card transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Row: Pill Tag & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[11px] font-medium text-[#0e5a66] bg-white px-3 py-1 rounded-full border border-[#eaeeed]">
                    {item.tag}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0e5a66] group-hover:bg-[#0e5a66] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-medium text-[#0c1a1d] mb-3 group-hover:text-[#0e5a66] transition-colors">
                  {item.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-[13px] text-[#5e6c73] font-light leading-relaxed mb-4">
                  {item.summary}
                </p>
              </div>

              {/* Bottom Row: Approach Pill & Arrow Circle Button */}
              <div className="pt-4 border-t border-[#eaeeed] flex items-center justify-between">
                <span className="text-[11px] text-[#5e6c73] font-normal">
                  {item.approach}
                </span>

                <button
                  onClick={() => onOpenBooking(item.title)}
                  className="w-9 h-9 rounded-full bg-white group-hover:bg-[#0e5a66] text-[#0c1a1d] group-hover:text-white border border-[#eaeeed] flex items-center justify-center transition-all cursor-pointer"
                  aria-label={`Avaliar ${item.title}`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
