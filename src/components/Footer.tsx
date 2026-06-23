import { Mail, Phone, Globe, Instagram, Facebook, Youtube } from 'lucide-react';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/data/events';

const Footer = () => {
  return (
    <footer className="bg-[#1B4332] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <div className="mb-4">
              <img
                src="/assets/logo-abrasel-40.png"
                alt="Abrasel 40 anos"
                className="w-[100px] md:w-[130px] h-auto object-contain"
                style={{ background: 'none', border: 'none', boxShadow: 'none' }}
              />
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Associação Brasileira de Bares e Restaurantes - Seccional Rio Grande do Norte.
              Representando e fortalecendo o setor de alimentação fora do lar.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Contato</h4>
            <div className="space-y-3">
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 text-white/70 text-sm hover:text-[#F97316] transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                {CONTACT_INFO.email}
              </a>
              <a href={`tel:+55${CONTACT_INFO.whatsapp}`} className="flex items-center gap-3 text-white/70 text-sm hover:text-[#F97316] transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                {CONTACT_INFO.phone}
              </a>
              <a href={SOCIAL_LINKS.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/70 text-sm hover:text-[#F97316] transition-colors">
                <Globe className="w-4 h-4 flex-shrink-0" />
                abrasel.com.br
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Redes Sociais</h4>
            <div className="flex items-center gap-4">
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F97316] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F97316] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F97316] transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-white/50 text-sm">
            © 2026 Abrasel RN. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;