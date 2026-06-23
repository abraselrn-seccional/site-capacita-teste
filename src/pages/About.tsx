import {
  ArrowRight,
  GraduationCap,
  Briefcase,
  Gift,
  Megaphone,
  Handshake,
  PiggyBank,
  MessageCircle,
  Quote,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { testimonials, WHATSAPP_LINKS, WHATSAPP_MESSAGES } from '@/data/events';

const benefits = [
  { icon: GraduationCap, title: 'Capacitações Exclusivas', desc: 'Encontros mensais com especialistas do setor' },
  { icon: Briefcase, title: 'Consultorias', desc: 'Atendimento personalizado para seu negócio' },
  { icon: Gift, title: 'Benefícios e Parcerias', desc: 'Descontos e condições especiais com parceiros' },
  { icon: Megaphone, title: 'Representatividade', desc: 'Voz ativa junto ao poder público e legislação' },
  { icon: Handshake, title: 'Networking', desc: 'Conexão com empresários de todo o estado' },
  { icon: PiggyBank, title: 'Economia para o Negócio', desc: 'Redução de custos operacionais' },
];

const stats = [
  { value: '+900', label: 'Associados' },
  { value: '+15', label: 'Anos de Atuação' },
  { value: '+100', label: 'Eventos Realizados' },
  { value: '98%', label: 'Satisfação' },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-20 bg-[#1B4332]">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://mgx-backend-cdn.metadl.com/generate/images/1338573/2026-06-22/ra2eycqcaieq/abrasel-networking-training-event.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[#1B4332]/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">
              Conheça a <span className="text-[#F97316]">Abrasel RN</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl">
              Muito mais que uma associação. Uma parceira estratégica para o crescimento do seu negócio.
            </p>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B4332] uppercase tracking-tight">
              Benefícios para Associados
            </h2>
            <div className="w-16 h-1 bg-[#F97316] mx-auto mt-4" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-[#F8F9FA] p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-[#1B4332] rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-[#1B4332] text-lg mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que se associar */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1B4332] uppercase tracking-tight mb-6">
                Por que se Associar?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                A Abrasel RN é a maior representante do setor de alimentação fora do lar no Rio Grande do Norte. Ao se associar, você passa a fazer parte de uma rede de empresários comprometidos com a excelência e o crescimento do setor.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Oferecemos suporte completo para o seu negócio: desde capacitações e consultorias até representatividade política e parcerias comerciais que geram economia real.
              </p>
              <ul className="space-y-3">
                {[
                  'Acesso ao programa Abrasel Capacita',
                  'Consultoria jurídica e tributária',
                  'Parcerias com fornecedores',
                  'Representatividade institucional',
                  'Eventos exclusivos de networking',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-[#F97316]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src="https://mgx-backend-cdn.metadl.com/generate/images/1338573/2026-06-22/ra2eycqcaieq/abrasel-networking-training-event.png"
                alt="Networking Abrasel"
                className="rounded-xl shadow-lg w-full object-cover aspect-video"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B4332] uppercase tracking-tight">
              Depoimentos
            </h2>
            <p className="text-gray-600 mt-3">O que nossos associados dizem</p>
            <div className="w-16 h-1 bg-[#F97316] mx-auto mt-4" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-[#F8F9FA] p-6 rounded-xl border border-gray-100"
              >
                <Quote className="w-8 h-8 text-[#F97316]/30 mb-4" />
                <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div>
                  <p className="font-bold text-[#1B4332]">{testimonial.name}</p>
                  <p className="text-gray-500 text-xs">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="py-20 bg-[#1B4332]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">
              Nossos Resultados
            </h2>
            <div className="w-16 h-1 bg-[#F97316] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-[#F97316] mb-2">{stat.value}</div>
                <p className="text-white/70 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B4332] mb-4">
            Faça parte da Abrasel RN
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Junte-se a centenas de empresários que já transformam seus negócios com o apoio da maior associação do setor.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`${WHATSAPP_LINKS.comercial}?text=${encodeURIComponent(WHATSAPP_MESSAGES.falarConsultor)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#ea580c] text-white font-bold px-8 py-4 rounded-lg text-base transition-all shadow-lg shadow-orange-500/20"
            >
              QUERO FALAR COM UM CONSULTOR
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href={`${WHATSAPP_LINKS.relacionamento}?text=${encodeURIComponent(WHATSAPP_MESSAGES.falarWhatsApp)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-lg text-base transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              FALAR NO WHATSAPP
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;