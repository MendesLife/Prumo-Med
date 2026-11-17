import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HowItWorks({ onOpenBooking }) {
  const steps = [
    {
      num: '01',
      title: 'Avaliação Clínica e Exames',
      desc: 'A equipe de médicos avalia o histórico da dor, quadro apresentado e exames de imagem para compreender a situação com clareza.',
    },
    {
      num: '02',
      title: 'Discussão das Possibilidades',
      desc: 'A partir da avaliação, são discutidas detalhadamente as possibilidades de tratamento aplicáveis: conduta conservadora ou procedimento cirúrgico.',
    },
    {
      num: '03',
      title: 'Definição dos Próximos Passos',
      desc: 'Quando houver indicação cirúrgica, o paciente recebe orientação transparente sobre a técnica recomendada, preparação e cuidados.',
    },
    {
      num: '04',
      title: 'Acompanhamento e Retorno',
      desc: 'Retorno incluído em até 30 dias quando necessário para reavaliação de exames e acompanhamento contínuo da recuperação.',
    },
  ];

  return (
    <section id="como-funciona" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      {/* 4-Step Horizontal Progress Grid (Aveline Style) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
        {steps.map((step, idx) => (
          <div key={idx} className="space-y-3 group">
            {/* Top Hairline Progress Bar */}
            <div className="w-full h-[2px] bg-[#eaeeed] overflow-hidden rounded-full">
              <div 
                className="h-full bg-[#0e5a66] transition-all duration-500 group-hover:w-full"
                style={{ width: `${(idx + 1) * 25}%` }}
              ></div>
            </div>

            {/* Step Number */}
            <div className="text-xs font-medium text-[#5e6c73] tracking-wider uppercase pt-1">
              Passo {step.num}
            </div>

            {/* Title */}
            <h3 className="text-base sm:text-lg font-medium text-[#0c1a1d] leading-snug">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-xs sm:text-[13px] text-[#5e6c73] font-light leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
