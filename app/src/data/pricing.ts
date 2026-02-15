export interface PricingTier {
  id: string;
  name: string;
  price: string;
  priceSubtext: string;
  description: string;
  features: Feature[];
  ctaText: string;
  ctaLink: string;
  highlighted?: boolean;
  badge?: string;
}

export interface Feature {
  name: string;
  included: boolean;
  freeValue?: string;
  proValue?: string;
  ultraValue?: string;
}

export const pricingTiers: PricingTier[] = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    priceSubtext: 'forever',
    description: 'Core mod, utility, fun, and logs for small communities.',
    ctaText: 'Choose Free',
    ctaLink: 'https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&scope=bot%20applications.commands&permissions=YOUR_PERMISSIONS_INT',
    features: [
      { name: 'Core moderation commands', included: true, freeValue: 'All', proValue: 'All', ultraValue: 'All' },
      { name: 'Utility commands', included: true, freeValue: 'All', proValue: 'All', ultraValue: 'All' },
      { name: 'Fun & games', included: true, freeValue: 'All', proValue: 'All', ultraValue: 'All' },
      { name: 'Basic logging', included: true, freeValue: 'Yes', proValue: 'Yes', ultraValue: 'Yes' },
      { name: 'Leveling system', included: true, freeValue: 'Yes', proValue: 'Yes', ultraValue: 'Yes' },
      { name: 'Command rate limit', included: true, freeValue: '60/min', proValue: '120/min', ultraValue: 'Unlimited' },
      { name: 'Custom commands', included: false, freeValue: '—', proValue: '10', ultraValue: 'Unlimited' },
      { name: 'Advanced auto-mod', included: false, freeValue: '—', proValue: 'Yes', ultraValue: 'Yes' },
      { name: 'Priority support', included: false, freeValue: '—', proValue: 'Yes', ultraValue: 'Yes' },
      { name: 'Custom branding', included: false, freeValue: '—', proValue: '—', ultraValue: 'Yes' },
      { name: 'Early access features', included: false, freeValue: '—', proValue: '—', ultraValue: 'Yes' },
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$6',
    priceSubtext: '/month',
    description: 'Faster limits, advanced auto-mod, and priority support.',
    ctaText: 'Upgrade to Pro',
    ctaLink: '#coming-soon',
    highlighted: true,
    badge: 'Most Popular',
    features: [
      { name: 'Core moderation commands', included: true, freeValue: 'All', proValue: 'All', ultraValue: 'All' },
      { name: 'Utility commands', included: true, freeValue: 'All', proValue: 'All', ultraValue: 'All' },
      { name: 'Fun & games', included: true, freeValue: 'All', proValue: 'All', ultraValue: 'All' },
      { name: 'Basic logging', included: true, freeValue: 'Yes', proValue: 'Yes', ultraValue: 'Yes' },
      { name: 'Leveling system', included: true, freeValue: 'Yes', proValue: 'Yes', ultraValue: 'Yes' },
      { name: 'Command rate limit', included: true, freeValue: '60/min', proValue: '120/min', ultraValue: 'Unlimited' },
      { name: 'Custom commands', included: true, freeValue: '—', proValue: '10', ultraValue: 'Unlimited' },
      { name: 'Advanced auto-mod', included: true, freeValue: '—', proValue: 'Yes', ultraValue: 'Yes' },
      { name: 'Priority support', included: true, freeValue: '—', proValue: 'Yes', ultraValue: 'Yes' },
      { name: 'Custom branding', included: false, freeValue: '—', proValue: '—', ultraValue: 'Yes' },
      { name: 'Early access features', included: false, freeValue: '—', proValue: '—', ultraValue: 'Yes' },
    ],
  },
  {
    id: 'ultra',
    name: 'Ultra',
    price: '$14',
    priceSubtext: '/month',
    description: 'Highest limits, custom branding, and early features.',
    ctaText: 'Upgrade to Ultra',
    ctaLink: '#coming-soon',
    features: [
      { name: 'Core moderation commands', included: true, freeValue: 'All', proValue: 'All', ultraValue: 'All' },
      { name: 'Utility commands', included: true, freeValue: 'All', proValue: 'All', ultraValue: 'All' },
      { name: 'Fun & games', included: true, freeValue: 'All', proValue: 'All', ultraValue: 'All' },
      { name: 'Basic logging', included: true, freeValue: 'Yes', proValue: 'Yes', ultraValue: 'Yes' },
      { name: 'Leveling system', included: true, freeValue: 'Yes', proValue: 'Yes', ultraValue: 'Yes' },
      { name: 'Command rate limit', included: true, freeValue: '60/min', proValue: '120/min', ultraValue: 'Unlimited' },
      { name: 'Custom commands', included: true, freeValue: '—', proValue: '10', ultraValue: 'Unlimited' },
      { name: 'Advanced auto-mod', included: true, freeValue: '—', proValue: 'Yes', ultraValue: 'Yes' },
      { name: 'Priority support', included: true, freeValue: '—', proValue: 'Yes', ultraValue: 'Yes' },
      { name: 'Custom branding', included: true, freeValue: '—', proValue: '—', ultraValue: 'Yes' },
      { name: 'Early access features', included: true, freeValue: '—', proValue: '—', ultraValue: 'Yes' },
    ],
  },
];

export const comparisonFeatures = [
  { name: 'Core moderation', free: 'All commands', pro: 'All commands', ultra: 'All commands' },
  { name: 'Utility commands', free: 'All commands', pro: 'All commands', ultra: 'All commands' },
  { name: 'Fun & games', free: 'All commands', pro: 'All commands', ultra: 'All commands' },
  { name: 'Basic logging', free: '✓', pro: '✓', ultra: '✓' },
  { name: 'Leveling system', free: '✓', pro: '✓', ultra: '✓' },
  { name: 'Command rate limit', free: '60/min', pro: '120/min', ultra: 'Unlimited' },
  { name: 'Custom commands', free: '—', pro: 'Up to 10', ultra: 'Unlimited' },
  { name: 'Advanced auto-mod', free: '—', pro: '✓', ultra: '✓' },
  { name: 'Priority support', free: '—', pro: '✓', ultra: '✓' },
  { name: 'Custom branding', free: '—', pro: '—', ultra: '✓' },
  { name: 'Early access features', free: '—', pro: '—', ultra: '✓' },
  { name: 'API access', free: '—', pro: '—', ultra: 'Coming soon' },
];
