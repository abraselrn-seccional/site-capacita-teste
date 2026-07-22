import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Lock } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Início', path: '/' },
    { label: 'Próximo Evento', path: '/evento/julho'},
    { label: 'Conheça a Abrasel', path: '/sobre' },
    { label: 'Seja um Parceiro', path: '/parceiros' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1B4332] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/assets/logo-abrasel-40.png"
              alt="Abrasel 40 anos"
              className="w-[120px] md:w-[150px] h-auto object-contain"
              style={{ background: 'none', border: 'none', boxShadow: 'none' }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-[#F97316] ${
                  location.pathname === link.path || location.pathname.startsWith(link.path + '/')
                    ? 'text-[#F97316]'
                    : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="#"
              className="flex items-center gap-2 bg-[#1B4332] border border-white/30 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition-colors"
            >
              <Lock className="w-4 h-4" />
              ÁREA DO ASSOCIADO
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1B4332] border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-sm font-medium py-2 transition-colors ${
                  location.pathname === link.path ? 'text-[#F97316]' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#"
              className="flex items-center gap-2 bg-white/10 border border-white/30 text-white px-4 py-2 rounded-md text-sm font-medium mt-3 w-fit"
            >
              <Lock className="w-4 h-4" />
              ÁREA DO ASSOCIADO
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
