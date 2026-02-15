import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Search, Shield, Wrench, Gamepad2, ScrollText, TrendingUp,
  Copy, Check, Sparkles, AlertCircle, Settings
} from 'lucide-react';
import { commands, commandCategories, type Command, type CommandCategory } from '@/data/commands';
import { DISCORD_INVITE_URL } from '@/data/constants';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ElementType> = {
  Shield,
  Wrench,
  Gamepad2,
  Settings,
  ScrollText,
  TrendingUp,
};

export function Commands() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CommandCategory | 'all'>('all');
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.command-section', {
        scrollTrigger: {
          trigger: pageRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power2.out',
      });
    });

    return () => ctx.revert();
  }, []);

  // Filter commands based on search and category
  const filteredCommands = commands.filter((cmd) => {
    const matchesSearch =
      searchQuery === '' ||
      cmd.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cmd.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' || cmd.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Group commands by category
  const groupedCommands = filteredCommands.reduce((acc, cmd) => {
    if (!acc[cmd.category]) {
      acc[cmd.category] = [];
    }
    acc[cmd.category].push(cmd);
    return acc;
  }, {} as Record<CommandCategory, Command[]>);

  const handleCopy = (text: string, commandId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCommand(commandId);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  const getPermissionColor = (permission: string): string => {
    if (permission === 'None') return 'bg-green-500/10 text-green-400 border-green-500/20';
    if (permission === 'Administrator') return 'bg-red-500/10 text-red-400 border-red-500/20';
    return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
  };

  return (
    <div ref={pageRef} className="min-h-screen pt-24 pb-16">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="command-section text-center mb-12">
            <h1 className="font-display font-bold text-4xl lg:text-5xl text-astra-text mb-4">
              Commands
            </h1>
            <p className="text-astra-text-muted max-w-2xl mx-auto">
              Browse all available commands. Use the search to find specific commands or filter by category.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="command-section mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-astra-text-muted" />
                <input
                  type="text"
                  placeholder="Search commands..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-astra-charcoal border border-white/10 text-astra-text placeholder:text-astra-text-muted/50 focus:outline-none focus:border-astra-lime/50 focus:ring-1 focus:ring-astra-lime/50 transition-all"
                />
              </div>

              {/* Category Filter - Desktop */}
              <div className="hidden lg:flex gap-2">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === 'all'
                      ? 'bg-astra-lime text-astra-dark'
                      : 'bg-white/5 text-astra-text-muted hover:text-astra-text hover:bg-white/10'
                  }`}
                >
                  All
                </button>
                {commandCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedCategory === cat.id
                        ? 'bg-astra-lime text-astra-dark'
                        : 'bg-white/5 text-astra-text-muted hover:text-astra-text hover:bg-white/10'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filter - Mobile */}
            <div className="flex lg:hidden gap-2 mt-4 overflow-x-auto pb-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-astra-lime text-astra-dark'
                    : 'bg-white/5 text-astra-text-muted'
                }`}
              >
                All
              </button>
              {commandCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-astra-lime text-astra-dark'
                      : 'bg-white/5 text-astra-text-muted'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="command-section mb-6">
            <p className="text-sm text-astra-text-muted">
              Showing {filteredCommands.length} command{filteredCommands.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Commands List */}
          <div className="command-section space-y-6">
            {Object.entries(groupedCommands).length === 0 ? (
              <div className="text-center py-16">
                <AlertCircle className="w-12 h-12 text-astra-text-muted mx-auto mb-4" />
                <p className="text-astra-text-muted">No commands found matching your search.</p>
              </div>
            ) : (
              Object.entries(groupedCommands).map(([category, categoryCommands]) => {
                const categoryInfo = commandCategories.find((c) => c.id === category);
                const CategoryIcon = categoryInfo ? iconMap[categoryInfo.icon] || Shield : Shield;

                return (
                  <div key={category} className="astra-card overflow-hidden">
                    {/* Category Header */}
                    <div className="px-6 py-4 bg-white/5 border-b border-white/5 flex items-center gap-3">
                      <CategoryIcon className="w-5 h-5 text-astra-lime" />
                      <h2 className="font-display font-semibold text-lg text-astra-text capitalize">
                        {category}
                      </h2>
                      <span className="text-sm text-astra-text-muted">
                        ({categoryCommands.length})
                      </span>
                    </div>

                    {/* Commands Accordion */}
                    <Accordion type="multiple" className="divide-y divide-white/5">
                      {categoryCommands.map((command) => (
                        <AccordionItem
                          key={command.id}
                          value={command.id}
                          className="border-0"
                        >
                          <AccordionTrigger className="px-6 py-4 hover:bg-white/[0.02] hover:no-underline group">
                            <div className="flex items-center gap-4 text-left">
                              <code className="text-sm font-mono text-astra-lime bg-astra-lime/10 px-2 py-1 rounded">
                                {command.name}
                              </code>
                              <span className="text-sm text-astra-text-muted hidden sm:inline">
                                {command.description}
                              </span>
                              {command.isNew && (
                                <Badge className="bg-astra-lime/20 text-astra-lime border-astra-lime/30 text-xs">
                                  New
                                </Badge>
                              )}
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4">
                            <div className="space-y-4 pt-2">
                              {/* Description */}
                              <p className="text-sm text-astra-text-muted sm:hidden">
                                {command.description}
                              </p>

                              {/* Examples */}
                              <div>
                                <p className="text-xs text-astra-text-muted uppercase tracking-wide mb-2">
                                  Examples
                                </p>
                                <div className="space-y-2">
                                  {command.examples.map((example, index) => (
                                    <div
                                      key={index}
                                      className="flex items-center justify-between gap-4 p-3 rounded-lg bg-astra-dark/50 group/example"
                                    >
                                      <code className="text-sm font-mono text-astra-text">
                                        {example}
                                      </code>
                                      <button
                                        onClick={() => handleCopy(example, `${command.id}-${index}`)}
                                        className="p-2 rounded-lg text-astra-text-muted hover:text-astra-lime hover:bg-astra-lime/10 transition-colors opacity-0 group-hover/example:opacity-100"
                                        aria-label="Copy example"
                                      >
                                        {copiedCommand === `${command.id}-${index}` ? (
                                          <Check className="w-4 h-4 text-green-400" />
                                        ) : (
                                          <Copy className="w-4 h-4" />
                                        )}
                                      </button>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Permissions */}
                              <div>
                                <p className="text-xs text-astra-text-muted uppercase tracking-wide mb-2">
                                  Required Permissions
                                </p>
                                <div className="flex flex-wrap gap-2">
                                  {command.permissions.map((permission, index) => (
                                    <span
                                      key={index}
                                      className={`px-2.5 py-1 rounded-full text-xs font-medium border ${getPermissionColor(
                                        permission
                                      )}`}
                                    >
                                      {permission}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              {/* Cooldown */}
                              {command.cooldown && (
                                <div className="flex items-center gap-2 text-sm text-astra-text-muted">
                                  <AlertCircle className="w-4 h-4" />
                                  <span>Cooldown: {command.cooldown}</span>
                                </div>
                              )}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                );
              })
            )}
          </div>

          {/* CTA */}
          <div className="command-section mt-12 text-center">
            <p className="text-astra-text-muted mb-4">
              Ready to use these commands in your server?
            </p>
            <a
              href={DISCORD_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="astra-btn-primary"
            >
              <Sparkles className="w-4 h-4" />
              Add AstraBot to Discord
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
