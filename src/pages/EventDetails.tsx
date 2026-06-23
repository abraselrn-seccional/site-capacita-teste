import { useParams, Link } from 'react-router-dom';
import {
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Shield,
  BookOpen,
  Users,
  TrendingUp,
  Lightbulb,
  CheckCircle,
  ChevronDown,
  MessageCircle,
  AlertCircle,
} from 'lucide-react';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { eventsData, faqData, REGISTRATION_LINK, WHATSAPP_LINKS, WHATSAPP_MESSAGES } from '@/data/events';

const eventBenefits = [
  { icon: BookOpen, title: 'Conteúdo Atualizado', desc: 'Informações relevantes para o cenário atual' },
  { icon: Users, title: 'Networking', desc: 'Conexão com empresários do setor' },
  { icon: Lightbulb, title: 'Especialistas Convidados', desc: 'Profissionais com experiência comprovada' },
  { icon: TrendingUp, title: 'Aplicação Prática', desc: 'Estratégias para aplicar no dia seguinte' },
];

const EventDetails = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const event = eventsData.find((e) => e.id === eventId);

  if (!event) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-2xl font-bold text-[#1B4332]">Evento não encontrado</h1>
          <Link to="/" className="text-[#F97316] mt-4 inline-block">Voltar ao início</Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Coming Soon state
  if (event.status === 'coming_soon') {
    return (
      <div className="min-h-screen">
        <Header />
        <section className="relative pt-20 bg-[#1B4332]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="max-w-2xl">
              <div className="inline-block bg-orange-500/20 text-orange-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                {event.month} 2026
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">
                Em Breve
              </h1>
              <div className="flex items-center gap-3 text-white/80 mb-8">
                <Calendar className="w-5 h-5 text-[#F97316]" />
                <span>{event.date}/2026</span>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-lg px-6 py-8 text-center">
                <AlertCircle className="w-12 h-12 text-[#F97316] mx-auto mb-4" />
                <p className="text-white text-lg font-medium mb-2">
                  Programação em desenvolvimento.
                </p>
                <p className="text-white/60">
                  Em breve divulgaremos mais informações.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Para quem é */}
        <section className="py-16 bg-[#1B4332]/95">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white uppercase mb-8">
              Para Quem é Este Encontro?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Proprietários de bares',
                'Proprietários de restaurantes',
                'Gestores do setor',
                'Empreendedores do setor alimentício',
                'Associados Abrasel RN',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3">
                  <CheckCircle className="w-5 h-5 text-[#F97316] flex-shrink-0" />
                  <span className="text-white text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="py-16 bg-[#F8F9FA]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B4332] uppercase mb-8">
              Benefícios
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {eventBenefits.map((benefit) => (
                <div key={benefit.title} className="bg-white p-6 rounded-xl border border-gray-100 flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1B4332] rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1B4332] mb-1">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B4332] uppercase mb-8">
              Perguntas Frequentes
            </h2>
            <div className="space-y-3">
              {faqData.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-[#1B4332]">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === index && (
                    <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  // Published state - full content
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-20 bg-[#1B4332]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-block bg-[#F97316] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                {event.month} 2026
              </div>
              <div className="space-y-2 mb-4">
                {event.themes.map((theme, i) => (
                  <h1 key={i} className="text-2xl md:text-3xl font-black text-white leading-tight">
                    {i + 1}. {theme.title}
                  </h1>
                ))}
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-white/80">
                  <Calendar className="w-5 h-5 text-[#F97316]" />
                  <span>{event.date}/2026</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <Clock className="w-5 h-5 text-[#F97316]" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <MapPin className="w-5 h-5 text-[#F97316]" />
                  <span>{event.location} {event.locationDetail && `- ${event.locationDetail}`}</span>
                </div>
              </div>

              <div className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 flex items-center gap-3 mb-8">
                <Shield className="w-5 h-5 text-[#F97316]" />
                <span className="text-white text-sm font-medium">
                  EVENTO EXCLUSIVO PARA ASSOCIADOS ABRASEL RN
                </span>
              </div>

              <a
                href={REGISTRATION_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#ea580c] text-white font-bold px-8 py-4 rounded-lg text-base transition-all shadow-lg shadow-orange-500/20"
              >
                QUERO ME INSCREVER
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <div className="hidden md:block">
              <img
                src="https://mgx-backend-cdn.metadl.com/generate/images/1338573/2026-06-12/qmuisyacaiaq/event-training-seminar.png"
                alt="Evento Abrasel Capacita"
                className="rounded-xl shadow-2xl w-full object-cover aspect-video"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o Encontro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B4332] uppercase mb-6">
            Sobre o Encontro
          </h2>
          <div className="space-y-4">
            {event.about.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-gray-600 leading-relaxed text-base">{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* O que você vai aprender */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B4332] uppercase mb-8">
            O que Você Vai Aprender
          </h2>
          <div className="space-y-4">
            {event.learningTopics.map((topic, index) => (
              <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-100">
                <CheckCircle className="w-5 h-5 text-[#F97316] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultores */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B4332] uppercase mb-8">
            Consultores
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {event.consultants.map((consultant) => (
              <div key={consultant.name} className="text-center">
                <img
                  src={consultant.photo}
                  alt={consultant.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
                />
                <h4 className="font-bold text-[#1B4332] text-lg">{consultant.name}</h4>
                <p className="text-[#F97316] text-sm font-medium mb-2">{consultant.role}</p>
                <p className="text-gray-600 text-sm">{consultant.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="py-16 bg-[#1B4332]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white uppercase mb-8">
            Para Quem é Este Encontro?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Proprietários de bares',
              'Proprietários de restaurantes',
              'Gestores do setor',
              'Empreendedores do setor alimentício',
              'Associados Abrasel RN',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3">
                <CheckCircle className="w-5 h-5 text-[#F97316] flex-shrink-0" />
                <span className="text-white text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programação */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B4332] uppercase mb-8">
            Programação
          </h2>
          <div className="space-y-0">
            {event.schedule.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 py-4 border-b border-gray-100 last:border-0"
              >
                <div className="w-16 text-[#F97316] font-bold text-sm">{item.time}</div>
                <div className="w-3 h-3 rounded-full bg-[#1B4332] flex-shrink-0" />
                <div className="text-gray-700">{item.activity}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B4332] uppercase mb-8">
            Benefícios
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {eventBenefits.map((benefit) => (
              <div key={benefit.title} className="bg-white p-6 rounded-xl border border-gray-100 flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1B4332] rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1B4332] mb-1">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B4332] uppercase mb-8">
            Perguntas Frequentes
          </h2>
          <div className="space-y-3">
            {faqData.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-[#1B4332]">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inscrição - Two Blocks */}
      <section className="py-16 bg-[#1B4332]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white uppercase mb-8 text-center">
            Garanta sua vaga!
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Block 1 - Associado */}
            <div className="bg-white rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold text-[#1B4332] mb-3">Sou Associado</h3>
              <p className="text-gray-600 text-sm mb-6">
                Garanta sua vaga e aproveite este conteúdo exclusivo para associados Abrasel RN.
              </p>
              <a
                href={REGISTRATION_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#ea580c] text-white font-bold px-6 py-3 rounded-lg text-sm transition-all w-full justify-center"
              >
                Quero me inscrever
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            {/* Block 2 - Não associado */}
            <div className="bg-white rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold text-[#1B4332] mb-3">Ainda não sou associado</h3>
              <p className="text-gray-600 text-sm mb-6">
                Associe-se e tenha acesso ao Abrasel Capacita e a muitos outros benefícios exclusivos.
              </p>
              <a
                href={`${WHATSAPP_LINKS.comercial}?text=${encodeURIComponent(WHATSAPP_MESSAGES.conhecerAbrasel)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-[#1B4332] text-[#1B4332] hover:bg-[#1B4332] hover:text-white font-bold px-6 py-3 rounded-lg text-sm transition-all w-full justify-center"
              >
                Quero conhecer a Abrasel
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="mt-8 text-center">
            <a
              href={`${WHATSAPP_LINKS.relacionamento}?text=${encodeURIComponent(WHATSAPP_MESSAGES.falarAbrasel)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#1B4332] font-bold px-8 py-4 rounded-lg text-base transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              FALAR COM A ABRASEL
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventDetails;