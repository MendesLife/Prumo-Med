import React, { useState, useEffect } from 'react';
import { X, Calendar, MessageCircle, ShieldCheck, User, Phone, FileText } from 'lucide-react';

export default function AppointmentModal({ isOpen, onClose, initialReason = '' }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [reason, setReason] = useState(initialReason || 'Dor na Coluna');
  const [hasExams, setHasExams] = useState('sim');
  const [doctorPreference, setDoctorPreference] = useState('qualquer');

  useEffect(() => {
    if (initialReason) {
      setReason(initialReason);
    }
  }, [initialReason]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Build prefilled WhatsApp message
    let message = `Olá, equipe Prumo Med! Gostaria de agendar uma consulta.%0A%0A`;
    message += `*Nome:* ${encodeURIComponent(name || 'Paciente')}%0A`;
    if (phone) message += `*Telefone:* ${encodeURIComponent(phone)}%0A`;
    message += `*Motivo/Sintoma:* ${encodeURIComponent(reason)}%0A`;
    message += `*Possui exames recentes:* ${hasExams === 'sim' ? 'Sim (Ressonância/Tomografia)' : 'Ainda não'}%0A`;
    if (doctorPreference !== 'qualquer') {
      message += `*Preferência de Especialista:* ${encodeURIComponent(doctorPreference)}%0A`;
    }
    message += `%0APoderiam me informar os próximos horários disponíveis em Goiânia?`;

    const whatsappUrl = `https://wa.me/5562982370012?text=${message}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0c1a1d]/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-white rounded-[28px] shadow-float border border-[#eaeeed] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#f7f9f8] p-6 sm:p-7 border-b border-[#eaeeed] relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white border border-[#eaeeed] text-[#5e6c73] hover:text-[#0c1a1d] flex items-center justify-center transition-colors"
            aria-label="Fechar"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white text-xs text-[#0e5a66] font-medium border border-[#eaeeed] mb-2">
            <Calendar className="w-3.5 h-3.5" />
            <span>Agendamento de Consulta</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-medium text-[#0c1a1d] tracking-tight">
            Prumo Med · Goiânia, GO
          </h3>
          <p className="text-xs text-[#5e6c73] font-light mt-1">
            Preencha os dados para direcionarmos seu caso ao especialista ideal.
          </p>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-4 text-xs">
          
          {/* Nome */}
          <div>
            <label className="block text-xs font-medium text-[#0c1a1d] mb-1">
              Seu Nome Completo
            </label>
            <input
              type="text"
              required
              placeholder="Ex: João da Silva"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#eaeeed] bg-[#f7f9f8] focus:bg-white focus:border-[#0e5a66] outline-none text-[#0c1a1d] transition-all"
            />
          </div>

          {/* Telefone / WhatsApp */}
          <div>
            <label className="block text-xs font-medium text-[#0c1a1d] mb-1">
              WhatsApp para Retorno
            </label>
            <input
              type="tel"
              required
              placeholder="Ex: (62) 99999-9999"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#eaeeed] bg-[#f7f9f8] focus:bg-white focus:border-[#0e5a66] outline-none text-[#0c1a1d] transition-all"
            />
          </div>

          {/* Motivo da Consulta */}
          <div>
            <label className="block text-xs font-medium text-[#0c1a1d] mb-1">
              Principal Sintoma ou Região da Dor
            </label>
            <select
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#eaeeed] bg-[#f7f9f8] focus:bg-white focus:border-[#0e5a66] outline-none text-[#0c1a1d] transition-all"
            >
              <option value="Dor Lombar">Dor Lombar (Coluna Lombar)</option>
              <option value="Dor Cervical">Dor Cervical (Pescoço e Braços)</option>
              <option value="Hérnia de Disco">Hérnia de Disco (Lombar ou Cervical)</option>
              <option value="Dor Ciática">Dor Ciática (Irradiação para a Perna)</option>
              <option value="Escoliose">Escoliose / Deformidade da Coluna</option>
              <option value="Estenose de Canal">Estenose de Canal Medular</option>
              <option value="Tumores da Coluna">Tumores da Coluna Vertebral</option>
              <option value="Tumores Cerebrais">Tumores Cerebrais / Crânio</option>
              <option value="Aneurismas e MAVs">Aneurismas Cerebrais e MAVs</option>
              <option value="Segunda Opinião Geral">Segunda Opinião / Avaliação Geral de Exames</option>
            </select>
          </div>

          {/* Exames de imagem */}
          <div>
            <label className="block text-xs font-medium text-[#0c1a1d] mb-1">
              Já possui exames recentes de imagem (Ressonância ou Tomografia)?
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setHasExams('sim')}
                className={`py-2 px-3 rounded-full text-xs font-medium border text-center transition-all cursor-pointer ${
                  hasExams === 'sim'
                    ? 'bg-[#0c1a1d] border-[#0c1a1d] text-white'
                    : 'bg-[#f7f9f8] border-[#eaeeed] text-[#5e6c73]'
                }`}
              >
                Sim, possuo exames
              </button>
              <button
                type="button"
                onClick={() => setHasExams('nao')}
                className={`py-2 px-3 rounded-full text-xs font-medium border text-center transition-all cursor-pointer ${
                  hasExams === 'nao'
                    ? 'bg-[#0c1a1d] border-[#0c1a1d] text-white'
                    : 'bg-[#f7f9f8] border-[#eaeeed] text-[#5e6c73]'
                }`}
              >
                Não, ainda não fiz
              </button>
            </div>
          </div>

          {/* Preferência de Especialista */}
          <div>
            <label className="block text-xs font-medium text-[#0c1a1d] mb-1">
              Preferência de Especialista (Opcional)
            </label>
            <select
              value={doctorPreference}
              onChange={(e) => setDoctorPreference(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-[#eaeeed] bg-[#f7f9f8] focus:bg-white focus:border-[#0e5a66] outline-none text-[#0c1a1d] transition-all text-xs"
            >
              <option value="qualquer">Próxima data disponível (Qualquer Especialista)</option>
              <option value="Dr. Vinicius Rios">Dr. Vinicius Rios (Ortopedista de Coluna)</option>
              <option value="Dr. Fernando Esperidião">Dr. Fernando Esperidião (Ortopedista de Coluna)</option>
              <option value="Dr. Lucas Praxedes">Dr. Lucas Praxedes (Neurocirurgião)</option>
              <option value="Dr. Matheus Guisoni">Dr. Matheus Guisoni (Neurocirurgião)</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-4 bg-[#0e5a66] hover:bg-[#083c44] text-white font-medium rounded-full shadow-sm flex items-center justify-center gap-2 text-xs sm:text-sm transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#9fded8]" />
              <span>Prosseguir para o WhatsApp</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#5e6c73] text-center pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0e5a66]" />
            <span>Seus dados são protegidos em estrito sigilo médico.</span>
          </div>

        </form>
      </div>
    </div>
  );
}
