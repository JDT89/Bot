import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Bot, Sparkles } from 'lucide-react';
import { DISCORD_INVITE_URL } from '@/data/constants';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Commands', path: '/commands' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'FAQ', path: '/faq' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-astra-dark/90 backdrop-blur-lg border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group"
            aria-label="AstraBot Home"
          >
            <div className="w-9 h-9 rounded-xl bg-astra-lime/10 border border-astra-lime/30 flex items-center justify-center group-hover:bg-astra-lime/20 transition-colors">
              <Bot className="w-5 h-5 text-astra-lime" />
            </div>
            <span className="font-display font-bold text-lg text-astra-text group-hover:text-astra-lime transition-colors">
              AstraBot
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive(link.path)
                    ? 'text-astra-lime bg-astra-lime/10'
                    : 'text-astra-text-muted hover:text-astra-text hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/faq"
              className="px-4 py-2 text-sm font-medium text-astra-text-muted hover:text-astra-text transition-colors"
            >
              Support
            </Link>
            <a
              href={DISCORD_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="astra-btn-primary text-xs"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Add to Discord
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-astra-text-muted hover:text-astra-text hover:bg-white/5 transition-colors"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 bg-astra-charcoal/95 backdrop-blur-lg border-t border-white/5">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  isActive(link.path)
                    ? 'text-astra-lime bg-astra-lime/10'
                    : 'text-astra-text-muted hover:text-astra-text hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t border-white/5 flex flex-col gap-2">
            <a
              href={DISCORD_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="astra-btn-primary justify-center"
            >
              <Sparkles className="w-4 h-4" />
              Add to Discord
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
