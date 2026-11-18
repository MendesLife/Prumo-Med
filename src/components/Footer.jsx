import React from 'react';
import { Instagram, ArrowUp, MessageCircle, MapPin, Clock } from 'lucide-react';

export default function Footer({ onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#f3f5f4] text-[#5e6c73] pt-16 pb-12 border-t border-[#eaeeed] text-xs relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 4 Columns Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#eaeeed]">
          
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="inline-block">
              <img 
                src="/images/logo-prumo-med.webp" 
                alt="Prumo Med" 
                className="h-8 w-auto object-contain"
              />
            </a>
            <p className="text-xs text-[#5e6c73] font-light leading-relaxed max-w-sm">
              Tratamento Especializado para Dores na Coluna, Nervos e Crânio em Goiânia. Ortopedistas e Neurocirurgiões altamente qualificados unindo tecnologia avançada e cirurgias minimamente invasivas para tratamento e alívio da dor.
            </p>
            <div className="text-[11px] text-[#0c1a1d] font-medium space-y-0.5">
              <p>• Ortopedia de Coluna Vertebral</p>
              <p>• Neurocirurgia de Crânio e Nervos</p>
            </div>
          </div>

          {/* Patologias (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-medium text-[#0c1a1d] uppercase tracking-wider">
              Patologias Tratadas
            </h4>
            <ul className="space-y-2 text-xs font-light">
              <li><a href="#especialidades" className="hover:text-[#0c1a1d] transition-colors">Dor Lombar & Cervical</a></li>
              <li><a href="#especialidades" className="hover:text-[#0c1a1d] transition-colors">Hérnia de Disco</a></li>
              <li><a href="#especialidades" className="hover:text-[#0c1a1d] transition-colors">Dor Ciática</a></li>
              <li><a href="#especialidades" className="hover:text-[#0c1a1d] transition-colors">Escoliose & Deformidades</a></li>
              <li><a href="#especialidades" className="hover:text-[#0c1a1d] transition-colors">Estenose de Canal Medular</a></li>
              <li><a href="#especialidades" className="hover:text-[#0c1a1d] transition-colors">Tumores da Coluna e Cerebrais</a></li>
              <li><a href="#especialidades" className="hover:text-[#0c1a1d] transition-colors">Aneurismas Cerebrais e MAVs</a></li>
            </ul>
          </div>

          {/* Horários e Atendimento (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-medium text-[#0c1a1d] uppercase tracking-wider">
              Horário de Atendimento
            </h4>
            <div className="space-y-2 text-xs font-light bg-white p-3.5 rounded-2xl border border-[#eaeeed]">
              <div className="flex items-center gap-2 text-[#0c1a1d]">
                <Clock className="w-3.5 h-3.5 text-[#0e5a66]" />
                <span className="font-medium">Segunda a Sexta:</span>
              </div>
              <p className="pl-5 text-[#5e6c73]">8h às 18h</p>

              <div className="flex items-center gap-2 text-[#0c1a1d] pt-1.5 border-t border-[#eaeeed]">
                <Clock className="w-3.5 h-3.5 text-[#0e5a66]" />
                <span className="font-medium">Sábado:</span>
              </div>
              <p className="pl-5 text-[#5e6c73]">Consulte disponibilidade</p>
            </div>

            <div className="pt-1">
              <span className="inline-flex items-center gap-1.5 text-[11px] text-[#0e5a66] font-medium bg-[#dcebeb] px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Goiânia - GO · Atendimento Especializado
              </span>
            </div>
          </div>

          {/* Contato & Redes (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-medium text-[#0c1a1d] uppercase tracking-wider">
              Contato
            </h4>
            <div className="space-y-2 text-xs">
              <a 
                href="https://wa.me/5562982370012?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Prumo%20Med."
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0e5a66] hover:text-[#083c44] font-medium flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>+55 (62) 98237-0012</span>
              </a>
              <p className="text-[#5e6c73] font-light">Goiânia - GO</p>
            </div>

            <div className="pt-2">
              <p className="text-[11px] text-[#0c1a1d] font-medium mb-2">Instagram dos Médicos:</p>
              <div className="flex gap-1.5">
                <a href="https://www.instagram.com/drviniciusrios/" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full bg-white hover:bg-pink-50 hover:text-pink-600 border border-[#eaeeed] flex items-center justify-center transition-colors" title="Dr. Vinicius Rios">
                  <Instagram className="w-3.5 h-3.5" />
                </a>
                <a href="https://www.instagram.com/drfernandoesperidiao/" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full bg-white hover:bg-pink-50 hover:text-pink-600 border border-[#eaeeed] flex items-center justify-center transition-colors" title="Dr. Fernando Esperidião">
                  <Instagram className="w-3.5 h-3.5" />
                </a>
                <a href="https://www.instagram.com/praxedes.coluna/" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full bg-white hover:bg-pink-50 hover:text-pink-600 border border-[#eaeeed] flex items-center justify-center transition-colors" title="Dr. Lucas Praxedes">
                  <Instagram className="w-3.5 h-3.5" />
                </a>
                <a href="https://www.instagram.com/matheusguisoni/" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full bg-white hover:bg-pink-50 hover:text-pink-600 border border-[#eaeeed] flex items-center justify-center transition-colors" title="Dr. Matheus Guisoni">
                  <Instagram className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Line: Legal & Back to Top */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#5e6c73] font-light">
          <div className="space-y-1 text-center md:text-left">
            <p>© 2026 Prumo Med. Todos os direitos reservados.</p>
            <p>
              Dr. Vinicius Rios (CRM-GO 15251 | RQE 12244) • Dr. Fernando Esperidião (CRM-GO 17117 | RQE 18815) • Dr. Lucas Praxedes (CRM-GO 25461 | RQE 150406) • Dr. Matheus Guisoni (CRM-GO 23548 | RQE 20256).
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-white border border-[#eaeeed] hover:bg-[#0c1a1d] hover:text-white flex items-center justify-center transition-all cursor-pointer shrink-0"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Oversized Brand Watermark (Aveline Signature Feature) */}
      <div className="select-none pointer-events-none text-center font-bold tracking-tighter text-[#0c1a1d]/[0.035] text-[14vw] leading-none mt-8 -mb-4">
        PRUMO MED
      </div>
    </footer>
  );
}
