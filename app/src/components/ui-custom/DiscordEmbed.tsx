import { Bot } from 'lucide-react';

interface DiscordEmbedProps {
  title: string;
  fields: { name: string; value: string; inline?: boolean }[];
  footer?: string;
  timestamp?: string;
  borderColor?: string;
}

export function DiscordEmbed({
  title,
  fields,
  footer = 'AstraBot',
  timestamp = 'Today at 2:34 PM',
  borderColor = '#5865F2',
}: DiscordEmbedProps) {
  return (
    <div
      className="rounded-lg p-4"
      style={{
        background: '#2B2D31',
        borderLeft: `4px solid ${borderColor}`,
      }}
    >
      <h4 className="font-semibold text-white text-base mb-3">{title}</h4>
      <div className="flex flex-wrap gap-4 mb-3">
        {fields.map((field, index) => (
          <div
            key={index}
            className={field.inline ? 'flex-1 min-w-[80px]' : 'w-full'}
          >
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
              {field.name}
            </p>
            <p className="text-sm text-white font-medium">{field.value}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 text-xs text-gray-400">
        <Bot className="w-3.5 h-3.5" />
        <span>{footer}</span>
        <span>•</span>
        <span>{timestamp}</span>
      </div>
    </div>
  );
}

interface DiscordMessageProps {
  username: string;
  avatar?: string;
  content?: string;
  embed?: DiscordEmbedProps;
  isBot?: boolean;
  className?: string;
}

export function DiscordMessage({
  username,
  avatar,
  content,
  embed,
  isBot = false,
  className = '',
}: DiscordMessageProps) {
  return (
    <div className={`flex gap-3 ${className}`}>
      {/* Avatar */}
      <div
        className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-bold"
        style={{
          background: isBot
            ? 'linear-gradient(135deg, #B8FF2C 0%, #7FFF00 100%)'
            : '#5865F2',
          color: isBot ? '#0B0C10' : '#fff',
        }}
      >
        {avatar || username.charAt(0).toUpperCase()}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        {/* Header */}
        <div className="flex items-center gap-2 mb-1">
          <span
            className="font-semibold text-sm"
            style={{ color: isBot ? '#B8FF2C' : '#fff' }}
          >
            {username}
          </span>
          {isBot && (
            <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#5865F2] text-white">
              BOT
            </span>
          )}
          <span className="text-xs text-gray-500">Today at 2:34 PM</span>
        </div>

        {/* Message Content */}
        {content && (
          <p className="text-sm text-gray-200 mb-2">{content}</p>
        )}

        {/* Embed */}
        {embed && <DiscordEmbed {...embed} />}
      </div>
    </div>
  );
}
