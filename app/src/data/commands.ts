export interface Command {
  id: string;
  name: string;
  description: string;
  category: CommandCategory;
  examples: string[];
  permissions: Permission[];
  isNew: boolean;
  cooldown?: string;
}

export type CommandCategory = 
  | 'moderation' 
  | 'utility' 
  | 'fun' 
  | 'admin' 
  | 'logging' 
  | 'leveling';

export type Permission = 
  | 'Administrator'
  | 'Manage Server'
  | 'Manage Messages'
  | 'Manage Roles'
  | 'Kick Members'
  | 'Ban Members'
  | 'Timeout Members'
  | 'View Audit Log'
  | 'None';

export const commandCategories: { id: CommandCategory; name: string; icon: string }[] = [
  { id: 'moderation', name: 'Moderation', icon: 'Shield' },
  { id: 'utility', name: 'Utility', icon: 'Wrench' },
  { id: 'fun', name: 'Fun & Games', icon: 'Gamepad2' },
  { id: 'admin', name: 'Admin', icon: 'Settings' },
  { id: 'logging', name: 'Logging', icon: 'ScrollText' },
  { id: 'leveling', name: 'Leveling', icon: 'TrendingUp' },
];

export const commands: Command[] = [
  // Moderation
  {
    id: 'ban',
    name: '/ban',
    description: 'Ban a user from the server. Optionally delete their recent messages.',
    category: 'moderation',
    examples: ['/ban @user', '/ban @user reason: Spamming', '/ban @user days: 7'],
    permissions: ['Ban Members'],
    isNew: false,
    cooldown: '5s',
  },
  {
    id: 'kick',
    name: '/kick',
    description: 'Kick a user from the server.',
    category: 'moderation',
    examples: ['/kick @user', '/kick @user reason: Being disruptive'],
    permissions: ['Kick Members'],
    isNew: false,
    cooldown: '5s',
  },
  {
    id: 'timeout',
    name: '/timeout',
    description: 'Temporarily timeout a user. They cannot send messages or join voice.',
    category: 'moderation',
    examples: ['/timeout @user duration: 1h', '/timeout @user duration: 1d reason: Cool down'],
    permissions: ['Timeout Members'],
    isNew: false,
    cooldown: '3s',
  },
  {
    id: 'warn',
    name: '/warn',
    description: 'Issue a warning to a user. Warnings are logged and can be viewed.',
    category: 'moderation',
    examples: ['/warn @user reason: Inappropriate language'],
    permissions: ['Manage Messages'],
    isNew: false,
    cooldown: '3s',
  },
  {
    id: 'warnings',
    name: '/warnings',
    description: 'View warnings for a user.',
    category: 'moderation',
    examples: ['/warnings @user'],
    permissions: ['Manage Messages'],
    isNew: false,
  },
  {
    id: 'clear',
    name: '/clear',
    description: 'Bulk delete messages in a channel.',
    category: 'moderation',
    examples: ['/clear amount: 100', '/clear amount: 50 @user'],
    permissions: ['Manage Messages'],
    isNew: false,
    cooldown: '10s',
  },
  {
    id: 'slowmode',
    name: '/slowmode',
    description: 'Set slowmode for a channel.',
    category: 'moderation',
    examples: ['/slowmode duration: 5s', '/slowmode duration: off'],
    permissions: ['Manage Messages'],
    isNew: true,
  },
  
  // Utility
  {
    id: 'serverinfo',
    name: '/serverinfo',
    description: 'Display information about the server.',
    category: 'utility',
    examples: ['/serverinfo'],
    permissions: ['None'],
    isNew: false,
  },
  {
    id: 'userinfo',
    name: '/userinfo',
    description: 'Display information about a user.',
    category: 'utility',
    examples: ['/userinfo', '/userinfo @user'],
    permissions: ['None'],
    isNew: false,
  },
  {
    id: 'avatar',
    name: '/avatar',
    description: 'Get a user\'s avatar in full resolution.',
    category: 'utility',
    examples: ['/avatar', '/avatar @user'],
    permissions: ['None'],
    isNew: false,
  },
  {
    id: 'remind',
    name: '/remind',
    description: 'Set a reminder. The bot will DM you when the time is up.',
    category: 'utility',
    examples: ['/remind time: 1h message: Check the oven', '/remind time: 30m message: Meeting'],
    permissions: ['None'],
    isNew: false,
  },
  {
    id: 'poll',
    name: '/poll',
    description: 'Create a poll with up to 10 options.',
    category: 'utility',
    examples: ['/poll question: "Best color?" options: "Red,Blue,Green"'],
    permissions: ['Manage Messages'],
    isNew: true,
  },
  {
    id: 'say',
    name: '/say',
    description: 'Make the bot say something.',
    category: 'utility',
    examples: ['/say message: Hello everyone!'],
    permissions: ['Manage Messages'],
    isNew: false,
  },
  
  // Fun
  {
    id: 'trivia',
    name: '/trivia',
    description: 'Start a trivia question. First to answer correctly wins.',
    category: 'fun',
    examples: ['/trivia', '/trivia category: Science'],
    permissions: ['None'],
    isNew: false,
    cooldown: '10s',
  },
  {
    id: 'roast',
    name: '/roast',
    description: 'Roast someone (friendly banter).',
    category: 'fun',
    examples: ['/roast', '/roast @user'],
    permissions: ['None'],
    isNew: false,
    cooldown: '5s',
  },
  {
    id: 'meme',
    name: '/meme',
    description: 'Get a random meme from Reddit.',
    category: 'fun',
    examples: ['/meme'],
    permissions: ['None'],
    isNew: false,
    cooldown: '5s',
  },
  {
    id: '8ball',
    name: '/8ball',
    description: 'Ask the magic 8-ball a question.',
    category: 'fun',
    examples: ['/8ball question: Will I win the lottery?'],
    permissions: ['None'],
    isNew: false,
    cooldown: '3s',
  },
  {
    id: 'roll',
    name: '/roll',
    description: 'Roll dice. Supports standard notation like 2d6+3.',
    category: 'fun',
    examples: ['/roll dice: 1d20', '/roll dice: 2d6+3'],
    permissions: ['None'],
    isNew: true,
  },
  {
    id: 'coinflip',
    name: '/coinflip',
    description: 'Flip a coin.',
    category: 'fun',
    examples: ['/coinflip'],
    permissions: ['None'],
    isNew: false,
  },
  
  // Admin
  {
    id: 'settings',
    name: '/settings',
    description: 'Configure bot settings for your server.',
    category: 'admin',
    examples: ['/settings', '/settings option: prefix value: !'],
    permissions: ['Manage Server'],
    isNew: false,
  },
  {
    id: 'autorole',
    name: '/autorole',
    description: 'Set up automatic roles for new members.',
    category: 'admin',
    examples: ['/autorole role: @Member'],
    permissions: ['Manage Roles'],
    isNew: false,
  },
  {
    id: 'welcome',
    name: '/welcome',
    description: 'Configure welcome messages.',
    category: 'admin',
    examples: ['/welcome channel: #general', '/welcome message: "Welcome {user}!"'],
    permissions: ['Manage Server'],
    isNew: true,
  },
  {
    id: 'goodbye',
    name: '/goodbye',
    description: 'Configure goodbye messages.',
    category: 'admin',
    examples: ['/goodbye channel: #general'],
    permissions: ['Manage Server'],
    isNew: true,
  },
  
  // Logging
  {
    id: 'logs',
    name: '/logs',
    description: 'Configure logging settings for the server.',
    category: 'logging',
    examples: ['/logs channel: #logs', '/logs events: messages,joins,leaves'],
    permissions: ['View Audit Log'],
    isNew: false,
  },
  {
    id: 'modlog',
    name: '/modlog',
    description: 'View recent moderation actions.',
    category: 'logging',
    examples: ['/modlog', '/modlog user: @user'],
    permissions: ['Manage Messages'],
    isNew: false,
  },
  
  // Leveling
  {
    id: 'rank',
    name: '/rank',
    description: 'View your or someone else\'s rank card.',
    category: 'leveling',
    examples: ['/rank', '/rank @user'],
    permissions: ['None'],
    isNew: false,
  },
  {
    id: 'leaderboard',
    name: '/leaderboard',
    description: 'View the server\'s XP leaderboard.',
    category: 'leveling',
    examples: ['/leaderboard', '/leaderboard page: 2'],
    permissions: ['None'],
    isNew: false,
  },
  {
    id: 'levelreward',
    name: '/levelreward',
    description: 'Set up role rewards for reaching certain levels.',
    category: 'leveling',
    examples: ['/levelreward level: 10 role: @Active'],
    permissions: ['Manage Roles'],
    isNew: true,
  },
];

export const getCommandsByCategory = (category: CommandCategory): Command[] => {
  return commands.filter(cmd => cmd.category === category);
};

export const searchCommands = (query: string): Command[] => {
  const lowerQuery = query.toLowerCase();
  return commands.filter(cmd => 
    cmd.name.toLowerCase().includes(lowerQuery) ||
    cmd.description.toLowerCase().includes(lowerQuery) ||
    cmd.category.toLowerCase().includes(lowerQuery)
  );
};
