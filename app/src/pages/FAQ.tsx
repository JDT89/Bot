import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageSquare, HelpCircle, Sparkles } from 'lucide-react';
import { faqItems, setupSteps } from '@/data/faq';
import { DISCORD_INVITE_URL } from '@/data/constants';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

gsap.registerPlugin(ScrollTrigger);

export function FAQ() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.faq-section', {
        scrollTrigger: {
          trigger: pageRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen pt-24 pb-16">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="faq-section text-center mb-12">
            <h1 className="font-display font-bold text-4xl lg:text-5xl text-astra-text mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-astra-text-muted max-w-2xl mx-auto">
              Everything you need to know about AstraBot. Can't find what you're looking for? Join our support server.
            </p>
          </div>

          {/* Setup Steps */}
          <div className="faq-section mb-16">
            <h2 className="font-display font-semibold text-xl text-astra-text mb-6 text-center">
              Getting Started
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {setupSteps.map((step, index) => (
                <div
                  key={index}
                  className="astra-card p-6 text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-astra-lime/10 border border-astra-lime/30 flex items-center justify-center mx-auto mb-4">
                    <span className="font-display font-bold text-xl text-astra-lime">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-lg text-astra-text mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-astra-text-muted">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="faq-section">
            <h2 className="font-display font-semibold text-xl text-astra-text mb-6 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-astra-lime" />
              Common Questions
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="astra-card border-0 overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-white/[0.02] hover:no-underline text-left">
                    <span className="font-medium text-astra-text">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-sm text-astra-text-muted leading-relaxed">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Support CTA */}
          <div className="faq-section mt-12 astra-card p-8 text-center">
            <MessageSquare className="w-12 h-12 text-astra-lime mx-auto mb-4" />
            <h2 className="font-display font-bold text-2xl text-astra-text mb-2">
              Still have questions?
            </h2>
            <p className="text-astra-text-muted mb-6">
              Our community and support team are here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={DISCORD_INVITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="astra-btn-primary justify-center"
              >
                <Sparkles className="w-4 h-4" />
                Join Support Server
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
