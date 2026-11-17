import React from 'react';
import { Calendar, MessageCircle, ArrowRight, Phone } from 'lucide-react';

export default function PreFooterCTA({ onOpenBooking }) {
  return (
    <section className="px-3 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Inset Ice-Mint Card (Aveline Pre-Footer Style) */}
      <div className="max-w-7xl mx-auto rounded-[28px] lg:rounded-[36px] bg-[#dcebeb] p-8 sm:p-12 lg:p-16 border border-[#c4dcda] relative overflow-hidden shadow-soft">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Copy & Actions (8 cols) */}
          <div className="lg:col-span-8 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 text-xs text-[#0e5a66] font-medium tracking-wide">
              Prumo Med · Atendimento em Goiânia
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-medium text-[#0c1a1d] tracking-tight leading-tight">
              Inicie seu tratamento com uma avaliação clara e humanizada.
            </h2>

            <p className="text-sm sm:text-base text-[#44555a] font-light max-w-2xl leading-relaxed">
              Traga seus exames de imagem e converse diretamente com nossos Ortopedistas e Neurocirurgiões para compreender todas as possibilidades terapêuticas.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 bg-[#0e5a66] hover:bg-[#083c44] text-white font-medium text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-sm transition-all cursor-pointer group"
              >
                <Calendar className="w-4 h-4 text-[#9fded8]" />
                <span>Agendar Minha Consulta</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>

              <a
                href="https://wa.me/5562982370012?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Prumo%20Med."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#0c1a1d] border border-white/80 font-medium text-xs sm:text-sm px-6 py-3.5 rounded-full shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#0e5a66]" />
                <span>WhatsApp: (62) 98237-0012</span>
              </a>
            </div>
          </div>

          {/* Right: Floating Clinic Badge / Info (4 cols) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 border border-white/60 shadow-card max-w-xs w-full space-y-3">
              <div className="text-xs font-medium text-[#0c1a1d] flex items-center justify-between">
                <span>Horário da Clínica</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              </div>
              <div className="text-xs text-[#5e6c73] font-light space-y-1">
                <p><strong>Segunda a Sexta:</strong> 8h às 18h</p>
                <p><strong>Sábado:</strong> Consulte disponibilidade</p>
              </div>
              <div className="pt-2 border-t border-[#eaeeed] text-[11px] text-[#0e5a66] font-medium">
                Retorno de consulta em até 30 dias
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
