import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 pointer-events-none">
      {/* Tooltip bubble */}
      {showTooltip && (
        <a 
          href="https://wa.me/5562982370012?text=Olá!%20Gostaria%20de%20informações%20sobre%20atendimento%20na%20Prumo%20Med."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[#0c1a1d] text-xs font-normal py-2 px-3.5 rounded-full shadow-float border border-[#eaeeed] flex items-center gap-2 pointer-events-auto hover:text-[#0e5a66] transition-colors"
        >
          <span>Dúvidas ou agendamento? Fale no WhatsApp: (62) 98237-0012</span>
          <button 
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-[#5e6c73] hover:text-[#0c1a1d] p-0.5"
            aria-label="Fechar"
          >
            <X className="w-3 h-3" />
          </button>
        </a>
      )}

      {/* Floating Pill Button linking directly to WhatsApp */}
      <a
        href="https://wa.me/5562982370012?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Prumo%20Med."
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 rounded-full bg-[#0e5a66] hover:bg-[#083c44] text-white flex items-center justify-center shadow-card hover:shadow-float transition-all duration-300 transform hover:scale-105 pointer-events-auto cursor-pointer"
        aria-label="Abrir WhatsApp: +55 (62) 98237-0012"
        title="Falar no WhatsApp: +55 62 98237-0012"
      >
        <MessageCircle className="w-6 h-6 text-[#9fded8]" />
      </a>
    </div>
  );
}
