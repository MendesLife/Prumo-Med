import React, { useState } from 'react';
import { Calendar, Instagram, ArrowUpRight, Award, ShieldCheck, Check } from 'lucide-react';

export default function Team({ onOpenBooking }) {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const doctors = [
    {
      num: '01',
      name: 'Dr. Vinicius Rios',
      specialty: 'Ortopedista de Coluna',
      crm: 'CRM-GO 15251',
      rqe: 'RQE 12244',
      instagram: 'https://www.instagram.com/drviniciusrios/',
      instagramUser: '@drviniciusrios',
      photo: '/images/dr-vinicius-rios.webp',
      degree: 'Especialista em Coluna Vertebral & Cirurgia Minimamente Invasiva',
      bio: 'Ortopedista dedicado ao tratamento das patologias complexas da coluna vertebral, artrodeses minimamente invasivas, hérnias de disco e deformidades. Prioriza abordagens modernas para alívio consistente da dor e reabilitação ágil.',
      experience: 'Ortopedia de Coluna',
      location: 'Goiânia - GO',
      procedures: ['Cirurgia de Coluna', 'Artrodese Lombar', 'Hérnia Discal', 'Técnicas Minimamente Invasivas']
    },
    {
      num: '02',
      name: 'Dr. Fernando Esperidião',
      specialty: 'Ortopedista de Coluna',
      crm: 'CRM-GO 17117',
      rqe: 'RQE 18815',
      instagram: 'https://www.instagram.com/drfernandoesperidiao/',
      instagramUser: '@drfernandoesperidiao',
      photo: '/images/dr-fernando-esperidiao.webp',
      degree: 'Especialista em Endoscopia de Coluna & Degeneração Vertebral',
      bio: 'Especialista com sólida formação em cirurgias endoscópicas de coluna, atuando no tratamento de dores lombares e cervicais, estenoses de canal medular e escolioses com intervenções de mínimo trauma cirúrgico.',
      experience: 'Endoscopia Vertebral',
      location: 'Goiânia - GO',
      procedures: ['Endoscopia de Coluna', 'Dor Cervical', 'Estenose de Canal', 'Escoliose']
    },
    {
      num: '03',
      name: 'Dr. Lucas Praxedes',
      specialty: 'Neurocirurgião',
      crm: 'CRM-GO 25461',
      rqe: 'RQE 150406',
      instagram: 'https://www.instagram.com/praxedes.coluna/',
      instagramUser: '@praxedes.coluna',
      photo: '/images/dr-lucas-praxedes.png',
      degree: 'Membro da Sociedade Brasileira de Neurocirurgia (SBN)',
      bio: 'Neurocirurgião com formação nas principais instituições do país. Atuação destacada em neuronavegação, microneurocirurgia de coluna, descompressão de raízes nervosas e tratamento de dores ciáticas refratárias.',
      experience: 'Neurocirurgia Espinhal',
      location: 'Goiânia - GO',
      procedures: ['Neuronavegação 3D', 'Nervos Periféricos', 'Dor Ciática', 'Microcirurgia']
    },
    {
      num: '04',
      name: 'Dr. Matheus Guisoni',
      specialty: 'Neurocirurgião',
      crm: 'CRM-GO 23548',
      rqe: 'RQE 20256',
      instagram: 'https://www.instagram.com/matheusguisoni/',
      instagramUser: '@matheusguisoni',
      photo: '/images/dr-matheus-guisoni.jpg',
      degree: 'Especialista em Microcirurgia de Crânio & Neurocirurgia Vascular',
      bio: 'Neurocirurgião atuante no tratamento de alta complexidade de tumores cerebrais e cranianos, aneurismas, malformações arteriovenosas (MAVs) e hidrocefalia, aliando tecnologia intraoperatória e segurança neurológica.',
      experience: 'Crânio & Vascular',
      location: 'Goiânia - GO',
      procedures: ['Tumores Cerebrais', 'Aneurismas e MAVs', 'Microcirurgia de Crânio', 'Cirurgia de Nervos']
    }
  ];

  const currentDoc = doctors[selectedIdx];

  return (
    <section id="medicos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      
      {/* Eyebrow & Headline */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#eaeeed]">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f3f5f4] text-xs text-[#0e5a66] font-medium tracking-wide">
            Corpo Clínico Integrado
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-medium text-[#0c1a1d] tracking-tight leading-tight">
            Especialistas Comprometidos com sua Recuperação
          </h2>
          <p className="text-sm sm:text-base text-[#5e6c73] font-light">
            Ortopedistas e Neurocirurgiões com formação nos centros médicos de maior prestígio do Brasil e experiência internacional.
          </p>
        </div>

        <div>
          <button
            onClick={() => onOpenBooking(`Consulta com ${currentDoc.name}`)}
            className="inline-flex items-center gap-2 bg-[#0e5a66] hover:bg-[#083c44] text-white text-xs sm:text-sm font-medium px-6 py-3 rounded-full shadow-sm transition-all cursor-pointer"
          >
            <span>Agendar com Especialista</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Two-Column Specialist Split Showcase (Aveline Signature Layout) */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* Left Column: Large Editorial Portrait & Floating Badges (5 cols) */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-[28px] lg:rounded-[36px] overflow-hidden bg-[#0c1a1d] shadow-card group aspect-[4/5] max-w-md mx-auto lg:max-w-none">
            <img 
              src={currentDoc.photo} 
              alt={currentDoc.name}
              className="w-full h-full object-cover object-top transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a1d]/80 via-transparent to-transparent"></div>

            {/* Floating Top Pill */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-medium text-[#0c1a1d] border border-white/20 shadow-sm flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0e5a66]"></span>
              <span>{currentDoc.specialty}</span>
            </div>

            {/* Floating Bottom Card on Image */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-float">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm sm:text-base font-medium text-[#0c1a1d]">
                    {currentDoc.name}
                  </h4>
                  <p className="text-xs text-[#0e5a66] font-normal">
                    {currentDoc.crm} • {currentDoc.rqe}
                  </p>
                </div>
                <a
                  href={currentDoc.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#f3f5f4] text-[#0c1a1d] hover:bg-pink-50 hover:text-pink-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Tabbed Numbered List 01-04 (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          {doctors.map((doc, idx) => {
            const isSelected = selectedIdx === idx;
            return (
              <div 
                key={doc.num}
                className={`rounded-2xl transition-all duration-300 border ${
                  isSelected 
                    ? 'bg-white border-[#eaeeed] shadow-card p-6 sm:p-7' 
                    : 'bg-[#f3f5f4]/60 border-transparent p-5 hover:bg-[#f3f5f4] cursor-pointer'
                }`}
                onClick={() => setSelectedIdx(idx)}
              >
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className={`text-xs font-mono font-medium tracking-wider ${
                      isSelected ? 'text-[#0e5a66]' : 'text-[#5e6c73]'
                    }`}>
                      {doc.num}
                    </span>
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium text-[#0c1a1d]">
                        {doc.name}
                      </h3>
                      <p className="text-xs text-[#5e6c73] font-light">
                        {doc.specialty} · {doc.crm}
                      </p>
                    </div>
                  </div>

                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs transition-colors ${
                    isSelected ? 'bg-[#0e5a66] text-white' : 'bg-white text-[#5e6c73] border border-[#eaeeed]'
                  }`}>
                    {isSelected ? '✓' : '→'}
                  </span>
                </div>

                {/* Expanded Details when Selected */}
                {isSelected && (
                  <div className="mt-5 pt-5 border-t border-[#eaeeed] space-y-4 animate-fadeIn">
                    <p className="text-xs sm:text-[13px] text-[#44555a] font-light leading-relaxed">
                      {doc.bio}
                    </p>

                    {/* 3-Column Metadata Grid (Aveline Style) */}
                    <div className="grid grid-cols-3 gap-2 py-2 border-y border-[#eaeeed] text-center">
                      <div>
                        <div className="text-[10px] text-[#5e6c73] uppercase tracking-wider">Atuação</div>
                        <div className="text-xs font-medium text-[#0c1a1d] mt-0.5">{doc.experience}</div>
                      </div>
                      <div className="border-x border-[#eaeeed]">
                        <div className="text-[10px] text-[#5e6c73] uppercase tracking-wider">Registro</div>
                        <div className="text-xs font-medium text-[#0c1a1d] mt-0.5">{doc.rqe}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-[#5e6c73] uppercase tracking-wider">Cidade</div>
                        <div className="text-xs font-medium text-[#0c1a1d] mt-0.5">{doc.location}</div>
                      </div>
                    </div>

                    {/* Procedures Tags & Actions */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                      <div className="flex flex-wrap gap-1.5">
                        {doc.procedures.map((p, pIdx) => (
                          <span key={pIdx} className="text-[11px] bg-[#f3f5f4] text-[#44555a] px-2.5 py-0.5 rounded-full font-light">
                            {p}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2">
                        <a
                          href={doc.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-[#5e6c73] hover:text-pink-600 font-medium px-3 py-1.5 rounded-full border border-[#eaeeed] hover:border-pink-300 transition-colors"
                        >
                          <Instagram className="w-3.5 h-3.5" />
                          <span>{doc.instagramUser}</span>
                        </a>

                        <button
                          onClick={() => onOpenBooking(`Consulta com ${doc.name}`)}
                          className="inline-flex items-center gap-1.5 text-xs text-white bg-[#0e5a66] hover:bg-[#083c44] font-medium px-4 py-1.5 rounded-full shadow-sm transition-colors cursor-pointer"
                        >
                          <Calendar className="w-3.5 h-3.5" />
                          <span>Agendar Consulta</span>
                        </button>
                      </div>
                    </div>
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
