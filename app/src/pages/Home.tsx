import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Bot, Shield, Wrench, Gamepad2, ScrollText, Settings, 
  Sparkles, Users, Check, ArrowRight, Star,
  MessageSquare, Command, Lock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { DISCORD_INVITE_URL, SUPPORT_SERVER_URL, FEATURES, TESTIMONIALS, TRUSTED_SERVERS } from '@/data/constants';
import { DiscordMessage } from '@/components/ui-custom/DiscordEmbed';
import { OrbitBadge } from '@/components/ui-custom/OrbitBadge';

gsap.registerPlugin(ScrollTrigger);

// Feature cards data
const featureCards = [
  {
    icon: Shield,
    title: 'Smart Moderation',
    description: 'Keep your server clean with intelligent auto-mod, warnings, timeouts, and bulk actions.',
  },
  {
    icon: Users,
    title: 'Auto Roles & Welcome',
    description: 'Automatically assign roles to new members and send personalized welcome messages.',
  },
  {
    icon: Wrench,
    title: 'Utility Commands',
    description: 'Polls, reminders, server info, user lookup, and dozens of handy tools.',
  },
  {
    icon: Gamepad2,
    title: 'Fun & Games',
    description: 'Trivia, memes, roasts, dice rolls, and mini-games to keep your community engaged.',
  },
  {
    icon: ScrollText,
    title: 'Logging & Audit',
    description: 'Track message edits, deletions, joins, leaves, and mod actions in real-time.',
  },
  {
    icon: Settings,
    title: 'Customizable Settings',
    description: 'Fine-tune every aspect of the bot to match your server\'s unique needs.',
  },
];

// Command categories for teaser
const commandCategories = [
  { name: 'Moderation', icon: Shield, count: 12 },
  { name: 'Utility', icon: Wrench, count: 18 },
  { name: 'Fun', icon: Gamepad2, count: 15 },
  { name: 'Admin', icon: Lock, count: 8 },
];

