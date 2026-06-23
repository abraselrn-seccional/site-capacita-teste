export interface EventTheme {
  title: string;
  description?: string;
}

export interface Consultant {
  name: string;
  role: string;
  photo: string;
  bio: string;
}

export interface ScheduleItem {
  time: string;
  activity: string;
}

export interface Partner {
  name?: string;
  logo?: string;
}

export interface MonthEvent {
  id: string;
  month: string;
  date: string;
  dayOfWeek: string;
  time: string;
  location: string;
  locationDetail: string;
  status: 'published' | 'coming_soon';
  themes: EventTheme[];
  about: string;
  learningTopics: string[];
  consultants: Consultant[];
  schedule: ScheduleItem[];
  partners: Partner[];
  partnerStatus: '2_available' | '1_available' | 'closed';
  registrationLink: string;
}

export const REGISTRATION_LINK = 'https://docs.google.com/forms/d/e/1FAIpQLSd-PcHgKxQ6tIpXqBw30ikjIzaqwoHDks-DqrwSEpWLyshb6g/viewform?usp=dialog';
export const ASSOCIATION_CONTACT_LINK = 'https://wa.me/558499875257?text=Ol%C3%A1%2C%20quero%20conhecer%20a%20Abrasel%20e%20saber%20mais%20sobre%20os%20benef%C3%ADcios%20para%20associados.';
export const PARTNER_FORM_LINK = 'https://docs.google.com/forms/d/e/1FAIpQLSeQKWM9dMphMusx54SG_DNBlsVOP3Bviz1YuJRfIW5d0zlF_A/viewform?usp=dialog';

export const WHATSAPP_LINKS = {
  relacionamento: 'https://wa.me/558498290030',
  comercial: 'https://wa.me/558499875257',
};

export const WHATSAPP_MESSAGES = {
  conhecerAbrasel: 'Olá, quero conhecer a Abrasel e saber mais sobre os benefícios para associados.',
  falarAbrasel: 'Olá, gostaria de falar com a equipe da Abrasel RN.',
  falarWhatsApp: 'Olá, gostaria de obter mais informações sobre a Abrasel RN.',
  falarConsultor: 'Olá! Tenho interesse em me associar à Abrasel RN e gostaria de conhecer os benefícios e condições de associação.',
};

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/abraselnorn/',
  facebook: 'https://www.facebook.com/AbraselRN',
  youtube: 'https://www.youtube.com/channel/UCi45TOysBsp7Ye5-Qe5h7HA',
  website: 'https://abrasel.com.br/',
};

export const CONTACT_INFO = {
  email: 'abraselrn@gmail.com',
  phone: '(84) 9829-0030',
  whatsapp: '558498290030',
};

