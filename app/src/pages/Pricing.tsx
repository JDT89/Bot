import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, X, Sparkles, Zap, Crown, AlertCircle } from 'lucide-react';
import { pricingTiers, comparisonFeatures } from '@/data/pricing';
import { DISCORD_INVITE_URL } from '@/data/constants';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

gsap.registerPlugin(ScrollTrigger);

export function Pricing() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [showComingSoon, setShowComingSoon] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pricing-card', {
        scrollTrigger: {
          trigger: pageRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power2.out',
      });

      gsap.from('.comparison-table', {
        scrollTrigger: {
          trigger: '.comparison-table',
          start: 'top 85%',
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power2.out',
      });
    });

    return () => ctx.revert();
  }, []);

  const handleUpgradeClick = (_tierId: string, ctaLink: string) => {
    if (ctaLink === '#coming-soon') {
      setShowComingSoon(true);
    }
  };

  const getTierIcon = (tierId: string) => {
    switch (tierId) {
      case 'free':
        return Sparkles;
      case 'pro':
        return Zap;
      case 'ultra':
        return Crown;
      default:
        return Sparkles;
    }
  };

  return (
    <div ref={pageRef} className="min-h-screen pt-24 pb-16">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-display font-bold text-4xl lg:text-5xl text-astra-text mb-4">
              Simple pricing
            </h1>
            <p className="text-astra-text-muted max-w-2xl mx-auto">
              Start free. Upgrade when you need more power. One subscription covers all your servers.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20">
            {pricingTiers.map((tier) => {
              const TierIcon = getTierIcon(tier.id);
              return (
                <div
                  key={tier.id}
                  className={`pricing-card astra-card p-6 lg:p-8 flex flex-col relative ${
                    tier.highlighted ? 'ring-2 ring-astra-lime/50' : ''
                  }`}
                >
                  {tier.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-astra-lime text-astra-dark">
                        {tier.badge}
                      </span>
                    </div>
                  )}

                  {/* Tier Header */}
                  <div className="text-center mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                        tier.highlighted
                          ? 'bg-astra-lime/20'
                          : 'bg-white/5'
                      }`}
                    >
                      <TierIcon
                        className={`w-6 h-6 ${
                          tier.highlighted ? 'text-astra-lime' : 'text-astra-text-muted'
                        }`}
                      />
                    </div>
                    <h2 className="font-display font-bold text-2xl text-astra-text mb-2">
                      {tier.name}
                    </h2>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="font-display font-bold text-4xl text-astra-text">
                        {tier.price}
                      </span>
                      <span className="text-astra-text-muted">{tier.priceSubtext}</span>
                    </div>
                    <p className="text-sm text-astra-text-muted mt-3">{tier.description}</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.features.slice(0, 6).map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-astra-lime flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-astra-text-muted/40 flex-shrink-0 mt-0.5" />
                        )}
                        <span
                          className={`text-sm ${
                            feature.included ? 'text-astra-text' : 'text-astra-text-muted/50'
                          }`}
                        >
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  {tier.id === 'free' ? (
                    <a
                      href={DISCORD_INVITE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="astra-btn-secondary justify-center w-full"
                    >
                      {tier.ctaText}
                    </a>
                  ) : (
                    <button
                      onClick={() => handleUpgradeClick(tier.id, tier.ctaLink)}
                      className={`justify-center w-full ${
                        tier.highlighted ? 'astra-btn-primary' : 'astra-btn-secondary'
                      }`}
                    >
                      {tier.ctaText}
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          {/* Comparison Table */}
          <div className="comparison-table">
            <h2 className="font-display font-bold text-2xl text-astra-text text-center mb-8">
              Feature comparison
            </h2>

            <div className="astra-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/5">
                      <th className="text-left px-6 py-4 text-sm font-medium text-astra-text-muted">
                        Feature
                      </th>
                      <th className="text-center px-6 py-4 text-sm font-medium text-astra-text">
                        Free
                      </th>
                      <th className="text-center px-6 py-4 text-sm font-medium text-astra-lime">
                        Pro
                      </th>
                      <th className="text-center px-6 py-4 text-sm font-medium text-astra-text">
                        Ultra
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {comparisonFeatures.map((feature, index) => (
                      <tr key={index} className="hover:bg-white/[0.02]">
                        <td className="px-6 py-4 text-sm text-astra-text">{feature.name}</td>
                        <td className="px-6 py-4 text-center text-sm text-astra-text-muted">
                          {feature.free === '✓' ? (
                            <Check className="w-5 h-5 text-astra-lime mx-auto" />
                          ) : feature.free === '—' ? (
                            <X className="w-5 h-5 text-astra-text-muted/30 mx-auto" />
                          ) : (
                            feature.free
                          )}
                        </td>
                        <td className="px-6 py-4 text-center text-sm text-astra-text-muted">
                          {feature.pro === '✓' ? (
                            <Check className="w-5 h-5 text-astra-lime mx-auto" />
                          ) : feature.pro === '—' ? (
                            <X className="w-5 h-5 text-astra-text-muted/30 mx-auto" />
                          ) : (
                            feature.pro
                          )}
                        </td>
                        <td className="px-6 py-4 text-center text-sm text-astra-text-muted">
                          {feature.ultra === '✓' ? (
                            <Check className="w-5 h-5 text-astra-lime mx-auto" />
                          ) : feature.ultra === '—' ? (
                            <X className="w-5 h-5 text-astra-text-muted/30 mx-auto" />
                          ) : (
                            feature.ultra
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* FAQ Note */}
          <div className="mt-12 text-center">
            <p className="text-astra-text-muted text-sm">
              Have questions? Check out our{' '}
              <a href="/faq" className="text-astra-lime hover:underline">
                FAQ
              </a>{' '}
              or{' '}
              <a href={DISCORD_INVITE_URL} className="text-astra-lime hover:underline">
                join our support server
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Coming Soon Dialog */}
      <Dialog open={showComingSoon} onOpenChange={setShowComingSoon}>
        <DialogContent className="astra-card border-white/10">
          <DialogHeader>
            <DialogTitle className="font-display font-bold text-xl text-astra-text flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-astra-lime" />
              Coming Soon
            </DialogTitle>
            <DialogDescription className="text-astra-text-muted">
              Premium subscriptions are not yet available. Join our support server to be notified when they launch!
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end gap-3 mt-4">
            <button
              onClick={() => setShowComingSoon(false)}
              className="astra-btn-secondary"
            >
              Close
            </button>
            <a
              href={DISCORD_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="astra-btn-primary"
            >
              Join Support Server
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