export function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const embedsRef = useRef<HTMLDivElement>(null);
  const commandsRef = useRef<HTMLDivElement>(null);
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation on load
      const heroTl = gsap.timeline({ delay: 0.2 });
      heroTl
        .from('.hero-card', { opacity: 0, scale: 0.92, y: 40, duration: 0.8, ease: 'power3.out' })
        .from('.hero-title', { opacity: 0, y: 18, duration: 0.6, stagger: 0.04, ease: 'power2.out' }, '-=0.4')
        .from('.hero-badge', { opacity: 0, scale: 0.6, duration: 0.5, stagger: 0.08, ease: 'back.out(1.6)' }, '-=0.3')
        .from('.hero-orbit', { opacity: 0, scale: 0.8, duration: 0.6, ease: 'power2.out' }, '-=0.5');

      // Features section
      gsap.from('.feature-card', {
        scrollTrigger: {
          trigger: featuresRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
      });

      // Discord embeds section
      gsap.from('.embed-message', {
        scrollTrigger: {
          trigger: embedsRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        x: -30,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
      });

      // Command categories
      gsap.from('.command-chip', {
        scrollTrigger: {
          trigger: commandsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        scale: 0.9,
        duration: 0.4,
        stagger: 0.08,
        ease: 'back.out(1.4)',
      });

      // How it works steps
      gsap.from('.step-card', {
        scrollTrigger: {
          trigger: howItWorksRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        x: -30,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
      });

      // Testimonials
      gsap.from('.testimonial-card', {
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 30,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
      });

      // CTA section
      gsap.from('.cta-content', {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power2.out',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden"
      >
        {/* Orbit rings */}
        <div className="hero-orbit absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="astra-orbit-ring w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] opacity-30 animate-orbit" />
        </div>
        <div className="hero-orbit absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="astra-orbit-ring w-[80vw] h-[80vw] max-w-[1100px] max-h-[1100px] opacity-20 animate-orbit-slow" style={{ animationDirection: 'reverse' }} />
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-6xl mx-auto">
            {/* Main Hero Card */}
            <div className="hero-card astra-card p-8 lg:p-12 mb-8">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                {/* Left: Logo & Title */}
                <div className="lg:col-span-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-astra-lime/10 border border-astra-lime/30 flex items-center justify-center">
                      <Bot className="w-8 h-8 text-astra-lime" />
                    </div>
                    <div>
                      <h1 className="hero-title font-display font-bold text-3xl text-astra-text">
                        AstraBot
                      </h1>
                      <p className="hero-title text-astra-text-muted text-sm">@astrabot</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-discord-green animate-pulse" />
                    <span className="text-sm text-discord-green font-medium">Online</span>
                  </div>
                </div>

                {/* Center: Description */}
                <div className="lg:col-span-1">
                  <p className="text-astra-text-muted leading-relaxed mb-4">
                    The modular mod, log, and fun bot that fits your vibe.
                  </p>
                  <ul className="space-y-2">
                    {FEATURES.map((feature, index) => (
                      <li key={index} className="hero-title flex items-center gap-2 text-sm text-astra-text">
                        <Check className="w-4 h-4 text-astra-lime" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: CTAs */}
                <div className="lg:col-span-1 flex flex-col gap-3">
                  <a
                    href={DISCORD_INVITE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="astra-btn-primary justify-center"
                  >
                    <Sparkles className="w-4 h-4" />
                    Add to Discord
                  </a>
                  <Link
                    to="/commands"
                    className="astra-btn-secondary justify-center"
                  >
                    View commands
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Orbiting Badges */}
            <div className="flex flex-wrap justify-center gap-3">
              <div className="hero-badge">
                <OrbitBadge icon={Shield} label="Auto-mod" />
              </div>
              <div className="hero-badge">
                <OrbitBadge icon={Command} label="Slash cmds" />
              </div>
              <div className="hero-badge">
                <OrbitBadge icon={ScrollText} label="Logs" />
              </div>
            </div>

            {/* Trusted By */}
            <div className="mt-16 text-center">
              <p className="text-astra-text-muted text-sm mb-6">Trusted by communities</p>
              <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
                {TRUSTED_SERVERS.map((server, index) => (
                  <div key={index} className="flex items-center gap-2 text-astra-text-muted/60">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                      <span className="text-xs font-bold">{server.name.charAt(0)}</span>
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-medium text-astra-text-muted">{server.name}</p>
                      <p className="text-[10px]">{server.members}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section
        ref={featuresRef}
        id="features"
        className="py-20 lg:py-32"
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-astra-text mb-4">
                Everything your server needs
              </h2>
              <p className="text-astra-text-muted max-w-2xl mx-auto">
                Powerful features designed to make server management effortless and engaging.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featureCards.map((feature, index) => (
                <div
                  key={index}
                  className="feature-card astra-card p-6 astra-card-hover group"
                >
                  <div className="w-12 h-12 rounded-xl bg-astra-lime/10 border border-astra-lime/20 flex items-center justify-center mb-4 group-hover:bg-astra-lime/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-astra-lime" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-astra-text mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-astra-text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Discord Embed Preview */}
      <section
        ref={embedsRef}
        className="py-20 lg:py-32 bg-astra-charcoal/50"
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-astra-text mb-4">
                Beautiful responses
              </h2>
              <p className="text-astra-text-muted">
                Clean, readable embeds that look native to Discord.
              </p>
            </div>

            <div className="astra-card p-6 space-y-4">
              <DiscordMessage
                username="sarah_dev"
                avatar="SD"
                content="!serverinfo"
              />
              <DiscordMessage
                username="AstraBot"
                isBot
                embed={{
                  title: 'Server stats',
                  fields: [
                    { name: 'Members', value: '12.4k', inline: true },
                    { name: 'Online', value: '1.8k', inline: true },
                    { name: 'Messages', value: '843k', inline: true },
                  ],
                }}
              />
              <DiscordMessage
                username="alex_mod"
                avatar="AM"
                content="!warn @user Spamming"
              />
              <DiscordMessage
                username="AstraBot"
                isBot
                embed={{
                  title: 'Warning issued',
                  fields: [
                    { name: 'User', value: '@user', inline: true },
                    { name: 'Reason', value: 'Spamming', inline: true },
                    { name: 'Warnings', value: '2/3', inline: true },
                  ],
                  borderColor: '#FEE75C',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Commands Teaser */}
      <section
        ref={commandsRef}
        className="py-20 lg:py-32"
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-astra-text mb-4">
                50+ commands
              </h2>
              <p className="text-astra-text-muted mb-8">
                From moderation to fun, we\'ve got you covered.
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                {commandCategories.map((category, index) => (
                  <div
                    key={index}
                    className="command-chip flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-astra-text"
                  >
                    <category.icon className="w-4 h-4 text-astra-lime" />
                    <span>{category.name}</span>
                    <span className="text-astra-text-muted">({category.count})</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link to="/commands" className="astra-btn-secondary">
                Browse all commands
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        ref={howItWorksRef}
        className="py-20 lg:py-32 bg-astra-charcoal/50"
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-astra-text mb-4">
                Set up in minutes
              </h2>
              <p className="text-astra-text-muted">
                No complicated configuration. Just invite and go.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  number: '01',
                  title: 'Invite AstraBot',
                  description: 'Pick your permissions during the OAuth flow. No messy setup required.',
                  icon: Sparkles,
                },
                {
                  number: '02',
                  title: 'Set a mod channel',
                  description: 'Designate where moderation logs and alerts should be sent.',
                  icon: MessageSquare,
                },
                {
                  number: '03',
                  title: 'Tune your rules',
                  description: 'Configure auto-mod, leveling rewards, and welcome messages.',
                  icon: Settings,
                },
              ].map((step, index) => (
                <div key={index} className="step-card text-center">
                  <div className="w-16 h-16 rounded-2xl bg-astra-lime/10 border border-astra-lime/30 flex items-center justify-center mx-auto mb-4">
                    <span className="font-display font-bold text-2xl text-astra-lime">
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
        </div>
      </section>

      {/* Testimonials */}
      <section
        ref={testimonialsRef}
        className="py-20 lg:py-32"
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-astra-text mb-4">
                Loved by admins
              </h2>
              <p className="text-astra-text-muted">
                Servers of all sizes use AstraBot to keep things calm, fun, and organized.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TESTIMONIALS.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`testimonial-card astra-card p-6 ${
                    index === 1 ? 'lg:mt-8' : index === 4 ? 'lg:mt-8' : ''
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-astra-lime/30 to-astra-lime/10 flex items-center justify-center text-sm font-bold text-astra-lime">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-medium text-astra-text text-sm">{testimonial.name}</p>
                      <p className="text-xs text-astra-text-muted">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-astra-text-muted leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex gap-0.5 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-astra-lime text-astra-lime" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        ref={ctaRef}
        className="py-20 lg:py-32 bg-astra-charcoal/50"
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <div className="cta-content">
              <h2 className="font-display font-bold text-3xl lg:text-5xl text-astra-text mb-4">
                Ready to calm the chaos?
              </h2>
              <p className="text-astra-text-muted text-lg mb-8">
                Add AstraBot and give your server superpowers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={DISCORD_INVITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="astra-btn-primary justify-center text-base px-8 py-4"
                >
                  <Sparkles className="w-5 h-5" />
                  Add to Discord
                </a>
                <a
                  href={SUPPORT_SERVER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="astra-btn-secondary justify-center text-base px-8 py-4"
                >
                  Join support server
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