export const eventsData: MonthEvent[] = [
  {
    id: 'junho',
    month: 'Junho',
    date: '30/06',
    dayOfWeek: 'TERÇA-FEIRA',
    time: '18h30 às 20h00',
    location: 'Arena das Dunas',
    locationDetail: 'Arena Office – Sala M12',
    status: 'published',
    themes: [
      { title: 'Crédito não é Vilão', description: 'Transforme recursos financeiros em investimentos e crescimento.' },
      { title: 'Gestão Inteligente no iFood: Aumente Vendas e Lucratividade no Delivery', description: 'Estratégias práticas para melhorar a gestão do delivery.' },
    ],
    about: 'O encontro de Junho do Abrasel Capacita 2026 abordará temas essenciais para empresários do setor de alimentação fora do lar.\n\nNa primeira palestra, vamos discutir como utilizar o crédito de forma estratégica para impulsionar o crescimento do negócio, desmistificando a ideia de que crédito é sempre um problema.\n\nNa segunda palestra, serão apresentadas estratégias práticas para melhorar a gestão do iFood, aumentar vendas, otimizar processos e elevar a lucratividade das operações de delivery.\n\nOs participantes terão acesso a conteúdo prático, exemplos reais e orientações aplicáveis ao dia a dia das empresas.',
    learningTopics: [
      'Como utilizar crédito de forma inteligente para expansão e crescimento.',
      'Diferença entre dívida improdutiva e crédito estratégico.',
      'Planejamento financeiro aplicado ao setor de alimentação.',
      'Como melhorar a performance do delivery.',
      'Estratégias de gestão dentro do iFood.',
      'Precificação e lucratividade no delivery.',
      'Indicadores que impactam vendas e resultados.',
      'Como aumentar a eficiência operacional.',
    ],
    consultants: [
      {
        name: 'Rosie Lopes',
        role: 'Consultora de Crédito e Finanças',
        photo: '/assets/consultants/rosie-lopes.jpeg',
        bio: 'Especialista em crédito e finanças para o setor de alimentação fora do lar.',
      },
      {
        name: 'Glauco Myller',
        role: 'Especialista em Gestão e Performance em Delivery',
        photo: '/assets/consultants/glauco-myller.jpeg',
        bio: 'Especialista em gestão e performance em delivery, com foco em estratégias para iFood.',
      },
    ],
    schedule: [
      { time: '18h00', activity: 'Credenciamento e Networking' },
      { time: '18h30', activity: 'Abertura do Programa' },
      { time: '18h35', activity: 'Palestra: Crédito não é Vilão' },
      { time: '18h55', activity: 'Perguntas e Experiências' },
      { time: '19h15', activity: 'Palestra: Gestão Inteligente no iFood: Aumente Vendas e Lucratividade no Delivery' },
      { time: '19h35', activity: 'Perguntas e Experiências' },
      { time: '20h00', activity: 'Encerramento' },
    ],
    partners: [
      { name: 'Rosie Lopes\nConsultora de Crédito e Finanças', logo: '/assets/consultants/rosie-lopes.jpeg' },
      { name: 'Glauco Myller\nGestão em Delivery', logo: '/assets/consultants/glauco-myller.jpeg' },
    ],
    partnerStatus: 'closed',
    registrationLink: '#',
  },
  {
    id: 'julho',
    month: 'Julho',
    date: '28/07',
    dayOfWeek: 'TERÇA-FEIRA',
    time: 'A definir',
    location: 'A definir',
    locationDetail: '',
    status: 'coming_soon',
    themes: [
      { title: 'Em breve' },
      { title: 'Em breve' },
    ],
    about: '',
    learningTopics: [],
    consultants: [],
    schedule: [],
    partners: [
      { name: '', logo: '' },
      { name: '', logo: '' },
    ],
    partnerStatus: '2_available',
    registrationLink: '#',
  },
  {
    id: 'agosto',
    month: 'Agosto',
    date: '25/08',
    dayOfWeek: 'TERÇA-FEIRA',
    time: 'A definir',
    location: 'A definir',
    locationDetail: '',
    status: 'coming_soon',
    themes: [
      { title: 'Em breve' },
      { title: 'Em breve' },
    ],
    about: '',
    learningTopics: [],
    consultants: [],
    schedule: [],
    partners: [
      { name: '', logo: '' },
      { name: '', logo: '' },
    ],
    partnerStatus: '2_available',
    registrationLink: '#',
  },
  {
    id: 'setembro',
    month: 'Setembro',
    date: '29/09',
    dayOfWeek: 'TERÇA-FEIRA',
    time: 'A definir',
    location: 'A definir',
    locationDetail: '',
    status: 'coming_soon',
    themes: [
      { title: 'Em breve' },
      { title: 'Em breve' },
    ],
    about: '',
    learningTopics: [],
    consultants: [],
    schedule: [],
    partners: [
      { name: '', logo: '' },
      { name: '', logo: '' },
    ],
    partnerStatus: '2_available',
    registrationLink: '#',
  },
  {
    id: 'outubro',
    month: 'Outubro',
    date: '27/10',
    dayOfWeek: 'TERÇA-FEIRA',
    time: 'A definir',
    location: 'A definir',
    locationDetail: '',
    status: 'coming_soon',
    themes: [
      { title: 'Em breve' },
      { title: 'Em breve' },
    ],
    about: '',
    learningTopics: [],
    consultants: [],
    schedule: [],
    partners: [
      { name: '', logo: '' },
      { name: '', logo: '' },
    ],
    partnerStatus: '2_available',
    registrationLink: '#',
  },
  {
    id: 'novembro',
    month: 'Novembro',
    date: '24/11',
    dayOfWeek: 'TERÇA-FEIRA',
    time: 'A definir',
    location: 'A definir',
    locationDetail: '',
    status: 'coming_soon',
    themes: [
      { title: 'Em breve' },
      { title: 'Em breve' },
    ],
    about: '',
    learningTopics: [],
    consultants: [],
    schedule: [],
    partners: [
      { name: '', logo: '' },
      { name: '', logo: '' },
    ],
    partnerStatus: '2_available',
    registrationLink: '#',
  },
  {
    id: 'dezembro',
    month: 'Dezembro',
    date: '15/12',
    dayOfWeek: 'TERÇA-FEIRA',
    time: 'A definir',
    location: 'A definir',
    locationDetail: '',
    status: 'coming_soon',
    themes: [
      { title: 'Em breve' },
      { title: 'Em breve' },
    ],
    about: '',
    learningTopics: [],
    consultants: [],
    schedule: [],
    partners: [
      { name: '', logo: '' },
      { name: '', logo: '' },
    ],
    partnerStatus: '2_available',
    registrationLink: '#',
  },
];

export const faqData = [
  {
    question: 'Quem pode participar do evento?',
    answer: 'O evento é exclusivo para associados Abrasel RN. Se você ainda não é associado, entre em contato conosco para conhecer os benefícios da associação.',
  },
  {
    question: 'O evento é gratuito?',
    answer: 'Sim! O Abrasel Capacita é um benefício exclusivo e gratuito para todos os associados Abrasel RN em dia com a associação.',
  },
  {
    question: 'Posso levar um convidado?',
    answer: 'Cada associado pode levar até 1 colaborador do seu estabelecimento. Convidados externos devem entrar em contato com a Abrasel RN.',
  },
  {
    question: 'Onde será realizado o evento?',
    answer: 'O evento será realizado em local a ser confirmado em Natal/RN. O endereço completo será enviado por e-mail aos inscritos.',
  },
];

export const testimonials = [
  {
    name: 'Fernando Augusto',
    role: 'Proprietário – Massa Fina',
    text: 'Associação muito rica! Fonte primordial no desenvolvimento do mercado de alimentos e bebidas. Faço parte com muito orgulho.',
  },
  {
    name: 'Stephanie Lima',
    role: 'Proprietária - Bolotopia',
    text: 'Fazer parte da Abrasel foi um divisor de águas. Com eles tenho acesso contínuo a capacitações e informações atualizadas sobre o setor, mantendo minha empresa sempre alinhada com as tendências do mercado. A rede de empresários proporciona um espaço valioso para tirar dúvidas e receber orientações de profissionais que já enfrentaram os mesmos desafios.',
  },
  {
    name: 'Israel e Dieva',
    role: 'Proprietários - Chef em Kasa',
    text: 'Fazer parte da Abrasel tem sido uma experiência extremamente positiva para nós. Fomos muito bem recebidos e acolhidos, além de participarmos de reuniões e eventos com conteúdos relevantes para o crescimento da nossa empresa. O ambiente empresarial também nos proporcionou importantes parcerias comerciais.',
  },
];