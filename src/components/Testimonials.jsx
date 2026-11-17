import React, { useState } from 'react';
import { Star, ArrowLeft, ArrowRight, Quote } from 'lucide-react';

export default function Testimonials({ onOpenBooking }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  const testimonials = [
    {
      name: 'Juliana Meireles',
      city: 'Goiânia - GO',
      procedure: 'Artrodese Cervical Minimamente Invasiva',
      photo: '/images/paciente-juliana.jpg',
      quote: 'A minha dor no braço terminou na hora que eu acordei da anestesia. A dor nunca mais voltou, e era uma dor 24 horas por dia, eu nem conseguia pegar um garfo. A equipe foi impecável e me devolveu a qualidade de vida.',
      time: 'Recuperação Imediata'
    },
    {
      name: 'Carolina Freitas',
      city: 'Goiânia - GO',
      procedure: 'Artrodese Lombar / Descompressão',
      photo: '/images/paciente-carolina.jpg',
      quote: 'Antes da cirurgia eu sentia uma dormência na perna e uma dor muito forte na batata da perna esquerda e o pé formigando. Tinha muita dificuldade e dor para andar. Após 24 dias da minha cirurgia estou ótima e sem dor.',
      time: '24 dias de pós-operatório'
    },
    {
      name: 'Marcos Aurélio de Souza',
      city: 'Anápolis - GO',
      procedure: 'Cirurgia de Neuralgia Trigeminal',
      photo: '/images/paciente-marcos.jpg',
      quote: 'Hoje estou muito bem, já tem 4 anos da minha cirurgia. Eu convivia com essa dor terrível há 20 anos. Graças a Deus e ao cuidado minucioso dos cirurgiões estou totalmente livre dessa dor que paralisava minha vida.',
      time: '4 anos livre da dor'
    },
    {
      name: 'Teresa Cristina Neves',
      city: 'Goiânia - GO',
      procedure: 'Descompressão Microvascular / Neuralgia',
      photo: '/images/paciente-teresa.jpg',
      quote: 'Eu sentia uma dor muito forte no lado esquerdo do rosto. A dor vinha junto com um “choque”, principalmente na testa. A dor era insuportável. Após 15 dias da minha cirurgia, minha dor melhorou 100%, não sinto choque e nem dor para mastigar.',
      time: 'Melhora de 100%'
    }
  ];

  const prev = () => {
    setCurrentIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIdx];

  return (
    <section id="depoimentos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-10 border-b border-[#eaeeed]">
        <div className="space-y-3 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f3f5f4] text-xs text-[#0e5a66] font-medium tracking-wide">
            Depoimentos de Pacientes
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium text-[#0c1a1d] tracking-tight">
            Histórias Reais de Quem Recuperou sua Qualidade de Vida
          </h2>
        </div>

        {/* Counter and Navigation Arrows (Aveline Style) */}
        <div className="flex items-center gap-4">
          <span className="text-xs font-mono text-[#5e6c73]">
            0{currentIdx + 1} / 0{testimonials.length}
          </span>
          <div className="flex items-center gap-1.5">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[#eaeeed] bg-white hover:bg-[#f3f5f4] flex items-center justify-center text-[#0c1a1d] transition-colors cursor-pointer"
              aria-label="Depoimento anterior"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-[#eaeeed] bg-white hover:bg-[#f3f5f4] flex items-center justify-center text-[#0c1a1d] transition-colors cursor-pointer"
              aria-label="Próximo depoimento"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Featured Editorial Quote Card (Aveline Signature) */}
      <div className="mt-12 bg-white rounded-[28px] lg:rounded-[36px] p-8 sm:p-12 lg:p-16 border border-[#eaeeed] shadow-card relative">
        
        {/* Stars */}
        <div className="flex items-center gap-1 text-[#f0a93b] mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#f0a93b]" />
          ))}
          <span className="ml-2 text-xs font-medium text-[#0c1a1d]">Avaliação 5.0</span>
        </div>

        {/* Large Quote */}
        <p className="text-xl sm:text-2xl md:text-3xl font-light text-[#0c1a1d] tracking-tight leading-relaxed max-w-4xl">
          "{current.quote}"
        </p>

        {/* Patient Profile */}
        <div className="mt-10 pt-8 border-t border-[#eaeeed] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img 
              src={current.photo} 
              alt={current.name} 
              className="w-13 h-13 rounded-full object-cover border-2 border-white shadow-sm"
            />
            <div>
              <h4 className="text-base font-medium text-[#0c1a1d]">
                {current.name}
              </h4>
              <p className="text-xs text-[#5e6c73] font-light">
                {current.procedure} · {current.city}
              </p>
            </div>
          </div>

          <span className="text-xs font-medium text-[#0e5a66] bg-[#f3f5f4] px-3.5 py-1.5 rounded-full border border-[#eaeeed] self-start sm:self-auto">
            {current.time}
          </span>
        </div>

      </div>

      {/* 4 Thumbs Preview Grid */}
      <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            onClick={() => setCurrentIdx(idx)}
            className={`p-4 rounded-2xl border transition-all cursor-pointer ${
              currentIdx === idx
                ? 'bg-white border-[#0c1a1d]/20 shadow-sm'
                : 'bg-[#f3f5f4]/70 border-[#eaeeed] hover:bg-white'
            }`}
          >
            <div className="flex items-center gap-3">
              <img 
                src={item.photo} 
                alt={item.name} 
                className="w-9 h-9 rounded-full object-cover"
              />
              <div className="overflow-hidden">
                <p className="text-xs font-medium text-[#0c1a1d] truncate">{item.name}</p>
                <p className="text-[10px] text-[#5e6c73] truncate">{item.procedure}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
