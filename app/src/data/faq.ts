export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: 'migrate',
    question: 'Can I migrate from another bot?',
    answer: 'Yes! AstraBot supports importing data from several popular bots including MEE6, Dyno, and Carl-bot. Use the /import command after inviting AstraBot, and follow the prompts to transfer your leveling data, warnings, and custom commands.',
  },
  {
    id: 'dashboard',
    question: 'Is there a dashboard?',
    answer: 'AstraBot is designed to work entirely through Discord slash commands for the fastest experience. However, a web dashboard is in development for Ultra tier subscribers, which will provide advanced analytics, bulk configuration, and detailed logs.',
  },
  {
    id: 'permissions',
    question: 'What permissions does AstraBot need?',
    answer: 'AstraBot requests the minimum permissions needed for its features: Send Messages, Embed Links, Attach Files, Read Message History, and specific moderation permissions (Kick/Ban/Timeout) if you plan to use those features. You can customize permissions during the invite process.',
  },
  {
    id: 'rate-limits',
    question: 'What are the rate limits?',
    answer: 'Free tier: 60 commands per minute per server. Pro tier: 120 commands per minute. Ultra tier: Unlimited. These limits are generous and designed to prevent abuse while ensuring smooth operation for legitimate use.',
  },
  {
    id: 'downtime',
    question: 'What happens if the bot goes down?',
    answer: 'AstraBot runs on redundant infrastructure with 99.9% uptime SLA. In the rare event of downtime, your server data remains safe. We post status updates on our support server and Twitter. Pro and Ultra users receive direct notifications of any incidents.',
  },
  {
    id: 'support',
    question: 'How do I get support?',
    answer: 'Join our support server for community help, or email support@astrabot.gg for direct assistance. Pro and Ultra subscribers get priority support with faster response times. We typically respond within 24 hours for free users and within 4 hours for paid tiers.',
  },
  {
    id: 'privacy',
    question: 'What data does AstraBot collect?',
    answer: 'AstraBot only stores data necessary for functionality: server settings, moderation logs, and leveling progress. We do not sell or share your data. Message content is processed but not stored unless logging is explicitly enabled. See our Privacy Policy for full details.',
  },
  {
    id: 'custom-commands',
    question: 'How do custom commands work?',
    answer: 'Custom commands let you create bot responses triggered by specific phrases. Use /customcommand create to set up a trigger and response. You can use variables like {user}, {channel}, and {server} to personalize responses. Pro users get up to 10 custom commands; Ultra users get unlimited.',
  },
  {
    id: 'premium',
    question: 'Can I get a refund for premium?',
    answer: 'We offer a 7-day money-back guarantee for all premium purchases. If you\'re not satisfied, contact support within 7 days of your purchase for a full refund. After 7 days, refunds are handled on a case-by-case basis.',
  },
  {
    id: 'multiple-servers',
    question: 'Do I need to buy premium for each server?',
    answer: 'No! One premium subscription covers all servers where you have the Manage Server permission. If you upgrade to Pro or Ultra, those benefits apply across all your servers automatically.',
  },
];

export const setupSteps = [
  {
    number: '01',
    title: 'Invite AstraBot',
    description: 'Pick your permissions during the OAuth flow. No messy setup required—just authorize and go.',
  },
  {
    number: '02',
    title: 'Set a mod channel',
    description: 'Use /logs channel to designate where moderation logs and alerts should be sent.',
  },
  {
    number: '03',
    title: 'Tune your rules',
    description: 'Configure auto-mod, leveling rewards, and welcome messages to match your community.',
  },
];
