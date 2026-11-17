import React, { useState } from 'react';
import { Plus, Minus, MessageCircle, ArrowUpRight } from 'lucide-react';

export default function FAQ({ onOpenBooking }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Quando devo procurar um ortopedista ou neurocirurgião de coluna?',
      answer: 'Você deve buscar avaliação médica quando a dor na coluna é intensa, persistente (mais de 4-6 semanas sem melhora), acompanhada de dor que irradia para braços ou pernas, formigamento, dormência ou fraqueza muscular. Sintomas como alteração urinária ou intestinal requerem atendimento imediato.'
    },
    {
      question: 'Toda hérnia de disco precisa de cirurgia?',
      answer: 'Não. A grande maioria das hérnias de disco responde bem ao tratamento conservador: fisioterapia, medicamentos e mudanças de hábito. A cirurgia é indicada quando há dor muito intensa e refratária ao tratamento, déficit motor progressivo ou comprometimento dos esfíncteres.'
    },
    {
      question: 'Dor lombar tem tratamento?',
      answer: 'Sim. A dor lombar tem tratamento e a maioria dos pacientes melhora com abordagem conservadora adequada. O tratamento envolve fisioterapia, analgesia, exercício físico orientado e modificação de fatores de risco. A cirurgia é reservada para casos selecionados com indicação precisa.'
    },
    {
      question: 'Tenho Escoliose, é caso cirúrgico?',
      answer: 'Geralmente indicamos cirurgia para escoliose acima de 40-45 graus. Abaixo disso, o tratamento conservador com fisioterapia, RPG, coletes e exercícios como natação pode evitar a necessidade de cirurgia.'
    },
    {
      question: 'A Prumo Med realiza neurocirurgias minimamente invasivas e endoscopia de coluna?',
      answer: 'Sim. A equipe de especialistas utiliza técnicas de cirurgia minimamente invasiva e endoscopia de coluna. Esses recursos permitem neurocirurgias mais precisas, com incisões menores, menos sangramento e recuperação potencialmente mais rápida, sempre que o caso permitir.'
    },
    {
      question: 'Quais tipos de tumores cerebrais e aneurismas o neurocirurgião trata?',
      answer: 'O neurocirurgião atua no tratamento de tumores cerebrais e intracranianos, tumores de hipófise, malformações vasculares, aneurismas cerebrais, hematomas intracranianos, hidrocefalia e outras patologias do crânio e sistema nervoso.'
    },
    {
      question: 'Como funciona a consulta?',
      answer: 'A consulta é direcionada à avaliação do quadro do paciente e à definição das possibilidades de tratamento. Quando necessário, há retorno em até 30 dias.'
    }
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        
        {/* Left Column: Sticky Title & Support Info (4 cols) */}
        <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-4 self-start">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f3f5f4] text-xs text-[#0e5a66] font-medium tracking-wide">
            FAQ & Orientações
          </div>

          <h2 className="text-3xl sm:text-4xl font-medium text-[#0c1a1d] tracking-tight leading-tight">
            Perguntas Frequentes
          </h2>

          <p className="text-sm text-[#5e6c73] font-light leading-relaxed">
            Esclarecimentos detalhados sobre diagnósticos, procedimentos minimamente invasivos e consultas com nossa equipe médica em Goiânia.
          </p>

          <div className="pt-4">
            <button
              onClick={() => onOpenBooking('Dúvida médica antes de agendar')}
              className="inline-flex items-center gap-2 text-xs font-medium text-[#0e5a66] hover:text-[#083c44] bg-[#f3f5f4] hover:bg-[#eaeeed] px-4 py-2.5 rounded-full transition-colors cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Dúvida específica? Fale no WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right Column: Accordion Rows with Hairlines (8 cols) */}
        <div className="lg:col-span-8 divide-y divide-[#eaeeed] border-y border-[#eaeeed]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-5 sm:py-6">
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base sm:text-lg font-medium tracking-tight transition-colors ${
                    isOpen ? 'text-[#0e5a66]' : 'text-[#0c1a1d] group-hover:text-[#0e5a66]'
                  }`}>
                    {faq.question}
                  </span>

                  <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-[#eaeeed] transition-colors ${
                    isOpen ? 'bg-[#0c1a1d] text-white' : 'bg-white text-[#5e6c73] group-hover:bg-[#f3f5f4]'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="pt-4 pr-10 text-xs sm:text-[14px] text-[#5e6c73] font-light leading-relaxed animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
