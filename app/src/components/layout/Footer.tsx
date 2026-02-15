import { Link } from 'react-router-dom';
import { Bot, Twitter, Github, MessageCircle } from 'lucide-react';
import { SUPPORT_SERVER_URL, TWITTER_URL, GITHUB_URL, BOT_TAGLINE } from '@/data/constants';

const footerLinks = {
  product: [
    { name: 'Features', path: '/#features' },
    { name: 'Commands', path: '/commands' },
    { name: 'Pricing', path: '/pricing' },
  ],
  support: [
    { name: 'Documentation', path: '/commands' },
    { name: 'Status', path: '#' },
    { name: 'Contact', path: '/faq' },
  ],
  legal: [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-astra-charcoal border-t border-white/5">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="flex items-center gap-2.5 group mb-4"
              aria-label="AstraBot Home"
            >
              <div className="w-10 h-10 rounded-xl bg-astra-lime/10 border border-astra-lime/30 flex items-center justify-center group-hover:bg-astra-lime/20 transition-colors">
                <Bot className="w-5 h-5 text-astra-lime" />
              </div>
              <span className="font-display font-bold text-xl text-astra-text group-hover:text-astra-lime transition-colors">
                AstraBot
              </span>
            </Link>
            <p className="text-astra-text-muted text-sm leading-relaxed max-w-sm mb-6">
              {BOT_TAGLINE}
            </p>
            <div className="flex items-center gap-3">
              <a
                href={TWITTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-astra-text-muted hover:text-astra-lime hover:border-astra-lime/30 hover:bg-astra-lime/10 transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={SUPPORT_SERVER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-astra-text-muted hover:text-astra-lime hover:border-astra-lime/30 hover:bg-astra-lime/10 transition-all"
                aria-label="Discord Support Server"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-astra-text-muted hover:text-astra-lime hover:border-astra-lime/30 hover:bg-astra-lime/10 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-display font-semibold text-sm text-astra-text uppercase tracking-wider mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-astra-text-muted hover:text-astra-lime transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-display font-semibold text-sm text-astra-text uppercase tracking-wider mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-astra-text-muted hover:text-astra-lime transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-display font-semibold text-sm text-astra-text uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-astra-text-muted hover:text-astra-lime transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-astra-text-muted">
            © {new Date().getFullYear()} AstraBot. All rights reserved.
          </p>
          <p className="text-xs text-astra-text-muted/60">
            Not affiliated with Discord Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
