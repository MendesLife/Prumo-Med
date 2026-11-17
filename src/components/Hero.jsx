import React from 'react';
import { Calendar, ArrowRight, Star, ShieldCheck, Activity, Award } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  return (
    <section className="px-3 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-8">
      {/* Inset Canvas Container */}
      <div className="max-w-7xl mx-auto rounded-[28px] lg:rounded-[36px] bg-[#0c1a1d] text-white relative overflow-hidden shadow-card">
        
        {/* Subtle Photographic Background with Dark Vignette */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/centro-cirurgico-moderno.jpg" 
            alt="Ambiente Cirúrgico Prumo Med" 
            className="w-full h-full object-cover object-center opacity-20 filter saturate-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1a1d] via-[#0c1a1d]/90 to-[#0c1a1d]/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a1d] via-transparent to-transparent"></div>
        </div>

        {/* Content Grid */}
        <div className="relative z-10 px-6 sm:px-10 lg:px-16 pt-12 pb-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column: Editorial Headline & Copy (7 cols) */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-7">
              
              {/* Eyebrow Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-[13px] text-[#9fded8] font-normal tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9fded8] animate-pulse"></span>
                <span>Goiânia, GO · Ortopedia de Coluna & Neurocirurgia</span>
              </div>

              {/* H1 Display Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-medium tracking-tighter leading-[1.08] text-white">
                Tratamento Especializado para Dores na Coluna, Nervos e Crânio em Goiânia.
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl">
                A <strong className="text-white font-medium">Prumo Med</strong> conta com uma equipe de Ortopedistas e Neurocirurgiões altamente qualificados, unindo tecnologia avançada e cirurgias minimamente invasivas para tratamento e alívio da dor.
              </p>

              {/* Dual Pill CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center justify-center gap-2 bg-[#0e5a66] hover:bg-[#083c44] text-white font-medium text-sm sm:text-base px-7 py-3.5 rounded-full shadow-sm hover:shadow transition-all duration-200 cursor-pointer group"
                >
                  <Calendar className="w-4 h-4 text-[#9fded8]" />
                  <span>Agende sua Consulta</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </button>

                <a
                  href="#especialidades"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-slate-200 hover:text-white border border-white/20 font-normal text-sm sm:text-base px-6 py-3.5 rounded-full backdrop-blur-md transition-all"
                >
                  <span>Conhecer Tratamentos</span>
                </a>
              </div>

              {/* Stats Row with Hairline Dividers (Aveline Style) */}
              <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
                <div>
                  <div className="text-2xl sm:text-3xl font-medium text-white tracking-tight">
                    +1.500
                  </div>
                  <div className="text-xs sm:text-[13px] text-slate-400 font-light mt-1">
                    Cirurgias realizadas anualmente
                  </div>
                </div>

                <div className="sm:border-l sm:border-white/10 sm:pl-6">
                  <div className="text-2xl sm:text-3xl font-medium text-[#9fded8] tracking-tight">
                    Foco Exclusivo
                  </div>
                  <div className="text-xs sm:text-[13px] text-slate-400 font-light mt-1">
                    Em Coluna, Nervos e Crânio
                  </div>
                </div>

                <div className="sm:border-l sm:border-white/10 sm:pl-6">
                  <div className="text-2xl sm:text-3xl font-medium text-white tracking-tight">
                    Equipe Integrada
                  </div>
                  <div className="text-xs sm:text-[13px] text-slate-400 font-light mt-1">
                    Ortopedista de Coluna e Neurocirurgião
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Lateral Doctors Space (5 cols) */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Clean Inset Card Framing Doctors */}
                <div className="bg-[#102428]/90 border border-white/10 rounded-[28px] p-4 sm:p-5 shadow-2xl backdrop-blur-xl">
                  
                  {/* Top Bar of Card */}
                  <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/10 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#9fded8]"></span>
                      <span className="text-slate-300 font-normal">Corpo Clínico Integrado</span>
                    </div>
                    <span className="text-xs text-white/80 bg-white/10 px-2.5 py-0.5 rounded-full">
                      Goiânia · GO
                    </span>
                  </div>

                  {/* 2x2 Showcase of the Doctors */}
                  <div className="grid grid-cols-2 gap-3">
                    
                    {/* Dr. Vinicius Rios */}
                    <div className="group relative rounded-2xl overflow-hidden bg-[#0c1a1d] border border-white/10">
                      <div className="aspect-[4/5] overflow-hidden">
                        <img 
                          src="/images/dr-vinicius-rios.webp" 
                          alt="Dr. Vinicius Rios"
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a1d] via-[#0c1a1d]/30 to-transparent flex flex-col justify-end p-2.5">
                        <p className="text-xs font-medium text-white leading-tight">Dr. Vinicius Rios</p>
                        <p className="text-[10px] text-[#9fded8] font-light">Ortopedista de Coluna</p>
                        <p className="text-[9px] text-slate-400 font-light">CRM-GO 15251 | RQE 12244</p>
                      </div>
                    </div>

                    {/* Dr. Fernando Esperidião */}
                    <div className="group relative rounded-2xl overflow-hidden bg-[#0c1a1d] border border-white/10">
                      <div className="aspect-[4/5] overflow-hidden">
                        <img 
                          src="/images/dr-fernando-esperidiao.webp" 
                          alt="Dr. Fernando Esperidião"
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a1d] via-[#0c1a1d]/30 to-transparent flex flex-col justify-end p-2.5">
                        <p className="text-xs font-medium text-white leading-tight">Dr. Fernando Esperidião</p>
                        <p className="text-[10px] text-[#9fded8] font-light">Ortopedista de Coluna</p>
                        <p className="text-[9px] text-slate-400 font-light">CRM-GO 17117 | RQE 18815</p>
                      </div>
                    </div>

                    {/* Dr. Lucas Praxedes */}
                    <div className="group relative rounded-2xl overflow-hidden bg-[#0c1a1d] border border-white/10">
                      <div className="aspect-[4/5] overflow-hidden bg-slate-900">
                        <img 
                          src="/images/dr-lucas-praxedes.png" 
                          alt="Dr. Lucas Praxedes"
                          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a1d] via-[#0c1a1d]/30 to-transparent flex flex-col justify-end p-2.5">
                        <p className="text-xs font-medium text-white leading-tight">Dr. Lucas Praxedes</p>
                        <p className="text-[10px] text-[#9fded8] font-light">Neurocirurgião</p>
                        <p className="text-[9px] text-slate-400 font-light">CRM-GO 25461 | RQE 150406</p>
                      </div>
                    </div>

                    {/* Dr. Matheus Guisoni */}
                    <div className="group relative rounded-2xl overflow-hidden bg-[#0c1a1d] border border-white/10">
                      <div className="aspect-[4/5] overflow-hidden bg-slate-900">
                        <img 
                          src="/images/dr-matheus-guisoni.jpg" 
                          alt="Dr. Matheus Guisoni"
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a1d] via-[#0c1a1d]/30 to-transparent flex flex-col justify-end p-2.5">
                        <p className="text-xs font-medium text-white leading-tight">Dr. Matheus Guisoni</p>
                        <p className="text-[10px] text-[#9fded8] font-light">Neurocirurgião</p>
                        <p className="text-[9px] text-slate-400 font-light">CRM-GO 23548 | RQE 20256</p>
                      </div>
                    </div>

                  </div>

                  {/* Floating Trust Badge at bottom of Card */}
                  <div className="mt-3.5 bg-white text-[#0c1a1d] rounded-2xl p-3 flex items-center justify-between gap-3 shadow-pill">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-[#f3f5f4] flex items-center justify-center text-[#f0a93b]">
                        <Star className="w-4 h-4 fill-[#f0a93b]" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-medium">4.9 / 5.0</span>
                          <span className="text-[11px] text-[#5e6c73]">· Google Avaliações</span>
                        </div>
                        <p className="text-[10px] text-[#5e6c73] font-light">Excelência técnica e cuidado humanizado</p>
                      </div>
                    </div>
                    <a
                      href="#medicos"
                      className="text-xs font-medium text-[#0e5a66] hover:text-[#083c44] transition-colors"
                    >
                      Conhecer →
                    </a>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
