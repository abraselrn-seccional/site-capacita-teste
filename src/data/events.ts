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
    location: 'Sebrae',
    locationDetail: 'Auditório Sebrae',
    status: 'published',
    themes: [
      { title: 'O Ingrediente Invisível', description: 'Entenda por que a base de clientes é um dos maiores patrimônios do seu restaurante.'},
      { title: 'IA à La Carte: um menu de possibilidades para bares e restaurantes:', description: 'Descubra como a Inteligência Artificial pode impulsionar suas vendas, fortalecer seu marketing e otimizar a gestão do seu negócio.' },
    ],
    about: 'O encontro de Julho do Abrasel Capacita reunirá estratégias para transformar relacionamento, dados e tecnologia em oportunidades de crescimento para os negócios de alimentação fora do lar.\n\nNa palestra \"O Ingrediente Invisível\", os participantes descobrirão como a base de clientes pode se tornar um dos maiores patrimônios comerciais do restaurante, utilizando dados, relacionamento e CRM para fortalecer a fidelização, aumentar a recorrência e gerar novas oportunidades de vendas.\n\nJá na palestra \"IA à La Carte: um menu de possibilidades para bares e restaurantes\", serão apresentadas formas práticas de aplicar a Inteligência Artificial no dia a dia do negócio, utilizando a tecnologia para otimizar o marketing, o atendimento, as vendas e a gestão, tornando os processos mais eficientes e ampliando as oportunidades de crescimento.\n\nCom uma abordagem prática e focada na realidade do setor, o encontro trará conteúdos aplicáveis, exemplos reais e ferramentas que poderão ser implementadas imediatamente, fortalecendo o relacionamento com os clientes e impulsionando os resultados dos negócios."',
    learningTopics: [ 
      'Como transformar a base de clientes em uma oportunidade de crescimento para o restaurante.',
      'Estratégias de CRM para fortalecer o relacionamento, aumentar a fidelização e gerar novas oportunidades de vendas.',
      'Como utilizar dados dos clientes para criar ações mais personalizadas e aumentar a recorrência.',
      'A importância do relacionamento com clientes na construção de resultados sustentáveis.',
      'Como a Inteligência Artificial pode impulsionar vendas, fortalecer o marketing e otimizar a gestão do negócio.',
      'Aplicações práticas da IA para melhorar processos, comunicação, atendimento e tomada de decisões.',
      'Como utilizar ferramentas de IA para criar estratégias mais eficientes e potencializar os resultados do restaurante.',
      'Práticas para tornar o negócio mais inovador, competitivo e preparado para o futuro.',
      ],
   
    consultants: [
      {
        name: 'Adeycson Siebra',
        role: 'Especialista em CRM e Soluções Digitais',
        photo: '/assets/consultants/adeycson-siebra.jpeg',
        bio: 'Empreendedor na área de tecnologia, fundador de uma empresa especializada na criação de aplicativos e soluções digitais para negócios. Atua no desenvolvimento de ferramentas que ajudam empresas a otimizar processos e melhorar resultados, sendo idealizador do BoraCRM, uma solução voltada para gestão de relacionamento com clientes. No Abrasel Capacita, participa em parceria com a Soft3, levando conhecimento sobre tecnologia, dados e estratégias de relacionamento com clientes.',
      },
      {
        name: 'Erick Belo',
        role: 'Consultor do Sebrae em Marketing e Vendas.',
        photo: '/assets/consultants/erick-belo.jpeg',
        bio: 'Possui 10 anos de internet e 8 anos de tráfego pago, há mais de 5 anos atende empresas no Brasil, portugal, espanha e Estados Unidos.',
      },
    ],
    schedule: [
      { time: '18h00', activity: 'Credenciamento e Networking' },
      { time: '18h30', activity: 'Abertura do Programa' },
      { time: '18h35', activity: 'Palestra: IA à La Carte: um menu de possibilidades para bares e restaurantes.' },
      { time: '18h55', activity: 'Perguntas e Experiências' },
      { time: '19h15', activity: 'Palestra: O Ingrediente Invisível.' },
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
    time: '18h30 às 20h00',
    location: 'Sebrae RN',
    locationDetail: 'Auditório Sebrae',
    status: 'coming_soon',
    themes: [
      { title: 'O Ingrediente Invisível',
       description: 'O maior patrimônio comercial de um restaurante é a base de clientes que ele já conquistou — e que ainda não aprendeu a usar.'},
      { title: 'IA à La Carte: um menu de possibilidades para bares e restaurantes',  
      description: 'Descubra como a Inteligência Artificial pode impulsionar suas vendas, fortalecer seu marketing e otimizar a gestão do seu negócio.'},
  ],
    about:'O encontro de Julho do Abrasel Capacita 2026 abordará estratégias para transformar relacionamento, dados e tecnologia em oportunidades de crescimento para os negócios de alimentação fora do lar.\n\nNa primeira palestra, com o tema "O Ingrediente Invisível", os participantes irão entender como a base de clientes já construída pelo restaurante pode se tornar um dos maiores patrimônios comerciais do negócio. Serão apresentadas estratégias para utilizar dados, relacionamento e ferramentas de CRM para fortalecer a fidelização, aumentar a recorrência e gerar novas oportunidades de vendas.\n\nNa segunda palestra, serão apresentadas estratégias práticas de como utilizar a Inteligência Artificial como uma aliada nas vendas, ajudando restaurantes a melhorar processos, criar novas oportunidades de relacionamento com clientes e potencializar seus resultados.\n\nOs participantes terão acesso a conteúdos práticos, exemplos aplicáveis e estratégias que podem ser utilizadas no dia a dia para fortalecer o relacionamento com clientes e impulsionar o crescimento dos seus negócios.',
    learningTopics: [ 'Como transformar a base de clientes em uma oportunidade de crescimento para o restaurante.',
  'Estratégias de CRM para fortalecer o relacionamento e aumentar a fidelização dos clientes.',
  'Como utilizar dados dos clientes para criar novas oportunidades de vendas.',
  'A importância da recorrência e do relacionamento na geração de receita.',
  'Como aplicar a Inteligência Artificial para melhorar processos comerciais.',
  'Estratégias para utilizar a IA na comunicação e no relacionamento com clientes.',
  'Como criar ações mais eficientes para aumentar vendas e engajamento.',
  'Ferramentas e práticas para tornar o negócio mais preparado para o futuro.',],
    consultants: [
  {
    name: 'Adeycson Siebra',
    role: 'Especialista em CRM e Soluções Digitais',
    photo: '/assets/consultants/adeycson-siebra.jpeg',
    bio: 'Empreendedor na área de tecnologia, fundador de uma empresa especializada na criação de aplicativos e soluções digitais para negócios. Atua no desenvolvimento de ferramentas que ajudam empresas a otimizar processos e melhorar resultados, sendo idealizador do BoraCRM, uma solução voltada para gestão de relacionamento com clientes. No Abrasel Capacita, participa em parceria com a Soft3, levando conhecimento sobre tecnologia, dados e estratégias de relacionamento com clientes.',
  },
  {
    name: 'Erick Belo',
    role: 'Fundador da Agência Omnis e Consultor do Sebrae em Marketing e Vendas',
    photo: '/assets/consultants/erick-belo.jpeg',
    bio: 'Possui 10 anos de experiência no ambiente digital e 8 anos de atuação com tráfego pago. Há mais de 5 anos, atende empresas no Brasil, Portugal, Espanha e Estados Unidos, desenvolvendo estratégias de marketing e vendas para impulsionar resultados através da internet.',
  },
],
    schedule: [ 
      { time: '18h00', activity: 'Credenciamento e Networking' },
      { time: '18h30', activity: 'Abertura do Programa' },
      { time: '18h35', activity: 'Palestra: IA à La Carte: um menu de possibilidades para bares e restaurantes.' },
      { time: '18h55', activity: 'Perguntas e Experiências' },
      { time: '19h15', activity: 'Palestra: O Ingrediente Invisível.' },
      { time: '19h35', activity: 'Perguntas e Experiências' },
      { time: '20h00', activity: 'Encerramento' },
    ],
    partners: [
  { name: 'Adeycson Siebra\nEspecialista em CRM e Soluções Digitais', logo: 
    '/assets/consultants/adeycson-siebra.jpeg' },
  { name: 'Erick Belo\nConsultor do Sebrae em Marketing e Vendas', logo: 
    '/assets/consultants/erick-belo.jpeg' },
],

    partnerStatus:'closed',
    registrationLink: '#', 
  },
  {
    id: 'agosto',
    month: 'Agosto',
    date: '26/08',
    dayOfWeek: 'QUARTA-FEIRA',
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
    date: '28/09',
    dayOfWeek: 'SEGUNDA-FEIRA',
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
    date: '26/10',
    dayOfWeek: 'SEGUNDA-FEIRA',
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
    date: '30/11',
    dayOfWeek: 'SEGUNDA-FEIRA',
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
    answer: 'Convidados externos devem entrar em contato com a Abrasel RN.',
  },
  {
    question: 'Onde será realizado o evento?',
    answer: 'O evento será no Sebrae RN.',
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
