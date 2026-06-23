import { ArrowRight, Calendar, CheckCircle, MessageCircle, Users, FileText, Send, Handshake } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { eventsData, PARTNER_FORM_LINK, WHATSAPP_LINKS, WHATSAPP_MESSAGES } from '@/data/events';

const howItWorks = [
  { icon: FileText, step: '01', title: 'Escolha o mês', desc: 'Selecione a edição que deseja apoiar' },
  { icon: Send, step: '02', title: 'Manifeste interesse', desc: 'Preencha o formulário de interesse' },
  { icon: Handshake, step: '03', title: 'Alinhamento', desc: 'Nossa equipe entrará em contato' },
  { icon: Users, step: '04', title: 'Parceria ativa', desc: 'Sua marca presente no evento' },
];

const Partners = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-20 bg-[#1B4332]">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://mgx-backend-cdn.metadl.com/generate/images/1338573/2026-06-22/ra2hs2icaifa/partner-section-hero-speaker.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[#1B4332]/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">
              SEJA UM PARCEIRO DO <span className="text-[#F97316]">CAPACITA</span>
            </h1>
            <p className="text-white/70 text-lg">
              Conecte sua marca ao maior programa de capacitação do setor de alimentação fora do lar no RN. Cada edição conta com vagas exclusivas para parceiros.
            </p>
          </div>
        </div>
      </section>

      {/* Calendário de Parceiros */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B4332] uppercase tracking-tight">
              Calendário 2026
            </h2>
            <p className="text-gray-600 mt-3">Vagas de parceria disponíveis por edição</p>
            <div className="w-16 h-1 bg-[#F97316] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {eventsData.map((event) => {
              const partner1Filled = !!(event.partners[0]?.logo);
              const partner2Filled = !!(event.partners[1]?.logo);
              const bothFilled = partner1Filled && partner2Filled;

              let statusText = '';
              let statusColor = '';
              if (event.partnerStatus === 'closed' || bothFilled) {
                statusText = 'VAGAS PREENCHIDAS';
                statusColor = 'text-red-600 bg-red-50';
              } else if (event.partnerStatus === '1_available' || partner1Filled || partner2Filled) {
                statusText = '1 vaga disponível';
                statusColor = 'text-orange-600 bg-orange-50';
              } else {
                statusText = '2 vagas disponíveis';
                statusColor = 'text-green-600 bg-green-50';
              }

              return (
                <div
                  key={event.id}
                  className="bg-[#F8F9FA] rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="p-6">
                    <h4 className="text-[#1B4332] font-bold text-lg mb-2">{event.month}</h4>
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-2xl font-bold text-[#F97316]">{event.date}</span>
                    </div>
                    <p className="text-gray-500 text-xs uppercase font-medium mb-4">{event.dayOfWeek}</p>

                    {/* Partner Slots */}
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-3">
                        {partner1Filled ? (
                          <>
                            <img
                              src={event.partners[0]?.logo}
                              alt={event.partners[0]?.name?.split('\n')[0] || 'Parceiro 1'}
                              className="w-10 h-10 rounded-lg object-cover border-2 border-green-300"
                            />
                            <div className="flex flex-col">
                              {event.partners[0]?.name?.split('\n').map((line, i) => (
                                <span key={i} className={`text-sm ${i === 0 ? 'text-gray-800 font-semibold' : 'text-gray-500 text-xs'}`}>
                                  {line}
                                </span>
                              ))}
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="w-10 h-10 rounded-lg border-2 border-dashed border-gray-300 bg-white flex items-center justify-center">
                              <span className="text-gray-400 text-xs font-bold">P1</span>
                            </div>
                            <span className="text-sm text-gray-600">Parceiro 01</span>
                          </>
                        )}
                      </div>
                      <div className="flex items-center gap-3">
                        {partner2Filled ? (
                          <>
                            <img
                              src={event.partners[1]?.logo}
                              alt={event.partners[1]?.name?.split('\n')[0] || 'Parceiro 2'}
                              className="w-10 h-10 rounded-lg object-cover border-2 border-green-300"
                            />
                            <div className="flex flex-col">
                              {event.partners[1]?.name?.split('\n').map((line, i) => (
                                <span key={i} className={`text-sm ${i === 0 ? 'text-gray-800 font-semibold' : 'text-gray-500 text-xs'}`}>
                                  {line}
                                </span>
                              ))}
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="w-10 h-10 rounded-lg border-2 border-dashed border-gray-300 bg-white flex items-center justify-center">
                              <span className="text-gray-400 text-xs font-bold">P2</span>
                            </div>
                            <span className="text-sm text-gray-600">Parceiro 02</span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Status */}
                    <div className={`text-xs font-bold px-3 py-1.5 rounded-full inline-block ${statusColor}`}>
                      {statusText}
                    </div>

                    {/* Button */}
                    {!(event.partnerStatus === 'closed' || bothFilled) && (
                      <a
                        href={PARTNER_FORM_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 flex items-center justify-center gap-2 border border-[#1B4332] text-[#1B4332] hover:bg-[#1B4332] hover:text-white font-semibold px-4 py-2.5 rounded-lg text-sm transition-all w-full"
                      >
                        Quero ser parceiro
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 bg-[#1B4332]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">
              Como Funciona?
            </h2>
            <div className="w-16 h-1 bg-[#F97316] mx-auto mt-4" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-[#F97316] font-black text-sm mb-2">{item.step}</div>
                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[#F97316]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Quer saber mais sobre as vagas de parceria?
          </h3>
          <p className="text-white/80 mb-6">
            Entre em contato com nossa equipe comercial e saiba como associar sua marca ao Capacita.
          </p>
          <a
            href={`${WHATSAPP_LINKS.relacionamento}?text=${encodeURIComponent(WHATSAPP_MESSAGES.falarWhatsApp)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-green-700 font-bold px-8 py-4 rounded-lg text-base transition-all hover:bg-gray-100"
          >
            <MessageCircle className="w-5 h-5" />
            FALAR NO WHATSAPP
            <ArrowRight className="w-5 h-5 text-[#F97316]" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;