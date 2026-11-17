import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingWhatsApp({ onOpenBooking }) {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 pointer-events-none">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="bg-white text-[#0c1a1d] text-xs font-normal py-2 px-3.5 rounded-full shadow-float border border-[#eaeeed] flex items-center gap-2 pointer-events-auto animate-fadeIn">
          <span>Dúvidas ou agendamento? Fale no WhatsApp</span>
          <button 
            onClick={() => setShowTooltip(false)}
            className="text-[#5e6c73] hover:text-[#0c1a1d] p-0.5"
            aria-label="Fechar"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Pill Button */}
      <button
        onClick={onOpenBooking}
        className="w-13 h-13 rounded-full bg-[#0e5a66] hover:bg-[#083c44] text-white flex items-center justify-center shadow-card hover:shadow-float transition-all duration-300 transform hover:scale-105 pointer-events-auto cursor-pointer"
        aria-label="Agendar pelo WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-[#9fded8]" />
      </button>
    </div>
  );
}
