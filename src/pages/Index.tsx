import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Users, BookOpen, Handshake, Star, CheckCircle, MapPin, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { eventsData, REGISTRATION_LINK } from '@/data/events';

const benefits = [
  { icon: BookOpen, title: 'Conteúdo Prático', desc: 'Aplicação imediata no seu negócio' },
  { icon: Handshake, title: 'Networking', desc: 'Conexão com outros empresários do setor' },
  { icon: Star, title: 'Estratégias Aplicáveis', desc: 'Técnicas comprovadas de gestão' },
  { icon: Users, title: 'Mais Gestão', desc: 'Ferramentas para otimizar operações' },
  { icon: CheckCircle, title: 'Mais Resultados', desc: 'Aumento real de faturamento' },
];

const nextEvent = eventsData.find((e) => e.status === 'published');

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-[#1B4332] pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B4332] via-[#1B4332]/95 to-[#1B4332]/70 z-10" />
        <img
          src="https://mgx-backend-cdn.metadl.com/generate/images/1338573/2026-06-12/qmuislicaica/hero-banner-capacita-event.png"
          alt="Abrasel Capacita"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="inline-block bg-[#F97316] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Exclusivo para Associados
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4">
              ABRASEL<br />CAPACITA <span className="text-[#F97316]">2026</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-medium mb-3">
              Programa de capacitação exclusivo para associados Abrasel RN.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-8 max-w-lg">
              Capacitações mensais com especialistas convidados para impulsionar resultados, gestão e crescimento dos negócios de alimentação fora do lar.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
              {[
                'Um encontro por mês',
                'Consultores especializados',
                'Conteúdo prático',
                'Networking entre empresários',
                'Exclusivo para associados',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-white/80 text-sm">
                  <CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            {nextEvent && (
              <a
                href={REGISTRATION_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#ea580c] text-white font-bold px-8 py-4 rounded-lg text-base transition-all shadow-lg shadow-orange-500/20"
              >
                QUERO PARTICIPAR
                <ArrowRight className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Próximo Evento */}
      {nextEvent && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1B4332] uppercase tracking-tight">
                Próximo Evento
              </h2>
              <div className="w-16 h-1 bg-[#F97316] mx-auto mt-4" />
            </div>

            <div className="bg-gradient-to-br from-[#f8faf9] to-white border border-gray-100 rounded-2xl p-8 md:p-12 shadow-sm">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-block bg-green-100 text-green-800 text-xs font-bold uppercase px-3 py-1 rounded-full mb-4">
                    Inscrições Abertas
                  </div>
                  <div className="space-y-2 mb-4">
                    {nextEvent.themes.map((theme, i) => (
                      <h3 key={i} className="text-xl md:text-2xl font-bold text-[#1B4332]">
                        {i + 1}. {theme.title}
                      </h3>
                    ))}
                  </div>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-gray-700">
                      <Calendar className="w-5 h-5 text-[#F97316]" />
                      <span className="font-medium">30 de Junho de 2026 • {nextEvent.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <MapPin className="w-5 h-5 text-[#F97316]" />
                      <span className="font-medium">{nextEvent.location} - {nextEvent.locationDetail}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <Users className="w-5 h-5 text-[#F97316]" />
                      <span className="font-medium">
                        {nextEvent.consultants.map((c) => c.name).join(' e ')}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={REGISTRATION_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#ea580c] text-white font-bold px-6 py-3 rounded-lg text-sm transition-all"
                    >
                      QUERO ME INSCREVER
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <Link
                      to={`/evento/${nextEvent.id}`}
                      className="inline-flex items-center gap-2 border-2 border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-white font-bold px-6 py-3 rounded-lg text-sm transition-all"
                    >
                      VER DETALHES
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
                <div className="hidden md:block">
                  <img
                    src="https://mgx-backend-cdn.metadl.com/generate/images/1338573/2026-06-12/qmuisyacaiaq/event-training-seminar.png"
                    alt="Próximo evento"
                    className="rounded-xl shadow-lg w-full object-cover aspect-video"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Calendário Anual */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B4332] uppercase tracking-tight">
              Calendário 2026
            </h2>
            <p className="text-gray-600 mt-3">Confira as datas de cada encontro mensal</p>
            <div className="w-16 h-1 bg-[#F97316] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {eventsData.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`px-5 py-3 ${event.status === 'published' ? 'bg-[#1B4332]' : 'bg-gray-700'}`}>
                  <h4 className="text-white font-bold text-sm uppercase tracking-wide">{event.month}</h4>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-2xl font-bold text-[#F97316]">{event.date}</span>
                  </div>
                  <p className="text-gray-500 text-xs uppercase font-medium mb-3">{event.dayOfWeek}</p>
                  <div className="space-y-1 mb-3 min-h-[40px]">
                    {event.themes.map((theme, i) => (
                      <p key={i} className="text-gray-600 text-xs leading-tight">
                        {theme.title !== 'Em breve' ? `${i + 1}. ${theme.title}` : ''}
                      </p>
                    ))}
                  </div>
                  <span
                    className={`text-xs font-bold uppercase px-2 py-1 rounded-full ${
                      event.status === 'published'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-orange-100 text-orange-700'
                    }`}
                  >
                    {event.status === 'published' ? 'Inscrições Abertas' : 'Em Breve'}
                  </span>
                  <Link
                    to={`/evento/${event.id}`}
                    className="mt-4 flex items-center gap-1 text-[#1B4332] font-semibold text-sm hover:text-[#F97316] transition-colors"
                  >
                    Ver Detalhes <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que Participar */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B4332] uppercase tracking-tight">
              Por que Participar?
            </h2>
            <div className="w-16 h-1 bg-[#F97316] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center p-6">
                <div className="w-14 h-14 bg-[#1B4332] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-bold text-[#1B4332] mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-[#1B4332] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://mgx-backend-cdn.metadl.com/generate/images/1338573/2026-06-12/qmuiulqcaiaa/networking-event-professionals.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Reserve estas datas na sua agenda
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Prepare-se para transformar o seu negócio com o Abrasel Capacita 2026.
          </p>
          {nextEvent && (
            <a
              href={REGISTRATION_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#ea580c] text-white font-bold px-8 py-4 rounded-lg text-base transition-all shadow-lg shadow-orange-500/30"
            >
              QUERO PARTICIPAR
              <ArrowRight className="w-5 h-5" />
            </a>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;